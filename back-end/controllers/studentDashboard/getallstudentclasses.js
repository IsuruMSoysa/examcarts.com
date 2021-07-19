let classes = require('../../model/Classes/Class_Student')

exports.getallstudentclasses = async (req,res) => {
    const result = await classes
        .find({studentId:req.body.stuId}).populate("classId");
    if (result) {
        const classArr = [];
        result.forEach(element => classArr.push(element.classId));

        res.status(200).send(
            {message: "Classes found!" , status: true, items : classArr },
        )
    }else{
        res.status(200).send(
            {message: "No Classes found!" }
        )
    }
}