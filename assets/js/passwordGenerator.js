// Assignment Code

//global letiables
let possibleCharacters;
let passwordLength;
let generateBtn = document.getElementById("generateBtn");
let tryAgainBtn = document.getElementById("tryAgainBtn");
// generateBtn.disabled=true;

//getting input from user and setting possible characters
function getInputFromUser(){
  let len=true;
  possibleCharacters="";
  let upperCase=document.getElementById("chkUpper").checked;
  let LowerCase=document.getElementById("chkLower").checked;
  let numbers=document.getElementById("chkNumber").checked;
  let symbols=document.getElementById("chkChars").checked;
  passwordLength=document.getElementById("length").value;
  if(passwordLength==="" || passwordLength<8 || passwordLength>25){
    len=false;
    document.getElementById("requireLengthMsg").textContent="You should select a number between 8 and 25"
  }
  else{
    document.getElementById("requireLengthMsg").textContent=""
  }
  if(LowerCase){
    possibleCharacters="abcdefghijklmnopqrstuvwxyz";
  }
  if(numbers){
      possibleCharacters=possibleCharacters+"1234567890";
  }
  if(upperCase) {
    possibleCharacters=possibleCharacters+"ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if(symbols){
    possibleCharacters=possibleCharacters+"!@#$%^&*(){}[]<>?";
  }
  if(possibleCharacters==="") {
    document.getElementById("requiredMsg").textContent="ERROR!!! You should select one checkbox"
  }
  else{
    document.getElementById("requiredMsg").textContent="";
  }
  if(possibleCharacters!=="" && len) {
    writePassword(); 
  }
}

//generating a password by selecting random characters from possible characters
function generatePassword(){
  let length=possibleCharacters.length-1;
  let randomCharacters='';
  for(let i=0;i<passwordLength;i++){
    randomNo=Math.floor((Math.random())*length);
    randomCharacters=randomCharacters+possibleCharacters[randomNo];
  }
  return randomCharacters;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#generatedPwd");
  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", getInputFromUser);

tryAgainBtn.addEventListener("click", function reload(){
  document.location.reload();
});
