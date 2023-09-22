var userInput = prompt("Enter a text:");

function toTitleCase(input) {
  return input.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
    return match.toUpperCase();
  });
}

var titleCaseInput = toTitleCase(userInput);

document.write("User input: " + userInput + "<br>");
document.write("Title case : " + titleCaseInput);
