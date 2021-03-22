import Segment from "./Segment.js"

class Snake {
  constructor(x, y) {
    this.body = [
      new Segment(x, y),
      new Segment(x + 10, y),
      new Segment(x + 20, y),
      new Segment(x + 30, y),
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
    this.body.forEach((segment, i) => {
      this.ctx.fillStyle = "green"
      this.ctx.fillRect(segment.x, segment.y, 10, 10)
    })
  }

  /**
   * Check if the snake's head came into contact with a body segment
   * @returns {Boolean} true || false
   */
  checkForSelfCollision() {
    const head = this.body[this.body.length - 1]
    const body = this.body
    for (let segment of body) {
      if (body.indexOf(segment) !== body.indexOf(head)) {
        if (head.x === segment.x && segment.y === head.y) {
          return true
        }
      }
    }
    return false
  }

  /**
   * Check if snake head goes beyond game area
   * @param {Number} width - width of game area
   * @param {Number} height - height of game area
   * @returns {Boolean} true if collision, else false
   */
  checkForWallCollision(width, height) {
    const head = this.body[this.body.length - 1]
    if (
      head.x < 0 ||
      head.x > width - 10 ||
      head.y < 0 ||
      head.y > height - 10
    ) {
      return true
    }
    return false
  }

  /**
   * Unshift a segment onto the body
   * For when an apple is eaten
   */
  addSegment() {
    const { x, y } = this.body[0]
    let nextSegment
    if (this.direction === "up") {
      nextSegment = new Segment(x, y + 10)
    } else if (this.direction === "right") {
      nextSegment = new Segment(x - 10, y)
    } else if (this.direction === "left") {
      nextSegment = new Segment(x + 10, y)
    } else if (this.direction === "down") {
      nextSegment = new Segment(x, y - 10)
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
