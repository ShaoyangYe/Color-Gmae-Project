// Create a list of colors.
var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor

for (var i = 0; i < squares.length; i++) {
	// Add initial colors to squares.
	squares[i].style.backgroundColor = colors[i];

	// Add click listeners to aquares.
	squares[i].addEventListener("click", function(){
		// Grab color from clicked square.
		var clickedColor = this.style.backgroundColor;
		// Compare color to pickedColor.
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";
		}
	});
}

function changeColors(color){
	// Loop through all squares.
	for (let i = 0; i < squares.length; i++) {
		// Change each color to match given color.
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// Make a array.
	var arr = [];

	// Add num random colors to array.
	for (let i = 0; i < num; i++) {
		// Get random color and push into arr.
		arr.push(randomColor());
	}


	// Return that array.
	return arr;
}

function randomColor(){
	// Pick a red from 0 - 255.
	var r = Math.floor(Math.random() * 256);
	// Pick a green from 0 - 255.
	var g = Math.floor(Math.random() * 256);
	// Pick a blue from 0 - 255.
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}