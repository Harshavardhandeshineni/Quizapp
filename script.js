const questions = [
    {
        question: "Who is the father of the'Republic of India'?",
        answers:[
            {text: "Mahatma Gandhi", correct: false},
            {text: "Indhira Gandhi", correct: false},
            {text: "B.R.Ambedkar", correct: true},
            {text: "APJ Abdul kalam", correct: false},
            
        ]   },
        {
            question: "What is the 'study of blood'?",
            answers:[
                {text: "Phycology", correct: false},
                {text: "Haematology", correct: true},
                {text: "Opthomology", correct: false},
                {text: "Hepatology", correct: false},
                
            ]   },
            {
                question: "What is the name of Autobiography of Kapildev?",
                answers:[
                    {text: "Straight from the heart", correct: true},
                    {text: "Playing it my way", correct: false},
                    {text: "Golden man", correct: false},
                    {text: "The test of my life", correct: false},
                    
                ]   },
                {
                    question: "The Yarlung Zangbo river,in India, is known as?",
                    answers:[
                        {text: "Ganga", correct: false},
                        {text: "Indus", correct: false},
                        {text: "Brahmaputra", correct: true},
                        {text: "Mahanadi", correct: false},
                        
                    ]   },
                    {
                        question: "In which year India got its first cricket worldcup?",
                        answers:[
                            {text: "2011", correct: false},
                            {text: "1987", correct: false},
                            {text: "2003", correct: false},
                            {text: "1983", correct: true},
                            
                        ]   }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("Next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex =0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
  
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+ currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);

    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ===  "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

    }
    function showScore(){
        resetState();
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
        nextButton.innerHTML = "Play Again";
        nextButton.style.display ="block";
    }



    function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex <questions.length){
        showQuestion();


    }else{
        showScore();
    }
}

    nextButton.addEventListener("click", ()=>{
        if(currentQuestionIndex < questions.length){
            handleNextButton();

        }else{
            startQuiz(); 

        }
    }
    )


startQuiz(); 