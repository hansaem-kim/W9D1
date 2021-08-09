const Asteroid = require("./asteroid")

const DIM_X = window.innerWidth; 
const DIM_Y = window.innerHeight; 
NUM_ASTEROIDS = 10;

function Game() {
    this.asteroids = [];
    for (let i = 0; i<NUM_ASTEROIDS; i++){
        this.addAsteroids();
    }
    
}

Game.prototype.addAsteroids = function() {
    this.asteroids.push(new Asteroid(this.randomPosition()));
}

Game.prototype.randomPosition = function() {
    return [Math.floor(Math.random() * DIM_X), Math.floor(Math.random() * DIM_Y)];
}

Game.prototype.draw = function(ctx) {
    ctx.clearRect(0,0, DIM_X, DIM_Y);
    this.asteroids.forEach(ele => ele.draw(ctx));
}

Game.prototype.moveObjects = function(){
    console.log("Im working")
    this.asteroids.forEach(ele => ele.move);
}

module.exports = Game;