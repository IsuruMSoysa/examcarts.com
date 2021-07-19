let enrollments = require('../../model/Enrollments/pendingEnrollmentsRequest')


exports.getEnrollments = async (req,res) => {
    const result = await enrollments
        .find( {teacherId : req.body.teacherIdNum }  ).populate("classId");
    if (result) {
        res.status(200).send(
             {message: "Classes found!" , status: true, items : result }
        );
    }else{
        // res.status(200).send(
        //     {message: "No Classes found!" }
        // )
        console.log("noo class")
    }
}