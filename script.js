
// “Dear JavaScript, please look at the whole webpage, find the thing that has an ID of start-screen, and save it for me in a box called startscreen so I can play with it later.”

// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");


// Quiz questions//
const quizQuestions = [
    {
      question: "What is the capital of France?",
      answers: [
        { text: "London", correct: false },
        { text: "Berlin", correct: false },
        { text: "Paris", correct: true },
        { text: "Madrid", correct: false },
      ],
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Venus", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Saturn", correct: false },
      ],
    },
    {
      question: "What is the largest ocean on Earth?",
      answers: [
        { text: "Atlantic Ocean", correct: false },
        { text: "Indian Ocean", correct: false },
        { text: "Arctic Ocean", correct: false },
        { text: "Pacific Ocean", correct: true },
      ],
    },
    {
      question: "Which of these is NOT a programming language?",
      answers: [
        { text: "Java", correct: false },
        { text: "Python", correct: false },
        { text: "Banana", correct: true },
        { text: "JavaScript", correct: false },
      ],
    },
    {
      question: "What is the chemical symbol for gold?",
      answers: [
        { text: "Go", correct: false },
        { text: "Gd", correct: false },
        { text: "Au", correct: true },
        { text: "Ag", correct: false },
      ],
    },
  ];


// Quiz Stat variables

let currentQuestionIndex = 0;
let score = 0;
let answerDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

//event listners

startButton.addEventListener("click" , startQuiz)
restartButton.addEventListener("click",restartQuiz)

function startQuiz(){
    //reset vars
    currentQuestionIndex = 0;
    scoreSpan.textContent = 0;

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");
    console.log("Quiz Started");

    showQuestion()
}

function showQuestion(){
    //reset state
    answerDisabled = false
    const currentQuestion = quizQuestions[currentQuestionIndex]
    currentQuestionSpan.textContent = currentQuestionIndex + 1
    const progresPercent = (currentQuestionIndex/quizQuestions.length)*100;
    progressBar.style.width = progresPercent + "%"
    questionText.textContent = currentQuestion.question
    //todo: explain this is second
    answersContainer.innerHTML = "";
    currentQuestion.answers.forEach(answe=>{
        const button = document.createElement("button")
        button.textContent = answer.text
        button.classList.add("answer-btn")
        //data set = its a propery of the buttom element that aloows you to score custom data
        button.dataset.correct = answer.correct
        button.addEventListener("click" , selectAnswer);
        answersContainer.appendChild(button);
    });
}
function selectAnswer(event){
    //optimization check
    if (answerDisabled) return
    answerDisabled = true
    const selectdButton = event.target;
    const
}

function restartQuiz(){
    console.log("Quiz re-started");
    
}