import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { login } from './STUDENT-CONTAINER/stuSlice';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { adminlogin } from './ADMIN-CONTAINER/AdminSlice';


const Home = () => {
  const dispatch = useDispatch();
 
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType,setUserType]=useState("")
  
  

  const handleSubmit = (e) => {
    if(userType=="student"){ 
    e.preventDefault(); 
    let url = `http://localhost:4000/student/?email=${email}&password=${password}`;
    axios.get(url).then((res) => {
      if (res.data.length === 1) {
        const userData = res.data[0];
        dispatch(login(userData));
        alert("Login successful");
        navigate('/dashboard');
      } else {
        alert("Invalid credentials");
      }
    });

    }
    else{
      e.preventDefault();
      let url = `http://localhost:4000/admin/?email=${email}&password=${password}`;
      axios.get(url).then((res) => {
        if (res.data.length === 1) {
          const adminData=res.data[0];
          dispatch(adminlogin(adminData))
          navigate("/admindashbord"); 
        }
         else {
          alert("Invalid data credentials");
        }
       });
       }
  };

  return (
    <>
      <div className='homedata'>
        <div className='home-left'>
          <form>
            
            <h1>Login</h1>

            <div>
              <label htmlFor="email"><i className="fas fa-envelope"></i> :-</label>
              <input type="email" id="email" name="email" value={email} placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} required /><br />
            </div>
            <div>
              <label htmlFor="password"><i className="fas fa-lock"></i>  :- </label>
              <input type="password" id="password" name="password" value={password} placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} required /><br />
            </div>
            <div>
              <label htmlFor="userType"><i className="fas fa-user"></i> :- </label>
              <select id="userType" name="userType" onChange={(e) => { setUserType(e.target.value) }} >
                <option name="admin" value="admin">Admin</option>
                <option name="student" value="student">Student</option>
              </select><br />
            </div>

            <button type="button" onClick={handleSubmit} >Login</button> 
          </form>
        </div>

        <div className='home-right'>
          
          <img src='../images/cms.png' width="400px" height="300px"/>
          <h1 className='home_right-h1'><Link to="/register"><a style={{color:"black"}}>Click here for Register now</a> </Link></h1>
        </div>
      </div>
    </>
  );
}

export default Home;