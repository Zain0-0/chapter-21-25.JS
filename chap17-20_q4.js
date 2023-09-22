var tableNumber = prompt("Enter the number for the multiplication table:");
var tableLength = prompt("Enter the length of the multiplication table:");

if (!isNaN(tableNumber) && !isNaN(tableLength)) {
  document.write(`Multiplication table for ${tableNumber} (up to ${tableLength} terms):<br>`);

  for (var i = 1; i <= tableLength; i++) {
    var result = tableNumber * i;
    document.write(`${tableNumber} x ${i} = ${result}<br>`);
  }
} else {
  document.write("Invalid input. Please enter valid numbers.");
}
