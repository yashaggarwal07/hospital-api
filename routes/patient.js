const express=require('express');
const router=express.Router();
const passport=require('passport');
const patients_controller=require('../controllers/patient_controller');

router.post('/register',passport.authenticate('jwt',{session:false}),patient_controller.register);
router.post('/:id/create_report',passport.authenticate('jwt',{session:false}),patients_controller.createReport);
router.post('/:id/all_reports',patient_controller.allReports);

module.exports=router;