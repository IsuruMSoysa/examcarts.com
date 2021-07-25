let upcomingexams = require('../../model/Exam/scheduleExam')
let instTeach = require('../../model/Instructors/InstructorTeacher')


exports.upcomingstuexmains = async (req,res) => {
    const teachers = await instTeach
        .find({instructorsId:req.body.instructorIdNum});

    let teachIdArr = []
    teachers.forEach( element => {
        teachIdArr.push(element.teachersId)});

    let upcomingExams = []
    for (const element of teachIdArr) {
        const object = await upcomingexams
            .find({teacherID: element}).populate('classObjId').populate('teacherID')
        upcomingExams.push(object)
    }

    let instExams = []
    upcomingExams.forEach(classObj => {
        classObj.forEach(examObj =>{
            instExams.push(examObj);
        })
    })

    if (instExams) {
        res.status(200).send(
            {message: "Exams found!" , status: true, upcomingexami : instExams }
        )
    }else{
        res.status(200).send(
            {message: "No Requests found!" },
        )
    }
}