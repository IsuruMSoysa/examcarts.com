let instructors = require('../../model/login/Instructor')
let instructorRequests = require('../../model/Teacher/TeacherInstructorRequest')

exports.getallinstructors = async (req,res) => {
    const result = await instructors
        .find( );
    if (result) {
        res.status(200).send(
            {message: "Classes found!" , status: true, items : result },

        )
    }else{
        res.status(200).send(
            {message: "No Classes found!" }
        )
    }
}


exports.getteacherrequests = async (req,res) => {
    const teacherReq = await instructorRequests
        .find({instructorId:req.body.instructorIdNum}).populate("teacherId");
    if (teacherReq) {
        const teacherArr = [];
        teacherReq.forEach(element => teacherArr.push(element.teacherId));

        res.status(200).send(
            {message: "Classes found!" , status: true, teacherRequests : teacherArr },
        )
    }else{
        res.status(200).send(
            {message: "No Requests found!" }
        )
    }
}