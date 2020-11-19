const express=require('express');
const router=express.Router();
const reports_controller=require('../controllers/report_controller');

router.post('/:status',reports_controller.fetchReports);

module.exports=router;