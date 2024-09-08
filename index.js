const express = require('express');
const cors = require('cors');

const app = express();
const port = 4001;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy GET API
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
