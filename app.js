const quizData = [{
        question: 'Biggest Club in English Football?',
        a: 'Arsenal',
        b: 'Manchester United',
        c: 'Liverpool',
        d: 'Chelsea',
        answer: 'b'
    },{
        question: 'GOAT in Football?',
        a: 'Best',
        b: 'Messi',
        c: 'Ronaldo',
        d: 'Pele',
        answer: 'c'
    },{
        question: 'Who has won the most World Cup?',
        a: 'Brazil',
        b: 'France',
        c: 'Germany',
        d: 'Argentina',
        answer: 'a'
    },{
        question: 'Who scored the Hand of God?',
        a: 'Cruyff',
        b: 'Muller',
        c: 'Beckenbauer',
        d: 'Maradona',
        answer: 'd'
    },{
        question: 'Only manager to win Treble with english team?',
        a: 'Sir Alex Ferguson',
        b: 'Arsene Wenger',
        c: 'Mourinho',
        d: 'Pep Guardiola',
        answer: 'a'
    }
];

const quiz = document.querySelector('#quiz');
const question = document.querySelector('#question');
const aText = document.querySelector('#aText');
const bText = document.querySelector('#bText');
const cText = document.querySelector('#cText');
const dText = document.querySelector('#dText');
const answerEls = document.querySelectorAll('.answer')
const submitBtn = document.querySelector('#submit');

let currentQuiz = 0;
let score = 0;
currentQ();

function currentQ() {
    deselectAnswer()
    let currentQuestion = quizData[currentQuiz];
    question.innerText = currentQuestion.question;
    aText.innerText = currentQuestion.a;
    bText.innerText = currentQuestion.b;
    cText.innerText = currentQuestion.c;
    dText.innerText = currentQuestion.d;
}

function correctAnswer(){
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer;
}

function deselectAnswer(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}

submitBtn.addEventListener('click', () => {
    const answer = correctAnswer()
    if(answer){
        if(answer === quizData[currentQuiz].answer){
            score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length){
            currentQ();
        } else {
            quiz.innerHTML = `<h2>Your score ${score}/${quizData.length} questions.</h2>
            <button onclick="location.reload()">Replay</button>`
        }
    }
})