import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Outlet} from 'react-router-dom';
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
    const ans=complaint.ans;
    if (ans === "") {
      return (
        <tr>
          <td>{sno}</td>
          <td>{student ? student.name : 'Unknown'}</td>
          <td>{student ? student.email : 'Unknown'}</td>
          <td>{complaint.stucomplain}</td>
          <Link to={`adminreply/${student ? complaint.id : 'Unknown'}`}>
            <button className="reply_button">Reply Answer</button>
          </Link>
        </tr>
      );
    } else {
      // If ans is an empty string, return null or an empty fragment
      return null;
    }
  });

  return (
    <>
    <div className="admin_reply_container">
    <div className="complaints-container">
      <h1 className="page-title">Student Complaints</h1>
      <table class="container_stc">
            <thead>
              <tr>
                <th><h1>Sno</h1></th>
                <th><h1>Student Name</h1></th>
                <th><h1>Email</h1></th>
                <th><h1>Complaintsr</h1></th>
                <th><h1>Reply</h1></th>
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
