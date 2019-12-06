import "./styles.css";
import Game from "./game.js";

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let SCREENWIDTH = 600;
let SCREENHEIGHT = 800;

let game = new Game(SCREENWIDTH, SCREENHEIGHT);

let lastTime = 0;
function gameLoop(timeStamp) {
  let deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;

  ctx.clearRect(0, 0, 600, 800);

  game.draw(ctx);

  game.update(deltaTime);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
