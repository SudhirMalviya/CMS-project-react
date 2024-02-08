import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

const Layout = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
 

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuClass = `menu ${scrollPosition > 90 ? "visible" : "black"}`;
 

    return(
       <> 
     
      
        <nav id="menu"  className={menuClass}>
       <div className="logo_h1">
         
       <h1>Complaint Management System</h1>
       </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="home"><i className="fa-solid fa-house-chimney"></i><span>Home</span></Link>
            </li>
            <li>
              <Link to="contact"><i className="fa-solid fa-server"></i><span>Contact</span></Link>
            </li>
            <li>
              <Link to="about"><i className="fa-regular fa-file"></i><span>About</span></Link>
            </li>
            
            
          </ul>
          
        </div>
      
       
      </nav>
      

      
     
      <div className="outlet">
        <Outlet />
      </div>


      <footer id="footer">
      <div className="social_p">
          <ul>
            <li>
              <Link to="insta"><i className="fa-brands fa-instagram"></i></Link>
            </li>
            <li>
              <Link to="twit"><i className="fa-brands fa-twitter"></i></Link>
            </li>
            <li>
              <Link to="fb"><i className="fa-brands fa-facebook"></i></Link>
            </li>
            <li>
              <Link to="linkdin"><i className="fa-brands fa-linkedin"></i></Link>
            </li>
            <li>
              <Link to="em"><i className="fa-solid fa-envelope"></i></Link>
            </li>
          </ul><hr color="black" size="2"/>
          </div>
          <div className="rights">
          <p>@Copyright <b>TechSudarshan</b></p>
          <p>Designed by <b>Sudhir Malviya</b></p>
        
        </div>
        </footer>
     
   
           




         

        </>

    );
}
export default Layout;