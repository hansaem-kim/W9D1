const Game = require("./game")

function GameView(ctx) {
    this.game = new Game();
    this.ctx = ctx;

}

GameView.prototype.start = function(){
    const that = this;
    setInterval(function(){
        that.game.moveObjects();
        that.game.draw();
    }, 20)
}