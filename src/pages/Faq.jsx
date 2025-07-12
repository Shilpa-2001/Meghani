import laptop from "./../assets/images/laptop.png";
import img1 from "./../assets/images/img-11.jpg";
import img2 from "./../assets/images/img-22.jpg";
import img3 from "./../assets/images/img-33.jpg";
import profile1 from "./../assets/images/profile1.jpg";
import profile2 from "./../assets/images/profile2.jpg";
import {Outlet, Link ,useLocation,useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


  const Faq = () => {

    const location = useLocation();
    const navigate = useNavigate();
  
    const handleScroll = (sectionId) => {
      if (location.pathname !== "/") {
        navigate("/", { replace: false });
  
        setTimeout(() => {
          section?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: "smooth" });
      }
    };
    
    useEffect (() => {
        window.scrollTo(0,0);
    },[Location] 
    );


  return (
    <>
      <section className="faq">
        <div className="faq1">
          <div className="faq11">
            <h2>Book Your Stay Easily, Anytime, Anywhere</h2>
            <p> Find and book verified PGs, flats, and hostels effortlessly with Meghani Homex. Explore images, check amenities, and secure your stay online—ensuring comfort, safety, and convenience in just a few taps!</p>
            <li className='play-btn23'>
              <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.80506 11.4617L0.0898438 22.0059C0.0907562 22.0078 0.0907561 22.0106 0.0916686 22.0125C0.390051 23.1574 1.41203 24 2.62564 24C3.11108 24 3.56641 23.8656 3.95695 23.6305L3.98798 23.6118L14.9232 17.1593L9.80506 11.4617Z" fill="#EA4335" />
                <path d="M19.6332 9.66619L19.624 9.65966L14.9029 6.86123L9.58398 11.7013L14.922 17.1582L19.6177 14.3878C20.4407 13.9324 21.0001 13.045 21.0001 12.0223C21.0001 11.0052 20.4489 10.1225 19.6332 9.66619Z" fill="#FBBC04" />
                <path d="M0.0894234 1.99337C0.0310244 2.21359 0 2.445 0 2.68388V21.3164C0 21.5553 0.0310245 21.7867 0.0903359 22.006L10.1386 11.7314L0.0894234 1.99337Z" fill="#4285F4" />
                <path d="M9.87666 11.9999L14.9044 6.85932L3.98201 0.383476C3.58508 0.139932 3.12154 -3.52859e-05 2.62606 -3.52859e-05C1.41246 -3.52859e-05 0.38865 0.844438 0.0902675 1.99031C0.0902675 1.99124 0.0893555 1.99217 0.0893555 1.99311L9.87666 11.9999Z" fill="#34A853" />
              </svg>
              GET IT ON <br />
              Google Play
            </li>
          </div>
          <div className="faq121">
            <div className="faq12-11">
              <div><img src={img1} className="img-11" /></div>
              <div><img src={img2} className="img-22" /></div>
              <div ><img src={img3} className="img-33" /></div>
            </div>
            <div className="faq12-2">
              <div>
                <img src={profile1} className="profile-1" />
              </div>
              <div>
                <img src={profile2} className="profile-2" />
              </div>
              <div>
                <span className="profile-3">+98</span>
              </div>
            </div>
          </div>
        </div>
        <div className="faq2">
          <div className="faq21">
            <img src={laptop} />
          </div>

          <div className="faq22">
            <h2>List & Manage Your Property Effortlessly</h2>
            <p>Hostel, PG, or flat owners can list and manage their properties online with Meghani Homex. Handle bookings, payments, and inquiries seamlessly through your laptop or mobile—boost occupancy with ease!</p>
            <li className='play-btn-23'>
            <div>
                                    <Link to = "/Listproperty"  className='links'>List Your Property & Get Started</Link> 
                </div>
            
            </li>
          </div>
        </div>

      </section>

    </>
  )
}
export default Faq;