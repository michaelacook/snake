const { assert } = require("chai")
const Snake = require("../../src/Snake.js")

module.exports = () => {
  describe("Snake", () => {
    const snake = new Snake(5, 12)

    describe("constructor", () => {
      it("returns an object type when constructed", () => {
        assert.typeOf(snake, "object")
      })

      it("has a 'body' property", () => {
        assert.property(snake, "body")
      })

      it("body property is an array", () => {
        assert.isArray(snake.body)
      })
    })
  })
}
