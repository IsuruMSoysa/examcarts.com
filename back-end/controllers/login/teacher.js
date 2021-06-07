let loginDataArrTeacher = require('../../model/login/Teacher');

exports.loginCheck = async (req,res) => {
    const result = await loginDataArrTeacher
        .findOne( {username : req.body.username});

    if (result) {
        if (result.password === req.body.password) {
            res.status(200).send(
                {message: "Login Success!" , status: true}
            )
        } else {
            res.status(200).send(
                {message: "Incorrect Password!",  status: false}
            )
        }
    } else {
        res.status(200).send(
            {message: "Incorrect Username!",  status: false}
        )
    }
}

exports.createAccount = async (req,res) => {
    let newTeacherAccount = new loginDataArrTeacher({
        fullName: req.body.fullName,
        mobile: req.body.mobile,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    await newTeacherAccount.save();
    res.send('Account Create Successfully!');
}
