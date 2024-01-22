const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve the greeting message
app.get('/greet', (req, res) => {
  res.send(`Hello from ${PORT}`);
});

// Serve static files (for HTML, CSS, JS)
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
