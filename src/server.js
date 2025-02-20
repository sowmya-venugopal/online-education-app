
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 7900;

// Middleware
app.use(cors());
app.use(express.json());  // Built-in Express middleware for parsing JSON

// Create a connection to MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: 'Aso1901*', 
  database: 'asdb' 
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// API route to handle form submission
app.post('/submitForm', (req, res) => {
  const {
    name, email, phone, address, city, state, zipCode, country, gender, dob,
    nationality, maritalStatus, education, skill, CGPA, yearofpassing,
    arrears, course, additionalInfo
  } = req.body;
const query = `
    INSERT INTO applicationform (name, email, phone, address, city, state, zipCode, country, gender, dob, nationality, maritalStatus, education, skill, CGPA, yearofpassing,
    arrears, course, additionalInfo)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(query, [
    name, email, phone, address, city, state, zipCode, country, gender, dob,
    nationality, maritalStatus, education, skill, CGPA, yearofpassing,
    arrears, course, additionalInfo
  ], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: 'Form submitted successfully!', data: results });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
