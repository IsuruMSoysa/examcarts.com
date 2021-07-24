let connection = require('../../model/Instructors/InstructorTeacher')
let requestObj = require('../../model/Teacher/TeacherInstructorRequest')

exports.connectinstructorteacher = async (req,res) => {

    const result = await requestObj
        .find({teacherId: req.body.teacherObjId, instructorId : req.body.instructorObjID });

    if(result){
        let connectionObj = new connection({
            teachersId: req.body.teacherObjId ,
            instructorsId: req.body.instructorObjID
        });
        await connectionObj.save();
        requestObj.findByIdAndRemove(result[0].id,(err,deletedRecord) => {
            if(!err){
                return;
            }else console.log(err);
        })
        res.status(200).send(
            {message: "Connection Successfully Created!", status: true});
    }
    else {
        res.status(200).send(
            {message: "Connection Creation Failed!", status: true})
    }
}
