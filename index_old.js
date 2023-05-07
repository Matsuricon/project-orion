const express = require('express');
const path = require('path');
const app = express();

// Serve the static files from the public directory
//app.use(express.static(path.join(__dirname)));

// Serve the index.html file at the root route
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve the images from the images directory
app.get('/images/:filename', function(req, res) {
  res.sendFile(path.join(__dirname, 'images', req.params.filename));
});

// Serve the CSS file from the css directory
app.get('/css/bootstrap-4.4.1.css', function(req, res) {
  res.sendFile(path.join(__dirname, 'css', 'bootstrap-4.4.1.css'));
});

// Redirects

  app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
  });
  
  app.get('/conops/logistics', (req, res) => {
    res.sendFile(path.join(__dirname, 'conops', 'logistics.html'));
  });
  
  app.get('/conops/accesssvcs', (req, res) => {
    res.sendFile(path.join(__dirname, 'conops', 'accesssvcs.html'));
  });
  
  app.get('/conops/lostandfound', (req, res) => {
    res.sendFile(path.join(__dirname, 'conops', 'lostandfound.html'));
  });
  
  app.get('/conops/radios', (req, res) => {
    res.sendFile(path.join(__dirname, 'conops', 'radios.html'));
  });
  
  app.get('/pubsafe/pubsafe', (req, res) => {
    res.sendFile(path.join(__dirname, 'pubsafe', 'pubsafe.html'));
  });
  
  app.get('/tech/tech', (req, res) => {
    res.sendFile(path.join(__dirname, 'tech', 'tech.html'));
  });
  
  app.get('/tech/requesthelp', (req, res) => {
    res.sendFile(path.join(__dirname, 'tech', 'requesthelp.html'));
  });

// Serve the JS files

app.get('/js/:filename', function(req, res) {
    res.sendFile(path.join(__dirname, 'js', req.params.filename));
  });

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});