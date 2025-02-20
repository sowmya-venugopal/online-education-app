const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const mysql = require('mysql2');
const cors = require('cors');

// Initialize Express app
const app = express();
const port = 5174;

// Middleware
app.use(bodyParser.json()); // To parse JSON request bodies
app.use(cors()); // To handle CORS issues between frontend and backend

// Create MySQL connection pool
const db = mysql.createPool({
  host: 'localhost', // Replace with your MySQL host
  user: 'root', // Replace with your MySQL username
  password: '', // Replace with your MySQL password
  database: 'userDB', // Replace with your database name
});

// API route to handle user registration
app.post('/aregister', (req, res) => {
  const { username, email, password } = req.body;

  // Validate the input
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Username, email, and password are required' });
  }

  // Check if user already exists based on email or username
  db.query('SELECT * FROM users WHERE email = ? OR username = ?', [email, username], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Server error' });
    }

    if (results.length > 0) {
      return res.status(400).json({ message: 'Username or email is already taken' });
    }

    // Hash the password using bcrypt
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        return res.status(500).json({ message: 'Error hashing password' });
      }

      // Insert the new user into the database
      const newUser = { username, email, password: hashedPassword };
      db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [newUser.username, newUser.email, newUser.password], (err, results) => {
        if (err) {
          return res.status(500).json({ message: 'Error saving user to database' });
        }

        // Send success message
        return res.status(201).json({ message: 'User registered successfully' });
      });
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
