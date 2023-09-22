var username = prompt("Enter a username:");

function isSpecialSymbol(char) {
  var charCode = char.charCodeAt(0);
  return charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64;
}

function validateUsername(username) {
  for (var i = 0; i < username.length; i++) {
    if (isSpecialSymbol(username.charAt(i))) {
      return false;
    }
  }
  return true;
}

if (validateUsername(username)) {
  document.write("Username is: " + username);
} else {
  alert("Please enter a valid username.");
}
