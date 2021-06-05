 let loginDataArr = require('../../model/login/Students');

exports.loginCheck = async (req,res) => {
                   const result = await loginDataArr
                        .findOne( {username : req.body.username});
        console.log(result)

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


// router.post('/',async (req,res)=>{
//
//
//     let result = await Admin.findOne({username : req.body.username});
//
//     // let newAdmin = new Admin({
//     //     username: req.body.username ,
//     //     password: req.body.password
//     // });
//
//     // await newAdmin.save();
//
//     if(result){
//         if(result.password == req.body.password) return res.send('login sucessful');
//         res.send('invalid passsword')
//     }
//     else{
//         res.send('login fail');
//     }
// })