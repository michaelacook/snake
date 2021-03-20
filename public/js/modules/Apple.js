class Apple {
  constructor(x, y, canvasContext) {
    this.x = x
    this.y = y
    this.ctx = canvasContext
  }

  draw() {
    this.ctx.fillStyle = "crimson"
    this.ctx.fillRect(this.x, this.y, 10, 10)
  }

  clear() {
    this.ctx.clearRect(this.x, this.y, 10, 10)
    this.ctx.fillStyle = "green"
    this.ctx.fillRect(this.x, this.y, 10, 10)
  }
}

export default Apple
