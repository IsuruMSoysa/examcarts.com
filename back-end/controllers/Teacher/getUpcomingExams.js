let upcomingexams = require('../../model/Exam/scheduleExam')


exports.getUpcomingExams = async (req,res) => {
    const upcomingEx = await upcomingexams
        .find({teacherID:req.body.teacherIdNum}).populate("classObjId").populate("paperObjId");
    if (upcomingEx) {
          res.status(200).send(
            {message: "Exams found!" , status: true, upcomingexams : upcomingEx },
        )
    }else{
        res.status(200).send(
            {message: "No Requests found!" },
        )
    }
}
