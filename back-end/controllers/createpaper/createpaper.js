let paper = require('../../model/Papers/createpaper')
const {cloudinary} =  require('./../../utils/cloudinary')


exports.createpaper = async (req, res) => {
    try{
        const fileStr = req.body.data;
        const uploadedResponse = await cloudinary.uploader.
        upload(fileStr,{
            upload_preset : 'papers'
        });
        if(req){
            let newPaper = new paper({
                paperId: uploadedResponse.asset_id,
                paperUrl: uploadedResponse.secure_url,
                teacherId: req.body.paperDetails.teacherId,
                paperName: req.body.paperDetails.paperName,
                hours: req.body.paperDetails.hours,
                minutes : req.body.paperDetails.minutes,
                finalMarks: req.body.paperDetails.finalMarks
            })

             await newPaper.save();
                // console.log(newPaper);
                // console.log(uploadedResponse);

              res.send({uploadedPaper: newPaper.id});
        }
        else {
            console.log("Request not received")
        }
    } catch (error){
        console.log(error);
        res.send(error);
    }
}
