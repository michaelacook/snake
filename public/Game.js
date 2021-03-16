import Apple from "./Apple.js"
import Snake from "./Snake.js"

class Game {
  constructor(width, height, canvasContext) {
    this._width = width
    this._height = height
    this.ctx = canvasContext
    this.score = 0
  }

  /**
   * Generates an Apple object with random coordinates
   */
  createApple() {
    this.apple = new Apple(425, 150, this.ctx)
  }

  /**
   * Create and add a snake property to the instance
   */
  createSnake() {
    this.snake = new Snake(100, 500, this.ctx)
  }

  /**
   * Draw the game area on the canvas
   */
  drawGameArea() {
    this.ctx.fillStyle = "black"
    this.ctx.fillRect(0, 0, 550, 550)
  }

  /**
   * Move snake according to specified direction on an interval
   */
  animate() {
    setInterval(() => {
      this.snake.move()
    }, 140)
  }

  /**
   * Initialze game properties and begin animation
   */
  run() {
    this.drawGameArea()
    this.createApple()
    this.apple.draw()
    this.createSnake()
    this.snake.draw()
    this.animate()
  }
}

export default Game
