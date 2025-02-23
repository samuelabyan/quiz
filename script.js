let currentQuestionIndex = 0;
let score = 0;
let timeLeft = quizData.settings.time_limit;
let timerInterval;
let questions = quizData.questions;

const quizName = document.getElementById('quiz-name');
const quizDescription = document.getElementById('quiz-description');
const timerDisplay = document.getElementById('timer');
const scoreDisplay = document.getElementById('score');
const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question');
const questionImage = document.getElementById('question-image');
const optionsForm = document.getElementById('options-form');
const submitBtn = document.getElementById('submit-btn');
const feedbackContainer = document.getElementById('feedback-container');
const feedbackText = document.getElementById('feedback');
const explanationText = document.getElementById('explanation');
const explanationImage = document.getElementById('explanation-image');
const nextBtn = document.getElementById('next-btn');
const resultsContainer = document.getElementById('results-container');
const finalScore = document.getElementById('final-score');
const passFail = document.getElementById('pass-fail');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const totalQuestions = quizData.questions.length;

// Initialize quiz
function initQuiz() {
  quizName.textContent = quizData.quiz_name;
  quizDescription.textContent = quizData.quiz_description;
  scoreDisplay.textContent = `Score: ${score}`;

  if (quizData.settings.randomize_questions) {
    questions = shuffleArray(questions);
  }

  if (quizData.settings.time_limit > 0) {
    startTimer();
  }

  loadQuestion();
  updateProgress();
}

// Load question
function loadQuestion() {
  const question = questions[currentQuestionIndex];
  questionText.textContent = question.question;

  if (question.img_question !== "none") {
    questionImage.src = question.img_question;
    questionImage.style.display = "block";
  } else {
    questionImage.style.display = "none";
  }

  optionsForm.innerHTML = '';
  let options = question.options;
  if (quizData.settings.randomize_options) {
    options = shuffleArray(options);
  }

  options.forEach(option => {
    const optionElement = document.createElement('div');
    optionElement.innerHTML = `
      <input type="radio" class="radio" id="option-${option.id}" name="option" value="${option.id}">
      <label for="option-${option.id}" class="radio-label">${option.answer}</label>
    `;
    optionsForm.appendChild(optionElement);
  });

  questionContainer.style.display = "block";
  feedbackContainer.style.display = "none";
  submitBtn.disabled = false;
  updateProgress();
}

// Submit answer
submitBtn.addEventListener('click', () => {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (!selectedOption) {
    showNotification("Select an option");
    return;
  }

  const question = questions[currentQuestionIndex];
  const selectedAnswerId = parseInt(selectedOption.value);
  const isCorrect = question.correct_answer.includes(selectedAnswerId);

  // Disable options and gray them out
  const allOptions = document.querySelectorAll('input[name="option"]');
  allOptions.forEach(opt => {
    opt.disabled = true;
    opt.parentElement.style.opacity = 0.6;
  });

  if (isCorrect) {
    score += question.points;
    feedbackText.textContent = "Correct! " + question.explanation;
  } else {
    feedbackText.textContent = `Incorrect. The correct answer is: ${question.options.find(opt => question.correct_answer.includes(opt.id)).answer}. ${question.explanation}`;
  }

  if (question.img_explanation !== "none") {
    explanationImage.src = question.img_explanation;
    explanationImage.style.display = "block";
  } else {
    explanationImage.style.display = "none";
  }

  scoreDisplay.textContent = `Score: ${score}`;
  feedbackContainer.style.display = "block";
  submitBtn.disabled = true;
  // Scroll to the feedback container
  feedbackContainer.scrollIntoView({ behavior: 'smooth' });
});

// Next question
nextBtn.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResults();
  }
});

// Show results
function showResults() {
  clearInterval(timerInterval);
  questionContainer.style.display = "none";
  feedbackContainer.style.display = "none";
  resultsContainer.style.display = "block";
  
  // Hide the progress container on the final results page
  const progressContainer = document.getElementById('progress-container');
  progressContainer.style.display = "none";

  const totalQuestions = questions.length;
  const quizName = localStorage.getItem('currentQuizName');
  let resultText = '';

  if (score === totalQuestions * quizData.questions[0].points) {
    resultText = quizData.settings["all-correct-result"];
  } else if (score >= quizData.settings.passing_score) {
    resultText = quizData.settings["passed-result"];
  } else {
    resultText = "Sorry, you did not pass the quiz.";
  }

  finalScore.textContent = `Your final score is: ${score}/${totalQuestions}`;
  passFail.textContent = resultText;

  // Save quiz result to history
  saveQuizResult(quizName, score, totalQuestions, resultText);
}

// Timer
function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Time left: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      showNotification("Time is up!");
      setTimeout(() => {
        showResults();
      }, 4000);
    }
  }, 1000);
}

// Show notification
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;

  // Add the notification to the body
  document.body.appendChild(notification);

  // Trigger the slide-in animation
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);

  // Remove the notification after 4 seconds
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      notification.remove();
    }, 500); // Wait for the slide-out animation to finish
  }, 4000);

  // Allow the user to dismiss the notification by clicking on it
  notification.addEventListener('click', () => {
    notification.classList.remove('show');
    setTimeout(() => {
      notification.remove();
    }, 500); // Wait for the slide-out animation to finish
  });
}

// Shuffle array
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function updateProgress() {
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  progressBar.style.width = `${progress}%`;
  progressText.textContent = `${currentQuestionIndex + 1}/${totalQuestions}`;
}

// Start quiz
initQuiz();


//Retry Button
document.getElementById("retry-btn").addEventListener("click", function() {
    location.reload();
  });