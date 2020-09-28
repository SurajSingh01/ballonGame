let colors = ['yellow', 'red', 'blue', 'violet','green'];
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let heightOfBalloon = 200;
let widthOfBalloon = 100;
function createBalloon() {
	let div = document.createElement('div');
	let rand = Math.floor(Math.random() * colors.length);    //Random variable for color picking
	div.className = 'balloon balloon-' + colors[rand];       //appended class ballon-red,balloon-green etc...
	
	rand = Math.floor(Math.random() * (windowWidth - 100));    //Added random number to obtain different position on screen
	div.style.left = rand + 'px';							//Moving to left with specific pixel
	document.body.appendChild(div);
	animateBalloon(div);
}
function animateBalloon(elem) {
	let pos = 0; 											//position of the ballon
	let interval = setInterval(frame, 10); 					//function frame will be caled after every 10 millisecond
 
	function frame() {
		if(pos >=(windowHeight + 200)){						// condition for function will stop at top
			clearInterval(interval);
			deleteBalloon(elem);
		}
		else{
			pos++;
			elem.style.top = windowHeight - pos + 'px';
		}
	}

}

function deleteBalloon(elem){
	elem.remove();
}