import React from 'react';
import './AboutUs.css'; 
import about from './about.jpg'// Custom CSS for styling the page
import Pagenavbar from './navbar';

function AboutUs() {
  return (
    <>
    <Pagenavbar/>
    <div className="container">
      <div className="grid">
        <div className="content-8">
          <h1>About Us</h1>
          <p className='text-white'>
            Welcome to <strong>Edu</strong>, the premier online education platform designed to help students and professionals around the world achieve their learning goals.
          </p>
          <p className='text-white'>
            We provide a wide range of educational resources, including interactive courses, video tutorials, downloadable materials, and personalized study plans. Our goal is to create a positive and engaging learning environment that empowers students to unlock their full potential.
          </p>
          <h2>Our Mission</h2>
          <p className='text-white'>
            Our mission is to democratize education by making high-quality learning accessible to everyone, regardless of location or background. We believe that education is the key to unlocking opportunities and transforming lives, and we are dedicated to delivering top-notch content that inspires and motivates learners at all stages of their educational journey.
          </p>
          <h2>What We Offer</h2>
          <ul>
            <li>Interactive Online Courses on a Variety of Topics</li>
            <li>Live Sessions and Webinars with Experts</li>
            <li>Access to a Network of Like-minded Learners and Mentors</li>
            <li>Customizable Study Plans and Progress Tracking</li>
            <li>Regularly Updated Learning Materials and Resources</li>
          </ul>
          <h2>Why Choose Edu?</h2>
          <p className='text-black'>
          Edu is designed with the needs of today’s learners in mind. Whether you are a student looking to excel in your studies, a professional seeking to upskill, or someone exploring a new field of interest, we offer something for everyone.
          </p>
          <p className='text-black'>
            Our platform is easy to use, accessible on multiple devices, and backed by a community of passionate educators and learners. With Edu, your learning experience is tailored to your pace, goals, and preferences.
          </p>
          <p className='text-black'>
            Join thousands of students who are already using Edu to reach their educational goals. Start your learning journey today!
          </p>
        </div>

        <div className="content-4">
            <img src={about} alt="" className="img-fluid"/>
          <h3 className='mt-2 ab'>Our Values</h3>
          <p className='text-white'>
            At Edu, we believe in:
          </p>
          <ul>
            <li>Integrity</li>
            <li>Innovation</li>
            <li>Collaboration</li>
            <li>Continuous Learning</li>
            <li>Accessibility</li>
          </ul>
          <h3 className='ab'>Contact Info</h3>
          <p className='text-white'>
            Email: support@As.com
          </p>
          <p className='text-white'>
            Phone: 123-456-7890
          </p>
        </div>
      </div>
      <footer>
        <div className="footer-container">
            
            <div className="footer-middle">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="/courses">Courses</a></li>
                    <li><a href="/aboutus">About Us</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/services">services</a></li>
               
                </ul>
            </div>
            <div className="footer-right">
                <h4>Contact Us</h4>
                <p>Email: support@yourapp.com</p>
                <p>Phone: +123-456-7890</p>
                <p>Follow us:</p>
                <div className="social-icons">
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">LinkedIn</a>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; All rights reserved.</p>
        </div>
    </footer>
    </div>
    </>
    
  );
}

export default AboutUs;
