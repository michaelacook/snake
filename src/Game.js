class Game {
  constructor(width, height) {
    this._width = width
    this._height = height
    this.score = 0
  }

  /**
   * Generates an Apple object with random coordinates
   */
  createApple() {
    const apple = new Apple(40, 5)
    this.apple = apple
  }

  /**
   * Create and add a snake property to the instance
   */
  createSnake() {
    this.snake = new Snake(9, 16)
  }

  /**
   * Generate a game area array of strings
   * Add an initial apple to the game area
   */
  createGameArea() {
    const outer = []
    for (let i = 0; i < this._height; i++) {
      const inner = new Array(this._width).fill(" ")
      outer.push(inner)
    }
    outer[this.apple.yCoordinate][this.apple.xCoordinate] = " "
    for (let segment of this.snake.body) {
      outer[segment._y][segment._x] = " "
    }
    this.gameArea = outer
  }

  /**
   * Print the game area to the console
   */
  printGameArea() {
    console.log(`Score: ${this.score}`.text.bold)
    this.gameArea.forEach((row) => {
      console.log(row.join(""))
    })
  }
}
