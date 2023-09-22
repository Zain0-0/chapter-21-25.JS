var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var userInput = prompt("Welcome to ABC bakery. What do you want to order sir/ma'am?");

function searchItemWithIndex(array, item) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].toLowerCase() === item.toLowerCase()) {
      return i; 
    }
  }
  return -1;
}

var foundIndex = searchItemWithIndex(A, userInput);

if (foundIndex !== -1) {
  document.write(userInput + " is available at index " + foundIndex+" in our bakery.");
} else {
  alert("We are sorry."+userInput + " is not available in our bakery.");
}
