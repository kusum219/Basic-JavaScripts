const questions = [
    {
        question: "Which is largest animal in the world?",
        answer:[
            {text: "Shark", correct :false},
            {text: "Blue Wahle", correct :true},
            {text: "Elephant",correct: false},
            {text: "Giraff",correct:false},
        ]
    },
        {
        question: "What is the most popular frontend Library?",
        answer:[
            {text: "Angular",correct:false},
            {text: "Rust",correct:false},
            {text: "Dyango",correct:false},
            {text: "React",correct:true},
        ]
    },
        {
        question: "Which is smallest continent in the world?",
        answer:[
            {text: "Asia",correct:true},
            {text: "Australia",correct:false},
            {text: "Artica",correct:false},
            {text: "Africa",correct:false},
        ]
    },
            {
        question: "What is The full form of HTML?",
        answer:[
            {text: "Hyper Text Markup Launguage",correct:true},
            {text: "Hydra text Madeup Language",correct:false},
            {text: "Human Telechome Made Language",correct:false},
            {text: "HItman To Moon language",correct:false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}
function showQuestion(){

    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ".  " + currentQuestion.question;

    currentQuestion.answer.forEach(answers =>{
        const button = document.createElement("BUTTON");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(answers.correct){
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click",selectAnswer)
    })
}

function resetState(){
    nextButton.style.display = "none";

    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handelNextButton();
    }else{
        startQuiz();
    }
});

function handelNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block";
}

startQuiz();
