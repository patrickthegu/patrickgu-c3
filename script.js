// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate password based on input parameters
function generatePassword(passwordLength, includelc, includeuc, includenum, includesymb) {
  var parameters = [];
  var password = [];

  // functions to generate a random character for each type
  function lowerCaseChars(includelc) {
    if (includelc) {
      return String.fromCharCode (Math.floor(Math.random() * 26) + 97);
      };
    };
  function upperCaseChars(includeuc) {
    if (includeuc) {
    return String.fromCharCode (Math.floor(Math.random() * 26) + 65);
    };
  };
  function numbers(includenum) {
    if (includenum) {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    };
  };
  function symbols(includesymb) {
    if(includesymb) {
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
    };
  }

  // conditional statements for which input parameters were selected and creates array of functions
if (includelc) {
      parameters.push(lowerCaseChars);
    }
if (includeuc) {
    parameters.push(upperCaseChars);
}
if (includenum) {
    parameters.push(numbers);
}
if (includesymb) {
    parameters.push(symbols)
};

// fill password based on specified length
for (var i = 0; i < passwordLength; i++) {
  password[i] = parameters[Math.floor(Math.random()*parameters.length)](true);
};

return password;
};
 


// Write password to the #password input
function writePassword() { 
  var passwordLength = window.prompt("Please enter Password length between 8 and 128");
// Select parameters and alert if invalid input
  if (isNaN(passwordLength)) {
    alert("Password length needs to be a number");
  };
  if ((passwordLength < 8) || (passwordLength > 128)) {
    alert("Password length not valid");
    return;
  };

  var includelc = confirm("Do you want to include lower case letters");
  var includeuc = confirm("Do you want to include UPPER CASE LETTERS");
  var includenum = confirm("Do you want to include numbers 0123456789");
  var includesymb = confirm("Do you want to include symbols? ");
  if (((includelc || includeuc)||(includenum || includesymb)) === false) {
    alert("Please select at least one password parameter");
  };

  var password = generatePassword(passwordLength, includelc, includeuc, includenum, includesymb);
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password.join('');

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
