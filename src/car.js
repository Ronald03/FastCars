export default class Car {
  constructor(game, posX, posY) {
    this.car = document.getElementById("car");
    this.width = 150;
    this.height = 200;

    this.position = { x: posX, y: posY };

    this.game = game;
  }

  draw(ctx) {
    ctx.drawImage(this.car, this.position.x, this.position.y, 150, 200);
  }

  update() {}
}
