const Doct=require('../models/doctors');
const jwt=require('jsonwebtoken');

module.exports.register= function(req,res){
      //Doctor registration with email
    Doct.findOne({email:req.body.email},function(err,user){
        if(err)
        {
            console.log('Error Occured while registering doctor!');
            return;
        }
        if(!user)
        {

            Doct.create(req.body,function(err,doct)
            {
                if(err)
                {console.log('Error in creating user');
                 return};
                
                return res.json(200,{
                    message:'Registered successfully'
                })
            })
        }
        else
            //If doctor already present in database
        return res.json(200,{
            message:'Already Registered!'
        })
    })

}
//Doctor login 
module.exports.login=async function(req,res){

    try{
        let doctor=await Doct.findOne({email:req.body.email});
          //Checking the required fields 
        if(!doctor || doctor.password!=req.body.password)
        {
            return res.json(422,{
                message:'Invalid credentials'
            })
        }
          //Creating the token for patient registration
        return res.json(200,{
            message:'Sign in successsful',
            data:{
            token:jwt.sign(doctor.toJSON(),'Secret-Key',{expiresIn:'2h'})
            }
        })
    }
    catch(err){
        return res.json(500,{
            message:'Some Internal error'
        })
    }
}