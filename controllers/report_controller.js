const Report=require('../models/reports');
  
  module.exports.fetchReports = async function (req, res) {
    try{
      let report=await Report.find({ status:req.params.status }).populate('doctor').populate('patient');

      return res.status(200).json({
        message:'All report of all patients',
        details:report
      })
    }
    catch(err){
      if(err){
        console.log(`${err}`);
        return res.json(500,{
        message:'Error Occured!'
      })}
    }
  };
  