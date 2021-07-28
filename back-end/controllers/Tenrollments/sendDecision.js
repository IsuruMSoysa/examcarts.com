let enrollments = require('../../model/Enrollments/pendingEnrollmentsRequest')
let class_student = require('../../model/Classes/Class_Student')
const nodemailer = require("../../utils/nodemailer");

exports.sendDecision = async (req,res) => {
    if(req.body.decision==="accept"){
        const result = await enrollments
            .findById(req.body.reqId);
        if (result) {
            let newClassStudent = new class_student({
                classId : result.classId,
                studentId : result.studentId
            });

            await newClassStudent.save();

            enrollments.findByIdAndRemove(req.body.reqId,(err,deletedRecord) => {
                if(!err){
                  return
                }else console.log(err);
            })
            nodemailer.sendmail("isurumsoysa@gmail.com","Class confirmation",
                "Hi!" +
                "You have a connected with a new class!\n" +
                "Login to the system for more details.\n" +
                "Thank you!\n" +
                "Best Regards,\n" +
                "Examcarts.");
            res.status(200).send(
                {message: "Student Enrollment Success!" }
            );
        }else{
            console.log("no Request")
        }
    }

}