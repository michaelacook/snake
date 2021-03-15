import Game from "./Game.js"
const game = new Game(50, 25)
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

ctx.fillStyle = "black"
ctx.fillRect(20, 20, 550, 550)
