export interface IClassObj{
    className: string,
    teacherId : string,
    educationInstitute : string,
    description : string,
    admissionFee: string,
    monthlyFee: string,
    _id: string
}

export interface IBankSlipDetails{
    receiptNo : string,
    bankName : string,
    branchName : string,
    firstName : string,
    lastName : string,
    email : string,
    image: string
}

export interface IenrollmentRequestTable{
    _id: string,
    studentId: IStudentDetails,
    classId: IClassObj,
    teacherId: string,
    receiptNo: string,
    bankName: string,
    branchName: string,
    firstName: string,
    lastName: string,
    email: string,
    mobile: string,
    address: string,
    imageId: string,
    ImgUrl: string,
    UploadedTime: string
}

export interface IStudentDetails {
    _id:string
    fullName:string
    mobile:string
    email:string
    username:string
    password:string
}

export interface IInstructorDetails {
    _id:string
    fullName:string
    mobile:string
    email:string
    username:string
    password:string
}

export interface ITeacherDetails {
    _id:string
    fullName:string
    mobile:string
    email:string
    username:string
    password:string
}

export interface IPaperDetails {
    _id:string
    paperUrl: string,
    paperId: string,
    teacherId: string,
    paperName: string ,
    hours: string ,
    minutes : string,
    finalMarks: string
}

export interface ISelectClass {
    value: string,
    label : string
}

export interface IInsttArr {
    value: string,
}

export interface Iexam {
    _id:string
    examName: string,
    classObjId :IClassObj,
    paperObjId : IPaperDetails,
    instructors : [ string ],
    startTime: Date,
    endTime: Date,
    teacherID : string
}

export interface Iexamins {
    _id: string
    examName: string,
    classObjId :IClassObj,
    paperObjId : IPaperDetails,
    instructors : [ string ],
    startTime: Date,
    endTime: Date,
    teacherID : ITeacherDetails
}

export interface IAnswersheet {
    _id: string
    examObjId :Iexam ,
    studentObjId : IStudentDetails,
    answerSheetId : string,
    answersheetUrl: string,

}

export interface IEvaluatedsheet {
    examObjId: Iexam,
    studentObjId:IStudentDetails ,
    instructorId: IInstructorDetails,
    answerSheetId: string,
    answersheetUrl: string,
    finalMarks: string
}

export interface IResults {
    _id: string,
    examObjId: Iexamins,
    studentObjId: string,
    instructorId: string,
    answerSheetId: string,
    answersheetUrl: string,
    finalMarks: string
}

export interface IResultsSummary {
    marks: string,
    nameofclass: string,
    teachername: string,
    examname: string,
    paperurl: string,
    paperid: string,
    markingurl: string
}