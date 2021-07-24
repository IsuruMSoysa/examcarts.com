let instructorReq = require('../../model/Teacher/TeacherInstructorRequest');

exports.sendRequestToInstructor = async (req,res) => {
    let newInstructorRequest = new instructorReq({
        teacherId: req.body.teacherObjID,
        instructorId: req.body.reqInstructId
    });

    await newInstructorRequest.save();
    res.send(
        {message:'Request Sent Successfully!'}
    )
}
