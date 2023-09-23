const $startQuizButton = document.querySelector(".buttonplay");
const $questionsArea = document.querySelector(".questions-area");
const $quizRules = document.querySelector(".quiz_rules");
const $nextQuestion = document.querySelector(".nextQuestion");
const $answersArea = document.querySelector(".answers-area");
const $questionQuiz = document.querySelector(".question");



$startQuizButton.addEventListener("click", startQuiz);
$nextQuestion.addEventListener("click", displaynextQuestion);

let currentQuestionIndex = 0;
let totalCorrect = 0


function startQuiz() {
    $quizRules.classList.add("hide");
    $startQuizButton.classList.add("hide");
    $questionsArea.classList.remove("hide");
    $nextQuestion.classList.add("hide");

    displaynextQuestion();
}


function displaynextQuestion() {
resetState()

if (questions.length === currentQuestionIndex) {
return finishQuiz();
}

$questionQuiz.textContent = questions[currentQuestionIndex].question;
questions[currentQuestionIndex].answers.forEach(answer => {
    const newAnswerButton = document.createElement("answer")
    newAnswerButton.classList.add("buttona", "answer")
    newAnswerButton.textContent = answer.text
    if (answer.correct) {
        newAnswerButton.dataset.correct = answer.correct
    }
    $answersArea.appendChild(newAnswerButton);

    newAnswerButton.addEventListener("click", pselectAnswer)
})
}

function resetState() {
    while($answersArea.firstChild) {
        $answersArea.removeChild($answersArea.firstChild);
    }
document.body.removeAttribute("class")
$nextQuestion.classList.add("hide")
}

function pselectAnswer(event) {
const answerClickedByPlayer = event.target

if (answerClickedByPlayer.dataset.correct) {
    document.body.classList.add("correct")
    totalCorrect++
  } else {
    document.body.classList.add("incorrect") 
  }

document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
        button.classList.add("correct")
      } else {
        button.classList.add("incorrect")
      }
    })
    
    $nextQuestion.classList.remove("hide")
    currentQuestionIndex++
  }

  function finishQuiz() {
    const totalQuestionsGame = questions.length
    const PlayerPeformance = Math.floor (totalCorrect * 100 / totalQuestionsGame)

    let message = ""

      switch (true) {
        case(PlayerPeformance >= 90 ):
        message = "Great Performance :O)"
        break
        case (PlayerPeformance >= 70):
        message = "Good Performance ;)"
        break
        case(PlayerPeformance >= 50):
        message = "Only Good"
        break
        default:
        message = "Poor performance :("
    }


    $questionsArea.innerHTML =
    `
    <p class ="QuizFinal">
      You got ${totalCorrect} responses correct of ${totalQuestionsGame} questions!
      <span>Result: ${message}</span>
    </p>
    <button class ="answer buttona"
      onclick=window.location.reload() 
      class="button">
      Try again
    </button>
  `
}


const questions = [
    {
        question: "What is the largest country in the world by land area?",
        answers: [
            { text: "China", correct: false },
            { text: "Russia", correct: true },
            { text: "United States", correct: false },
            { text: "Germany", correct: false },
        ]
    },
    {
        question: "Which European city is known as the City of Love and City of Lights?",
        answers: [
            { text: "Milan, Italy", correct: false },
            { text: "Berlin, Germany", correct: false },
            { text: "Eindhoven, Netherlands", correct: false },
            { text: "Paris, France", correct: true },
        ]
    },
    {
        question: "Which country is famous for its ancient city of Petra, carved into rose-red cliffs?",
        answers: [
            { text: "Jordan", correct: true },
            { text: "Greece", correct: false },
            { text: "Egypt", correct: false },
            { text: "Germany", correct: false },
        ]
    },
    {
        question: "In which country can you find the Great Barrier Reef, the world's largest coral reef system?",
        answers: [
            { text: "Fiji", correct: false },
            { text: "Thailand", correct: false },
            { text: "Australia", correct: true },
            { text: "Germany", correct: false },
        ]
    },
    {
        question: "Which African country is known as the Land of a Thousand Hills?",
        answers: [
            { text: "Rwanda", correct: true },
            { text: "Namibia", correct: false },
            { text: "Tanzania", correct: false },
            { text: "Algeria", correct: false },
        ]
    },
    {
        question: "What is the tallest mountain in the world?",
        answers: [
            { text: "Manaslu", correct: false },
            { text: "Kangchenjunga", correct: false },
            { text: "Makalu", correct: false },
            { text: "Mount Everest", correct: true },
        ]
    },
    {
        question: "Which city is home to the famous Christ the Redeemer statue?",
        answers: [
            { text: "Rio de Janeiro, Brazil", correct: true },
            { text: "Lisbon, Portugal", correct: false },
            { text: "Rome, Italy", correct: false },
            { text: "Philippines", correct: false },
        ]
    },
    {
        question: "What is the official language of Brazil?",
        answers: [
            { text: "Portuguese", correct: true },
            { text: "Spanish", correct: false },
            { text: "Italian", correct: false },
            { text: "English", correct: false },
        ]
    },
    {
        question: "In which country would you find the historic site of Machu Picchu?",
        answers: [
            { text: "Brazil", correct: true },
            { text: "Peru", correct: false },
            { text: "Argentina", correct: false },
            { text: "Chile", correct: false },
        ]
    },
];