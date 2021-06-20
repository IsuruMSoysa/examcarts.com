let enrollClass = require('../../model/Enrollments/enrollments');

exports.enrollclass = async (req,res) => {
    let newClassEnrollment = new enrollClass({
        studentUsername : req.body.studentUsername,
        classTitle : req.body.title
    });

    await newClassEnrollment.save();
    res.send(
        {message:'Student Account Create Successfully!',status: true, id: newClassEnrollment.id}
    )
}
