exports.data = [
    {
        id: '1',
        question: 'How do you judge what should be added in the next version of the app?',
        type: 'single-choice',
        options: [
            "Data Analysis",
            "Machine Learning",
            "Artificial Intelligence",
            "Deep Learning",
            "Machine Learning"
        ],
        answer: 'Machine Learning'
    },
    {
        id: '2',
        question: 'What is the primary purpose of using Artificial Intelligence in modern apps?',
        type: 'single-choice',
        options: [
            "Improving user experience",
            "Making apps faster",
            "Making apps secure",
            "Reducing app size"
        ],
        answer: 'Improving user experience'
    },
    {
        id: '3',
        question: 'Which of the following technologies are essential for data analysis? (Choose all that apply)',
        type: 'multiple-choice',
        options: [
            "Python",
            "R",
            "SQL",
            "C++"
        ],
        answer: ['Python', 'R', 'SQL']
    },
    {
        id: '4',
        question: 'Which techniques can be used to reduce the overfitting problem in machine learning models?',
        type: 'multiple-choice',
        options: [
            "Dropout",
            "Early stopping",
            "Data augmentation",
            "Cross-validation"
        ],
        answer: ['Dropout', 'Early stopping', 'Cross-validation']
    },
    {
        id: '5',
        question: 'Which language is the best suited for developing AI-driven chatbots?',
        type: 'single-choice',
        options: [
            "JavaScript",
            "Python",
            "PHP",
            "Ruby"
        ],
        answer: 'Python'
    },
    {
        id: '6',
        question: 'What kind of problem is being solved in this image?',
        type: 'single-choice',
        image: 'https://example.com/problem-image.png',  // Example image
        options: [
            "Regression",
            "Classification",
            "Clustering",
            "Dimensionality Reduction"
        ],
        answer: 'Classification'
    },
    {
        id: '7',
        question: 'Which are the most commonly used activation functions in neural networks?',
        type: 'multiple-choice',
        options: [
            "ReLU",
            "Sigmoid",
            "Tanh",
            "Softmax"
        ],
        answer: ['ReLU', 'Sigmoid', 'Tanh']
    },
    {
        id: '8',
        question: 'What is the output of a binary classification algorithm?',
        type: 'single-choice',
        options: [
            "A continuous value",
            "A binary value (0 or 1)",
            "A class label",
            "A probability score"
        ],
        answer: 'A binary value (0 or 1)'
    },
    {
        id: '9',
        question: 'In which scenario would you use unsupervised learning?',
        type: 'single-choice',
        options: [
            "When labeled data is not available",
            "When you want to predict outcomes",
            "When you need a large dataset",
            "When the problem is complex"
        ],
        answer: 'When labeled data is not available'
    },
    {
        id: '10',
        question: 'Look at the diagram and identify which algorithm is represented?',
        type: 'single-choice',
        image: 'https://example.com/algorithm-diagram.png',  // Example image
        options: [
            "K-Means Clustering",
            "Linear Regression",
            "Decision Tree",
            "Convolutional Neural Network"
        ],
        answer: 'Decision Tree'
    }
];
