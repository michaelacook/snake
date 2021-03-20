import Game from "./modules/Game.js"
import "./load-font.js"

const game = new Game(300, 300)

const acceptedKeys = ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft"]

const spacebar = " "

game.initialize()

document.addEventListener("keydown", ({ key }) => {
  if (acceptedKeys.includes(key)) {
    game.addKeyToBuffer(key)
  }

  // start game when spacebar keydown
  if (!game.active && key === spacebar) {
    if (!game.initialized) {
      game.initialize()
    }
    game.run()
  }
})
