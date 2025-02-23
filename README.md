# Quiz Web App
This is a simple web-based quiz application designed to test users' knowledge on various topics. The app is built using HTML, CSS, and JavaScript, and it allows users to answer multiple-choice questions, view their progress, and receive feedback on their performance. [View live demo](https://samuelabyan.github.io/quiz/)

## Features
- **Interactive Quiz Interface**: Users can answer questions, view explanations, and see their score in real-time.
- **Progress Bar**: A visual progress bar and text indicate how far the user has progressed in the quiz.
- **Timer**: A countdown timer (optional).
- **Results Page**: After completing the quiz, users can see their final score and whether they passed or failed.

## How to Use
- Open the index.html file in your browser to start the quiz.
- Answer the questions by selecting the correct option and clicking "Submit."
- After each question, you'll see feedback and an explanation (if available).
- Once all questions are answered, you'll be shown your final score and result.

## How to Add or Modify Quizzes
### Adding a New Quiz
To add a new quiz, you need to modify the quiz-data.js file. This file contains all the quiz data, including questions, options, correct answers, and settings.
Example Quiz Data Structure:
```
const quizData = {
  "quiz_name": "Traffic Rules Knowledge Quiz", // Name of the quiz
  "quiz_description": "Assess your knowledge of traffic rules.", // Description of the quiz
  "questions-count": 4, // Total number of questions
  "settings": {
    "randomize_questions": true, // Randomize the order of questions
    "randomize_options": true, // Randomize the order of answer options
    "time_limit": 500, // Time limit for the quiz (in seconds)
    "passing_score": 3, // Minimum score required to pass the quiz
    "all-correct-result": "You got every question right! ...", // Message for perfect score
    "passed-result": "You passed the test! ..." // Message for passing the quiz
  },
  "questions": [
    {
      "id": 1,
      "question": "Why is it important for children to buckle up in the back row of a car?",
      "options": [
        {"id": 1, "answer": "Because it is more comfortable"},
        {"id": 2, "answer": "To prevent them from distracting the driver"},
        {"id": 3, "answer": "It reduces the risk of serious injury in an accident"},
        {"id": 4, "answer": "So they can take a nap safely"}
      ],
      "correct_answer": [3], // Correct answer(s)
      "explanation": "Traffic laws in most countries require all passengers...", // Explanation for the answer
      "points": 1, // Points for this question
      "img_question": "none", // Optional image for the question
      "img_explanation": "resources/buckle-up-children.png" // Optional image for the explanation
    },
    // Add more questions here
  ]
};
```

### Steps to Add a Quiz:
- **Change Quiz Name and Description**: Update the `quiz_name` and `quiz_description` fields to reflect the new quiz topic.
- **Add Questions**: Add new question objects to the questions array. Each question should include:
  - **id**: A unique identifier for the question.
  - **question**: The question text.
  - **options**: An array of answer options, each with an id and answer text.
  - **correct_answer**: An array of correct answer IDs.
  - **explanation**: An explanation for the correct answer.
  - **points**: The number of points the question is worth.
  - **img_question and img_explanation**: Optional image paths for the question and explanation.
- **Update Settings**: Modify the settings object to customize the quiz behavior, such as randomizing questions, setting a time limit, or changing the passing score.
- **Update questions-count**: Ensure the questions-count property matches the total number of questions in the questions array.

### Modifying an Existing Quiz
To modify an existing quiz, simply edit the properties in the quiz-data.js file.
You can change the quiz name, description, questions, options, correct answers, or settings as needed.
