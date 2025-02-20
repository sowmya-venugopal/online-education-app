import React, { useEffect, useState } from 'react';
import Pagenavbar from './navbar.jsx';
import Home from './Homepage.jsx';
import AboutUs from './AboutUs.jsx';
import './App.css';
import Contact from './contactpage.jsx';
import Services from './ServicesPage.jsx';
import Images from './Imagespage.jsx';
import LoginPage from './LoginPage.jsx';
import RegisterPage from './RegisterPage.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Courses from './CoursesPage.jsx';
import ApplicationForm from './Allcourse.jsx';


function App(){
  return(
    
    <>
    <Router>
      <Pagenavbar/>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/images" element={<Images />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/registerpage" element={<RegisterPage />} />
          <Route path="/html-course" element={<ApplicationForm />} />
        </Routes>
      </div>
    </Router>





     
    </>
    
   
  );
};


export default App;