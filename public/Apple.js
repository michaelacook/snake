class Apple {
  constructor(x, y, canvasContext) {
    this.x = x
    this.y = y
    this.ctx = canvasContext
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, 5.7, 0, 2 * Math.PI)
    this.ctx.fillStyle = "crimson"
    this.ctx.fill()
    this.ctx.stroke()
  }
}

export default Apple
