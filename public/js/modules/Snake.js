import Segment from "./Segment.js"

class Snake {
  constructor(x, y) {
    this.body = [
      new Segment(x, y),
      new Segment(x, y - 10),
      new Segment(x, y - 20),
      new Segment(x, y - 30),
    ]
    this.ctx = document.getElementById("canvas").getContext("2d")
    this.direction = "right"
  }

  /**
   * Erase the snake's body segments
   */
  clear() {
    this.body.forEach((segment) => {
      this.ctx.clearRect(segment.x, segment.y, 10, 10)
      this.ctx.fillStyle = "black"
      this.ctx.fillRect(segment.x, segment.y, 10, 10)
    })
  }

  /**
   * Print the snake to the canvas
   */
  draw() {
    this.body.forEach((segment) => {
      this.ctx.fillStyle = "green"
      this.ctx.fillRect(segment.x, segment.y, 10, 10)
    })
  }

  /**
   * Check if the snake's head came into contact with a body segment
   * @returns {Boolean} true || false
   */
  checkForCollision() {
    const head = this.body[this.body.length - 1]
    const body = [...this.body]
    body.pop()
    for (let segment of body) {
      if (head.x === segment.x && segment.y === head.y) {
        return true
      }
    }
    return false
  }

  /**
   * unshift a segment onto the body
   * For when an apple is eaten
   */
  addSegment() {
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
    this.body.unshift(nextSegment)
  }

  /**
   * Remove tail of the snake body and add a new head 10px in the current direction
   */
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
    this.body.shift()
    this.body.push(nextSegment)
  }

  /**
   * Do one cycle of animation on the snake
   */
  move() {
    this.clear()
    this.shift()
    this.draw()
  }
}

export default Snake
