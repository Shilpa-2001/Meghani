// import Button from '../components/Button';
// import Logotype1 from './../assets/images/Logotype1.svg';
// import {Outlet, Link ,useLocation,useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';

// const Nav = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
  
//     const handleScroll = (sectionId) => {
//       if (location.pathname !== "/") {
//         // Store target section in localStorage
//         localStorage.setItem("scrollTo", sectionId);
//         navigate("/");
//       } else {
//         const section = document.getElementById(sectionId);
//         if (section) {
//           section.scrollIntoView({ behavior: "smooth" });
//         }
//       }
//     };
  
//     useEffect(() => {
//         window.scrollTo(0,0);
//        const sectionId = localStorage.getItem("scrollTo");
//       if (location.pathname === "/" && sectionId) {
//         const section = document.getElementById(sectionId);
//         if (section) {
//           setTimeout(() => {
//             section.scrollIntoView({ behavior: "smooth" });
//           },0); 
//         }
//         localStorage.removeItem("scrollTo");
//       }
//     }, [location]);


//     return (
//         <>
//             <nav>
//                 <img src={Logotype1} />
//                 <ul>
//                   <li> 
//                   <button className="links" onClick={() => handleScroll("Home")}>Home</button>
//                     </li>
//                     <li>
//                         <button className="links" onClick={() => handleScroll("Feature")}>Why Meghani Homex?</button>
//                     </li>
//                     <li>
//                         <div class="hover-container">
//                             <span class="hover-text">For Owner     
//                                <svg width="15" height="14" fill="none" xmlns="http://www.w3.org/2000/svg" className='arrow'>
//                                 <g clip-path="url(#clip0_123_304)">
//                                     <path d="M3.3335 5.66663L8.00016 10.3333L12.6668 5.66663" stroke="#000929" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//                                 </g>
//                                 <defs>
//                                     <clipPath id="clip0_123_304">
//                                         <rect width="16" height="16" fill="white" />
//                                     </clipPath>
//                                 </defs>
//                             </svg></span>
//                             <div class="options">
//                                 <div class="option">
//                                     <Link to = "/Listproperty"  className='links'>List Your Stay</Link> 
//                                 </div>
//                                 <div class="option">
//                                 <button className="links" onClick={() => handleScroll("Faq31")}>How it Works</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </li>
//                     <li>
//                         <Link to="/Faqs" className='links'>FAQs</Link>
//                     </li>
//                     <li>
//                     <button className="links" onClick={() => handleScroll("About")}>About Us</button>
//                     </li>
//                     <li>
//                         <Link to="/Contact" className='links'> Contact Us</Link>
//                     </li>
//                 </ul>


//                 <ul className='btn'>
//                  <Button/>
//                     <Link to="/Login" className='login-btn' >
//                         Login
//                     </Link>
//                 </ul>

//             </nav>
//             <Outlet/>

//         </>
//     )
// }

// export default Nav;



import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Logotype1 from './../assets/images/Logotype1.svg';

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (sectionId) => {
    if (location.pathname !== "/") {
      localStorage.setItem("scrollTo", sectionId);
      navigate("/");
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const sectionId = localStorage.getItem("scrollTo");
    if (location.pathname === "/" && sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 0);
      }
      localStorage.removeItem("scrollTo");
    }
  }, [location]);

  return (
    <>
      <nav>
        <div className="nav-left">
          <img src={Logotype1} alt="Logo" />
        </div>

        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>

        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><button className="links" onClick={() => handleScroll("Home")}>Home</button></li>
            <li><button className="links" onClick={() => handleScroll("Feature")}>Why Meghani Homex?</button></li>
            <li className="hover-container">
              <span className="hover-text">
                For Owners
                <svg width="15" height="14" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow">
                  <g clipPath="url(#clip0_123_304)">
                    <path d="M3.3335 5.66663L8.00016 10.3333L12.6668 5.66663" stroke="#000929" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_123_304">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <div className="options">
                <div className="option"><Link to="/Listproperty" className="links">List Your Stay</Link></div>
                <div className="option"><button className="links" onClick={() => handleScroll("Faq31")}>How it Works</button></div>
              </div>
            </li>
            <li><Link to="/Faqs" className="links">FAQs</Link></li>
            <li><button className="links" onClick={() => handleScroll("About")}>About Us</button></li>
            <li><Link to="/Contact" className="links">Contact Us</Link></li>
          </ul>

          <div className="nav-buttons">
            <Button />
            <Link to="/Login" className="login-btn">Login</Link>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Nav;
