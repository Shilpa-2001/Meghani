import Nav from "./Nav";
import hostel1 from "./../assets/images/hostel1.png"
import whatapp from "./../assets/images/whatapp.png"
 import Listproperty1 from "../pages/Listproperty1";
import {Outlet, Link ,useLocation,useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
  
  
  const Listproperty = () => {


  return (
    <>
      <Nav/>
      <div className="list1">
        <div className="list-11">
          <div className="list-12">
            <img src={hostel1} />
          </div>
          <div className="list-13">
            <h2>List Your Property with Meghani Homex</h2>
            <p>Join our trusted network and get verified tenants hassle-free. List your PG, hostel, or flat in just a few minutes!</p>
          </div>
          <div className="list-14">
            <Link to = "/Listproperty1"  className='links'>Get started</Link> 
          </div>
          <div className='whatapp-logo1'>
            <img src={whatapp} className="logo"/>
          </div>
        </div>
      </div>

    </>
  )
}
export default Listproperty;