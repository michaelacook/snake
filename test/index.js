import fs from "fs"
import path from "path"
const __dirname = path.dirname(new URL(import.meta.url).pathname)

// programmatically import and call tests
fs.readdirSync(__dirname + "/lib").forEach(async (file) => {
  const module = await import(path.resolve(__dirname, "lib", file))
  const { test } = module 
  test()
})
