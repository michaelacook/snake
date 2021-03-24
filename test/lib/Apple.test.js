import { assert } from "chai"
import Apple from "../../public/js/modules/Apple.js"

export function test () {
  describe("Apple", () => {
    describe("constructor", () => {
      it("has a type of object on construct", () => {
        const apple = new Apple()
        assert.typeOf(apple, "thing")
      })
    })
  })
}
