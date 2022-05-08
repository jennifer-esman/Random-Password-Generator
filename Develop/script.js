// Assignment Code
var generateBtn = document.querySelector("#generate");
let randomPassword = [];

// Write password to the #password input
var passwordText = document.querySelector("#password");

//code for the content of the password and randomization
function writePassword() {
  function randomLowerAlpha() {
    var lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
    return lowerAlpha[Math.floor(Math.random() * lowerAlpha.length)];
  }
  function randomUpperAlpha() {
    var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return upperAlpha[Math.floor(Math.random() * upperAlpha.length)];
  }
  function randomNumber() {
    var number = "0123456789";
    return number[Math.floor(Math.random() * number.length)];
  }
  function randomSpecial() {
    var special = "~!@#$%^&*()_+=<>?';:[]{}";
    return special[Math.floor(Math.random() * special.length)]
  }
  //generating password function
  var lowerAlphaSelect = randomLowerAlpha();
  var upperAlphaSelect = randomUpperAlpha();
  var numberSelect = randomNumber();
  var specialSelect = randomSpecial();
  var password = generatePassword()

  //window content and questions
    function generatePassword(){
      randomPassword = [];
      var chooseLength = prompt("Please choose a password length between 8 and 128 characters. ");
      var chooseLowAlpha = confirm("Would you like to use lower case letters? ");
      var chooseUpAlpha = confirm("Would you like to use upper case letters? ");
      var chooseSpecial = confirm("Would you like to use Special Characters? ");
      var chooseNumber = confirm("Would you like to use numbers? ");
      //checking criteria for password to validate it
      if (isNaN(chooseLength)) {
        chooseLength = prompt("Password must be a number. ");
      }
      if (chooseLength <8) {
        chooseLength = alert("This password is too short, please try again. ");
        return;
      }
      if (chooseLength > 128) {
        alert("This password is too long. Please try again. ");
        return;
      }
      //for loop to randomize and iterate password
      for (let i = 0; i <chooseLength; i++) {
        if(chooseLowAlpha) {
          randomPassword.push(lowerAlphaSelect);
        }
        if(chooseNumber) {
          randomPassword.push(numberSelect);
        }
        if(chooseSpecial) {
          randomPassword.push(specialSelect);
        }
        if(chooseUpAlpha) {
          randomPassword.push(upperAlphaSelect);
        }
        function randomizeArray(selection) {
          var order = selection.length;
          while(0 !== order) {
            var randomOrder = Math.floor(Math.random() * order);
            order -= 1;
            var orderingArray = selection[order];
            selection[order] = selection[randomOrder];
            selection[randomOrder] = orderingArray;
          }
          return selection;
        }
        var pass = randomPassword.slice(0, chooseLength);
        passwordText.innerHTML = pass.join("");
        randomizeArray(randomPassword);
      }

    }
}
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);


