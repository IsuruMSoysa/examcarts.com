let exam = require('../../model/Exam/scheduleExam')

exports.getexampaperdetails = async (req, res) => {
    const result = await exam
        .findById(req.body.examObjId).populate('paperObjId').populate('classObjId').populate('teacherID');
    if (result) {
        res.status(200).send(
            {message: "Classes found!" , status: true, items : result }
        )
    }else{
        res.status(200).send(
            {message: "No Classes found!" }
        )
    }
}
