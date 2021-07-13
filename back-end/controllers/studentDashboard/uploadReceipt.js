let enrollmentRequest = require('../../model/Enrollments/pendingEnrollmentsRequest')
const {cloudinary} =  require('./../../utils/cloudinary')

exports.uploadReceipt = async (req, res) => {
    try{
        console.log(req.body.item);
        const fileStr = req.body.data;
        const uploadedResponse = await cloudinary.uploader.
        upload(fileStr,{
            upload_preset : 'dev_setups'
        });
        if(uploadedResponse){
            res.send(uploadedResponse);
                    let newRequest = new enrollmentRequest({
                        studentId : req.body.item.classId ,
                        classId : req.body.item.studentId,
                        receiptNo : req.body.item.receiptNo,
                        bankName : req.body.item.bankName ,
                        branchName : req.body.item.branchName,
                        firstName : req.body.item.firstName,
                        lastName : req.body.item.lastName,
                        email : req.body.item.email,
                        mobile: req.body.item.mobile,
                        address : req.body.item.address,
                        imageId : uploadedResponse.asset_id,
                        ImgUrl : uploadedResponse.secure_url
                })
            await newRequest.save();
        }
        else {
            res.send("failed to upload")
        }
    } catch (error){
        console.log(error);
        res.send(error);
    }
}
