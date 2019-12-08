import Fogline from "./fogline.js";
import Car from "./car.js";
import Inputhandler from "./input.js";

const GAMESTATE = {
  PAUSE: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3,
  NEWLEVEL: 4
};

export default class Game {
  constructor(screenWidth, screenHeight) {
    this.screenWidth = screenWidth;

    this.screenHeight = screenHeight;

    this.input = new Inputhandler(this);

    this.fogline = [new Fogline(this)];

    this.carPos = { x: 40, x2: this.screenWidth - 290, y: -200 };

    this.car = new Car(this, this.carPos.x, 580);

    this.obstaclePos = [this.carPos.x, this.carPos.x2];

    this.obstacleCar = [
      new Car(this, this.obstaclePos[this.ranXPos()], this.carPos.y)
    ];

    this.frameNo = 0;

    this.gamestate = GAMESTATE.RUNNING;
  }

  draw(ctx) {
    // Draw the Estates of the game
    if (this.gamestate === GAMESTATE.PAUSE) this.pauseScreen(ctx);

    //draw obstacle on the street
    [...this.obstacleCar].forEach(object => {
      object.draw(ctx);
    });

    this.frameNo++;

    if (this.everyinterval(60) && this.gamestate === GAMESTATE.RUNNING) {
      if (this.frameNo >= 1) this.fogline.push(new Fogline());

      this.fogline.push(new Fogline());
    }
    //push a fog line to the array every 100 frames
    if (this.everyinterval(150) && this.gamestate === GAMESTATE.RUNNING) {
      this.obstacleCar.push(
        new Car(this, this.obstaclePos[this.ranXPos(2)], this.carPos.y)
      );
    }

    //Draw fog lines
    [...this.fogline].forEach(object => {
      object.draw(ctx);
    });

    //Draw player's car
    this.car.draw(ctx);
  }

  update(deltatime) {
    if (
      this.gamestate === GAMESTATE.PAUSE ||
      this.gamestate === GAMESTATE.MENU ||
      this.gamestate === GAMESTATE.GAMEOVER ||
      this.gamestate === GAMESTATE.NEWLEVEL
    )
      return;

    //Remove foglines that have exited the game area

    this.fogline = this.fogline.filter(line => !line.toRemove);

    //update every fogline in the array
    [...this.fogline].forEach(object => {
      object.update(deltatime);
      if (object.position.y === 800) object.toRemove = true;
    });

    [...this.obstacleCar].forEach(object => {
      object.position.y += 5;
    });
  }

  everyinterval(n) {
    if ((this.frameNo / n) % 1 === 0) {
      return true;
    }

    return false;
  }

  ranXPos(num) {
    return Math.floor(Math.random() * Math.floor(num));
  }

  pauseScreen(ctx) {
    ctx.rect(0, 0, this.screenWidth, this.screenHeight);
    ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
    ctx.fill();
    ctx.font = "bold 30pt Arial";
    ctx.fillStyle = "#e60000";
    ctx.textAlign = "center";
    ctx.fillText("Paused", this.screenWidth / 2 - 30, this.screenHeight / 2);
  }

  togglePause() {
    if (this.gamestate === GAMESTATE.PAUSE) {
      this.gamestate = GAMESTATE.RUNNING;
    } else {
      this.gamestate = GAMESTATE.PAUSE;
    }
  }
}
