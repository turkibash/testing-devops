const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/devops', (req, res) => {
  res.send(`Hello from ${PORT} this is a test server`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
