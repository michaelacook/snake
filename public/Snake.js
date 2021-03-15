import Segment from "./Segment.js"

class Snake {
  constructor(x, y) {
    this.body = [new Segment(x, y), new Segment(x, y + 1)]
  }
}

export default Snake
