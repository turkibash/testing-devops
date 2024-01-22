const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const podName = process.env.POD_NAME || 'Unknown';
// Serve the greeting message
app.get('/greet', (req, res) => {
  res.send(`Hello from Node.js App! Served by Pod: ${podName}`);
});

// Serve static files (for HTML, CSS, JS)
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
