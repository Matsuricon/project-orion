const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Define routes for each page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html');
});

app.get('/conops/logistics', (req, res) => {
  res.sendFile(__dirname + '/public/conops/logistics.html');
});

app.get('/conops/accesssvcs', (req, res) => {
  res.sendFile(__dirname + '/public/conops/accesssvcs.html');
});

app.get('/conops/lostandfound', (req, res) => {
  res.sendFile(__dirname + '/public/conops/lostandfound.html');
});

app.get('/conops/radios', (req, res) => {
  res.sendFile(__dirname + '/public/conops/radios.html');
});

app.get('/pubsafe/pubsafe', (req, res) => {
  res.sendFile(__dirname + '/public/pubsafe/pubsafe.html');
});

app.get('/tech/tech', (req, res) => {
  res.sendFile(__dirname + '/public/tech/tech.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

app.get('/request', (req, res) => {
  res.sendFile(__dirname + '/public/request.html');
});

app.get('/tech/requesthelp', (req, res) => {
    res.sendFile(__dirname + '/public/tech/requesthelp.html');
});

// Return 404 if page not found
app.all('*', (req, res) => {
    res.status(404).sendfile(__dirname + '/public/404.html');
  });

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});