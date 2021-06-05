const mongoose = require('mongoose');

const studentsLoginDetailsSchema = new mongoose.Schema({
    username: String,
    password: String
});

module.exports = mongoose.model('LoginDetails',studentsLoginDetailsSchema)



// async function initialLogin(){
//     const StudentLogin = mongoose.model('StudentLogin',studentsLoginDetailsSchema);
//     const studentLogin = new StudentLogin({
//         username: "admin",
//         password: 123
//     });
//
//     const result = await studentLogin.save();
//     console.log(result);
// }
//
// initialLogin();