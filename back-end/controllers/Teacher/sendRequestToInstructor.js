let instructorReq = require('../../model/Teacher/TeacherInstructorRequest');
const nodemailer =  require('./../../utils/nodemailer');
let instructor = require('../../model/login/Instructor');

exports.sendRequestToInstructor = async (req,res) => {
    const instructorObj = await instructor
        .findById( req.body.reqInstructId);
    let newInstructorRequest = new instructorReq({
        teacherId: req.body.teacherObjID,
        instructorId: req.body.reqInstructId
    });

    await newInstructorRequest.save();
    nodemailer.sendmail(instructorObj.email,"Teacher Request",
        "Hi!" +
        "You have a new Teacher Request!\n " +
        "Login to the system to view request.\n" +
        "Thank you!\n" +
        "Best Regards,\n" +
        "Examcarts.");
    res.send(
        {message:'Request Sent Successfully!'}
    )
}
