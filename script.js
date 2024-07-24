const questions = [
    {
        que: 'What is the full form of HTML?',
        options: ['Hyper Text Markup Language', 'Hyper Type Markup Language', 'Hyper Type Madeof Language', 'Hyper Text Madeof Language'],
        correct: 'Hyper Text Markup Language',
    },
    {
        que: 'What is the full form of CSS?',
        options: ['Cascading Style Sheets', 'Cascading Standard Sheets', 'Cascading Standard Short', 'Cambridge Style Sheets'],
        correct: 'Cascading Style Sheets',
    },
    {
        que: 'Which HTML tag is used to define an internal style sheet?',
        options: ['style', 'css', 'script', 'link'],
        correct: 'style',
    },
    {
        que: 'Which property is used to change the background color in CSS?',
        options: ['color', 'bgcolor', 'background-color', 'backgroundColor'],
        correct: 'background-color',
    },
    {
        que: 'Which HTML attribute is used to define inline styles?',
        options: ['class', 'style', 'font', 'styles'],
        correct: 'style',
    },
    {
        que: 'Which CSS property is used to change the text color of an element?',
        options: ['font-color', 'text-color', 'color', 'text-style'],
        correct: 'color',
    },
    {
        que: 'How do you write "Hello World" in an alert box using JavaScript?',
        options: ['msgBox("Hello World");', 'alertBox("Hello World");', 'msg("Hello World");', 'alert("Hello World");'],
        correct: 'alert("Hello World");',
    },
    {
        que: 'Which HTML element is used to specify a footer for a document or section?',
        options: ['bottom', 'footer', 'section', 'foot'],
        correct: 'footer',
    },
    {
        que: 'Which method is used to add an element at the end of an array in JavaScript?',
        options: ['push()', 'pop()', 'shift()', 'unshift()'],
        correct: 'push()',
    },
    {
        que: 'Which CSS property controls the text size?',
        options: ['font-style', 'text-size', 'font-size', 'text-style'],
        correct: 'font-size',
    }
];


const quiz = document.getElementById('quiz');
const quebox = document.getElementById('quebox');
const labels = [document.getElementById('label1'), document.getElementById('label2'), document.getElementById('label3'), document.getElementById('label4')];
const options = [document.getElementById('option1'), document.getElementById('option2'), document.getElementById('option3'), document.getElementById('option4')];
const submitbtn = document.getElementById('submit');
const resultDiv = document.getElementById('Result');

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    let question = questions[currentQuestion];
    quebox.innerHTML = question.que;
    labels.forEach((label, index) => {
        label.innerHTML = question.options[index];
    });
    // Uncheck previously selected option if any
    options.forEach(option => option.checked = false);
}

function checkanswer() {
    let selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        if (selectedOption.nextElementSibling.innerHTML === questions[currentQuestion].correct) {
            score++;
        }
    }
}

function showresult() {
    quiz.style.display = 'none';
    resultDiv.innerHTML = `You scored ${score} out of ${questions.length}.`;
}

submitbtn.addEventListener("click", () => {
    checkanswer();
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showresult();
    }
});

loadQuestion();