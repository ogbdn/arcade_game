// Enemies our player must avoid
const limitesX = [-50, 450];
const limitesY = [0, 450];

var Enemy = function (x, y, vl) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.vl = vl;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    this.x = this.x + (this.vl) * dt;
    if (this.x >= limitesX[1]) {
        this.reset();
    }
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.reset = function () {

    this.x = -10;
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function () {
    this.initX = 200;
    this.initY = 380;
    this.passoX = 100;
    this.passoY = 80;

    this.sprite = 'images/char-boy.png';
    this.x = this.initX;
    this.y = this.initY;

};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


Player.prototype.update = function () {

    if (this.y <= -50) {

        this.reset();
    }

};


Player.prototype.handleInput = function (codigo_key) {

    switch (codigo_key) {

    case "left":
        if ((this.x - this.passoX) > limitesX[0]) {
            this.x = this.x - this.passoX;
        }
        break;
    case "right":
        if ((this.x + this.passoX) < limitesX[1]) {
            this.x = this.x + this.passoX;
        }
        break;
    case "up":
        this.y = this.y - this.passoY;
        break;
    case "down":
        if ((this.y + this.passoY) < limitesY[1]) {
            this.y = this.y + this.passoY;
        }
        break;
    }

};

Player.prototype.reset = function () {

    this.x = 200;
    this.y = 375;
};



// Now instantiate your objects.

var enemy1 = new Enemy(-10, 215, 30);
var enemy2 = new Enemy(-10, 135, 100);
var enemy3 = new Enemy(-10, 55, 150);

// Place all enemy objects in an array called allEnemies

var allEnemies = [enemy1, enemy2, enemy3];

// Place the player object in a variable called player

var player = new Player();




var checkCollisions = function () {

    for (i = 0; i < allEnemies.length; i++) {


        if (((player.x > allEnemies[i].x - 45) && (player.x < allEnemies[i].x + 45)) && ((allEnemies[i].y === player.y))) {
            player.reset();
        }
    }
};




// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left'
        , 38: 'up'
        , 39: 'right'
        , 40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
