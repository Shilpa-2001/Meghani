import React from "react";
import './App.css';
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Faqs from "./pages/Faqs";
import Login from "./pages/Login";
import Listproperty from "./pages/Listproperty";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Company from "./pages/Company"
import Experience from "./components/Experience";





const App = () => {

      return (
            <BrowserRouter>
                  <Routes>
                        <Route path="/" element={<Nav />} />
                         <Route index element={<Home />} />
                        <Route path="Faqs" element={< Faqs />} />
                        <Route path="Contact" element={<Contact />} />
                        <Route path="Login" element={<Login />} />
                        <Route path="Listproperty" element={<Listproperty />} /> 
                  </Routes>
            </BrowserRouter>
      
         

      );
};

export default App;

