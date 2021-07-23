let instructors_teacher = require('../../model/Instructors/InstructorTeacher')
let instructorRequests = require('../../model/Teacher/TeacherInstructorRequest')

exports.getconnectedteachers = async (req,res) => {
    const result = await instructors_teacher
        .find( {instructorId:req.body.instructorIdNum}).populate('teacherId');
    if (result) {
        const teacherArr = []
        result.forEach(element => teacherArr.push(element.teacherId));

        res.status(200).send(
            {message: "Classes found!" , status: true, teachers : teacherArr },
        )
    }else{
        res.status(200).send(
            {message: "No Classes found!" }
        )
    }
}
