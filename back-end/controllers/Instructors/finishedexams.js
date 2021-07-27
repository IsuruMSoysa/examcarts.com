let upcomingexams = require('../../model/Exam/scheduleExam')
let completedexams = require('../../model/Exam/uploadanswers')

exports.finishedexams = async (req,res) => {
    const examassigned = await upcomingexams
        .find().populate('teacherID').populate('classObjId');

    if(examassigned){
        const examsArr = [];
            examassigned.forEach(element =>{
            const found = element.instructors.includes(req.body.instructorIdNum);
            if(found){
                examsArr.push(element)
            }
        })
        res.status(200).send(
                {message: "Exams found!" , status: true, examArr : examsArr }
            )
    }else{
        res.status(200).send(
            {message: "No Requests found!" },
        )
    }
}

exports.finishedexamstoteacher = async (req,res) => {
    const examconducted = await upcomingexams
        .find({teacherID:req.body.teacherIdNum}).populate('classObjId');

    if(examconducted){
        res.status(200).send(
                {message: "Exams found!" , status: true, examArr : examconducted }
            )
    }else{
        res.status(200).send(
            {message: "No Requests found!" },
        )
    }
}