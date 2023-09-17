const $startQuizButton = document.querySelector(".buttonplay");
const $questionsArea = document.querySelector(".questions-area");
const $quizRules = document.querySelector(".quiz_rules");

$startQuizButton.addEventListener("click", startQuiz);

function startQuiz() {
    $quizRules.classList.add("hide");
    $startQuizButton.classList.add("hide");
    $questionsArea.classList.remove("hide");
    displaynextQuestion();
}