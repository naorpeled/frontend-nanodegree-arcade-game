/* Enemy class */
class Enemy {
	constructor(x=250, y=250, speed=50){
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.sprite = 'images/enemy-bug.png';
		
        this.width= 101;
		this.height= 170;
	}
	
	update(dt){
		this.x += dt*this.speed*1.15;
		checkCollision();
		//Checking for walls collision
		if ((this.x+this.width) >= 505) {
			this.x = 0;
		}
	}
	render(){
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}
}

/* Player class */
class Player {
	constructor(x=250, y=250, speed=50){
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.sprite = 'images/char-princess-girl.png';
	}
	update(dt){
	
	}
	render(){
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}
	// Handle key press | player movement control
	handleInput(keyType){
		if(keyType == "up"){
			this.y-= this.speed;
		}else if(keyType=="left"){
			this.x -= (this.speed+15);
		}else if(keyType=="right"){
			this.x += (this.speed+15);
		}else if(keyType=="down"){
			this.y+= this.speed;
		}

	}
}
/* Collision check - checks if the player has collided with an enemy */
function checkCollision(){
	allEnemies.forEach((enemy)=>{
		if(player.x >= (enemy.x-65) &&
		player.x<=(enemy.x+65) &&
		player.y>=(enemy.y-50)&&
		player.y<=(enemy.y+50)){
			player.x = 200;
			player.y = 390;
		}
	});
	if(player.x<-25 || player.x>=500
	|| player.y>=440){
		player.x = 200;
		player.y = 390;
	}else if(player.y<= -50){
		console.log('You won!');
		player.x = 200;
		player.y = 390;
	}
}
/* Main */
let allEnemies = []
let player = new Player(200, 390, 85);

let enemy1 = new Enemy(0, 225, 50);
let enemy2 = new Enemy(0, 145, 50);
let enemy3 = new Enemy(0, 65, 50);

allEnemies.push(enemy1);
allEnemies.push(enemy2);
allEnemies.push(enemy3);

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

   player.handleInput(allowedKeys[e.keyCode]);
});