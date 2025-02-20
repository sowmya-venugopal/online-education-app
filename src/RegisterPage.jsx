import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';

import './Loginpage.css';

function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email:'',
    password: ''
  });

  const [errors, setErrors] = useState({
    username: '',
    email:'',
    password: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = 'Username is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);

      // Send data to backend
      fetch('http://localhost:5174/aregister', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.token) {
            console.log('Sign up successful!', data);
            alert('Sign up successful!');
            // Optionally, store the token in localStorage or sessionStorage
            localStorage.setItem('token', data.token);
            window.location.href = '/login'; // Redirect to login page
          } else {
            setIsSubmitted(false);
            alert("Invalid username or password");
          }
        })
        .catch((error) => {
          setIsSubmitted(false);
          console.error('Error:', error);
          alert('An error occurred while signing up. Please try again later.');
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
            <h2 className="text-center mb-4 ln">Sign Up</h2>
            
            {/* Display success message after successful login */}
            {isSubmitted && <Alert variant="success">Signed Up successful!</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formUsername">
                <Form.Label className="ln">Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter username"
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formUsername">
                <Form.Label className="ln">Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
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
              

              <Button  type="submit" style={{backgroundColor:"black"}}className="w-100 mt-4">
              Sign Up
              </Button>
              <div className='d-flex'>
                <p className="m-3 retr">Already have an account    </p> 
                    <a href="/loginpage" className="mt-3 fr ln-b">Login</a>
        
              </div>
            </Form>

           
          </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterPage;
