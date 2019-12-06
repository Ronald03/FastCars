export default class Inputhandler {
  constructor(game) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
          game.car.position.x = 40;

          break;

        case 39:
          game.car.position.x = game.carPos.x2;

          break;

        case 87:
          game.togglePause();

          break;

        default:
      }
    });
  }
}
