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