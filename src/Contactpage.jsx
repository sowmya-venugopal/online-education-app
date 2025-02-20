import React, { useState } from 'react';
import './Contactpage.css'; // Importing custom CSS for styling
import Pagenavbar from './navbar';

function Contact() {
  // State to hold form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }
    alert('Thank you for contacting us! We will get back to you soon.');
    // Reset form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
    <Pagenavbar/>
    <div className="contact-container">
      <div className="contact-form">
        <h1 className='ab'>Contact Us</h1>
        <p>If you have any questions or need further assistance, feel free to reach out to us!</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}


              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here"
            />
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Contact;
