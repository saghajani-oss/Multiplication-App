const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
    score = 0;
}

const scoreEl = document.getElementById("score");

scoreEl.innerHTML = `score: ${score}`;

const questionEl = document.getElementById("question");
questionEl.innerHTML = `What is ${num1} multiply by ${num2}?`;

const formEl = document.getElementById("form");

const inputEl = document.getElementById("input");

const correctAns = num1 * num2;

formEl.addEventListener("submit", ()=> {
    const userAns = +inputEl.value;
    if (correctAns === userAns) {
        score++
        updateLocalScore();
    } else {
        score--
        updateLocalScore();
    }
})

function updateLocalScore() {
    localStorage.setItem("score",JSON.stringify(score));
}