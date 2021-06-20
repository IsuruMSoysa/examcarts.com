const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
let  studentLogin = require ('./routes/login/student')
let  teacherLogin = require ('./routes/login/teacher')
let  instructorLogin = require ('./routes/login/instructor')
let  studentCreateAccount = require ('./routes/createAccount/createAccount')
let  teacherCreateAccount = require ('./routes/createAccount/createTeacherAccount')
let  instructorCreateAccount = require ('./routes/createAccount/createInstructorAccount')
let  createClass = require ('./routes/createClass/createClasss')
let  getClasses = require ('./routes/getClasses/getClasses')
let  getAllClasses = require ('./routes/StudentDashboard/getAllClasses')
let  getClickedClass = require ('./routes/StudentDashboard/getclickedclass')
let  enrollClass = require ('./routes/StudentDashboard/enrollclass')
let  updateClasses = require('./routes/getClasses/updateClasses')

let app = express()
app.use(cors());
app.use(express.json());


// mongoose.connect('mongodb://localhost:27017/Examcarts')
//     .then(()=>console.log("Connected to MongoDB"))
//     .catch(err => console.error("Could not connect the error",err))

mongoose.connect('mongodb://localhost:27017/ExamcartsProject',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true})

const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', ()=> console.log('connected to mongoose'))

// app.use(function(req,res,next)
//     {
//         res.header("Access-Control-Allow-Origin","*");
//         res.header("Access-Control-Allow-Origin","Origin,X-Requested-Width,Content-Type,Accept");
//         res.header("Access-Control-Allow-Origin","PUT,POST,GET,DELETE,OPTIONS");
//         next();
//     });

app.use('/login', studentLogin);
app.use('/loginTeacher', teacherLogin);
app.use('/loginInstructor', instructorLogin);
app.use('/createAccount', studentCreateAccount);
app.use('/createTeacherAccount', teacherCreateAccount);
app.use('/createInstructorAccount', instructorCreateAccount);
app.use('/createClass', createClass);
app.use('/getclasses', getClasses);
app.use('/getallclasses', getAllClasses);
app.use('/findclickedclass', getClickedClass);
app.use('/enrollclass', enrollClass);
app.use('/updateClassInfo', updateClasses);

const PORT = 3001

app.listen(PORT,()=> {
    console.log('listing on 3001')
})