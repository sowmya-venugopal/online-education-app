import React from 'react';
import './Servicepage.css';  // Importing custom CSS for styling
import Pagenavbar from './navbar';

function Services() {
  return (
    <>
    <Pagenavbar/>
    <div className="services-container">
      <div className="services-header">
        <h1 className='ab'>Our Services</h1>
        <p>We offer a wide range of services to help you achieve your educational goals.</p>
      </div>

      <div className="services-list">
        <div className="service-item">
          <h2>Interactive Online Courses</h2>
          <p>Engage with expertly designed courses covering a wide range of subjects and skill levels.</p>
        </div>

        <div className="service-item">
          <h2>Live Sessions with Experts</h2>
          <p>Join live sessions with industry experts and instructors to enhance your learning experience.</p>
        </div>

        <div className="service-item">
          <h2>Personalized Study Plans</h2>
          <p>Get custom-tailored study plans to match your learning goals and pace.</p>
        </div>

        <div className="service-item">
          <h2>Interactive Quizzes & Assignments</h2>
          <p>Test your knowledge with quizzes and assignments designed to help reinforce your learning.</p>
        </div>
      </div>

      <div className="reviews-section">
        <h2>What Our Learners Are Saying</h2>
        <div className="reviews">
          <div className="review-item">
            <p>"As interactive courses are fantastic! I learned so much, and the content was engaging and thorough."</p>
            <span>- John D., Web Developer</span>
          </div>
          <div className="review-item">
            <p>"The live sessions with experts were really helpful in clearing up concepts that I had trouble with. Highly recommend!"</p>
            <span>- Sarah L., Data Scientist</span>
          </div>
          <div className="review-item">
            <p>"The personalized study plans helped me stay on track with my learning goals. The progress tracker is super useful."</p>
            <span>- Michael Aso, Student</span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Services;
