const mongoose=require('mongoose');         //require mongoose
const pSchema=new mongoose.Schema({
    phone:{                     
        type:Number,
        required:true,
        unique:true
    },
    password:{                                 
        type:String,
        required:true
    },
    name:{                                      
        type:String,
        required:true
    },
    registerBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctor',
        required:true
    }
},
{
    timestamps:true                             
});

// exports user
const Patient=mongoose.model('Patient',pSchema);
module.exports=Patient;