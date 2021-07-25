let upcomingexams = require('../../model/Exam/scheduleExam')
let stuclass = require('../../model/Classes/Class_Student')


exports.upcomingstuexmas = async (req,res) => {
    const stuclasses = await stuclass
        .find({studentId:req.body.studentIdNum});

    let classIdArr = []
    stuclasses.forEach( element => {
        classIdArr.push(element.classId)});

    let upcomingExams = []
    for (const element of classIdArr) {
         const object = await upcomingexams
            .find({classObjId: element}).populate('classObjId').populate('paperObjId')
        upcomingExams.push(object)
    }

    let studentExams = []
    upcomingExams.forEach(classObj => {
        classObj.forEach(examObj =>{
            studentExams.push(examObj);
        })
    })

    if (stuclasses) {
        res.status(200).send(
             {message: "Exams found!" , status: true, upcomingexams : studentExams }
        )
    }else{
        res.status(200).send(
            {message: "No Requests found!" },
        )
    }
}