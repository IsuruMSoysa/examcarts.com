let classes = require('../../model/Classes/Classes')

exports.createClass = async (req,res) => {
    let newClass = new classes({
        className: req.body.className,
        teacherId : req.body.teacherId,
        educationInstitute : req.body.educationInstitute,
        description : req.body.description,
        admissionFee: req.body.admissionFee,
        monthlyFee: req.body.monthlyFee
    });

    await newClass.save();
    res.status(200).send(
        {message: "Class Successfully Created!", status: true}
    )
}
