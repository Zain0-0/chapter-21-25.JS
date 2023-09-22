var A = ["cake", "apple pie", "cookie", "chips", "patties"];


var userInput = prompt("Welcome to ABC bakery. What do you want to order sir/ma'am?");


userInput = userInput.toLowerCase();

var found = false;
var foundIndex = -1;
for (var i = 0; i < A.length; i++) {
  var currentItem = A[i].toLowerCase();
  
  if (currentItem === userInput) {
    found = true;
    foundIndex = i;
    break;
  }
}
if (found) {
  alert(userInput + " is available at index " + foundIndex + " in our bakery.");
} else {
  alert("We are sorry."+userInput + " is not available in our bakery.");
}
