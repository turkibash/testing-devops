const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.post('/', (req, res) => {
  res.send(`Hello from ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
