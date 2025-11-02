require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const requestRoutes = require("./routes/requestRoutes");
const volunteerRoutes = require("./routes/volunteerroutes");
const elderRoutes = require("./routes/elderRoutes");



const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware - must come before routes
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MongoDB connection
const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/careconnect";
mongoose.connect(mongoURI, {
  dbName: "careconnect"
}).then(() => {
  console.log("MongoDB connected");
}).catch((err) => {
  console.error("DB Error:", err);
});

// Serve static files (CSS)
app.use(express.static(path.join(__dirname, "../frontend/public")));

// Serve static HTML pages
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/views/index.html"));
});

app.get("/request", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/views/request.html"));
});

app.get("/volunteer", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/views/volunteer.html"));
});

app.get("/viewRequest", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/views/viewRequest.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/views/login.html"));
});
app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/views/dashboard.html"));
});

// Serve elder pages
app.get("/elder-login", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/views/elder-login.html"));
});

app.get("/elder-register", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/views/elder-register.html"));
});

app.get("/elder-dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/views/elder-dashboard.html"));
});
app.get("/volunteer-dashboard", (req, res) => { 
  res.sendFile(path.join(__dirname, "../frontend/views/volunteer-dashboard.html")); 
});




// ✅ Use modular routes (AFTER middleware, BEFORE listen)
app.use("/api/requests", requestRoutes);
app.use("/api/volunteers", volunteerRoutes);


app.use("/api/elders", elderRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
