#!/usr/bin/env node

const game = new (require("./src/Game.js"))(55, 25)

game.createApple()
game.createSnake()
game.createGameArea()
game.printGameArea()
