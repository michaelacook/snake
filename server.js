import express from "express"
import path from "path"
const app = express()
const port = 5000

const __dirname = path.dirname(new URL(import.meta.url).pathname)

app.use(express.static("public"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.listen(port, () => {
  console.log(`Node.js server listening on port ${port}`)
})
