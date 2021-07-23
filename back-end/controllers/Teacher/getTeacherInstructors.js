let instructorRequests = require('../../model/Teacher/TeacherInstructorRequest')

exports.getTeacherInstructors = async (req,res) => {
    const instReq = await instructorRequests
        .find({teacherId:req.body.teacherObjId}).populate("instructorId");
    if (instReq) {
        const instructorArr = [];
        instReq.forEach(element => instructorArr.push(element.instructorId));

        res.status(200).send(
            {message: "Classes found!" , status: true, instructorRequests : instructorArr },
        )
    }else{
        res.status(200).send(
            {message: "No Requests found!" }
        )
    }
}