class Apple {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.ctx = document.getElementById("canvas").getContext("2d")
  }

  /**
   * Draw apple to the canvas
   */
  draw() {
    this.ctx.fillStyle = "crimson"
    this.ctx.fillRect(this.x, this.y, 10, 10)
  }

  /**
   * Delete apple from the canvas
   */
  clear() {
    this.ctx.clearRect(this.x, this.y, 10, 10)
    this.ctx.fillStyle = "green"
    this.ctx.fillRect(this.x, this.y, 10, 10)
  }
}

export default Apple
