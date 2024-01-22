const express = require('express');
const app = express();
const port = 3000;

// Environment variable POD_NAME will be set by Kubernetes
const podName = process.env.POD_NAME || 'Unknown';

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // Assuming your HTML file is named index.html
});

// Handle the /greet endpoint
app.get('/greet', (req, res) => {
  res.send(`Hello from Node.js App! Served by Pod: ${podName}`);
});

app.listen(port, () => {
  console.log(`Node.js app listening at http://localhost:${port}`);
});
