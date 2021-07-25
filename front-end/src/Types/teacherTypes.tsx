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
    examName: string,
    classObjId :IClassObj,
    paperObjId : IPaperDetails,
    instructors : [ string ],
    startTime: Date,
    endTime: Date,
    teacherID : string
}