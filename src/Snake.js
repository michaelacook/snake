class Snake {
  constructor(x, y) {
    this.body = [new Segment(x, y), new Segment(x, y + 1)]
  }
}
