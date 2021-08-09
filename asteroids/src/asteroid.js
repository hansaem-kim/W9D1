const Util = require("./utils")
const MovingObject = require("./moving_object")

const defaultAsteroid = {
    color: "blue",
    radius: 17
}

function Asteroid(argument){
    MovingObject.call(this,{
        pos: argument,
        vel: Util.randomVec(10),
        radius: defaultAsteroid["radius"],
        color: defaultAsteroid["color"]
    } )
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;