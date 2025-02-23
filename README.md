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
'''
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
'''
