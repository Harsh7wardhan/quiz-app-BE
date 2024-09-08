const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const testRoutes = require('./routes/index');
const questionRoutes = require('./routes/questionRoute')

const app = express();
const port = config.port;

// Middleware
app.use(cors());
app.use(express.json());

// Use routes
app.use('/api', testRoutes);
app.use('/api', questionRoutes); 

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
