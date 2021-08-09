const Util = require("./utils")

const defaultAsteroid = {
    color: "blue",
    radius: 17
}

function Asteroid(argument){
    new MovingObject({
        pos: argument,
        vel: Util.randomVec(10),
        radius: defaultAsteroid["radius"],
        color: defaultAsteroid["color"]
    })
}

