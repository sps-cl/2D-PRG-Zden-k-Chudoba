class Positionable {
  constructor(position) {
    this.position = position;
  }

  get x() {
    return this.position.x;
  }

  get y() {
    return this.position.y;
  }

  set x(value) {
    this.position.x += value;
  }

  set y(value) {
    this.position.y += value;
  }
}