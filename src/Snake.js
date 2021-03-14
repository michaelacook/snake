const Segment = require("./Segment.js")

class Snake {
  constructor(x, y) {
    this.body = [new Segment(x, y), new Segment(x, y + 1)]
  }
}

module.exports = Snake
