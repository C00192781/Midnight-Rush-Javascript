// BOOL FOR WHETHER ENEMY IS ALIVE OR NOT
var enemyAlive = true;
var timerValue =0;
// MINIMUM AND MAXIMUM VALUES TO BE USED FOR SPAWNING PURPOSES
var min = 1;
var max= 3;
// DEFAULT SPEED
var speed = 5;


function Enemy(x, y , colour){
	this.x = x;
	this.y = y;
	this.colour = colour;
	this.width = 50;
	this.height = 50;
}

/** Draws a square.
 * @param {var} ctx his param is for the canvas
 */
Enemy.prototype.draw=function(ctx) {
	ctx.fillStyle = this.colour;
	ctx.fillRect(this.x, this.y, 100, 100);
};

// METHOD TO MAKE ENEMY MOVE
Enemy.prototype.Move=function(e) 
{
	this.y += speed;
}



