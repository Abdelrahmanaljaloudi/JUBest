//JBestjs
// Array of objects
const quiz = [
    {
        q: 'Which of the following words means the number six ?',
        options: ['أَربَعَة', 'سِتَّة', 'هُوَ', 'هَؤُلاء'],
        answer: 1
    },
    {
        q: 'Which of the following words is a noun?',

        options: ['هُم', 'طويل', 'قصير', 'عبدالرحمن'],
        answer: 3
    },
    {
        q: 'Which of the following words is an adjective?',

        options: ['طويل', 'قصير', 'وسيم', 'جميع ماذكر'],
        answer: 3
    },
    {
        q: 'Which of the following words is a varb?',

        options: ['سَنَة', 'صَباح ', 'أَكَلَ', 'جميع ماذكر'],
        answer: 2
    },
    {
        q: 'Which of the following words is a place name?',

        options: ['مَحَطَّةُ الحافِلات', 'ذَهَبَ ', 'أَكَلَ', 'أَعطى'],
        answer: 0
    },
    {
        q: 'Which of the following words is a noun?',

        options: ['هُم', 'طويل', 'قصير', 'عبدالرحمن'],
        answer: 3
    },
    {
        q: 'Which of the following words is a place name?',

        options: ['مَحَطَّةُ الحافِلات', 'ذَهَبَ ', 'أَكَلَ', 'أَعطى'],
        answer: 0
    },
    {
        q: 'Which of the following words is a noun?',

        options: ['هُم', 'طويل', 'قصير', 'عبدالرحمن'],
        answer: 3
    },


]

const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answerIndicatorContainer = document.querySelector(".answers-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");


let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;

//push the question into availableQuestions array
function setAvailableQuestions() {
    const totalQuestion = quiz.length;
    for (let i = 0; i < totalQuestion; i++) {
        availableQuestions.push(quiz[i])
    }

}
//set question number , question and options
function getNewQuestions() {
    //set question number
    questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + quiz.length;

    //set question text 
    // get random quesstions
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;
    //get the position of 'questionIndex" from the availablequestion array 
    const index1 = availableQuestions.indexOf(questionIndex);
    //remove the 'questionIndex" from the availablequestion array , so that question doesnt  repet 
    availableQuestions.splice(index1, 1);
    //set options
    //get the length of options
    const optionLen = currentQuestion.options.length;
    //push options into availableOptions Array 
    for (let i = 0; i < optionLen; i++) {
        availableOptions.push(i)

    }
    optionContainer.innerHTML = '';
    let animationDelay = 0.15;
    //create options in innerHTML
    for (let i = 0; i < optionLen; i++) {
        //random options in html 
        const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
        // get the position of optionIndex from the availableOptions array
        const index2 = availableOptions.indexOf(optionIndex);
        //remove  the  optionIndex from the availableOptions array ,so that the option doesnt repeat
        availableOptions.splice(index2, 1);
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optionIndex];

        option.id = optionIndex;
        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.15;
        option.className = "option";
        optionContainer.appendChild(option);
        option.setAttribute("onclick", "getResult(this)");

    }
    questionCounter++
}


// get result  current attempt question 
function getResult(element) {

    const id = parseInt(element.id);
    // get the answer by comparing the id of chicked option
    if (id === currentQuestion.answer) {
        // set the green color to correct option 
        element.classList.add("correct");
        // add  the indicator to correct mark
        updateAnswerIndicator("correct");
        correctAnswers++;
    } else {
        // set the red color to wrong option 
        element.classList.add("wrong");
        // add  the indicator to wrong mark
        updateAnswerIndicator("wrong");

        // if the answer is incorrect then show the correct option  by adding green  color the correct option
        const optionLen = optionContainer.children.length;
        for (let i = 0; i < optionLen; i++) {
            if (parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
                optionContainer.children[i].classList.add("correct");
            }

        }

    }
    attempt++;
    unclickableOptions();

}

//make  all options  unclickable once the user select  a option (RESTRICT THE USER TO CHANGE THE OPTION AGAIN )
function unclickableOptions() {

    const optionLen = optionContainer.children.length;
    for (let i = 0; i < optionLen; i++) {
        optionContainer.children[i].classList.add("already-answered");
    }
}


function answerIndicator() {
    answerIndicatorContainer.innerHTML = '';
    const totalQuestion = quiz.length;
    for (let i = 0; i < totalQuestion; i++) {
        const indicator = document.createElement("div");
        answerIndicatorContainer.appendChild(indicator);

    }
}
function updateAnswerIndicator(markType) {
    answerIndicatorContainer.children[questionCounter - 1].classList.add(markType);


}
function next() {
    if (questionCounter === quiz.length) {
       
        quizOver();
    } else {
        getNewQuestions();
    }
}
function quizOver() {
    //hide quiz box 
    quizBox.classList.add("hide");
    //show result box
    resultBox.classList.remove("hide");
    quizResult();
}
// get the quiz result 
function quizResult() {
    resultBox.querySelector(".total-question").innerHTML = quiz.length;
    resultBox.querySelector(".total-attempt").innerHTML = attempt;
    resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
    resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;
    const percentage = (correctAnswers / quiz.length) * 100;
    resultBox.querySelector(".percentage").innerHTML = percentage.toFixed(2) + "%";
    resultBox.querySelector(".total-score").innerHTML = correctAnswers + " / " + quiz.length;
}

function resetQuize() {
    questionCounter = 0;
    correctAnswers = 0;
    attempt = 0;

}

function TrayAgainQuiz() {
    //hid the resultBox
    resultBox.classList.add("hide");
    //show  the  quizBox
    quizBox.classList.remove("hide");
    resetQuize();
    startQuiz();
}
function ExitQuiz(){
//hide resultBox
resultBox.classList.add("hide");
//show homeBox
homeBox.classList.remove("hide");
resetQuize();

}
//****STARTING POINT**** */
function startQuiz() {
    //hide homebox 
    homeBox.classList.add("hide");
    //show homebox 
    quizBox.classList.remove("hide");
    //first we will set all questions in availabaleQuestion arry
    setAvailableQuestions();
    //second we will call getNewQuestions()
    getNewQuestions();
    // to create indicator of answer
    answerIndicator();

}

window.onload=function (){

    homeBox.querySelector(".total-question").innerHTML=quiz.length;
}