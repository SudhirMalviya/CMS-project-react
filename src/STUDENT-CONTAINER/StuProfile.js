import { useState ,useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectStuId } from './stuSlice';

const StudentProfile=()=>{
    const [mydata,setMydata]=useState({});
    const stuid=useSelector(selectStuId);
    const loaddata=()=>{
        let url=`http://localhost:4000/student/${stuid}`;
        axios.get(url).then((res)=>{
            setMydata(res.data)
        })
    }
    useEffect(()=>{
        loaddata();
    },[]);
    return(
        <>
          
          <div className='stuprofile_container' >
                <div id="gradient"></div>
                <div className='image_profile_student'>
                <img src="../image/admin.png" height="500px"/> 
                </div>
              <div id="card">
 
            <h2>{mydata.name}</h2>
            <p>Student of Cybrom Technology</p>
            <p>Interested in Web technologies like HTML5, CSS3, JavaScript, Djnago,React,Python, MySQL, etc.</p>
            <p>Email : {mydata.email} </p>
            <span className="left bottom">tel: 91741 26*** </span>
            <span className="right bottom">adress: INDIA</span>
          </div>
       
        </div>
        
        
        
        
        </>
    )
}
export default StudentProfile;