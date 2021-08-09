console.log("Webpack is working!")

const MovingObject = require("./moving_object.js");



document.addEventListener("DOMContentLoaded", function() {

    const testCircle = new MovingObject({
        pos: [50, 50],
        vel: [3, 4],
        radius: 25,
        color: "green"
    })
        

    const canvas = document.getElementById("game-canvas");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");

    testCircle.draw(ctx);

})

window.MovingObject = MovingObject;