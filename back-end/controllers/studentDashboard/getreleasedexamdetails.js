let resultsreleased = require('../../model/Instructors/pushedAnswerSheets')
let examdetails = require('../../model/Exam/scheduleExam')
let classes = require('../../model/Classes/Classes')
let papers = require('../../model/Papers/createpaper')
let teachers = require('../../model/login/Teacher')
let answers = require('../../model/Papers/marking-paper')

exports.getreleasedexamdetails = async (req, res) => {
    const resultdetails = await resultsreleased
        .findById(req.body.examObjId).populate('examObjId');
    const classdetail = await classes
        .findById(resultdetails.examObjId.classObjId)
    const paperdetail = await papers
        .findById(resultdetails.examObjId.paperObjId)
    const teacherdetail = await teachers
        .findById(resultdetails.examObjId.teacherID)
    const markingdetail = await answers
        .findOne({paperId: resultdetails.examObjId.paperObjId})
    if (resultdetails) {
        let summaryResults = {
            marks: resultdetails.finalMarks,
            nameofclass: classdetail.className,
            teachername: teacherdetail.fullName,
            examname: resultdetails.examObjId.examName,
            paperurl: paperdetail.paperUrl,
            paperid: resultdetails.examObjId.paperObjId,
            markingurl: markingdetail.markingUrl
        }
        res.status(200).send(
            {message: "Results found!" , status: true, items: summaryResults}
        )
    }
    else{
        res.status(200).send(
            {message: "No Classes found!" }
        )
    }
}
