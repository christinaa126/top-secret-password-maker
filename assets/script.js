//variable to add generated password to HTML page
var generateBtn = document.querySelector("#generate");
 
//define variables for password options
var lowercase = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P', 'Q','R','S','T','U','V','W','X','Y','Z',];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChars =  ['@','%','+','\\','/',"'",'!', '#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];


// function returns a password string consisting of variaous characters based on user prompts
function generatePassword() {

  var password = "password";
// Variable to store length of password from user input
  var passwordLength = (window.prompt("How many characters would you like your password to contain?"));
// IF password < 8 OR > 128 characters, alert user
    if (passwordLength<8 || passwordLength> 128){
      alert("Password should be from 8 to 128 characters long.");
    } else {
      var combineOptions= [];
//Confirm if user would like password to contain lowercase letters  
    var includeLower = window.confirm("Would you like to use lowercase letters?");
    if (includeLower){
        combineOptions = combineOptions.concat(lowercase);
     }  
//Confirm if user would like password to contain uppercase letters 
   var includeUpper = window.confirm("Would you like to use uppercase letters?");
    if (includeUpper){
        combineOptions = combineOptions.concat(uppercase);
      } 
//Confirm if user would like password to contain special characters 
    var includeSpecial = window.confirm("Would you like to use special characters?");
    if (includeSpecial){
        combineOptions = combineOptions.concat(specialChars);
        } 
//Confirm if user would like password to contain numbers         
    var includeNumbers = window.confirm("Would you like to use numbers?");
    if (includeNumbers){
        combineOptions = combineOptions.concat(numbers);
          } 
// If user doesn't select any of the options, alert user one option must be chosen
    if (!includeSpecial && !includeNumbers && !includeUpper && !includeLower) {
        window.alert("At least one of the character types should be selected, please try again.");
        } else {
     var generatedPassword = "";
//generate password using for loop and math.random
      for (var i = 0; i < passwordLength; i++) {
            generatedPassword = generatedPassword + combineOptions [Math.floor(Math.random() * combineOptions.length)];
          }
      
          password = generatedPassword;
          }
      
        }
      
  return password;
      }
    


// Write password to the password variable
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




