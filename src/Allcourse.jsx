import React, { useState } from 'react';
import './App.css';

import './Allcourse.css';
import axios from 'axios';  // Add this line


const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    gender: '',
    dob: '',
    nationality: '',
    maritalStatus: '',
    education: '',
    skill: '',
    CGPA: '',
    yearofpassing: '',
    arrears: '',
    course: '',
    additionalInfo: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    gender: '',
    dob: '',
    nationality: '',
    maritalStatus: '',
    education: '',
    skill: '',
    CGPA: '',
    yearofpassing: '',
    arrears: '',
    course: '',
    additionalInfo: ''
  });

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Name
    if (!formData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    // Phone
    const phoneRegex = /^[0-9]+$/;
    if (!formData.phone) {
      newErrors.phone = 'Phone is required';
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Phone number must contain only digits';
      isValid = false;
    }

    // Zip Code
    if (!formData.zipCode) {
      newErrors.zipCode = 'Zip code is required';
      isValid = false;
    }

    // Required fields validation
    const requiredFields = [
      'address', 'city', 'state', 'country', 'gender', 'dob', 'nationality', 'maritalStatus', 'education',
      'skill', 'CGPA', 'yearofpassing','course'
    ];

    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = `${field.replace(/([A-Z])/g, ' $1').toLowerCase()} is required`;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form before submitting
    if (validateForm()) {

      axios.post('http://localhost:7900/submitForm', formData)
        .then(response => {
          alert('Form submitted successfully!');
          setFormData({
            name: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            state: '',
            zipCode: '',
            country: '',
            gender: '',
            dob: '',
            nationality: '',
            maritalStatus: '',
            education: '',
            skill: '',
           CGPA: '',
           yearofpassing: '',
           arrears: '',
           course: '',
            additionalInfo: ''
          });
        })
        .catch(error => {
          console.error('Error during form submission:', error);  // Log full error
          const errorMessage = error.response?.data?.error || error.message || 'Something went wrong!';
          alert('Error submitting form: ' + errorMessage);
        });
  }
};

  return (
    <div className="application-form">
      <h2>Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{display:"flex"}}>
            <div className='padding-px'>
            <div>
          <label className='text-white'>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{width:"290px"}}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div>
          <label className='text-white'>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div>
          <label className='text-white'>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        <div>
          <label className='text-white'>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <p className="error">{errors.address}</p>}
        </div>

        <div>
          <label className='text-white'>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          {errors.city && <p className="error">{errors.city}</p>}
        </div>

        <div>
          <label className='text-white'>State:</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
          {errors.state && <p className="error">{errors.state}</p>}
        </div>

        <div>
          <label className='text-white'>Zip Code:</label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
          />
          {errors.zipCode && <p className="error">{errors.zipCode}</p>}
        </div>

        <div>
          <label className='text-white'>Country:</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
          {errors.country && <p className="error">{errors.country}</p>}
        </div>

        <div>
          <label className='text-white'>Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            style={{backgroundColor:"white"}}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p className="error">{errors.gender}</p>}
        </div>
        

        </div>
        
        <div>
        <div>
          <label className='text-white'>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
          {errors.dob && <p className="error">{errors.dob}</p>}
        </div>

        <div>
          <label className='text-white'>Nationality:</label>
          <input
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
          />
          {errors.nationality && <p className="error">{errors.nationality}</p>}
        </div>

        <div>
          <label className='text-white'>Marital Status:</label>
          <select
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
            style={{backgroundColor:"white"}}
          >

          <option value="">Select Status</option>
           <option value="single">Single</option>
            <option value="married">Married</option>
            
          </select>
          {errors.maritalStatus && <p className="error">{errors.maritalStatus}</p>}
        </div>

        <div>
          <label className='text-white'>Education:</label>
          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
          />
          {errors.education && <p className="error">{errors.education}</p>}
        </div>

        <div>
          <label className='text-white'>skill</label>
          <input
            type="text"
            name="skill"
            value={formData.skill}
            onChange={handleChange}
          />
          {errors.skill && <p className="error">{errors.skill}</p>}
        </div>

        <div>
          <label className='text-white'>CGPA</label>
          <input
            type="decimal"
            name="CGPA"
            value={formData.CGPA}
            onChange={handleChange}
          />
          {errors.CGPA && <p className="error">{errors.CGPA}</p>}
        </div>

        <div>
          <label className='text-white'>Year of passing</label>
          <input
            type="text"
            name="yearofpassing"
            value={formData.yearofpassing}
            onChange={handleChange}
          />
          {errors.yearofpassing && <p className="error">{errors.yearofpassing}</p>}
        </div>

        <div>
          <label className='text-white'>Arrears(optional)</label>
          <input
            type="number"
            name="arrears"
            value={formData.arrears}
            onChange={handleChange}
          />

          
          
          
          

          

          

          {errors.arrears && <p className="error">{errors.arrears}</p>}
        </div>

        <div>
          <label className='text-white'>Course</label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            style={{backgroundColor:"#ffff"}}>
            <option value="">please choose a course </option>
            <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JS">JS</option>
          <option value="React">React</option>
          <option value="python">python</option>
          <option value="Data Engineering">Data Engineering</option>
          <option value="MERN">MERN</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="Dotnet">Dotnet</option>
          <option value="Devops">Devops</option>
          <option value="Data Analyst">Data Analyst</option>
          <option value="Java">Java</option>
          </select>
          {errors.course && <p className="error">{errors.course}</p>}
        </div>

        
        </div>
        </div>
        <div>
          <label className='text-white'>Additional Information(optional)</label>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
          ></textarea>
          {errors.additionalInfo && <p className="error">{errors.additionalInfo}</p>}
        </div>
        

        <div>
          <button style={{backgroundColor:"rgb(30,129,0)"}}type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;

