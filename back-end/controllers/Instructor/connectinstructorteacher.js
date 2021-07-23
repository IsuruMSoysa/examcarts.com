let connection = require('../../model/Instructors/InstructorTeacher')
let requestObj = require('../../model/Teacher/TeacherInstructorRequest')

exports.connectinstructorteacher = async (req,res) => {

    const result = await requestObj
        .find({teacherId: req.body.teacherObjId});
    if(result){
        let connectionObj = new connection({
            teachersId: result.teacherId ,
            instructorsId: result.instructorId
        });
        await connectionObj.save();

        requestObj.findByIdAndRemove(result.id,(err,deletedRecord) => {
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
