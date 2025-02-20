import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';

import './Loginpage.css';

function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    username: '',
    password: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);  // Add this state


 // Handle form input changes
 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value
  });
};

// Validate input fields
const validate = () => {
  const newErrors = {};
  if (!formData.username) {
    newErrors.username = 'Username is required';
  }
  if (!formData.password) {
    newErrors.password = 'Password is required';
  } else if (formData.password.length < 6) {
    newErrors.password = 'Password must be at least 6 characters long';
  }
  return newErrors;
};

// Handle form submission
const handleSubmit = (e) => {
  e.preventDefault();
  const validationErrors = validate();
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length === 0) {
    setIsSubmitted(true);
    setLoading(true);  // Start loading

    // Send login request to the backend
    fetch('http://localhost:5174/alogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false); // Stop loading

        if (data.token) {
          console.log('Login successful!', data);
          localStorage.setItem('token', data.token);  // Store the JWT token
          alert('Login successful!');
        } else {
          setIsSubmitted(false);
          alert("Invalid username or password");  // Show error message from backend
        }
      })
      .catch((error) => {
        setLoading(false);  // Stop loading on error
        console.error('Error:', error);
        setIsSubmitted(false);
        alert('An error occurred while logging in. Please try again later.');
      });
  } else {
    setIsSubmitted(false);
  }
};

  return (
    <Container className=" justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Row className="w-100">
        <Col className='margin-t'>
        <div className="bg-image">
          <div className="p-4 margin-t">
            <h2 className="text-center mb-4 ln">Login</h2>
            
            
           

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formUsername" id="name">
                <Form.Label className="ln">Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter username"
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid" >
                  {errors.username}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formPassword" className="mt-3">
                <Form.Label className="ln">Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
              <div className="text-end mt-3">
              <a href="/forgot-password" className='fp ln-b'>Forgot Password?</a>
            </div>

              <Button  type="submit" style={{backgroundColor:"black"}}className="w-100 mt-4">
                Login
              </Button>
              <div className='d-flex'>
                <p className="m-3 retr">Don't have an account    </p> 
                    <a href="/registerpage" className="mt-3 fr ln-b">Register</a>
        
              </div>
            </Form>

           
          </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
