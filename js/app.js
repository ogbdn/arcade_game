// Enemies our player must avoid

const limitesX = [0, 505];
const limitesY = [0 ,606];

var Enemy = function(x,y,vl) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y=y;
    this.vl = vl;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x = this.x + (this.vl)*dt;
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function (){

    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 400;
    
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


Player.prototype.update = function () {

    

//    if (!isBetween(this.x, limitesX[0], limitesX[1])){
//     this.x = 200;
//    } else if (!isBetween(this.y, limitesY[0], limitesY[1])){
//     this.y = 400;
//    }
};


Player.prototype.handleInput = function (codigo_key) {

    switch (codigo_key) {

            case "left":
                this.x = this.x - 50;
                break;
            case "right":
                this.x = this.x + 50;
                break;
            case "up":
                this.y = this.y - 50;
                break;
            case "down":
                this.y = this.y + 50;
                break;
    };

}


// Now instantiate your objects.

var enemy1 = new Enemy(50,10, 30);
var enemy2 = new Enemy(0,100, 100);
var enemy3 = new Enemy(200,200, 150);

// Place all enemy objects in an array called allEnemies

var allEnemies = [enemy1, enemy2, enemy3];

// Place the player object in a variable called player

var player = new Player();





// checkCollisions = function(){

//     for (i=0;i<allEnemies.length;i++){

//         if ((player.x === allEnemies[i].x)&&(player.y === allEnemies[i].y)){
//             player.x = 200;
//             player.y = 400;
//           }
//     };
// };




// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

