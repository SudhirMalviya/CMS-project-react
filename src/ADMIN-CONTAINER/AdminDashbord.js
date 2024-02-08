import { useSelector ,useDispatch } from 'react-redux';
import { selectadminUser,adminlogout } from './AdminSlice';
import { Link, Outlet,useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';


const AdminDashbord = () => {
  const adminData = useSelector(selectadminUser);
  const dispatch = useDispatch();
  const navigate=useNavigate();
  
  
  
 
  const logout=()=>{
    dispatch(adminlogout());
    navigate("/");
  }

  return (
    <>
      <div className='admin_dashbord'>
        <div className='dash_bord_admin'>
          <h2 className='dash_admin_center'> Welcome to the Admin Dashboard : {adminData?.name}!</h2>
          <h3 className='dash_admin_email'>Email: {adminData?.email}</h3>
          <button className='admin_dash_logout_button' onClick={logout}>Logout</button>
        </div>
        <hr size="2px" className='animated-line' />
      </div>

      <div className="admin-dashboard-content">
        <div className="admin-dashboard-menu">
          <ul>
            <li>
              <Link to="adminprofile"><i className="fa-solid fa-user"></i><span>Admin</span></Link>
           </li>
            <li>
              <Link to="seecomplainstu"><i className="fa-solid fa-address-card"></i><span>Complain</span></Link>
            </li>
            <li>
              <Link to="allstudentcomplain"><i className="fa-solid fa-address-card"></i><span>All Reply Complain</span></Link>
            </li>
            <li>
              <Link to="adminpasswrod"><i className="fa-regular fa-file"></i><span>Set Password</span></Link>
            </li>
            <li>
              <Link to="about"><i className="fa-regular fa-file"></i><span>About</span></Link>
            </li>
          </ul>
        </div>
        <div className='admin_content'>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AdminDashbord;
