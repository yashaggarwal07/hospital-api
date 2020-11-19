const mongoose=require('mongoose');         //require mongoose
const dSchema=new mongoose.Schema({
    email:{                                   //store email
        type:String,
        required:true,
        unique:true
    },
    password:{                                  //store password
        type:String,
        required:true
    },
    name:{                                      //store name
        type:String,
        required:true
    }
},
{
    timestamps:true                             //store timestamps
});

// exports user
const Doctor=mongoose.model('Doctor',dSchema);
module.exports=Doctor;