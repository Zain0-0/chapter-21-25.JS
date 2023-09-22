var inputString = "The quick brown fox jumps over the lazy dog";

var lowercaseInput = inputString.toLowerCase();

var wordToSearch = "the";

function countOccurrences(input, word) {
  var words = input.split(" ");
  var count = 0;
  
  for (var i = 0; i < words.length; i++) {
    if (words[i] === word) {
      count++;
    }
  }
  
  return count;
}

var occurrences = countOccurrences(lowercaseInput, wordToSearch);

document.write("Text: " + inputString + "<br>");
document.write("There are " + occurrences+" Occurrences  of the word 'the'");
