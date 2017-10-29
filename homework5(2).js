const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const backGroundImg = new Image();
backGroundImg.src = 'http://i1.wp.com/www.frebers.com/wp-content/uploads/2016/03/game-background-p3-3.jpg?fit=930%2C700'

const ninjaImg = new Image();
ninjaImg.src = 'http://braincrook.com/wp-content/uploads/2015/04/Ninja1024x1024-1024x1024.png'

const badGuyImg = new Image();
badGuyImg.src = 'https://vignette.wikia.nocookie.net/twitterponies/images/6/60/Ninja_Star_Cutie_Mark.png/revision/latest?cb=20130308024924'


const floorY = canvas.height - 180;
const maxJupmHeight = floorY - 140;

const gameData = {
	hero: {
      x: 300,
      y: floorY,
      img: ninjaImg,
      width: 100,
      height: 120,
      xDelta: 0,
      yDelta: 0,
	},

	badGuys: [
       {
        x: 750,
        y: floorY,
        img: badGuyImg,
        width: 50,
        height: 60,
        xDleta: 1,
        yDelta: 1,
       }
	]
};

const draw = function() {
	ctx.drawImage(backGroundImg, 0, 0, canvas.width, canvas.height);
	

	const hero = gameData.hero;
	ctx.drawImage(hero.img, hero.x, hero.y, hero.width, hero.height);


const badGuy = gameData.badGuys[0];
	ctx.drawImage(badGuy.img, badGuy.x, badGuy.y, badGuy.width, badGuy.height);

};

const updateData = function() {
	const hero = gameData.hero;

	if(hero.yDelta !== 0) {
		hero.y = hero.y - hero.yDelta;
		if(hero.y <= maxJupmHeight) {
			hero.yDelta = (-hero.yDelta);
		} else if(hero.y > floorY) {
			hero.y = floorY;
			hero.yDelta = 0;
		}
	} 





	const badGuy = gameData.badGuys[0];

};

const loop = function() {
	draw();
    updateData();
	requestAnimationFrame(loop);
};

loop();

const leftKey = 37;
const upKey = 38;
const rightKey = 39;
const downKey = 40;

document.addEventListener('keydown', function(event) {
	const hero = gameData.hero;
	if(event.keyCode === rightKey) {
        hero.x = hero.x + 10;
        if(hero.x >= canvas.width-hero.width) {
        	hero.x = 0;
        }
  	} else if(event.keyCode === leftKey) {
  		hero.x = hero.x - 10;
  		if(hero.x <= 0) {
  			hero.x = canvas.width-hero.width;
  		}
  	} else if(event.keyCode === upKey) {
  		
  		if(hero.yDelta === 0) {
  		  hero.yDelta = 3;
  		  hero.y = hero.y-hero.yDelta;
  		}
  	}
}, false);
