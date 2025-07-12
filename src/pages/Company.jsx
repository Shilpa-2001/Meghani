import React from 'react'
import Nav from './Nav';
import About from './About';
import Footer from '../components/Footer';
import company from './../assets/images/company.jpg';
import team1 from './../assets/images/team-1.png';
import team2 from './../assets/images/team-2.png';
import team3 from './../assets/images/team-3.png';
import team4 from './../assets/images/team-4.png';
import team5 from './../assets/images/team-5.png';


function Company() {
  
  return (
    <div>
         

         <div className='Company-container'>
         <Nav/>
            <div className='company-1'>
             <div className='company-11'>
              <img src={company} className='img-home'/>
             
             <div className='company-12'>
                <h2>Meet the Minds Behind Meghani Homex</h2>
                <p>Our mission is to provide a seamless, comfortable, and secure living experience for students and working professionals across India.</p>
             </div>
             </div>
            </div>
            <div className='company-2'> 
              <div className='company-21'>
                <p className='p1'>MEET OUR <span> BEST LEADERSHIP</span></p>
                <p className='p2'>Guiding Meghani Homex with vision and expertise, our leadership ensures innovation, growth, and excellence in everything we do.</p>
                <p className='p3'></p>
              </div>
              <div className="team-container">
<div class="frame">
  <img src = {team1} alt="Team Member" class="team-image" />
  <h3>Abhishek Mahto</h3>
  <p>Founder & CEO</p>
</div>

<div class="frame">
  <img src = {team2} alt="Team Member" class="team-image" />
  <h3>Abhishek Ayush</h3>
  <p>Chief Mentor & Advisor</p>
</div>

            </div>
            <div className='company-3'>
            <div className='company-21'>
                <p className='p1'>MEET OUR <span> BEST TEAM</span></p>
                <p className='p2'> The backbone of Meghani Homex is our talented team—a skilled React Developer, an expert Backend Developer, and a dynamic Full Stack Developer—working together to create a seamless and powerful platform."</p>
                <p className='p4'></p>
              </div>
              <div className='company-31'>
              <div class="frame">
  <img src = {team3} alt="Team Member" class="team-image" />
  <h3>Shilpa Tirkey</h3>
  <p>React Developer</p>
</div>

<div class="frame">
  <img src = {team4} alt="Team Member" class="team-image" />
  <h3>Nafis Khan</h3>
  <p>Backend Developer</p>
</div>

<div class="frame">
  <img src = {team5} alt="Team Member" class="team-image" />
  <h3>Md Kazim</h3>
  <p>Full Stack Developer</p>
</div>
              </div>

            </div>
            </div>
            <About/>
            {/* <Footer/> */}
         </div>

    </div>
  )
}

export default Company
