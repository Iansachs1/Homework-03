// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordDisplay = document.getElementById("password");

const lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numbers = "0123456789".split("");
const specialCharacters = "! #$%&'()*+,-./:;<>=?@{}^_{}|~`".split("");
let passwordOptions;
let passwordLength;

// Write password to the #password input

function setPasswordLength() {

  let passwordLength = parseInt(prompt("Pick a password length between 8 and 128 characters."));

  while (passwordLength < 8 || passwordLength > 128) {
    alert("please pick a valid password length between 8 and 128 characters");
    passwordLength = parseInt(prompt("Pick a password length between 8 and 128 characters."));
  };
};

function defineCharacterTypes() {
  passwordOptions = [];
  useLowerCase  = confirm("Include lower case letters?");
  useUpperCase  = confirm("Include upper case letters?");
  useNumbers  = confirm("Include numbers?");
  useSpecialCharacters  = confirm("Include special characters?");

  while(useLowerCase === false && useUpperCase === false && useNumbers === false && useSpecialCharacters === false) {

    alert("Password must contain at least one type of character.");

    useLowerCase  = confirm("Include lower case letters?");
    useUpperCase  = confirm("Include upper case letters?");
    useNumbers  = confirm("Include numbers?");
    useSpecialCharacters  = confirm("Include special characters?");
  };

  if (useLowerCase === true) {
    passwordOptions.push.apply(passwordOptions, lowerCase);
  };

  if (useUpperCase === true) {
    passwordOptions.push.apply(passwordOptions, upperCase);
  };

  if (useNumbers === true) {
    passwordOptions.push.apply(passwordOptions, numbers);
  };

  if (useSpecialCharacters === true) {
    passwordOptions.push.apply(passwordOptions, specialCharacters);
  };
};

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }

  return array;
};

function writePassword () {
  passwordDisplay.innerHTML = "";
  setPasswordLength();
  defineCharacterTypes();
  for (let i = 0; i < passwordLength; i++) {
    shuffle(passwordOptions);
    passwordDisplay.innerHTML = passwordDisplay.value + passwordOptions[0];
  };
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);