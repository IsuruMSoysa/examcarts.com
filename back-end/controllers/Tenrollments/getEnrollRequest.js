let enrollments = require('../../model/Enrollments/pendingEnrollmentsRequest')


exports.getEnrollRequest = async (req,res) => {
    const result = await enrollments
        .findById(req.body.reqId).populate("studentId").populate("classId");
    let notNullArr = false;
    if(result === []){
         notNullArr = true;
    }
    if (result) {
        res.status(200).send(
            {message: "Request found!" , status: true, items : result, isNullArr : notNullArr }
        );
    }else{
      console.log("no Request")
    }
}