const nodemailer = require('nodemailer')

exports.sendmail =  (TO,SUBJECT,TEXT) => {
        const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "examcarts@gmail.com",
            pass: "52662.imsa"
        }
    });


    const options = {
        from: "examcarts@gmail.com",
        to: TO,
        subject: SUBJECT,
        text: TEXT
    }

    transporter.sendMail(options, function(err,info){
        if(err){
            console.log("Mail Error", err);
            return;
        }
        console.log("Send:" + info.response);
    })
}
