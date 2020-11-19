const express=require('express');
const app=express();

const passportJWT=require('./config/passport-jwt');
const PORT=8000;
const db=require('./config/mongoose');


app.use(express.urlencoded({extended:true}));

//use express router
app.use('/',require('./routes'));


app.listen(PORT,function(err){
    if(err){
        console.log(`Error in running server:${err}`);

    }
    console.log(`Server is running on Port: ${PORT}`);
})