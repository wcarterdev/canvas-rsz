var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
c.fillStyle="#ff6f69";
c.fillRect(0,0,canvas.width, canvas.height);

/*c.fillStyle = 'rgba(255, 0, 0, 0.5)';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'rgba(0, 0, 255, 0.5)';
c.fillRect(100, 500, 50, 50);
c.fillStyle = 'rgba(0, 255, 0, 0.5)';
c.fillRect(200, 700, 40, 20);
console.log(canvas);
console.log(document.defaultView);*/

//Line
/*c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.lineTo(500, 100);
c.strokeStyle = "#fa34a3";
c.stroke();*/


//Arc / circle
/*for (var i = 0; i < 3; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  c.beginPath();
  c.arc(x, y, 30, 0, Math.PI * 2, false);
  c.strokeStyle = 'blue';
  c.stroke();
}
*/



function Circle(x, y, r, dx, dy)
{
	this.x = x;
	this.y = y;
	this.r = r;
	this.dx = dx;
	this.dy = dy;

	this.draw = function() {
		c.beginPath();
		c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
		c.strokeStyle = '#FFC5C3';
		c.fill();
		c.stroke();
	}

	this.update = function() {
		if (this.x + this.r > innerWidth || (this.x - this.r) < 0) {
			this.dx = -this.dx;
		}

		if (this.y + this.r > innerHeight || (this.y - this.r) < 0) {
			this.dy = -this.dy
		}

		this.x += this.dx;
		this.y += this.dy;

		this.draw();
	}
}



var circleArray = [];

for (var i = 0; i < 100; i++) {
	var r = 30;
	var x = Math.random() * (innerWidth - r * 2) + r;
	var y = Math.random() * (innerHeight - r * 2) + r;
	var dx = (Math.random() - 0.5) * 2;
	var dy = (Math.random() - 0.5) * 2;

	circleArray.push(new Circle(x, y, r, dx, dy));
}

console.log(circleArray);


function animate()
{
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);

	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}
}

animate();
