class Enemy {
	constructor(x=250, y=250, speed=50){
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.sprite = 'images/enemy-bug.png';
	}
	update(dt){
		this.x = dt*this.speed;
	}
	render(){
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}
}

/* Player */
class Player {
	constructor(x=250, y=250, speed=50){
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.sprite = 'images/enemy-bug.png';
	}
	update(dt){
		this.x = dt*this.speed;
	}
	render(){
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}
}

/* Main */
let allEnemies = []
let player = new Player(90, 90, 1);
let enemy = new Enemy(0, 0, 1);

allEnemies.push(enemy);

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

   // player.handleInput(allowedKeys[e.keyCode]);
});