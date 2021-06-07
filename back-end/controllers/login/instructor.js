let loginDataArrInstructor = require('../../model/login/Instructor');

exports.loginCheck = async (req,res) => {
    const result = await loginDataArrInstructor
        .findOne( {username : req.body.username});

    if (result) {
        if (result.password === req.body.password) {
            res.status(200).send(
                {message: "Login Success!"}
            )
        } else {
            res.status(200).send(
                {message: "Incorrect Password!"}
            )
        }
    } else {
        res.status(200).send(
            {message: "Incorrect Username!"}
        )
    }
}

exports.createAccount = async (req,res) => {
    let newInstructorAccount = new loginDataArrInstructor({
        fullName: req.body.fullName,
        mobile: req.body.mobile,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    await newInstructorAccount.save();
    res.send('Account Create Successfully!');
}
