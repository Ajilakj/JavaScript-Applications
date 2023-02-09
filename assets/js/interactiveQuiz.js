// variable declarations
var timeLeft=2;
var index=0;
var correct=0;
var wrong=0;
var dataArray={question:["The typeof operator in JavaScript returns ........ for arrays","Which operator is used to check both the value and type","How to insert the javascript file script.js in html file?",
                         "We can use ......... to insert an item in the beginning of an array",
                         "What method we can use to place an item before a particular element"],
     options:[["array","object","undefined","string"],["==","!=","===","<>"],["<script src='script.js'>","<script href='script.js'>","<link src='script.js'>","<link href='script.js'>"],[".append()",".push()",".unShift()",".pop()"],[".append()",".appendChild()",".preppend()",".preppendChild()"]],
     answer:["object","===","<script src='script.js'>",".unShift()",".preppend()"]
};

var opt1=document.getElementById("option1");
var opt2=document.getElementById("option2");
var opt3=document.getElementById("option3");
var opt4=document.getElementById("option4");
var start=document.getElementById("start");
var question=document.getElementById("questionsAndOptions");
var finalScore=document.getElementById("finalScore");
var startBtn=document.getElementById("startBtn");
var restart=document.getElementById("restart");
var submitBtn=document.getElementById("submit");
var restartBtn=document.getElementById("start-again");
var clearBtn=document.getElementById("clear");
var previousScoreFromLocal=localStorage.getItem("previousScoreLocal");
let previous;
//alert(previousScoreFromLocal);
function init(){
     index=0;
    // displayPreviousScore(previousScoreFromLocal);
//     alert("inside init");
     question.classList.add("sectionHide");
     finalScore.classList.add("sectionHide");
     restart.classList.add("sectionHide");
}

function displayPreviousScore(previousScoreFromLocal){
     // alert("inside displayPreviousScore");
     if(previousScoreFromLocal===null || previousScoreFromLocal===0){
          previous=0;
     }
     else{
          previousScoreFromLocal=JSON.parse(previousScoreFromLocal);
          for(let j=0;j<previousScoreFromLocal.length;j++){
               let initial=previousScoreFromLocal[j][0];
               //alert(initial);
               let score=previousScoreFromLocal[j][1];
               //alert(score);
          }
          let n=previousScoreFromLocal.length;
          previous=previousScoreFromLocal[n-1][1];
     }
     document.getElementById("previousScore").textContent="Previous score: "+previous;
}

// will clear the local storage
clearBtn.addEventListener("click", function() {
     // alert("inside clearBtn.addEventListener");
     localStorage.setItem("previousScoreLocal", 0);
     document. location. reload();
});


// restart button click event listner (start from the beginning)
restartBtn.addEventListener("click", function() {
     // alert("inside restartBtn.addEventListener");
    document. location. reload();
});


function restartAndClear(){
     // alert("inside restartAndClear");
     restart.classList.add("sectionVisible");
}

// submit button click event listner
// will allow user to enter initial and submit score
// then page will reload
submitBtn.addEventListener("click", function() {
     // alert("inside submitBtn.addEventListener");
     var retrieveArray = localStorage.getItem("previousScoreLocal");
     var stored=[]
     if(retrieveArray!==null || retrieveArray!==0){
          stored = JSON.parse(retrieveArray);
     }
     initial=document.getElementById("initial").value;
     score=correct*5;
     var previousScoreLocal=[
          initial,
          score
     ];
     stored.push(previousScoreLocal);
     localStorage.setItem("previousScoreLocal",JSON.stringify(stored));
     result.style.display = "none";
     finalScore.style.display = "none";
     restartAndClear();
   });

// final score either time left 0 OR end of questions   
function displayResult(){
     // alert("inside displayResult");
     finalScore.classList.add("sectionVisible");
     document.getElementById("score").textContent="Final Score: You attended "+index+" questions. "+correct+" correct answers. Your score is "+correct*5 +" Enter your initials then press submit to keep your information";
}

// to display questions one by one and the 4 options
function displayQuestion(){
     // alert("inside displayQuestion");
     if(index<dataArray.answer.length && timeLeft>0){
          document.getElementById("questions").textContent=dataArray.question[index];
          var currentQuestionOptions=dataArray.options[index];
          opt1.textContent=currentQuestionOptions[0];
          opt2.textContent=currentQuestionOptions[1];
          opt3.textContent=currentQuestionOptions[2];
          opt4.textContent=currentQuestionOptions[3];
     }
     else{
          question.style.display = "none";
          displayResult();
     }
}

// function to manage time left
function timeDecrement(){
     // alert("inside timeDecrement");
     document.getElementById("timeLeft").textContent="Time left: "+timeLeft;
}

// to check the answer against user selection
function checkAnswer(fromUser){
     // alert("inside checkAnswer");
     if(fromUser===dataArray.answer[index]){
          correct++;
          document.getElementById("result").textContent="Correct";
     }
     else{
          if(timeLeft>0){
               timeLeft--;
          }
          wrong++;
          document.getElementById("result").textContent="Wrong";
          // timeDecrement();
     }
     index++;
     displayQuestion();
}

// checking the 4 options when user select one
opt1.addEventListener("click", function() {
     checkAnswer(opt1.textContent);
});
opt2.addEventListener("click", function() {
     checkAnswer(opt2.textContent);
});
opt3.addEventListener("click", function() {
     checkAnswer(opt3.textContent);
});
opt4.addEventListener("click", function() {
     checkAnswer(opt4.textContent);
});

// start button click event listner
// will display questions and options
startBtn.addEventListener("click", function() {
     // alert("inside startBtn.addEventListener");
     document.getElementById("questionsAndOptions").classList.add("sectionVisible");
     // init();
     // timeDecrement();

     start.style.display = "none";
     displayQuestion();
});

// application start here
init();
