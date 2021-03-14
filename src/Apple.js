class Apple {
  constructor(x, y) {
    this._x = x
    this._y = y
  }

  get xCoordinate() {
    return this._x
  }

  get yCoordinate() {
    return this._y
  }

  set yCoordinate(num) {
    this._y = num
  }

  set xCoordinate(num) {
    this._x = x
  }
}

