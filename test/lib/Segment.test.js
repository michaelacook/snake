const { assert } = require("chai")
const Segment = require("../../src/Segment.js")

module.exports = () => {
  const segment = new Segment(5, 5)
  describe("Segment", () => {
    describe("constructor", () => {
      it("has type object on construct", () => {
        assert.typeOf(segment, "object")
      })

      it("has an '_x' property", () => {
        assert.property(segment, "_x")
      })

      it("has a '_y' property", () => {
        assert.property(segment, "_y")
      })
    })
  })
}
