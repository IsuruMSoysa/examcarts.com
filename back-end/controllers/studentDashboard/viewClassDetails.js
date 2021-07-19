let classes = require('../../model/Classes/Classes')
let teacher = require('../../model/login/Teacher')

exports.getDetails = async (req,res) => {
    const result = await classes
        .findOne({_id: req.body.classId});
    if (result) {
        const teacherObj = await teacher
            .findOne({_id: result.teacherId});
        if(teacherObj){
                res.status(200).send(
                {message: "Classes found!" , status: true, items : result, teacherName: teacherObj }
            )
        }

    }else{
        res.status(400).send(
            {message: "No Classes found!" }
        )
    }
}