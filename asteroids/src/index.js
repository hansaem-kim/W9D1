console.log("Webpack is working!")

const MovingObject = require("./moving_object.js");
const GameView = require("./game_view.js")



document.addEventListener("DOMContentLoaded", function() {

    const canvas = document.getElementById("game-canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");

    const gameView = new GameView(ctx);
    gameView.start();

})

window.MovingObject = MovingObject;