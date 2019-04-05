class Enemy {
	constructor(x=250, y=250, speed=50){
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.sprite = 'images/enemy-bug.png';
	}
	update(dt){
		this.x += dt*this.speed*2;
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
		this.sprite = 'images/char-boy.png';
	}
	update(dt=1){
	
	}
	render(){
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}
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

/* Main */
let allEnemies = []
let player = new Player(200, 390, 85);

let enemy = new Enemy(0, 225, 50);

allEnemies.push(enemy);

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

   player.handleInput(allowedKeys[e.keyCode]);
});