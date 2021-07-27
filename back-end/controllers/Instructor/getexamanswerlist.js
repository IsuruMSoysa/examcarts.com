let answers = require('../../model/Exam/uploadanswers')
let completed = require('../../model/Instructors/pushedAnswerSheets')

exports.getexamanswerlist = async (req, res) => {
    const paperanswers = await answers
        .find({examObjId:req.body.examObjId}).populate('examObjId').populate('studentObjId');

    const completedAnswerSheets = await completed
        .find({examObjId:req.body.examObjId}).populate('examObjId').populate('studentObjId');
    if (paperanswers|| completedAnswerSheets ) {
        console.log(completedAnswerSheets);
        res.status(200).send(
            {message: "Papers found!" , status: true, items : paperanswers, completed:completedAnswerSheets }
        )
    }else{
        res.status(200).send(
            {message: "No Classes found!" }
        )
    }
}

exports.getstudentanswersheet = async (req, res) => {
    const studentansweer = await answers
        .findById(req.body.answerObjId).populate('studentObjId');


    if (studentansweer) {
        res.status(200).send(
            {message: "Paper found!" , status: true, items : studentansweer }
        )
    }else{
        res.status(200).send(
            {message: "No Classes found!" }
        )
    }
}
