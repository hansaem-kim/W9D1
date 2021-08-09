
function MovingObject(option_obj){
    this.pos = option_obj["pos"];
    this.vel = option_obj["vel"];
    this.radius = option_obj["radius"];
    this.color = option_obj["color"];
}

module.exports = MovingObject;

Circle.prototype.render = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
  
    ctx.arc(
      this.centerX,
      this.centerY,
      this.radius,
      0,
      2 * Math.PI,
      false
    );
  
    ctx.fill();
  };
  
  module.exports = Circle;
  