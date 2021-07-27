let resultsreleased = require('../../model/Instructors/pushedAnswerSheets')

exports.studentreleasedresults = async (req, res) => {
    const results = await resultsreleased
        .find({studentObjId: req.body.StudentID}).populate('examObjId');
    if (results) {
        res.status(200).send(
            {message: "Results found!" , status: true, items : results }
        )
    }else{
        res.status(200).send(
            {message: "No Classes found!" }
        )
    }
}
