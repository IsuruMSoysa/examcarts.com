let loginDataArr = require('../../model/login/Students');

 exports.loginCheck = async (req,res) => {
     const result = await loginDataArr
         .findOne( {username : req.body.username});

     if (result) {
         if (result.password === req.body.password) {
             res.status(200).send(
                 {message: "Login Success!", status: true,  id: result.id}
             )
         } else {
             res.status(200).send(
                 {message: "Incorrect Password!", status: false}
             )
         }
     } else {
         res.status(200).send(
             {message: "Incorrect Username!", status: "false"}
         )
     }
 }

 exports.createAccount = async (req,res) => {
     let newStudentAccount = new loginDataArr({
         fullName: req.body.fullName,
         mobile: req.body.mobile,
         email: req.body.email,
         username: req.body.username,
         password: req.body.password
     });

     await newStudentAccount.save();
     res.send(
         {message:'Student Account Create Successfully!',status: true, id: newStudentAccount.id}
     )
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