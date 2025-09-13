


const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index1.html'));
});


const listings = require('./data/listings.json');

let bookings = require('./data/bookings.json');

let checkings = require('./data/checkings.json');


let users = [
  { username: "user", password: "1234" }
];




app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (users.find(u => u.username === username)) {
    return res.status(409).json({ message: "User already exists" });
  }
  users.push({ username, password });
  res.json({ success: true });
});


app.post('/api/signup', (req, res) => {
  const { username, email, password } = req.body;

  const userExists = users.find(user => user.username === username);
  if (userExists) {
    return res.status(409).json({ message: "User already exists" });
  }
  users.push({ username,email, password });
  res.json({ success: true });
});


app.post('/api/register', (req, res) => {
  const { username, email, password } = req.body;
  if (users.find(u => u.username === username)) {
    return res.status(409).json({ message: "User already exists" });
  }
  users.push({ username,email, password });
  res.json({ success: true });
});


app.get('/api/listings', (req, res) => {
  res.json(listings);
});



app.post("/api/check", (req, res) => {
  const { checkin, checkout, adults, children } = req.body;

  if (!checkin || !checkout || !adults || !children) {
    return res.status(400).json({ error: "Missing checking details" });
  }

  checkings.push({ checkin, checkout, adults, children });
  res.json({ message: "checking confirmed" });
});


app.post('/api/book', (req, res) => {
  const { username, date } = req.body;
  res.json({ message: `Booking confirmed for ${username} on ${date} ` });
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});





