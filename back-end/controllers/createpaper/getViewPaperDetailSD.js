let paper = require('../../model/Papers/createpaper')

exports.getViewPaperDetailSD = async (req, res) => {
        const result = await paper
            .findById(req.body.paperObjId);
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
