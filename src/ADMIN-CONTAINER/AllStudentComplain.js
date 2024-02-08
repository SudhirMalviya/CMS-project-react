import React, { useState, useEffect } from "react";
import axios from "axios";
import { Outlet} from 'react-router-dom';
let sno=0;
const SeeComplainstu = () => {
  const [myData, setMyData] = useState([]);
  const [stname, setStname]=useState([]);
  useEffect(() => {
    loadData();
    loadName();
   
  }, []);
  const loadName= () =>{
    let url='http://localhost:4000/student'
    axios.get(url).then((res)=>{
      setStname(res.data)
    })
  }
  const loadData = () => { 
    let url = 'http://localhost:4000/stucomplain';
    axios.get(url).then((res) => {
      setMyData(res.data);
    });
  };
  const dataRows = myData.map((complaint) => {
    const student = stname.find((student) => student.id === complaint.stuid);
    sno++;
    
   
      return (
        <tr>
          <td>{sno}</td>
          <td>{student ? student.name : 'Unknown'}</td>
          <td>{student ? student.email : 'Unknown'}</td>
          <td>{complaint.stucomplain}</td>
          <td>{complaint.ans}</td>
         
        </tr>
      );
   
  });

  return (
    <>
    <div className="admin_reply_container">
    <div className="complaints-container">
      <h1 className="page-title" style={{width:"100%"}}>All Student Complaints & Answer</h1>
      <table class="container_stc" style={{width:"100%"}}>
            <thead>
              <tr>
                <th scope="col" style={{width:"50px"}}><h1>Sno</h1></th>
                <th><h1 style={{width:"120px"}}>Student Name</h1></th>
                <th><h1 style={{width:"170px"}}>Email</h1></th>
                <th><h1>Complaintsr</h1></th>
                <th><h1>Reply by Admin</h1></th>
              </tr>
            </thead>
            <tbody>
               {dataRows}
           </tbody>
       </table>
    </div>
    <div className="admin_ans">
      <Outlet/>
    </div>
    </div>
    </>
  );
};

export default SeeComplainstu;
