let classes = require('../../model/Classes/Classes')

exports.clickedClass = async (req,res) => {
    const result = await classes
        .findOne({className: req.body.title});
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