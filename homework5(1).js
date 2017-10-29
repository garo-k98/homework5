const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const rand = function(num) {
	return Math.floor(Math.random() * num) + 1;
};

const  points = [];
const createPoints = function(count, canvasWidth, canvasHeight) {

	const rec = function(index)
		{
			if(index === count) return;
			points[index] = 
			{	
				x: rand(canvasWidth - 50) ,
				y: rand(canvasHeight - 50) ,
				width  : 50,
				height : 50,
				xDelta : 3,
				yDelta : 3,
				color :0 
			}
			rec(index + 1);
		};
		rec(0);
		return points;
	
};

createPoints(10 , canvas.width , canvas.height)

const draw = function()
{
	context.clearRect(0, 0, canvas.width, canvas.height);
	const positionRandom = function(num)
	{
	if (num === points.length )
	{
		return ;
	}
	else
	{	
	context.fillStyle = points[num].color;
	context.fillRect(points[num].x, points[num].y, points[num].width, points[num].height);
	}
	
	positionRandom(num + 1);
	}
	
	
positionRandom(0);	
}	
const loop = function()
{
	draw();
}

loop();	