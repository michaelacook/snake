import Game from "./Game.js"
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

const game = new Game(50, 25, ctx)
game.run()

document.addEventListener("keydown", (e) => {
  const code = e.key
  const current = game.snake.direction
  if (code === "ArrowRight" && (current === "up" || current === "down")) {
    game.snake.direction = "right"
  } else if (code === "ArrowLeft" && (current === "up" || current === "down")) {
    game.snake.direction = "left"
  } else if (
    code === "ArrowUp" &&
    (current === "right" || current === "left")
  ) {
    game.snake.direction = "up"
  } else if (
    code === "ArrowDown" &&
    (current === "right" || current === "left")
  ) {
    game.snake.direction = "down"
  }
})
