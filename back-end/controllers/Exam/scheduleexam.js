let shceduleExam = require('../../model/Exam/scheduleExam');

exports.scheduleexam = async (req,res) => {
    const instructorArr  = [];
    req.body.instructorsS.forEach((element) => instructorArr.push(element.value));


    let newExamSchedule = new shceduleExam({
        examName: req.body.examNameS,
        classObjId : req.body.classObjIdS,
        paperObjId : req.body.paperObjIdS,
        instructors : instructorArr,
        startTime: req.body.startTimeS,
        endTime: req.body.endTimeS,
        teacherID : req.body.teacherIDS
    });

    await newExamSchedule.save();
    res.send(
        {message:'Exam Scheduled Successfully!'}
    )
}

