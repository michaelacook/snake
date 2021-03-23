import fs from "fs"
import path from "path"
const __dirname = path.dirname(new URL(import.meta.url).pathname)

// programmatically require and call tests
fs.readdirSync(__dirname + "/lib").forEach((file) => {
  import(path.resolve(__dirname, "lib", file))
    .then((func) => {
      func()
    })
    .catch((err) => {
      console.log(err)
    })
})
