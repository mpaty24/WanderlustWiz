const question = [
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

questions[currentQuestionIndex].answers.forEach(answer => {
    const newAnswerButton = document.createElement("button");
    newAnswerButton.classList.add("button", "answer")
    newAnswerButton.textContent = answer.text;
    if (answer.correct) {
        newAnswerButton.dataset.correct = answer.correct
    }
    $answersArea.appendChild(newAnswerButton);

    newAnswerButton.addEventListener("click", selectAnswer)
});
}
