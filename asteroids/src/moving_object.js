function MovingObject(option_obj){
  this.pos = option_obj["pos"];
  this.vel = option_obj["vel"];
  this.radius = option_obj["radius"];
  this.color = option_obj["color"];
}

const testCircle = new MovingObject({
pos: [50, 50],
vel: [3, 4],
radius: 25,
color: "green"
})



MovingObject.prototype.draw = function (ctx) {
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    true
  );

  ctx.fillStyle = this.color;
  ctx.fill()

};

MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
}

module.exports = MovingObject;
