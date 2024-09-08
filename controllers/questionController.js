const { data } = require('../constants/questions')

exports.getAllQuestions = (req, res) => {
    try {
        res.status(200).json({
            status: 'success',
            message: 'Questions fetched successfully',
            data: data,
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Server error while fetching questions',
        });
    }
};

// Function to handle answer submission
exports.submitAnswer = (req, res) => {
    const { id, answer } = req.body;

    // Find the question by ID
    const question = data.find(q => q.id === id);

    // If question doesn't exist
    if (!question) {
        return res.status(404).json({
            message: 'Question not found',
            status: 404
        });
    }

    // Check if the submitted answer is correct
    if (question.type === 'single-choice' && question.answer === answer) {
        return res.status(200).json({
            message: 'Answer submitted successfully!',
            status: 200
        });
    } else if (question.type === 'multiple-choice' && Array.isArray(answer) &&
        JSON.stringify(question.answer.sort()) === JSON.stringify(answer.sort())) {
        return res.status(200).json({
            message: 'Answer submitted successfully!',
            status: 200
        });
    } else {
        return res.status(200).json({
            message: 'Answer submitted successfully!',
            status: 200
        });
    }
};

exports.calculateResult = (req, res) => {
    const userAnswers = req.body;
    let totalQuestions = data.length;
    let correctCount = 0;
    let incorrectCount = 0;

    // Helper function to compare multiple-choice answers
    const areMultipleChoiceAnswersCorrect = (correctAnswers, userAnswers) => {
        if (correctAnswers.length !== userAnswers.length) {
            return false;
        }

        // Sort, trim, and lowercase both arrays before comparing
        const sanitizedCorrectAnswers = correctAnswers.map(a => a.trim().toLowerCase()).sort();
        const sanitizedUserAnswers = userAnswers.map(a => a.trim().toLowerCase()).sort();

        return JSON.stringify(sanitizedCorrectAnswers) === JSON.stringify(sanitizedUserAnswers);
    };

    // Loop through the questions and compare the answers
    data.forEach((question) => {
        const userAnswer = userAnswers[question.id];

        // Check for single-choice question
        if (question.type === 'single-choice') {
            if (userAnswer?.[0].trim().toLowerCase() === question.answer.trim().toLowerCase()) {
                correctCount++;
            } else {
                incorrectCount++;
            }
        }

        // Check for multiple-choice question
        else if (question.type === 'multiple-choice' && Array.isArray(userAnswer)) {
            if (areMultipleChoiceAnswersCorrect(question.answer, userAnswer)) {
                correctCount++;
            } else {
                incorrectCount++;
            }
        } else {
            incorrectCount++;
        }
    });

    // Calculate score percentage
    const scorePercentage = ((correctCount / totalQuestions) * 100).toFixed(2);

    // Send the result response
    res.status(200).json({
        data: {
            totalQuestions,
            correctCount,
            incorrectCount,
            scorePercentage
        },
        message: 'Result calculated successfully!',
        status: 200
    });
};