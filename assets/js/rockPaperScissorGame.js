let selectBtn=document.getElementById("selectBtn");

var option="RPS";
var scoreCard={
     tie: 0,
     user: 0,
     computer: 0
};

// display the final scoreboard   
function finalScore(){
     document.getElementById("userWon").textContent="You won "+(scoreCard.user)+ " times";
     document.getElementById("computerWon").textContent="Computer won "+(scoreCard.computer)+ " times";
     document.getElementById("tie").textContent="There were "+(scoreCard.tie)+ " ties";
}

// taking user input and checking it against computer's random selection
function startGame(){
     let userRock=document.getElementById("userRock").checked;
     let userPaper=document.getElementById("userPaper").checked;
     let userScissor=document.getElementById("userScissor").checked;
     let computerRock=document.getElementById("computerRock");
     let computerPaper=document.getElementById("computerPaper");
     let computerScissor=document.getElementById("computerScissor");
     let result=document.getElementById("result");
     let error=document.getElementById("error");
     let newListEl=document.createElement("li");
     let text;
     let validInput=true;
     error.textContent="";
     if(userRock){
          userInput="R";
     }
     else if(userPaper){
          userInput="P";
     }
     else if(userScissor){
          userInput="S";
     }
     else{
          error.textContent="Please select Rock / Paper / Scissor";
          validInput=false;
     }
     if(validInput){
          var rand=Math.floor(Math.random()*(option.length));
          var computer=option[rand];
     
          if(computer==="R"){
               computerRock.checked=true;
          }
          else if(computer==="P"){
               computerPaper.checked=true;
          }
          else if(computer==="S"){
               computerScissor.checked=true;
          }
          if(userInput===computer){
               scoreCard.tie++;
               text="It is a tie";
          }
          else if((userInput==='R' && computer==='S')||(userInput==='S' && computer==='P') ||(userInput==='P' && computer==='R')){
               scoreCard.user++;
               text="You WON!!!";
          }
          else{
               scoreCard.computer++;
               text="SORRY you lost";
          }
     
          newListEl.textContent=text+`(You selected ${userInput} and computer selected ${computer})`;  
          result.appendChild(newListEl);
          finalScore(); 
     }   
}   


//function call button event listner
selectBtn.addEventListener("click",startGame);

document.getElementById("restartBtn").addEventListener("click",function(){
     document.location.reload()
});


