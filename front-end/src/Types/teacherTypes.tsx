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
    studentId: string,
    classId: string,
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
    UploadedTime: string,
}