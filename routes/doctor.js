const express=require('express');
const router=express.Router();
const doctors_controller=require('../controllers/doctor_controller');

router.get('/register',doctors_controller.register);
router.post('/login',doctors_controller.login);


module.exports=router;