let marking = require('../../model/Papers/marking-paper')
const {cloudinary} =  require('./../../utils/cloudinary')


exports.uploadmarking = async (req, res) => {
    try{
        const fileStr = req.body.data;
        const uploadedResponse = await cloudinary.uploader.
        upload(fileStr,{
            upload_preset : 'markingSchemes'
        });
        if(req){
            let newMarking = new marking({
                markingId: uploadedResponse.asset_id,
                markingUrl: uploadedResponse.secure_url,
                paperId: req.body.paperDetailId,
            })

            await newMarking.save();

            res.send({message: "Marking Scheme created successfully"});
        }
        else {
            console.log("Request not received")
        }
    } catch (error){
        console.log(error);
        res.send(error);
    }
}
