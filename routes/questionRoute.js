// routes/questionRoutes.js
const express = require('express');
const { getAllQuestions , submitAnswer , calculateResult} = require('../controllers/questionController');

const router = express.Router();

// GET route to fetch all questions
router.get('/questions', getAllQuestions);

// Route to submit an answer
router.post('/submit-answer', submitAnswer);

// Route to calculate result
router.post('/result', calculateResult);

module.exports = router;
