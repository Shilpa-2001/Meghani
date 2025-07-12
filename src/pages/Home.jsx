import Home1 from './../assets/images/Home1.png';
import profile from './../assets/images/profile.png';
import Logotype1 from './../assets/images/Logotype1.svg';
import whatapp from './../assets/images/whatapp.png';
import trustpilot from './../assets/images/trustpilot.png';
import Faq from './../pages/Faq';
import Faq31 from './../pages/Faq31';
import About from './../pages/About';
import Feature from "./../pages/Feature";
import Footer from '../components/Footer';
import Nav from './../pages/Nav';
  import {Outlet, Link ,useLocation,useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import React from 'react';
import { useState } from "react";
import Button  from "./../components/Button"
import Experience from '../components/Experience';


    
const Home = () => {
  const [activeTab, setActiveTab] = useState("stay");

  return (
    <>
      <section id='Nav'>
        <Nav />
      </section>
    <section id="Home" className="home-container">
      <div className='home1-container'>

     
      <div className="home">
        <div className="home1">
          <h1>Find Trusted <br /> Hostels, PGs & Flats <br /> in Your City!</h1>
          <p>Safe | Verified | Hassle-Free Booking</p>
        </div>

        <div className="home2">
          <div className="home21">
            <button
              className={activeTab === "stay" ? "active" : ""}
              onClick={() => setActiveTab("stay")}
            >
              Find a Stay
            </button>
            <button
              className={activeTab === "property" ? "active" : ""}
              onClick={() => setActiveTab("property")}
            >
              List Your Property
            </button>
          </div>

          {activeTab === "stay" && (
            <div className="home22">
              <div className="text2">
                <h2><strong>Struggling to find a stay?</strong></h2>
                <p>Discover Verified Hostels, PGs & Flats Near You!</p>
              </div>
              <div><Button/></div>
            </div>
          )}

          {activeTab === "property" && (
            <div className="home22">
              <div>
                <h2><strong>Want More Tenants for Your Stay?</strong></h2>
                <p>List your Hostel, PG, or Flat & Get Verified Tenants!</p>
              </div>
              <button className="list-btn">List Your Property</button>
            </div>
          )}
        </div>

        <div className="home3">
          <div>
                       <svg width="64" height="55" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="31.5" fill="white" stroke="#8BAAA9" />
                <circle cx="32" cy="32" r="28" fill="#8BAAA9" />
                <path d="M39.3734 26.36C39.2801 26.3467 39.1867 26.3467 39.0934 26.36C37.0267 26.2934 35.3867 24.6 35.3867 22.52C35.3867 20.4 37.1067 18.6667 39.2401 18.6667C41.3601 18.6667 43.0934 20.3867 43.0934 22.52C43.0801 24.6 41.4401 26.2934 39.3734 26.36Z" fill="white" />
                <path d="M43.72 35.6C42.2266 36.6 40.1333 36.9733 38.2 36.72C38.7066 35.6267 38.9733 34.4133 38.9866 33.1333C38.9866 31.8 38.6933 30.5333 38.1333 29.4267C40.1066 29.16 42.2 29.5333 43.7066 30.5333C45.8133 31.92 45.8133 34.2 43.72 35.6Z" fill="white" />
                <path d="M24.5865 26.36C24.6799 26.3467 24.7732 26.3467 24.8665 26.36C26.9332 26.2934 28.5732 24.6 28.5732 22.52C28.5732 20.3867 26.8532 18.6667 24.7199 18.6667C22.5999 18.6667 20.8799 20.3867 20.8799 22.52C20.8799 24.6 22.5199 26.2934 24.5865 26.36Z" fill="white" />
                <path d="M24.7335 33.1333C24.7335 34.4267 25.0135 35.6533 25.5202 36.76C23.6402 36.96 21.6802 36.56 20.2402 35.6133C18.1335 34.2133 18.1335 31.9333 20.2402 30.5333C21.6668 29.5733 23.6802 29.1867 25.5735 29.4C25.0268 30.52 24.7335 31.7867 24.7335 33.1333Z" fill="white" />
                <path d="M32.1599 37.16C32.0532 37.1467 31.9332 37.1467 31.8132 37.16C29.3599 37.08 27.3999 35.0667 27.3999 32.5867C27.4132 30.0533 29.4532 28 31.9999 28C34.5332 28 36.5866 30.0533 36.5866 32.5867C36.5732 35.0667 34.6266 37.08 32.1599 37.16Z" fill="white" />
                <path d="M27.8269 39.92C25.8136 41.2667 25.8136 43.48 27.8269 44.8134C30.1202 46.3467 33.8802 46.3467 36.1736 44.8134C38.1869 43.4667 38.1869 41.2534 36.1736 39.92C33.8936 38.3867 30.1336 38.3867 27.8269 39.92Z" fill="white" />
                <path d="M40 48C40 43.5817 43.5817 40 48 40H56C60.4183 40 64 43.5817 64 48V56C64 60.4183 60.4183 64 56 64H48C43.5817 64 40 60.4183 40 56V48Z" fill="#1D555C" />
                <rect width="16" height="16" transform="translate(44 44)" fill="#1D555C" />
                <path d="M57.1933 53.9533C55.8199 55.32 53.8533 55.74 52.1266 55.2L48.9866 58.3333C48.7599 58.5667 48.3133 58.7067 47.9933 58.66L46.5399 58.46C46.0599 58.3933 45.6133 57.94 45.5399 57.46L45.3399 56.0067C45.2933 55.6867 45.4466 55.24 45.6666 55.0133L48.7999 51.88C48.2666 50.1467 48.6799 48.18 50.0533 46.8133C52.0199 44.8467 55.2133 44.8467 57.1866 46.8133C59.1599 48.78 59.1599 51.9867 57.1933 53.9533Z" fill="white" />
                <path d="M48.5933 55.66L50.1266 57.1933" stroke="#1D555C" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M53.6665 51.3333C54.2188 51.3333 54.6665 50.8856 54.6665 50.3333C54.6665 49.781 54.2188 49.3333 53.6665 49.3333C53.1142 49.3333 52.6665 49.781 52.6665 50.3333C52.6665 50.8856 53.1142 51.3333 53.6665 51.3333Z" fill="#1D555C" stroke="#1D555C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            <h3>Trusted by 50K+ Happy Stayers</h3>
            <p>Believe in our service</p>
          </div>
          <div>
          <svg width="64" height="55" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="31.5" fill="white" stroke="#8BAAA9" />
                <circle cx="32" cy="32" r="28" fill="#8BAAA9" />
                <path d="M22.6665 26.6667C20.4532 26.6667 18.6665 28.4534 18.6665 30.6667V41.3334C18.6665 43.5467 20.4532 45.3334 22.6665 45.3334H24.6665C26.1332 45.3334 27.3332 44.1334 27.3332 42.6667V29.3334C27.3332 27.8667 26.1332 26.6667 24.6665 26.6667H22.6665ZM23.9998 38.6667C23.9998 39.2134 23.5465 39.6667 22.9998 39.6667C22.4532 39.6667 21.9998 39.2134 21.9998 38.6667V33.3334C21.9998 32.7867 22.4532 32.3334 22.9998 32.3334C23.5465 32.3334 23.9998 32.7867 23.9998 33.3334V38.6667Z" fill="white" />
                <path d="M41.3335 18.6667H33.3335C31.1202 18.6667 29.3335 20.4534 29.3335 22.6667V41.3334C29.3335 43.5467 31.1202 45.3334 33.3335 45.3334H34.0002C34.3735 45.3334 34.6668 45.04 34.6668 44.6667V40C34.6668 39.2667 35.2668 38.6667 36.0002 38.6667H38.6668C39.4002 38.6667 40.0002 39.2667 40.0002 40V44.6667C40.0002 45.04 40.2935 45.3334 40.6668 45.3334H41.3335C43.5468 45.3334 45.3335 43.5467 45.3335 41.3334V22.6667C45.3335 20.4534 43.5468 18.6667 41.3335 18.6667ZM35.6668 33.3334C35.6668 33.88 35.2135 34.3334 34.6668 34.3334C34.1202 34.3334 33.6668 33.88 33.6668 33.3334V26.6667C33.6668 26.12 34.1202 25.6667 34.6668 25.6667C35.2135 25.6667 35.6668 26.12 35.6668 26.6667V33.3334ZM41.0002 33.3334C41.0002 33.88 40.5468 34.3334 40.0002 34.3334C39.4535 34.3334 39.0002 33.88 39.0002 33.3334V26.6667C39.0002 26.12 39.4535 25.6667 40.0002 25.6667C40.5468 25.6667 41.0002 26.12 41.0002 26.6667V33.3334Z" fill="white" />
                <path d="M40 48C40 43.5817 43.5817 40 48 40H56C60.4183 40 64 43.5817 64 48V56C64 60.4183 60.4183 64 56 64H48C43.5817 64 40 60.4183 40 56V48Z" fill="#1D555C" />
                <rect width="16" height="16" transform="translate(44 44)" fill="#1D555C" />
                <path d="M51.6668 58C55.1646 58 58.0002 55.1644 58.0002 51.6666C58.0002 48.1688 55.1646 45.3333 51.6668 45.3333C48.169 45.3333 45.3335 48.1688 45.3335 51.6666C45.3335 55.1644 48.169 58 51.6668 58Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M58.6668 58.6666L57.3335 57.3333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            <h3>10k+ Verified Stays</h3>
            <p>Explore ready-to-occupy hostels, PGs, and flats in prime locations.</p>
          </div>
        </div>
      </div>



      <div className="img-container">
        <img src={Home1} alt="Home" />
      </div>
      <div className='experience'>
          <div className='review'>
            <div>
              <img src={profile} />
            </div>
            <div className='detail1'>
              <h2>Oni Boys Hostel</h2>
              <p>Stayer's Experience<br />Moved with
                <img src={Logotype1} />
              </p>
            </div>
          </div>
          <div className='comment'>
            <div>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="#000929" />
                <path d="M10.2711 20.952L12.1271 13.848L12.6711 16.248C11.9245 16.248 11.2951 16.0133 10.7831 15.544C10.2925 15.0747 10.0471 14.4453 10.0471 13.656C10.0471 12.8667 10.2925 12.2373 10.7831 11.768C11.2951 11.2773 11.9138 11.032 12.6391 11.032C13.3858 11.032 14.0045 11.2773 14.4951 11.768C14.9858 12.2587 15.2311 12.888 15.2311 13.656C15.2311 13.8907 15.2098 14.136 15.1671 14.392C15.1458 14.6267 15.0818 14.904 14.9751 15.224C14.8898 15.5227 14.7405 15.9173 14.5271 16.408L12.8631 20.952H10.2711ZM17.0551 20.952L18.9111 13.848L19.4551 16.248C18.7085 16.248 18.0791 16.0133 17.5671 15.544C17.0765 15.0747 16.8311 14.4453 16.8311 13.656C16.8311 12.8667 17.0765 12.2373 17.5671 11.768C18.0791 11.2773 18.6978 11.032 19.4231 11.032C20.1698 11.032 20.7885 11.2773 21.2791 11.768C21.7698 12.2587 22.0151 12.888 22.0151 13.656C22.0151 13.8907 21.9938 14.136 21.9511 14.392C21.9298 14.6267 21.8658 14.904 21.7591 15.224C21.6738 15.5227 21.5245 15.9173 21.3111 16.408L19.6471 20.952H17.0551Z" fill="white" />
              </svg>

            </div>
            <div className='comment12'>
              <p>I loved how smooth the move was, and I finally got the hostel I wanted!</p>
            </div>
          </div>
          <div className='data1'>
            <div>
              <h2>₹ 1,500</h2>
              <p>Saved up to</p>
            </div>
            <div>
              <h2>20 min</h2>
              <p>Booking Process Time</p>
            </div>
          </div>
        </div> 
        
         <div className='triangle'></div> 
      </div>
      
    
      <div className='rating'>
          <div className='rating1'>
            <h3>Excellent</h3>
            <img src={trustpilot} />
            <h5>Trustpilot</h5>
          </div>
          <div className='rating2'>⭐⭐⭐⭐⭐</div>
          <div className='rating3'>
            <p>From 3,264 reviews</p>
          </div>
        </div> 
    
      <div className="whatapp-logo">
        <img src={whatapp} alt="WhatsApp Logo" className="logo" />
      </div>
    </section>
  


       {/* <section className="home-container" id='Home'>
        <div className='home'>
          <div className="home1">
            <h1>Find Trusted <br /> Hostels,PGs & Flats <br /> in Your City!</h1>
            <p>Safe | Verified | Hassle-Free Booking</p>
          </div>

           <div className="home2">
       <div className="home21">
        <button
           className={activeTab === "stay" ? "active" : ""}
           onClick={() => setActiveTab("stay")}
         >
           Find a Stay
         </button>
         <button
          className={activeTab === "property" ? "active" : ""}
          onClick={() => setActiveTab("property")}
        >
          List Your Property
        </button>
       </div>

       {activeTab === "stay" && (
         <div className="home22">
          <div className='text2'>
           <h2><strong>Struggling to find a stay ?</strong></h2>
           <p>Discover Verified Hostels, PGs & Flats Near You !</p>
           </div>
           <div >
            <Button/>
           </div>
         </div>
       )}

       {activeTab === "property" && (
         <div className="home22">
          <div>
           <h2><strong>Want More Tenants for Your Stay?</strong></h2>
           <p>List your Hostel, PG, or Flat & Get Verified Tenants!</p>
           </div>
           <button className="list-btn">List Your Property</button>
         </div>
       )}
     </div>


          <div className="home3">
            <div>
              <svg width="64" height="55" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="31.5" fill="white" stroke="#8BAAA9" />
                <circle cx="32" cy="32" r="28" fill="#8BAAA9" />
                <path d="M39.3734 26.36C39.2801 26.3467 39.1867 26.3467 39.0934 26.36C37.0267 26.2934 35.3867 24.6 35.3867 22.52C35.3867 20.4 37.1067 18.6667 39.2401 18.6667C41.3601 18.6667 43.0934 20.3867 43.0934 22.52C43.0801 24.6 41.4401 26.2934 39.3734 26.36Z" fill="white" />
                <path d="M43.72 35.6C42.2266 36.6 40.1333 36.9733 38.2 36.72C38.7066 35.6267 38.9733 34.4133 38.9866 33.1333C38.9866 31.8 38.6933 30.5333 38.1333 29.4267C40.1066 29.16 42.2 29.5333 43.7066 30.5333C45.8133 31.92 45.8133 34.2 43.72 35.6Z" fill="white" />
                <path d="M24.5865 26.36C24.6799 26.3467 24.7732 26.3467 24.8665 26.36C26.9332 26.2934 28.5732 24.6 28.5732 22.52C28.5732 20.3867 26.8532 18.6667 24.7199 18.6667C22.5999 18.6667 20.8799 20.3867 20.8799 22.52C20.8799 24.6 22.5199 26.2934 24.5865 26.36Z" fill="white" />
                <path d="M24.7335 33.1333C24.7335 34.4267 25.0135 35.6533 25.5202 36.76C23.6402 36.96 21.6802 36.56 20.2402 35.6133C18.1335 34.2133 18.1335 31.9333 20.2402 30.5333C21.6668 29.5733 23.6802 29.1867 25.5735 29.4C25.0268 30.52 24.7335 31.7867 24.7335 33.1333Z" fill="white" />
                <path d="M32.1599 37.16C32.0532 37.1467 31.9332 37.1467 31.8132 37.16C29.3599 37.08 27.3999 35.0667 27.3999 32.5867C27.4132 30.0533 29.4532 28 31.9999 28C34.5332 28 36.5866 30.0533 36.5866 32.5867C36.5732 35.0667 34.6266 37.08 32.1599 37.16Z" fill="white" />
                <path d="M27.8269 39.92C25.8136 41.2667 25.8136 43.48 27.8269 44.8134C30.1202 46.3467 33.8802 46.3467 36.1736 44.8134C38.1869 43.4667 38.1869 41.2534 36.1736 39.92C33.8936 38.3867 30.1336 38.3867 27.8269 39.92Z" fill="white" />
                <path d="M40 48C40 43.5817 43.5817 40 48 40H56C60.4183 40 64 43.5817 64 48V56C64 60.4183 60.4183 64 56 64H48C43.5817 64 40 60.4183 40 56V48Z" fill="#1D555C" />
                <rect width="16" height="16" transform="translate(44 44)" fill="#1D555C" />
                <path d="M57.1933 53.9533C55.8199 55.32 53.8533 55.74 52.1266 55.2L48.9866 58.3333C48.7599 58.5667 48.3133 58.7067 47.9933 58.66L46.5399 58.46C46.0599 58.3933 45.6133 57.94 45.5399 57.46L45.3399 56.0067C45.2933 55.6867 45.4466 55.24 45.6666 55.0133L48.7999 51.88C48.2666 50.1467 48.6799 48.18 50.0533 46.8133C52.0199 44.8467 55.2133 44.8467 57.1866 46.8133C59.1599 48.78 59.1599 51.9867 57.1933 53.9533Z" fill="white" />
                <path d="M48.5933 55.66L50.1266 57.1933" stroke="#1D555C" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M53.6665 51.3333C54.2188 51.3333 54.6665 50.8856 54.6665 50.3333C54.6665 49.781 54.2188 49.3333 53.6665 49.3333C53.1142 49.3333 52.6665 49.781 52.6665 50.3333C52.6665 50.8856 53.1142 51.3333 53.6665 51.3333Z" fill="#1D555C" stroke="#1D555C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <h3>Trusted by 50K+ Happy Stayers</h3>
              <p>believe in our service</p>
            </div>

            <div>
              <svg width="64" height="55" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="31.5" fill="white" stroke="#8BAAA9" />
                <circle cx="32" cy="32" r="28" fill="#8BAAA9" />
                <path d="M22.6665 26.6667C20.4532 26.6667 18.6665 28.4534 18.6665 30.6667V41.3334C18.6665 43.5467 20.4532 45.3334 22.6665 45.3334H24.6665C26.1332 45.3334 27.3332 44.1334 27.3332 42.6667V29.3334C27.3332 27.8667 26.1332 26.6667 24.6665 26.6667H22.6665ZM23.9998 38.6667C23.9998 39.2134 23.5465 39.6667 22.9998 39.6667C22.4532 39.6667 21.9998 39.2134 21.9998 38.6667V33.3334C21.9998 32.7867 22.4532 32.3334 22.9998 32.3334C23.5465 32.3334 23.9998 32.7867 23.9998 33.3334V38.6667Z" fill="white" />
                <path d="M41.3335 18.6667H33.3335C31.1202 18.6667 29.3335 20.4534 29.3335 22.6667V41.3334C29.3335 43.5467 31.1202 45.3334 33.3335 45.3334H34.0002C34.3735 45.3334 34.6668 45.04 34.6668 44.6667V40C34.6668 39.2667 35.2668 38.6667 36.0002 38.6667H38.6668C39.4002 38.6667 40.0002 39.2667 40.0002 40V44.6667C40.0002 45.04 40.2935 45.3334 40.6668 45.3334H41.3335C43.5468 45.3334 45.3335 43.5467 45.3335 41.3334V22.6667C45.3335 20.4534 43.5468 18.6667 41.3335 18.6667ZM35.6668 33.3334C35.6668 33.88 35.2135 34.3334 34.6668 34.3334C34.1202 34.3334 33.6668 33.88 33.6668 33.3334V26.6667C33.6668 26.12 34.1202 25.6667 34.6668 25.6667C35.2135 25.6667 35.6668 26.12 35.6668 26.6667V33.3334ZM41.0002 33.3334C41.0002 33.88 40.5468 34.3334 40.0002 34.3334C39.4535 34.3334 39.0002 33.88 39.0002 33.3334V26.6667C39.0002 26.12 39.4535 25.6667 40.0002 25.6667C40.5468 25.6667 41.0002 26.12 41.0002 26.6667V33.3334Z" fill="white" />
                <path d="M40 48C40 43.5817 43.5817 40 48 40H56C60.4183 40 64 43.5817 64 48V56C64 60.4183 60.4183 64 56 64H48C43.5817 64 40 60.4183 40 56V48Z" fill="#1D555C" />
                <rect width="16" height="16" transform="translate(44 44)" fill="#1D555C" />
                <path d="M51.6668 58C55.1646 58 58.0002 55.1644 58.0002 51.6666C58.0002 48.1688 55.1646 45.3333 51.6668 45.3333C48.169 45.3333 45.3335 48.1688 45.3335 51.6666C45.3335 55.1644 48.169 58 51.6668 58Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M58.6668 58.6666L57.3335 57.3333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <h3>10k+  verified Stays</h3>
              <p>Explore ready-to-occupy hostels,PGs,and flats in prime locations.</p>
            </div>
          </div>
        </div>



<div>
        <div className='img-container'>
          <img src={Home1} />
        </div>

         <div className='experience'>
          <div className='review'>
            <div>
              <img src={profile} />
            </div>
            <div className='detail1'>
              <h2>Oni Boys Hostel</h2>
              <p>Stayer's Experience<br />Moved with
                <img src={Logotype1} />
              </p>
            </div>
          </div>
          <div className='comment'>
            <div>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="#000929" />
                <path d="M10.2711 20.952L12.1271 13.848L12.6711 16.248C11.9245 16.248 11.2951 16.0133 10.7831 15.544C10.2925 15.0747 10.0471 14.4453 10.0471 13.656C10.0471 12.8667 10.2925 12.2373 10.7831 11.768C11.2951 11.2773 11.9138 11.032 12.6391 11.032C13.3858 11.032 14.0045 11.2773 14.4951 11.768C14.9858 12.2587 15.2311 12.888 15.2311 13.656C15.2311 13.8907 15.2098 14.136 15.1671 14.392C15.1458 14.6267 15.0818 14.904 14.9751 15.224C14.8898 15.5227 14.7405 15.9173 14.5271 16.408L12.8631 20.952H10.2711ZM17.0551 20.952L18.9111 13.848L19.4551 16.248C18.7085 16.248 18.0791 16.0133 17.5671 15.544C17.0765 15.0747 16.8311 14.4453 16.8311 13.656C16.8311 12.8667 17.0765 12.2373 17.5671 11.768C18.0791 11.2773 18.6978 11.032 19.4231 11.032C20.1698 11.032 20.7885 11.2773 21.2791 11.768C21.7698 12.2587 22.0151 12.888 22.0151 13.656C22.0151 13.8907 21.9938 14.136 21.9511 14.392C21.9298 14.6267 21.8658 14.904 21.7591 15.224C21.6738 15.5227 21.5245 15.9173 21.3111 16.408L19.6471 20.952H17.0551Z" fill="white" />
              </svg>

            </div>
            <div className='comment12'>
              <p>I loved how smooth the move was, and I finally got the hostel I wanted!</p>
            </div>
          </div>
          <div className='data1'>
            <div>
              <h2>₹ 1,500</h2>
              <p>Saved up to</p>
            </div>
            <div>
              <h2>20 min</h2>
              <p>Booking Process Time</p>
            </div>
          </div>
        </div> 
        
         <div className='triangle'></div> 

        <div className='whatapp-logo'>
          <img src={whatapp} className='logo' />
        </div>
        </div>

         <div className='rating'>
          <div className='rating1'>
            <h3>Excellent</h3>
            <img src={trustpilot} />
            <h5>Trustpilot</h5>
          </div>
          <div className='rating2'>⭐⭐⭐⭐⭐</div>
          <div className='rating3'>
            <p>From 3,264 reviews</p>
          </div>
        </div> 
      </section>  */}
       <section id='Feature'>
        <Feature />
      </section>

      <section id='Faq'>
        <Faq />
      </section>

      <section id='Faq31'>
        <Faq31 />
      </section>

      <section id='About'>
        <About />
      </section>

      <section id='Footer'>
        <Footer />
      </section>
    </>
  )
}

export default Home; 