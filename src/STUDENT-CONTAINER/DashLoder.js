import React, { useState, useEffect } from 'react';
import Loader from '../Loader'; 
import Dashboard from './Dashboard';
import { useSelector} from "react-redux";
import { selectStuUser } from './stuSlice';
import { useNavigate } from "react-router-dom";

const DashLoder = () => {
  const [loading, setLoading] = useState(true);
  const stuname=useSelector(selectStuUser);
  const Navigate= useNavigate();

  useEffect(()=>{
         
    if (stuname==null)
    {
        Navigate("/"); 
    }

}, []);


setTimeout(()=>{
   setLoading(false);
}, 1000);



  return (
    <>
      {<Dashboard/>}
      {loading && <Loader />}
      
      </>
  );
};

export default DashLoder;
