function containaphlnum(str) {
    var hasAlphabets = false;
    var hasNumbers = false;
  
    for (var i = 0; i < str.length; i++) {
      var charCode = str.charCodeAt(i);
  
      if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
        hasAlphabets = true;
      } else if (charCode >= 48 && charCode <= 57) {
        hasNumbers = true;
      }
  
      if (hasAlphabets && hasNumbers) {
        return true;
      }
    }
  
    return false;
  }
  
  function validatePassword(password) {
    if (password.length < 6 || !containaphlnum(password) || !isNaN(password[0])) {
      return false;
    }
    return true;
  }
  
  var userPassword = prompt("Please enter a password that contains alphabets and numbers. it must start with an alphabet and be greater than 6 characters");
  document.write("Enterd password:"+userPassword+"<br>")
  if (validatePassword(userPassword)) {
    document.write("Password is valid!");
  } else {
    document.write("password can not begin with a number or less than 6 characters. <br> Please enter a valid password.");
  }
  