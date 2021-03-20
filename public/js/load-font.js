// load the font and add to document for use on the canvas

const font = new FontFace(
  "PressStart2P",
  "url(/assets/PressStart2P-Regular.ttf)"
)

font
  .load()
  .then((font) => {
    document.fonts.add(font)
  })
  .catch((err) => {
    console.log(err)
  })
