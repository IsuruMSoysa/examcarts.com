let enrollmentRequest = require('../../model/Enrollments/pendingEnrollmentsRequest')
const {cloudinary} =  require('./../../utils/cloudinary')
let classes = require('../../model/Classes/Classes')

exports.uploadReceipt = async (req, res) => {
    try{
        const fileStr = req.body.data;
        const uploadedResponse = await cloudinary.uploader.
        upload(fileStr,{
            upload_preset : 'dev_setups'
        });
        if(uploadedResponse){
            let datetime = new Date();
            const classesObj = await classes
                .findOne({_id: req.body.item.classId });

            if(classesObj){
                res.send(uploadedResponse);
                let newRequest = new enrollmentRequest({
                    studentId : req.body.item.studentId ,
                    classId : req.body.item.classId,
                    teacherId : classesObj.teacherId,
                    receiptNo : req.body.item.receiptNo,
                    bankName : req.body.item.bankName ,
                    branchName : req.body.item.branchName,
                    firstName : req.body.item.firstName,
                    lastName : req.body.item.lastName,
                    email : req.body.item.email,
                    mobile: req.body.item.mobile,
                    address : req.body.item.address,
                    imageId : uploadedResponse.asset_id,
                    ImgUrl : uploadedResponse.secure_url,
                    UploadedTime : datetime.toISOString().slice(0,10)
                })
                await newRequest.save();
            }

        }
        else {
            res.send("failed to upload")
        }
    } catch (error){
        console.log(error);
        res.send(error);
    }
}
