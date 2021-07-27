import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState} from 'react';
import { Container} from "react-bootstrap";
import "../Styles/DashBord.scss"
import ClassCardTeacher from "./ClassCardTeacher";
import CreateClassCard from "./CreateClassCard";
import  {IClassObj} from  "../../../../Types/teacherTypes";
import axios from "axios";

type MyClassDOMprops = {
    sendClickItems : (obj:IClassObj) => void
}

function MyClassDOM(props:MyClassDOMprops){

    const [teacherID] = useState(localStorage.getItem('passedTeacherID') || '0');
    const [classObj,setClassObj] = useState<IClassObj[] | null>([]);

    useEffect(() => {
        getAllClasses();
    }, []);


    const getAllClasses = () => {
        let teacherClassReq = {teacherIdNum: teacherID};
        axios.post("http://localhost:3001/getclasses",teacherClassReq)
            .then(resp => {
                setClassObj(resp.data.items);
                console.log(resp.data.items);
            })
            .catch(err =>{
                alert(err);
            })
    }

    const showClassCards = () => {
        if (classObj === null) {
            return;
        }
        return classObj.map((e) => {
            return <ClassCardTeacher
                title={e.className}
                teacherId={e.teacherId}
                description={e.description}
                admissionFee={e.admissionFee}
                monthlyFee={e.monthlyFee}
                institute={e.educationInstitute}
                sendItems = {props.sendClickItems}
                _id = {e._id}
                />
        })
    };

    return (
        <Container fluid className="classItemsContainer p-4 mt-2 ">
            <CreateClassCard/>
            <>
                {showClassCards()}
            </>
        </Container>

    );
}

export default MyClassDOM;