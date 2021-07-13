let classes = require('../../model/Classes/Classes')

exports.getDetails = async (req,res) => {
    const result = await classes
        .findOne({_id: req.body.classId});
    if (result) {
        res.status(200).send(
            {message: "Classes found!" , status: true, items : result }
        )
    }else{
        res.status(400).send(
            {message: "No Classes found!" }
        )
    }
}