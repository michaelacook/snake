import Segment from "./Segment.js"

class Snake {
  constructor(x, y, canvasContext) {
    this.body = [
      new Segment(x, y),
      new Segment(x, y - 10),
      new Segment(x, y - 20),
      new Segment(x, y - 30),
    ]
    this.ctx = canvasContext
    this.direction = "up"
  }

  clear() {
    this.body.forEach((segment) => {
      this.ctx.clearRect(segment.x, segment.y, 10, 10)
      this.ctx.fillStyle = "black"
      this.ctx.fillRect(segment.x, segment.y, 10, 10)
    })
  }

  draw() {
    this.body.forEach((segment) => {
      this.ctx.fillStyle = "green"
      this.ctx.fillRect(segment.x, segment.y, 10, 10)
    })
  }

  shift() {
    const { x, y } = this.body[this.body.length - 1]
    let nextSegment
    if (this.direction === "up") {
      nextSegment = new Segment(x, y - 10)
    } else if (this.direction === "right") {
      nextSegment = new Segment(x + 10, y)
    } else if (this.direction === "left") {
      nextSegment = new Segment(x - 10, y)
    } else if (this.direction === "down") {
      nextSegment = new Segment(x, y + 10)
    }
    this.body.push(nextSegment)
    this.body.shift()
  }

  move() {
    this.clear()
    this.shift()
    this.draw()
  }
}

export default Snake
