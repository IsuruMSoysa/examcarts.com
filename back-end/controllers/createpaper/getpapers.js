let paper = require('../../model/Papers/createpaper')

exports.getpapers = async (req,res) => {
    const result = await paper
        .find( {teacherId : req.body.teacherIdNum});
    if (result) {
        console.log(result);
        res.status(200).send(
            {message: "Classes found!" , status: true, items : result }
        )
    }else{
        res.status(200).send(
            {message: "No Classes found!" }
        )
    }
}