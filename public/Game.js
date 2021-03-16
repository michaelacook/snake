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
    const apple = new Apple(425, 150)
    this.apple = apple
  }

  drawApple() {
    this.ctx.beginPath()
    this.ctx.arc(this.apple.x, this.apple.y, 5.7, 0, 2 * Math.PI)
    this.ctx.fillStyle = "crimson"
    this.ctx.fill()
    this.ctx.stroke()
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

  run() {
    this.drawGameArea()
    this.createApple()
    this.drawApple()
    this.createSnake()
    this.snake.draw()
    this.snake.animate()
  }
}

export default Game
