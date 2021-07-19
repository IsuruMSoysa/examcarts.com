let enrollments = require('../../model/Enrollments/pendingEnrollmentsRequest')


exports.sendDecision = async (req,res) => {
    const result = await enrollments
        .findById(req.body.reqId).populate("studentId").populate("classId");
    if (result) {
        res.status(200).send(
            {message: "Request found!" , status: true, items : result }
        );
    }else{
        console.log("no Request")
    }
}