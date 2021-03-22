import Game from "./modules/Game.js"
import "./load-font.js"

const canvas = document.getElementById("canvas")
const game = new Game(300, 300)

const acceptedKeys = {
  arrowKeys: ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft"],
  start: " ",
}

canvas.setAttribute("width", game.width)
canvas.setAttribute("height", game.height)

game.initialize()

document.addEventListener("keydown", ({ key }) => {
  if (acceptedKeys.arrowKeys.includes(key)) {
    game.addKeyToBuffer(key)
  }

  // start game when spacebar keydown
  if (!game.active && key === acceptedKeys.start) {
    if (!game.initialized) {
      game.initialize()
    }
    game.run()
  }
})
