const express = require('express');
const { testApi } = require('../controllers/index');

const router = express.Router();

// Define routes
router.get('/test', testApi);

module.exports = router;
