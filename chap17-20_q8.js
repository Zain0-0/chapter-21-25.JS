var A = [24, 53, 78, 91, 12];

var largest = A[0];

for (var i = 1; i < A.length; i++) {
  if (A[i] > largest) {
    largest = A[i]; 
  }
}

document.write("Arry list:"+A+"<br>");
document.write("The largest number is " + largest);
