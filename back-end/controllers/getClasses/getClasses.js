let classes = require('../../model/Classes/Classes')

exports.getClasses = async (req,res) => {
    const result = await classes
        .find( {teacherId : req.body.teacherIdNum});
    if (result) {
            res.status(200).send(
                {message: "Classes found!" , status: true, items : result }
            )
    }else{
        res.status(200).send(
            {message: "No Classes found!" }
        )
    }
}



exports.updateClass = (req,res) => {
   classes
        .findOne({teacherIdV : req.body.teacherId, className : req.body.oldTitle})
    .then((classA) => {
        classA.className= req.body.titleV;
        classA.teacherId = req.body.teacherIdV;
        classA.educationInstitute = req.body.instituteV;
        classA.description = req.body.descriptionV;
        classA.admissionFee= req.body.admissionFeeV;
        classA.monthlyFee = req.body.monthlyFeeV;

            classA
                .save()
                .then(() => res.json({ result: "updated" }))
                .catch((err) => res.status(400).json(err));
        })
            .catch((err) => res.status(400).json("Error:" + err));
    }

//
// let classes = require('../../model/Classes/Classes')
//
// exports.createClass = async (req,res) => {
//     let newClass = new classes({
//         className: req.body.className,
//         teacherId : req.body.teacherId,
//         educationInstitute : req.body.educationInstitute,
//         description : req.body.description,
//         admissionFee: req.body.admissionFee,
//         monthlyFee: req.body.monthlyFee
//     });
//
//     await newClass.save();
//     res.status(200).send(
//         {message: "Class Successfully Created!", status: true}
//     )
// }


// export const studentUpdate = (req, res) => {
//     Student.findById(req.params.id)
//         .then((student) => {
//             student.name = req.body.name;
//             student.stuno = req.body.stuno;
//             student.email = req.body.email;
//             student.dob = req.body.dob;
//             student.address = req.body.address;
//             student.mobile = req.body.mobile;
//             student.gender = req.body.gender;
//             student.allocatedCompany = req.body.allocatedCompany;
//             student.allocatedITAA = req.body.allocatedITAA;
//             student.selectedCompany = req.body.selectedCompany;
//             student.interviewCount = req.body.gender;
//
//             student
//                 .save()
//                 .then(() => res.json({ result: "updated" }))
//                 .catch((err) => res.status(400).json(err));
//         })
//         .catch((err) => res.status(400).json("Error:" + err));
// };
