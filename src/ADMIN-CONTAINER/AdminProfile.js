import { useState ,useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectadminid } from './AdminSlice';



const AdminProfile=()=>{
    const [mydata,setMydata]=useState("")
    const adminid=useSelector(selectadminid);
    const loaddata=()=>{
        let url=`http://localhost:4000/admin/${adminid}`;
        axios.get(url).then((res)=>{
            setMydata(res.data)
        })
    }
    useEffect(()=>{
        loaddata();
    },[])
    return(
        <>
        
      <div className='adminprofile_container' >
      <div id="gradient"></div>
      <div className='image_profile_admin'>
      <img src="../image/ad.png" height="500px"/> 
      </div>
    <div id="card">
 
  <h2>{mydata.name}</h2>
  <p>Student of Cybrom Technology</p>
  <p>Interested in Web technologies like HTML5, CSS3, JavaScript, Djnago,React,Python, MySQL, etc.</p>
  <p>Email : {mydata.email} </p>
  <span class="left bottom">tel: 91741 26*** </span>
  <span class="right bottom">adress: INDIA</span>
</div>
       
        </div>
        
        
        </>
    );
}
export default AdminProfile;