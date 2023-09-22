//question1:
var multiDimensionalArray = [];

//question2:
var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
  ];
  
  document.write("<pre>");
  
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      document.write(matrix[i][j] + " ");
    }
    document.write("<br>");
  }
  
  document.write("</pre>");
  
