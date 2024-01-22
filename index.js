const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;

app.get('/greet', (req, res) => {
  res.send(`Hello from ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
