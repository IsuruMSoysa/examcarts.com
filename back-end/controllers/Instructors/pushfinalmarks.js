let answerObjs = require('../../model/Exam/uploadanswers')
let evaluatedPapers = require('../../model/Instructors/pushedAnswerSheets')

exports.pushfinalmarks = async (req,res) => {

    const answerObj = await answerObjs
        .findById(req.body.answerObjId);

    if(answerObj){
        let evaluatedPaper = new evaluatedPapers({
            examObjId: answerObj.examObjId,
            studentObjId:answerObj.studentObjId ,
            instructorId: req.body.instructorId,
            answerSheetId: answerObj.answerSheetId,
            answersheetUrl:  answerObj.answersheetUrl,
            finalMarks: req.body.finalMarks
        });
        await evaluatedPaper.save();
        answerObjs.findByIdAndRemove(answerObj.id,(err,deletedRecord) => {
            if(!err){
                return;
            }else console.log(err);
        })
        res.status(200).send(
            {message: "Answer Sheet Pushed Created!", status: true});
    }
    else {
        res.status(200).send(
            {message: "Answer Sheet Push process Failed!", status: true})
    }
}
