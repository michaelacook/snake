const { assert } = require("chai")
const Game = require("../../src/Game.js")

module.exports = () => {
  describe("Game", () => {
    const game = new Game(20, 20)

    describe("constructor", () => {
      it("has a type of object when constructed", () => {
        assert.typeOf(game, "object")
      })

      it("assigns a property 'score' to the instance", () => {
        assert.property(game, "score")
      })
    })

    describe(".createApple", () => {
      it("assigns a property 'apple' to the instance", () => {
        game.createApple()
        assert.property(game, "apple")
      })
    })

    describe(".createGameArea", () => {
      it("assigns a property 'gameArea' to the instance", () => {
        game.createApple()
        game.createSnake()
        const result = game.createGameArea()
        assert.property(game, "gameArea")
      })

      it("returns an array with a length equal to the '_height' property", () => {
        game.createGameArea()
        assert.strictEqual(game.gameArea.length, game._height)
      })
    })

    describe(".createSnake", () => {
      it("assigns a property 'snake' to the instance", () => {
        game.createSnake()
        assert.property(game, "snake")
      })
    })
  })
}
