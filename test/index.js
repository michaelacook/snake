const fs = require("fs")
const path = require("path")

// programmatically require and call tests
fs.readdirSync(__dirname + "/lib").forEach((file) => {
  console.log(file)
  require(path.resolve(__dirname, "lib", file))()
})
