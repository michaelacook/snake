import Apple from "./Apple.js"
import Snake from "./Snake.js"

class Game {
  constructor(width, height) {
    this._width = width
    this._height = height
    this.ctx = document.getElementById("canvas").getContext("2d")
    this.scoreDisplay = document.getElementById("score")
    this.score = 0
    this.active = false
    this.initialized = false
    this.keyBuffer = []
  }

  /**
   * The game maintains a key buffer that can only hold
   * a single key at a time to change the snake's direction
   * This is to prevent too many direction changes at a time,
   * which leads to strange snake movements and a game over.
   * Adds a key to the buffer if the buffer is clear and does not
   * already contain the key passed
   * @param {String} key
   */
  addKeyToBuffer(key) {
    if (key !== this.keyBuffer && !this.keyBuffer.length) {
      this.keyBuffer.push(key)
    }
  }

  /**
   * Checks if the key buffer contains a key
   * If so, removes the key from the buffer and uses it to set snake direction
   */
  changeDirection() {
    if (this.keyBuffer.length) {
      const key = this.keyBuffer.pop()
      const current = this.snake.direction
      if (key === "ArrowRight" && (current === "up" || current === "down")) {
        this.snake.direction = "right"
      } else if (
        key === "ArrowLeft" &&
        (current === "up" || current === "down")
      ) {
        this.snake.direction = "left"
      } else if (
        key === "ArrowUp" &&
        (current === "right" || current === "left")
      ) {
        this.snake.direction = "up"
      } else if (
        key === "ArrowDown" &&
        (current === "right" || current === "left")
      ) {
        this.snake.direction = "down"
      }
    }
  }

  /**
   * Generate a random multiple of ten
   * Used to create random apple coordinates
   * @returns {Number}
   */
  randomMultipleOfTen() {
    return Math.round((Math.random() * (this._width - 10 - 10) + 10) / 10) * 10
  }

  /**
   * Generate random x and y coordinates that do not overlap with snake body
   * @returns {Object} random x and y coordinates
   */
  generateRandomCoordinates() {
    let x = this.randomMultipleOfTen()
    let y = this.randomMultipleOfTen()

    const overlap = (x, y) => {
      for (let segment of this.snake.body) {
        if (segment.x === x && segment.y === y) {
          return true
        }
      }
      return false
    }

    while (overlap(x, y)) {
      x = this.randomMultipleOfTen()
      y = this.randomMultipleOfTen()
    }

    return { x, y }
  }

  /**
   * Generates an Apple object with random coordinates
   */
  createApple(x = this._width - 100, y = this._height - 200) {
    this.apple = new Apple(x, y)
  }

  /**
   * Get random coordinates, create a new apple and draw it on the canvas
   */
  drawRandomApple() {
    this.apple.clear()
    const { x, y } = this.generateRandomCoordinates()
    this.createApple(x, y)
    this.apple.draw()
  }

  /**
   * Create and add a snake property to the instance
   */
  createSnake() {
    this.snake = new Snake(this._width - 250, this._height - 200)
  }

  /**
   * Draw the game area on the canvas
   */
  drawGameArea() {
    this.ctx.fillStyle = "black"
    this.ctx.fillRect(0, 0, this._width, this._height)
  }

  /**
   * Clear everything from the game area
   */
  clearGameArea() {
    this.ctx.clearRect(0, 0, this._width + 50, this._height + 50)
    this.ctx.fillStyle = "black"
    // redraw blank game area with no apple or snake
    this.drawGameArea()
  }

  /**
   * Check if snake head touches inner limits of game area
   */
  checkForGameOver() {
    const length = this.snake.body.length - 1
    const body = this.snake.body
    if (
      this.snake.checkForWallCollision(this._width, this._height) ||
      this.snake.checkForSelfCollision()
    ) {
      clearInterval(this.intervalID)
      this.active = false
      this.initialized = false
      this.clearGameArea()
      this.printGameOverMessage()
    }
  }

  /**
   * Add text to the canvas indicating game over
   */
  printGameOverMessage() {
    this.ctx.font = "25px PressStart2P"
    this.ctx.fillStyle = "green"
    this.ctx.fillText("Game Over", 35, 130)
  }

  /**
   * Check if the snake made contact with the apple
   * If so, create a new apple and draw it
   * @returns {Boolean} true || false
   */
  checkForEatApple() {
    const { x, y } = this.snake.body[this.snake.body.length - 1]
    if (x === this.apple.x && y === this.apple.y) {
      this.drawRandomApple()
      this.snake.addSegment()
      return true
    }
    return false
  }

  /**
   * Move snake according to specified direction on an interval
   */
  animate() {
    this.intervalID = setInterval(() => {
      this.changeDirection()
      this.snake.move()
      if (this.checkForEatApple()) {
        this.incrementScore()
        this.displayScore()
      }
      this.checkForGameOver()
    }, 140)
  }

  /**
   * Increase score by 1
   */
  incrementScore() {
    this.score++
  }

  /**
   * Print score to the DOM
   */
  displayScore() {
    this.scoreDisplay.textContent = this.score
  }

  /**
   * Set up the game variables and render game
   */
  initialize() {
    this.score = 0
    this.drawGameArea()
    this.createApple()
    this.apple.draw()
    this.createSnake()
    this.snake.draw()
    this.displayScore()
    this.initialized = true
  }

  /**
   * Begin animation
   */
  run() {
    this.active = true
    this.animate()
  }
}

export default Game
