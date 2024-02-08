import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectStuUser } from './stuSlice';
import { useNavigate, Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  const stuisUser = useSelector(selectStuUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <>
   
    
       
      
       <div className='studashbord_system'>
      
      
        
      <div className='studashbord_profile'>
      <input type="checkbox" name="" id="click"/>
		     <label for="click" class="menu-btn">
		     <i class="fas fa-bars"></i>
		     </label>
        <ul className='submenu'>
         
      <li className='submenu_obj'><Link to="studentprofile">Profile</Link></li>
      <br />
      <li className='submenu_obj'><Link to="dashbord/complain">Complain</Link></li>
      <br />
      <li className='submenu_obj'><Link to="seeadminans">Response</Link></li>
      <br/>
      <li className='submenu_obj'><Link to="stupasschange">Password Change</Link></li>
      

      <li className='submenu_obj'><button className='dash_logout_button color2' onClick={handleLogout}>Logout</button></li>
      </ul>
      </div>
      
      <div className='student_dashbord_left-side_content'>
      <div className='dash_bord_student'>
          <h2 className='dash_student_center'>Welcome : {stuisUser.name}!</h2>  
          
           </div>
        <Outlet />
      </div>
      </div>
    
    </>
  );
};

export default Dashboard;
