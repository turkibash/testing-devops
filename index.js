const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/greet', (req, res) => {
  res.send(`Hello from ${PORT}, ${res.statusCode}`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
