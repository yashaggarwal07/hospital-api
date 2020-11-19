const mongoose=require('mongoose');         //require mongoose
const rSchema=new mongoose.Schema({
    status:{                                   //store phone
        type:String,
        required:true,
    },
    doctor:{                                  //store password
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctor'
    },
    patient:{                                      //store name
        type:mongoose.Schema.Types.ObjectId,
        ref:'Patient'
    }
},
{
    timestamps:true                             //store timestamps
});

// exports user
const Report=mongoose.model('Report',rSchema);
module.exports=Report;