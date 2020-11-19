const passport=require('passport');
const jwtStrategy=require('passport-jwt').Strategy;
const ExtractJWT=require('passport-jwt').ExtractJwt;
const Doctor=require('../models/doctor');

let options={
    jwtFromRequest :ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'Secret-Key'
}

passport.use(new jwtStrategy(options,function(jwtPayload,done){
    Doctor.findById(jwtPayload._id,(err,user)=>{
        if(err){console.log('Error in finding Doctor');return;}

        if(user){
            return done(null,user);
        }
        else{
            return done(null,false);
        }
    })
}))

module.exports=passport;