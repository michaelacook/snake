const { assert } = require("chai")
const Apple = require("../../public/js/modules/Apple.js")

module.exports = () => {
  describe("Apple", () => {
    describe("constructor", () => {
      it("has a type of object on construct", () => {
        const apple = new Apple()
        assert.typeOf(apple, "object")
      })
    })
  })
}
