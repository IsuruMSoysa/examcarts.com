let uploadanswer = require('../../model/Exam/uploadanswers');
const {cloudinary} =  require('./../../utils/cloudinary')

exports.uploadanswers = async (req,res) => {
    try{
        const fileStr = req.body.data;
        const uploadedResponse = await cloudinary.uploader.
        upload(fileStr,{
            upload_preset : 'answer_sheets'
        });
        if(uploadedResponse){
                let newAnswer = new uploadanswer({
                    examObjId : req.body.examDetailId,
                    studentObjId :req.body.studentId ,
                    answerSheetId : uploadedResponse.asset_id,
                    answersheetUrl : uploadedResponse.secure_url,
                })
                await newAnswer.save();
            res.send("Upload Success!!")
            }

        else {
            res.send("failed to upload")
        }
    } catch (error){
        console.log(error);
        res.send(error);
    }
}

