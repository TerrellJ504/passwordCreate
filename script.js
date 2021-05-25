// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var choice_set = ""
  alert("Generating password...")
  // Take input from user on how many charaters they want their password to be.
  var total_chars = prompt("How many charaters do you want?")
  // Turn the string I got from the user into a number
  var total_chars_number = parseInt(total_chars)
  // If the length of charaters is less than 8, tell the user the length is too short
  if (total_chars_number > 0) {
    alert(total_chars_number);
  }
  // If the length of charaters is greater than 128, tell them the input is too long
  if (total_chars_number > 128) {
    alert("Please enter text upto 128 Charecters");
  }
  // Take input from user on if they want capital letters
  var need_capitals = window.confirm("if they want capital letters: ");
  if (need_capitals) {
    alert("You chose to add capital letters")
    choice_set += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  } else {
    alert("You chose not to use capital letters.")
  }
  // Take input from user on if they want symbols
  var want_symbols = window.confirm("if they want symbols: ");
  if (want_symbols) {
    alert("You chose to add symbols")
    choice_set += "!@#$%^&*()_+"
  } else {
    alert("You chose not to use symbols.")
  }
  // Take input from user on if they want numbers
  var want_numbers = window.confirm("if they want numbers: ");
  if (want_numbers) {
    alert("You chose to add numbers")
    choice_set += "1234567890"
  } else {
    alert("You chose not to use numbers.")
  }
  // Take input from user on lower case letters
  var want_lowercase = window.confirm("if they want capital letters: ");
  if (want_lowercase) {
    alert("You chose to add lower case")
    choice_set += "abcdefghijklmnopqrstuvwxyz"
  } else {
    alert("You chose not to use lower case.")
  }
  let out_password = ""
  // Choose random letters out of choice set
  for(var i = 0; i < total_chars_number; i++){
    out_password += choice_set.charAt(Math.floor(Math.random() * choice_set.length))
  }






  return out_password


}