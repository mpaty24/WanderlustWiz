/**Variable questions that is an array containing objects, where each object represents a question along with its corresponding answer choices 
 *Each object within the array contains two properties: 'text,' representing the question text,
 *and 'correct,' indicating whether the answer is correct or not.
*/

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
            { text: "Brazil", correct: false },
            { text: "Peru", correct: true },
            { text: "Argentina", correct: false },
            { text: "Chile", correct: false },
        ]
    },
    {
        question: "What is the largest desert in the world?",
        answers: [
            { text: "The Sahara Desert", correct: true },
            { text: "Arabian Desert", correct: false },
            { text: "Gobi Desert", correct: false },
            { text: "Rubʿal-Khali Desert", correct: false },
        ]
    },
    {
        question: "Which European city is divided into two parts by the Bosphorus Strait?",
        answers: [
            { text: "Edirne", correct: false },
            { text: "Eskişehir", correct: false },
            { text: "Istanbul", correct: true },
            { text: "Bolu", correct: false },
        ]
    },
    {
        question: "Which Asian city is often referred to as the Lion City?",
        answers: [
            { text: "Hanoi", correct: false },
            { text: "Hong Kong", correct: false },
            { text: "Bangkok", correct: false },
            { text: "Singapore", correct: true },
        ]
    },
    {
        question: "What is the official language of Argentina?",
        answers: [
            { text: "Spanish", correct: true },
            { text: "Guaraní", correct: false },
            { text: "English", correct: false },
            { text: "Portuguese", correct: false },
        ]
    },
    {
        question: "In which U.S. state can you find the Grand Canyon?",
        answers: [
            { text: "California", correct: false },
            { text: "Texas", correct: false },
            { text: "Arizona", correct: true },
            { text: "Florida", correct: false },
        ]
    },
    {
        question: "What is the largest island in the Mediterranean Sea?",
        answers: [
            { text: "Sicily, Italy", correct: true },
            { text: "Cyprus, Cyprus", correct: false },
            { text: "Mykonos, Greece", correct: false },
            { text: "Ibiza, Spain", correct: false },
        ]
    },
];

/**Declare constants */

const $startQuizButton = document.querySelector(".buttonplay");
const $questionsArea = document.querySelector(".questions-area");
const $quizRules = document.querySelector(".quiz_rules");
const $nextQuestion = document.querySelector(".nextQuestion");
const $answersArea = document.querySelector(".answers-area");
const $questionQuiz = document.querySelector(".question");
const $questionDisplay = document.getElementById('question');
const countdownDisplay = document.getElementById('countdown');
const $answers = document.querySelectorAll(".answer");

let countdownTime = 10;
let countdownInterval;

/** Add event listeners to start quiz and display next question*/

$startQuizButton.addEventListener("click", startQuiz);
/** When the user clicks on this button, it will trigger the startQuiz function.*/
$nextQuestion.addEventListener("click", displaynextQuestion);
/** When user clicks on this button, it will trigger diplaynextQuestion function */

let currentQuestionIndex = 0;
let totalCorrect = 0;

/** startQuiz function starts here
 * Hide the quiz rules from the screen 
 * Display the quiz questions again by removing hide
 * Next questions show up
 */
function startQuiz() {
    $quizRules.classList.add("hide");
    $startQuizButton.classList.add("hide");
    $questionsArea.classList.remove("hide");
    $nextQuestion.classList.add("hide");

    displaynextQuestion();
}


function displaynextQuestion() {
    resetState();

    if (questions.length === currentQuestionIndex) {
        return finishQuiz();
    }

    /**We examine the questions at the current index, and for each available answer, 
     * we assess them individually. We dynamically generate a button element within a div to display them on the page. 
     * We then retrieve the text content of each answer and verify whether it is correct or not*/

    $questionQuiz.textContent = questions[currentQuestionIndex].question;
    questions[currentQuestionIndex].answers.forEach(answer => {
        const newAnswerButton = document.createElement("button");
        newAnswerButton.classList.add("buttona", "answer");
        newAnswerButton.textContent = answer.text;
        if (answer.correct) {
            newAnswerButton.dataset.correct = answer.correct;
        }
        $answersArea.appendChild(newAnswerButton);

        newAnswerButton.addEventListener("click", pselectAnswer);
    });
}

/** While there is a child element within the answer area's parent element, 
 * we will continue removing the first child element to recheck. 
 * This process will continue until there are no more child elements remaining inside.
*/
function resetState() {
    while ($answersArea.firstChild) {
        $answersArea.removeChild($answersArea.firstChild);
    }
    document.body.removeAttribute("class");
    $nextQuestion.classList.add("hide");
}


/**function pselect answer check if player clicked in the correct answer or not 
 * if player selects correct response body will turn green
 * If player selects incorrect response body turn red
*/
function pselectAnswer(event) {
    const answerClickedByPlayer = event.target;

    if (answerClickedByPlayer.dataset.correct) {
        document.body.classList.add("correct");
        incrementScore();
        totalCorrect++;
    } else {
        document.body.classList.add("incorrect");
        incrementWrongAnswer();
    }

    document.querySelectorAll(".answer").forEach(button => {
        button.disabled = true;

        if (button.dataset.correct) {
            button.classList.add("correct");
        } else {
            button.classList.add("incorrect");
        }
    });

    $nextQuestion.classList.remove("hide");
    currentQuestionIndex++;
}

function finishQuiz() {
    const totalQuestionsGame = questions.length;
    const PlayerPeformance = Math.floor(totalCorrect * 100 / totalQuestionsGame);

    let message = "";

    switch (true) {
        case (PlayerPeformance >= 90):
            message = "Great Performance :O)";
            break;
        case (PlayerPeformance >= 70):
            message = "Good Performance ;)";
            break;
        case (PlayerPeformance >= 50):
            message = "Not that bad X:(";
            break;
        default:
            message = "Poor performance :(";
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
        You can try again
        </button>
    `;
}

/** get the currect score */

function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

/** get the incorrect score */

function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("wrong").innerText);
    document.getElementById("wrong").innerText = ++oldScore;
}

/* countdown */

function startCountdown() {
    clearInterval(countdownInterval);
    countdownTime = 60;
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
}
function updateCountdown() {
    countdownDisplay.textContent = countdownTime;

    if (countdownTime === 0) {
        clearInterval(countdownInterval);
        countdownDisplay.textContent = 'Time\'s up!';
    } else {
        countdownTime--;
    }
}

/* Function to move to the next question */

function nextQuestioncount() {
    clearInterval(countdownInterval); // totally clear the countdown
    questionDisplay.textContent = `Question ${questionNumber}`;
    startCountdown();
}

startCountdown();

