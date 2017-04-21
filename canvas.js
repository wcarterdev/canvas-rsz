var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillStyle = 'rgba(255, 0, 0, 0.5)';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'rgba(0, 0, 255, 0.5)';
c.fillRect(100, 500, 50, 50);
c.fillStyle = 'rgba(0, 255, 0, 0.5)';
c.fillRect(200, 700, 40, 20);
console.log(canvas);
console.log(document.defaultView);

//Line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.lineTo(500, 100);
c.strokeStyle = "#fa34a3";
c.stroke();


//Arc / circle
for (var i = 0; i < 3; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  c.beginPath();
  c.arc(x, y, 30, 0, Math.PI * 2, false);
  c.strokeStyle = 'blue';
  c.stroke();
}
