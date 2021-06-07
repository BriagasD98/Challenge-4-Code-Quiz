// Button Elements
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const questionContainer = document.querySelector('.container')

const scoreText = document.querySelector('#score')
let score = 0
const scorePoints = 100

function scoreIncrement() {
    let classToApply = selectedAnswer == currentQuestionsIndex.answer ? 'correct' : 'incorrect'

    if (classToApply === 'correct') {
        scoreIncrement(scorePoints)
    }
}


const timeLeftDisplay = document.querySelector("#time-left")
timeLeft = 60

function countDown() {
    setInterval(function(){
       if (timeLeft <= 0 ) {
           clearInterval(timeLeft = 0)
       }
       timeLeftDisplay.innerHTML = timeLeft
        timeLeft -=1
    }, 1000)
}

startButton.addEventListener('click', countDown)


let shuffledQuestions, currentQuestionsIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionsIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    questionContainer.classList.remove('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionsIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionsIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
} 

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionsIndex + 1) {
    nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: [
            {text: '<javascript>', correct: false },
            {text: '<js>', correct: false },
            {text: '<espresso>', correct: false },
            {text: '<script>', correct: true }
        ]
    },
    {
        question: 'How do you write "Drink Some Coffee!" in an alert box?',
        answers: [
            {text: 'alert("Drink some Coffee!");', correct: true },
            {text: 'popUp("Drink some Coffee!");', correct: false },
            {text: 'box("Drink some Coffee!");', correct: false },
            {text: 'alertMe("Drink some Coffee!");', correct: false }
        ]
    },
    {
        question: 'How do you write a comment in JavaScript?',
        answers: [
            {text: '// This is a comment', correct: true },
            {text: '<!-- This is a comment --!>', correct: false },
            {text: 'This is a comment', correct: false },
            {text: '("This is a comment")', correct: false }
        ]
    },
    {
        question: 'Which is the correct way to write an array in JavaScript?',
        answers: [
            {text: 'var = {Mazda, Honda, Toyota, Nissan}', correct: false },
            {text: 'var = ["Mazda", "Honda", "Toyota", "Nissan"]', correct: true },
            {text: 'var = <"Mazda", "Honda", "Toyota", "Nissan">', correct: false },
            {text: 'var = |Mazda, Honda, Toyota, Nissan|', correct: false }
        ]
    },
    {
        question: 'How do you declare a JavaScript variable?',
        answers: [
            {text: 'var carName', correct: true },
            {text: 'variable = carName', correct: false },
            {text: 'var = carName', correct: false },
            {text: 'var == carName', correct: false }
        ]
    },
    {
        question: 'How do you write an "if" statement in JavaScript?',
        answers: [
            {text: 'if i = 9', correct: false },
            {text: 'if (i == 9)', correct: true },
            {text: 'if i++', correct: false },
            {text: 'if 7 8 9', correct: false }
        ]
    },
    {
        question: 'How do you find the number with the highest value of x and y?',
        answers: [
            {text: 'maxValue(x,y)', correct: false },
            {text: 'max(x,y)', correct: false },
            {text: 'Math.max(x,y)', correct: true },
            {text: 'valueMax(x,y)', correct: false }
        ]
    },
    {
        question: 'How can you detect the clients browser name?',
        answers: [
            {text: 'navigator.appName', correct: false },
            {text: 'clientApp.Name', correct: true },
            {text: 'clientBrowser.name', correct: false },
            {text: 'nav.app.name', correct: false }
        ]
    },
    {
        question: 'What will the following code return: Boolean(7 < 9)',
        answers: [
            {text: 'NaN', correct: true },
            {text: 'false', correct: false },
            {text: 'true', correct: false },
            {text: '7 Ate 9', correct: false }
        ]
    }

];

// -- Questions & Answers --

// Inside which HTML element do we put the JavaScript?
// <javascript>
// <js>
// <espresso>
// <script>

// How do you write "Drink Some Coffee!" in an alert box?
// alert("Drink some Coffee!");
// popUp("Drink some Coffee!");
// box("Drink some Coffee!");
// alertMe("Drink some Coffee!");

// How do you write a comment in JavaScript?
// // This is a comment
// <!-- This is a comment --!>
// This is a comment
// ("This is a comment")

// Which is the correct way to write an array in JavaScript?
// var = {Mazda, Honda, Toyota, Nissan}
// var = ["Mazda", "Honda", "Toyota", "Nissan"]
// var = <"Mazda", "Honda", "Toyota", "Nissan">
// var = |Mazda, Honda, Toyota, Nissan|

// How do you declare a JavaScript variable?
// var carName
// variable = carName
// var = carName
// var == carName

// How do you write an "if" statement in JavaScript?
// if i = 9
// if (i == 9)
// if i++
// if 7 8 9

// How do you find the number with the highest value of x and y?
// maxValue(x,y)
// max(x,y)
// Math.max(x,y)
// valueMax(x,y)

// How can you detect the client's browser name?
// navigator.appName
// clientApp.Name
// clientBrowser.name
// nav.app.name

// What will the following code return: Boolean(7 < 9)
// NaN
// false
// true
// 7 Ate 9