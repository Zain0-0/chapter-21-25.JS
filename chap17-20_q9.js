var A = [24, 53, 78, 91, 12];

var smallest = A[0];

for (var i = 1; i < A.length; i++) {
  if (A[i] < smallest) {
    smallest = A[i];
  }
}

document.write("Arry list:"+A+"<br>");
document.write("The smallest number is" + smallest);
