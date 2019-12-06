export default class Fogline {
  constructor(game) {
    this.color = "FFF";
    this.width = 20;
    this.height = 200;

    this.game = game;
    this.toRemove = false;

    this.position = { x: 240, y: -200 };
  }

  draw(ctx) {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltatime) {
    this.position.y += 7;
  }
}
