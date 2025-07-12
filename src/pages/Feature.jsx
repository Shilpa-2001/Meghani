import img1 from "./../assets/images/img1.jpg";
import icon1 from "./../assets/images/icon1.png";
import icon11 from "./../assets/images/icon11.png";
import icon2 from "./../assets/images/icon2.png";
import icon22 from "./../assets/images/icon22.png";
import icon3 from "./../assets/images/icon3.png";
import icon333 from "./../assets/images/icon33.png";
import icon4 from "./../assets/images/icon4.png";
import icon44 from "./../assets/images/icon44.png";
import icon5 from "./../assets/images/img5.png";
import icon55 from "./../assets/images/icon55.png";
import icon6 from "./../assets/images/img6.png";
import icon66 from "./../assets/images/img66.png";
import icon7 from "./../assets/images/img7.png";
import icon77 from "./../assets/images/img77.png";
import icon8 from "./../assets/images/img8.png";
import icon88 from "./../assets/images/img88.png";
import svg from "./../assets/images/svg.avif";
import {Outlet, Link ,useLocation,useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Button from "../components/Button";



  const Feature = () => {

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
    // <div className="feature-container">
    //   <section className="features" id="feature">
    //     <h1 className="topic1">Why Meghanix Homex?</h1>
    //     <div className="feature1">
    //       <div className="feature11">
    //         <h2>The new way to find your new stay</h2>
    //         <p>Find your dream place to live with more than 10k+ trusted PGs, hostels, and flats.</p>
    //          <li className='play-btn2'>
    //           <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    //             <path d="M9.80506 11.4617L0.0898438 22.0059C0.0907562 22.0078 0.0907561 22.0106 0.0916686 22.0125C0.390051 23.1574 1.41203 24 2.62564 24C3.11108 24 3.56641 23.8656 3.95695 23.6305L3.98798 23.6118L14.9232 17.1593L9.80506 11.4617Z" fill="#EA4335" />
    //             <path d="M19.6332 9.66619L19.624 9.65966L14.9029 6.86123L9.58398 11.7013L14.922 17.1582L19.6177 14.3878C20.4407 13.9324 21.0001 13.045 21.0001 12.0223C21.0001 11.0052 20.4489 10.1225 19.6332 9.66619Z" fill="#FBBC04" />
    //             <path d="M0.0894234 1.99337C0.0310244 2.21359 0 2.445 0 2.68388V21.3164C0 21.5553 0.0310245 21.7867 0.0903359 22.006L10.1386 11.7314L0.0894234 1.99337Z" fill="#4285F4" />
    //             <path d="M9.87666 11.9999L14.9044 6.85932L3.98201 0.383476C3.58508 0.139932 3.12154 -3.52859e-05 2.62606 -3.52859e-05C1.41246 -3.52859e-05 0.38865 0.844438 0.0902675 1.99031C0.0902675 1.99124 0.0893555 1.99217 0.0893555 1.99311L9.87666 11.9999Z" fill="#34A853" />
    //           </svg>
    //           GET IT ON <br />
    //           Google Play
    //         </li> 
    //         <div className="img1">
    //           <img src={img1} />
    //         </div>
    //       </div>
    //       <div className="feat">
    //         <div className="feature">
    //           <div className="feature-card1">
    //             <div className="icons">
    //               <img src={icon1} className="icon1" />
    //               <img src={icon11} className="icon11" />
    //             </div>
    //             <h3>Verified & Secure Homes</h3>
    //             <p>Find hostels, PGs, and flats that are thoroughly verified for a safe living experience.</p>
    //           </div>
    //           <div className="feature-card1">
    //             <div className="icons">
    //               <img src={icon2} className="icon2" />
    //               <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-2">
    //                 <g clip-path="url(#clip0_0_1)">
    //                   <g filter="url(#filter0_d_0_1)">
    //                     <path d="M7.1665 28V6.66667C7.1665 5.95942 7.44746 5.28115 7.94755 4.78105C8.44765 4.28095 9.12593 4 9.83317 4H23.1665C23.8737 4 24.552 4.28095 25.0521 4.78105C25.5522 5.28115 25.8332 5.95942 25.8332 6.66667V28L21.8332 25.3333L19.1665 28L16.4998 25.3333L13.8332 28L11.1665 25.3333L7.1665 28Z" fill="white" />
    //                     <path d="M7.1665 28V6.66667C7.1665 5.95942 7.44746 5.28115 7.94755 4.78105C8.44765 4.28095 9.12593 4 9.83317 4H23.1665C23.8737 4 24.552 4.28095 25.0521 4.78105C25.5522 5.28115 25.8332 5.95942 25.8332 6.66667V28L21.8332 25.3333L19.1665 28L16.4998 25.3333L13.8332 28L11.1665 25.3333L7.1665 28Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    //                   </g>
    //                 </g>
    //                 <path d="M16.5 22L11.49 17.95V15.925H15.795C16.125 15.925 16.41 15.86 16.65 15.73C16.89 15.6 17.075 15.42 17.205 15.19C17.345 14.96 17.415 14.695 17.415 14.395C17.415 14.085 17.345 13.815 17.205 13.585C17.075 13.355 16.89 13.175 16.65 13.045C16.41 12.915 16.125 12.85 15.795 12.85H11.49V10.825H20.64V12.175H18.045L18.63 11.725C18.98 12.035 19.25 12.41 19.44 12.85C19.64 13.29 19.74 13.805 19.74 14.395C19.74 15.155 19.565 15.8 19.215 16.33C18.875 16.86 18.405 17.265 17.805 17.545C17.215 17.815 16.54 17.95 15.78 17.95H13.905L14.13 17.305L19.89 22H16.5ZM11.49 15.055V13.705H20.64V15.055H11.49Z" fill="#1F575D" />
    //                 <defs>
    //                   <filter id="filter0_d_0_1" x="4.1665" y="1" width="28.6665" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    //                     <feFlood flood-opacity="0" result="BackgroundImageFix" />
    //                     <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
    //                     <feOffset dx="2" dy="2" />
    //                     <feGaussianBlur stdDeviation="2" />
    //                     <feComposite in2="hardAlpha" operator="out" />
    //                     <feColorMatrix type="matrix" values="0 0 0 0 0.439216 0 0 0 0 0.396078 0 0 0 0 0.941176 0 0 0 0.1 0" />
    //                     <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
    //                     <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
    //                   </filter>
    //                   <clipPath id="clip0_0_1">
    //                     <rect width="32" height="32" fill="white" transform="translate(0.5)" />
    //                   </clipPath>
    //                 </defs>
    //               </svg>

    //               <img src={icon22} className="icon22" />
    //             </div>

    //             <h3>Transparent Pricing</h3>
    //             <p>No hidden charges, no surprises</p>
    //           </div>
    //         </div>
    //         <div className="feature-flex2">
    //           <div className="feature-card2">
    //             <div className="icons">
    //               <img src={icon3} className="icon3" />
    //               <img src={icon77} className="icon77" />
    //             </div>
    //             <h3>Easy Online Booking</h3>
    //             <p>Book your stay in just a few clicks</p>
    //           </div>
    //           <div className="feature-card2">
    //             <div className="icons">
    //               <img src={icon4} className="icon4" />
    //               <img src={icon44} className="icon44" />
    //             </div>
    //             <h3>Smart Search Filters</h3>
    //             <p>Filter properties based on location,Budget and amenities.</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="feature111">
    //       <div className="feat1">
    //         <div className="feature">
    //           <div className="feature-card1">
    //             <div className="icons">
    //               <img src={icon5} className="icon5" />
    //               <img src={icon55} className="icon55" />
    //             </div>
    //             <h3>Maximum Visibility</h3>
    //             <p>Get your property listed and visible to thousands of potential tenants.</p>
    //           </div>
    //           <div className="feature-card1">
    //             <div className="icons">
    //               <img src={icon6} className="icon6" />
    //               <img src={icon66} className="icon66" />
    //             </div>

    //             <h3>Seamless Management</h3>
    //             <p>Track bookings, payments, and tenant details from a single dashboard.</p>
    //           </div>
    //         </div>
    //         <div className="feature-flex2">
    //           <div className="feature-card2">
    //             <div className="icons">
    //               <img src={icon7} className="icon7" />
    //               <img src={icon77} className="icon77" />
    //             </div>
    //             <h3>Secure & Timely Payments</h3>
    //             <p>Hassle-free rent collection with automated transactions.</p>
    //           </div>
    //           <div className="feature-card2">
    //             <div className="icons">
    //               <img src={icon8} className="icon8" />
    //               <img src={icon88} className="icon88" />
    //             </div>
    //             <h3>Professional Support</h3>
    //             <p>Dedicated customer support to assist with your listing needs.</p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="feature12">
    //         <h2>Boost Your Property’s Visibility & Earnings.</h2>
    //         <p>List your hostel, PG, or flat and reach thousands of verified tenants effortlessly. Manage bookings, payments, and inquiries—all in one place!</p>
    //         <div className='play-btn22'>
    //           {/* List Your Property */}
    //           <div>
    //                                 <Link to = "/Listproperty"  className='links'>List Your Stay</Link> 
    //             </div>
    //         </div>
    //         <div>
    //           <img src={svg} className="svg" />
    //         </div>
    //       </div>
    //     </div>


    //   </section>
    // </div>
  <section class="feature-section">
      <h2>Why meghani Homex ?</h2>
    <div class="container">
    
<div class="left">
  <div class="image-container">
  <img src={img1} className="background-image" />
    <div class="overlay-text">
      <h2>The new way to find your new stay</h2>
      <p>Find your dream place to live with more than 10k+ trusted PGs, hostels, and flats.</p>
      <li className='play-btn2'>
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
  </div>
</div>

  
      <div class="right">
        <div class="feature-card">
                   <div className="icons">
                   <img src={icon1} className="icon1" />
                   <img src={icon11} className="icon11" />
               </div>
          <div>
            <h3>Verified & Secure Homes</h3>
            <p>Find hostels, PGs, and flats that are thoroughly verified for a safe living experience.</p>
          </div>
        </div>

        <div class="feature-card">
                     <div className="icons">
                   <img src={icon2} className="icon2" />
                   <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-2">
                     <g clip-path="url(#clip0_0_1)">
                       <g filter="url(#filter0_d_0_1)">
                         <path d="M7.1665 28V6.66667C7.1665 5.95942 7.44746 5.28115 7.94755 4.78105C8.44765 4.28095 9.12593 4 9.83317 4H23.1665C23.8737 4 24.552 4.28095 25.0521 4.78105C25.5522 5.28115 25.8332 5.95942 25.8332 6.66667V28L21.8332 25.3333L19.1665 28L16.4998 25.3333L13.8332 28L11.1665 25.3333L7.1665 28Z" fill="white" />
                         <path d="M7.1665 28V6.66667C7.1665 5.95942 7.44746 5.28115 7.94755 4.78105C8.44765 4.28095 9.12593 4 9.83317 4H23.1665C23.8737 4 24.552 4.28095 25.0521 4.78105C25.5522 5.28115 25.8332 5.95942 25.8332 6.66667V28L21.8332 25.3333L19.1665 28L16.4998 25.3333L13.8332 28L11.1665 25.3333L7.1665 28Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                       </g>
                     </g>
                     <path d="M16.5 22L11.49 17.95V15.925H15.795C16.125 15.925 16.41 15.86 16.65 15.73C16.89 15.6 17.075 15.42 17.205 15.19C17.345 14.96 17.415 14.695 17.415 14.395C17.415 14.085 17.345 13.815 17.205 13.585C17.075 13.355 16.89 13.175 16.65 13.045C16.41 12.915 16.125 12.85 15.795 12.85H11.49V10.825H20.64V12.175H18.045L18.63 11.725C18.98 12.035 19.25 12.41 19.44 12.85C19.64 13.29 19.74 13.805 19.74 14.395C19.74 15.155 19.565 15.8 19.215 16.33C18.875 16.86 18.405 17.265 17.805 17.545C17.215 17.815 16.54 17.95 15.78 17.95H13.905L14.13 17.305L19.89 22H16.5ZM11.49 15.055V13.705H20.64V15.055H11.49Z" fill="#1F575D" />
                     <defs>
                        <filter id="filter0_d_0_1" x="4.1665" y="1" width="28.6665" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                         <feFlood flood-opacity="0" result="BackgroundImageFix" />
                         <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                         <feOffset dx="2" dy="2" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0.439216 0 0 0 0 0.396078 0 0 0 0 0.941176 0 0 0 0.1 0" />
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                        </filter>
                        <clipPath id="clip0_0_1">
                         <rect width="32" height="32" fill="white" transform="translate(0.5)" />
                        </clipPath>
                      </defs>
                   </svg>

                <img src={icon22} className="icon22" />
            </div>
          <div>
            <h3>Transparent Pricing</h3>
            <p>No hidden charges, no surprises.</p>
          </div>
        </div>

        <div class="feature-card">
                     <div className="icons">
                   <img src={icon3} className="icon3" />
                   <img src={icon77} className="icon77" />
                 </div>
          <div>
            <h3>Easy Online Booking</h3>
            <p>Book your stay in just a few clicks, hassle-free.</p>
          </div>
        </div>

        <div class="feature-card">
                     <div className="icons">
                   <img src={icon4} className="icon4" />
                   <img src={icon44} className="icon44" />
                 </div>
          <div>
            <h3>Smart Search Filters</h3>
            <p>Filter properties based on location, budget, and amenities.</p>
          </div>
        </div>
      </div>
    </div>



 <div class="container"> 


  
      <div class="right">
        <div class="feature-card">
                     <div className="icons">
                   <img src={icon5} className="icon5" />
                   <img src={icon55} className="icon55" />
                 </div>
          <div>
            <h3>Maximum Visibility</h3>
            <p>Get your property listed and visible to thousands of potential tenants.</p>
          </div>
        </div>

        <div class="feature-card">
                 <div className="icons">
                 <img src={icon6} className="icon6" />
                   <img src={icon66} className="icon66" />
                 </div>
          <div>
          <h3>Seamless Management</h3>
           <p>Track bookings, payments, and tenant details from a single dashboard.</p>
          </div>
        </div>

        <div class="feature-card">
    <div className="icons">
                   <img src={icon7} className="icon7" />
                   <img src={icon77} className="icon77" />
               </div>
          <div>
          <h3>Secure & Timely Payments</h3>
                    <p>Hassle-free rent collection with automated transactions.</p>
          </div>
        </div>

        <div class="feature-card">
        <div className="icons">
                   <img src={icon8} className="icon8" />
                   <img src={icon88} className="icon88" />
               </div>
          <div>
          <h3>Professional Support</h3>
          <p>Dedicated customer support to assist with your listing needs.</p>
          </div>
        </div>
      </div>
      <div class="left">
  <div class="image-container">
  <img src={svg} className="background-image" />
    <div class="overlay-text">
    <h2>Boost Your Property’s Visibility & Earnings.</h2>
    <p>List your hostel, PG, or flat and reach thousands of verified tenants effortlessly. Manage bookings, payments, and inquiries—all in one place!</p>
             <div className='play-btn2'>
               <div>
                                     <Link to = "/Listproperty"  className='links'>List Your Stay</Link> 
                 </div>
             </div>
    </div>
  </div>
</div>
    </div>

  </section>

  )
}
export default Feature;