let answers = require('../../model/Exam/uploadanswers')
let completed = require('../../model/Instructors/pushedAnswerSheets')
let markingscheme = require('../../model/Papers/marking-paper')

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
        .findById(req.body.answerObjId).populate('studentObjId').populate('examObjId');
    const marking = await markingscheme
        .findOne({paperId:studentansweer.examObjId.paperObjId}).populate('studentObjId').populate('examObjId');

    if (studentansweer) {
        res.status(200).send(
            {message: "Paper found!" , status: true, items : studentansweer, markingsheet: marking.markingUrl  }
        )
    }else{
        res.status(200).send(
            {message: "No Classes found!" }
        )
    }
}
