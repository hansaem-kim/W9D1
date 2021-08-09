const Game = require("./game")

function GameView(ctx) {
    this.game = new Game();
    this.ctx = ctx;
}

GameView.prototype.start = function(){
    const that = this;
    // setInterval(function(){
    //     that.game.moveObjects();
    // }, 20)
    // setInterval(function(){
    //     that.game.draw(that.ctx);
    // }, 20)
    this.game.draw(this.ctx);
    setInterval((this.game.moveObjects.bind(this.game)), 20);
    setInterval((this.game.draw.bind(this.game, this.ctx)), 20);
}

module.exports = GameView;