var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll('.square');
var colorDis = document.getElementById('colorDis');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var hardButton = document.querySelector('#hard');
var easyButton = document.querySelector('#easy');
var modeButton = document.querySelectorAll('.mode');

init();

function init(){
	
	setupModeButtons();
	setupSquares();
	reset();
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
			squares[i].addEventListener('click', function(){
				var clickedColor = this.style.backgroundColor;
				
				if(clickedColor === pickedColor){
				messageDisplay.textContent = 'Correct!';
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = 'Play Again?';
			} else {
				this.style.background = '#232323';
				messageDisplay.textContent = 'Try Again';
			}
		});
	}		
}

function setupModeButtons(){
	for(var i = 0; i < modeButton.length; i++){
		modeButton[i].addEventListener('click', function(){
			modeButton[0].classList.remove('selected');
			modeButton[1].classList.remove('selected');
			this.classList.add('selected');
			
			this.textContent === 'Easy' ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDis.textContent = pickedColor;
	messageDisplay.textContent = '';
	resetButton.textContent = 'New Colors';

	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = 'block';
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = 'none';
		} 
	}
	h1.style.backgroundColor = 'steelblue';
}
resetButton.addEventListener('click', function(){
	reset();
});

function changeColors(color){
	for( var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor (Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr = [];
	// repeat num times
	for(var i = 0; i < num; i++){
		arr.push(randomColor())

	}
	// return that array
	return arr;

}

function randomColor(){
	// pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	// pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
	
}











