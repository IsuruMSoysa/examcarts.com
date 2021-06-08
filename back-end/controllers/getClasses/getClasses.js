let classes = require('../../model/Classes/Classes')

exports.getClasses = async (req,res) => {
    const result = await classes
        .find( {teacherId : req.body.teacherIdNum});
        console.log(result);

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