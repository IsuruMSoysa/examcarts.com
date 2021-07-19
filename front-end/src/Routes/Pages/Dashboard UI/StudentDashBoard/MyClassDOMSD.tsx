import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from "react-bootstrap";
import "../Styles/DashBord.scss"
import  {IClassObj} from  "../../../../Types/teacherTypes";
import axios from "axios";
import AddClassCardSD from "./AddClassCardSD";
import MyClassCard from "./MyClassCard";


function MyClassDOMSD(){

  const [allStuClassObj,setAllStuClassObj] = useState<IClassObj[] | null>([]);


  useEffect(() => {
    getStuAllClasses();
  }, []);

  const getStuAllClasses = () => {
    axios.post("http://localhost:3001/getallstudentclasses",{stuId:localStorage.getItem('passedStudentID')})
      .then(resp => {
         setAllStuClassObj(resp.data.items);
      })
      .catch(err =>{
        alert(err);
      })
  }

  const showAllStuClassCards = () => {
    if (allStuClassObj === null) {
      return;
    }
    return allStuClassObj.map((e) => {
      return <MyClassCard
        title={e.className}
        teacherId={e.teacherId}
        description={e.description}
        admissionFee={e.admissionFee}
        monthlyFee={e.monthlyFee}
        institute={e.educationInstitute}
        // passClickedClassId = {props.passClickedClass}
        _id = {e._id}
      />
    })
  };

  return (
    <Container fluid className="classItemsContainer p-4 mt-2 ">
      <AddClassCardSD/>
      <React.Fragment >
        {showAllStuClassCards()}
      </React.Fragment>
    </Container>

  );
}

export default MyClassDOMSD;