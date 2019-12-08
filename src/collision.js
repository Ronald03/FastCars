export function Collision(car, object) {
  let carTopEdge = car.position.y + car.height;

  let carRightEdge = car.position.x + car.width;

  let carLeftEdge = car.position.x;

  let carBottomEdge = car.position.y;

  let objTopEdge = car.position.y + car.height;

  let objRightEdge = car.position.x + car.width;

  let objLeftEdge = car.position.x;

  let objBottomEdge = car.position.y;

  if (carLeftEdge < objRightEdge && carRightEdge > objLeftEdge) {
    // An edge of rectangle 1 is inside rectangle 2
  }
  if (carBottomEdge < objTopEdge && carTopEdge > objBottomEdge) {
    // Either the top or bottom is inside rectangle 2
  }
}
