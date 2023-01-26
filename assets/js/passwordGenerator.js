// Assignment Code

//global letiables
let possibleCharacters;
let passwordLength;
let generateBtn = document.getElementById("generateBtn");


//getting input from user and setting possible characters
function getInputFromUser(){
  possibleCharacters="";
  let upperCase=document.getElementById("chkUpper").checked;
  let LowerCase=document.getElementById("chkLower").checked;
  let numbers=document.getElementById("chkNumber").checked;
  let symbols=document.getElementById("chkChars").checked;
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
    // if(possibleCharacters==="") {
    //   getInputFromUser();
    // }
     if(possibleCharacters!=="") {
      writePassword(); 
    }
}

//checking whether the password length got from user is a valid number
// and it is between 8 and 128
// function isValid(len){
//   if(len<25 && len>=8){
//     passwordLength===len;
//     return true;
//   }
//   else{
//     getPasswordLength(); 
//   }  
// }


//generating a password by selecting random characters from possible characters
function generatePassword(){
  passwordLength=document.getElementById("length").value;
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
