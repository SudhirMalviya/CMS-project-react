import React, { useState, useEffect } from 'react';
import Loader from '../Loader';
import  AdminDashbord from './AdminDashbord';
import { useSelector} from "react-redux";
import { selectadminUser } from './AdminSlice';
import { useNavigate } from "react-router-dom";

const AdminLoder = () => {
  const [loading, setLoading] = useState(true);
  const AdminName=useSelector(selectadminUser);
  const Navigate= useNavigate();

  useEffect(()=>{
         
    if (AdminName==null)
    {
        Navigate("/"); 
    }

}, []);


setTimeout(()=>{
   setLoading(false);
}, 1000);



  return (
    <>
      
      {loading ? <Loader/> : <AdminDashbord/>} 
      
      
      </>
  );
};

export default AdminLoder;
