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
let  getclasses = require ('./routes/getClasses/getClasses')
let  getallclasses = require ('./routes/StudentDashboard/getAllClasses')
let  getclickedclass = require ('./routes/StudentDashboard/getclickedclass')
let  enrollclass = require ('./routes/StudentDashboard/enrollclass')
let  viewClassDetails = require ('./routes/StudentDashboard/viewClassDetails')
let  uploadreceipt = require ('./routes/StudentDashboard/uploadReceipt')
let  getenrollmentrequests = require ('./routes/Tenrollments/getenrollmentrequests')
let  getEnrollRequest = require ('./routes/Tenrollments/getEnrollRequest')
let  sendDecision = require ('./routes/Tenrollments/sendDecision')
let  getallstudentclasses = require ('./routes/StudentDashboard/getallstudentclasses')
let  getprofilename = require ('./routes/getprofilename')
let  createpaper = require ('./routes/Papers/createpaper')
let  getViewPaperDetailSD = require ('./routes/Papers/getViewPaperDetailSD')
let  uploadmarking = require ('./routes/Papers/uploadmarking')
let  getpapers = require ('./routes/Papers/getpapers')
let  getallinstructors = require ('./routes/Instructors/getallinstructors')
let  sendRequestToInstructor = require ('./routes/Teacher/sendRequestToInstructor')
let  getTeacherInstructors = require ('./routes/Teacher/getTeacherInstructors')
let  getteacherrequests = require ('./routes/Instructors/getteacherrequests')
let  connectinstructorteacher = require ('./routes/Instructors/connectinstructorteacher')
let  getconnectedteachers = require ('./routes/Instructors/getconnectedteachers')
let  scheduleexam = require ('./routes/exam/scheduleexam')
let  getUpcomingExams = require ('./routes/Teacher/getUpcomingExams')


let app = express()
app.use(cors());
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit:'50mb',extended:true}));


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
app.use('/getclasses', getclasses);
app.use('/getallclasses', getallclasses);
app.use('/findclickedclass', getclickedclass);
app.use('/enrollclass', enrollclass);
app.use('/getViewClassDetailSD', viewClassDetails);
app.use('/getViewClassDetailSD', viewClassDetails);
app.use('/api', uploadreceipt);
app.use('/getenrollmentrequests', getenrollmentrequests);
app.use('/getEnrollRequest', getEnrollRequest);
app.use('/sendDecision', sendDecision);
app.use('/getallstudentclasses', getallstudentclasses);
app.use('/getprofilename', getprofilename);
app.use('/createpaper', createpaper);
app.use('/getViewPaperDetailSD', getViewPaperDetailSD);
app.use('/uploadmarking', uploadmarking);
app.use('/getpapers', getpapers);
app.use('/getallinstructors', getallinstructors);
app.use('/sendRequestToInstructor', sendRequestToInstructor);
app.use('/getTeacherInstructors', getTeacherInstructors);
app.use('/getteacherrequests', getteacherrequests);
app.use('/connectinstructorteacher', connectinstructorteacher);
app.use('/getconnectedteachers', getconnectedteachers);
app.use('/scheduleexam', scheduleexam);
app.use('/upcomingexmas', getUpcomingExams);


const PORT = 3001

app.listen(PORT,()=> {
    console.log('listing on 3001')
})