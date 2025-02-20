import React from "react";
import logo from './logo.jpg';
import Container from "react-bootstrap/esm/Container";
import './Homepage.css';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Pagenavbar from "./navbar";
function Home(){
    return(
<>
<Pagenavbar/>
      <Container fluid>
        <Row> 
            <Col>
            
                
              <img src={logo} alt="" className="img-fluid"/>
              
              
              </Col>
              </Row>
              <div className="text-center brder">
                <h2 className="mt-3 text-black">Always Learn Something </h2>
              <p className="mt-3 text-black">we believe that learning should be flexible, accessible, and empowering.
                 Whether you're a student looking to enhance your skills, <br/>a professional advancing your career, or someone simply passionate about learning, our platform provides all the tools you need to succeed.</p>
              
                <p className="text-white"><b>Wide Range of Courses</b> – Explore thousands of courses in various fields, from technology and business to arts and science.</p>
                <p className="text-white"><b>Expert Instructors</b> – Learn from industry professionals and experienced educators anywhere.</p>
                <p className="text-white"><b>Flexible Learning</b> – Study at your own pace, on your own schedule, from anywhere in the world.</p>
                <p className="text-white"><b>Interactive Content</b> – Engage with interactive videos, quizzes, assignments, and live sessions.</p>
                <p className="text-white"><b>Track Your Progress</b> – Stay motivated with clear progress tracking, certificates, and milestones.</p>
              

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





              </Container>
              
            
            


            </>
    )
}

export default Home;