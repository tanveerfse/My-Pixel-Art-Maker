// Select color input
var color = document.getElementById('colorPicker');

// creating table variable
var table = document.getElementById('pixelCanvas');

// forming the gird for drawing
var formingGrid = document.getElementById('sizePicker');

// Selection of size input
var height = document.getElementById("inputHeight");
var width = document.getElementById("inputWidth");

// eventListener added on formingGrid
// forming the grid by clicking on 'submit' by the user
formingGrid.addEventListener("click", function (e) {
    // making empty grid
    table.innerHTML = ""; 
    e.preventDefault();
    makeGrid();
});

// When size is submitted by the user, call makeGrid()
// your code goes here

function makeGrid() {
    for (var h = 0; h < height.value; h++) {
        var row = table.insertRow(h);
        for (var w = 0; w < width.value; w++) {
        var cell = row.insertCell(w);
        cell.addEventListener("click", function (eventChoice) {
            var colorChoice = color.value;
            this.style.backgroundColor = colorChoice;
            });
        }
    }
}
