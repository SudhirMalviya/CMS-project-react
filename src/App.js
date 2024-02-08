import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import './App.css';
import './style.js';
import Home from './Home';
import Register from './STUDENT-CONTAINER/Registration.js';
// import Dashboard from './Dashboard.js';
import StuComplain from './STUDENT-CONTAINER/StuComplain.js';
import DashLoder from './STUDENT-CONTAINER/DashLoder.js';
// import AdminDashbord from './ADMIN-CONTAINER/AdminDashbord.js';
import SeeComplainstu from './ADMIN-CONTAINER/SeeComplainstu.js';
import AdminReply from './ADMIN-CONTAINER/AdminReply.js';
import SeeAdminAns from './STUDENT-CONTAINER/SeeAdminAns.js';
import AdminLoder from './ADMIN-CONTAINER/AdminLoder.js';
import AllStudentComplain from './ADMIN-CONTAINER/AllStudentComplain.js';
import AdminPasswrod from './ADMIN-CONTAINER/AdminPassword.js';
import StuPassChange from './STUDENT-CONTAINER/StuPassChange.js';
import AdminProfile from './ADMIN-CONTAINER/AdminProfile.js';
import StudentProfile from './STUDENT-CONTAINER/StuProfile.js';
import About from './About.js';
import Contact from './Contact.js';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home/" element={<Home />} />
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="register/" element={<Register />} />
            <Route path="dashboard/" element={<DashLoder />}>
               <Route path="stupasschange" element={<StuPassChange/>}/>
               <Route path="studentprofile" element={<StudentProfile/>}/>
               <Route path="dashbord/complain/" element={<StuComplain />} />
               <Route path="seeadminans" element={<SeeAdminAns/>}/> 
               <Route path="about" element={<About/>}/>
            </Route>
            {/* --------------Student--End------------------- */}
            <Route path="admindashbord" element={<AdminLoder/>}>
                <Route path="adminprofile" element={<AdminProfile/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="allstudentcomplain" element={<AllStudentComplain/>}/>
                <Route path="adminpasswrod" element={<AdminPasswrod/>}/>
                <Route path='seecomplainstu' element={<SeeComplainstu/>}>
                    <Route path='adminreply/:id' element={<AdminReply/>}/>
                </Route>   
            </Route>
            {/* ------------Admin--End------------------------ */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
