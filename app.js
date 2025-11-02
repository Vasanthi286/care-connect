// app.js - Main application entry point
require('dotenv').config({ path: './backend/.env' });
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files like CSS
app.use(express.static(path.join(__dirname, 'frontend/public')));

// Serve HTML files from 'frontend/views' folder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/views', 'index.html'));
});

app.get('/request', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/views', 'request.html'));
});

app.get('/volunteer', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/views', 'volunteer.html'));
});

app.get('/viewRequest', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/views', 'viewRequest.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/views', 'login.html'));
});

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/views', 'dashboard.html'));
});

// Elder-specific routes
app.get('/elder-login', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/views', 'elder-login.html'));
});

app.get('/elder-register', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/views', 'elder-register.html'));
});

app.get('/elder-dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/views', 'elder-dashboard.html'));
});

app.get('/volunteer-dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/views', 'volunteer-dashboard.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Care Connect server is running at http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
