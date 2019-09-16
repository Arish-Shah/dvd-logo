let canv = document.querySelector('canvas');
let ctx = canv.getContext('2d');
let dvd = document.querySelector('img');
let randomColor = '#ff0000';

let velocities = [-3.5, 3.5];
let xvelocity = velocities[Math.floor(Math.random() * velocities.length)];
let yvelocity = velocities[Math.floor(Math.random() * velocities.length)];
let xpos = Math.floor(Math.random() * canv.width);
let ypos = Math.floor(Math.random() * canv.height);

const setImageDimensions = () => {
	if (window.innerWidth <= 768) {
		dvd.width = 130;
		let smallVelocities = [-2, 2];
		xvelocity = smallVelocities[Math.floor(Math.random() * 2)];
		yvelocity = smallVelocities[Math.floor(Math.random() * 2)];
		xpos = Math.floor(Math.random() * 200);
		ypos = Math.floor(Math.random() * 600);
	}
};

const setDimension = () => {
	setImageDimensions();
	canv.width = window.innerWidth;
	canv.height = window.innerHeight;
};

window.onload = window.onresize = setDimension;

const selectRandomColor = currentColor => {
	let colors = [
		'#ff0000',
		'#00ff00',
		'#0000ff',
		'#ffff00',
		'#ff00ff',
		'#00ffff',
		'#9400D3'
	];
	while (currentColor == randomColor) {
		randomColor = colors[Math.floor(Math.random() * colors.length)];
	}
};
selectRandomColor(randomColor);

const movement = () => {
	if (xpos < 0 || xpos > canv.width - dvd.width) {
		selectRandomColor(randomColor);
		xvelocity = -xvelocity;
	}
	if (ypos < 0 || ypos > canv.height - dvd.height) {
		selectRandomColor(randomColor);
		yvelocity = -yvelocity;
	}

	xpos += xvelocity;
	ypos += yvelocity;
};

const draw = () => {
	ctx.clearRect(0, 0, canv.width, canv.height);
	ctx.fillStyle = randomColor;
	ctx.fillRect(xpos + 1, ypos + 1, dvd.width - 2, dvd.height - 2);
	ctx.drawImage(dvd, xpos, ypos, dvd.width, dvd.height);
	movement();
};

setInterval(draw, 1000 / 60);
