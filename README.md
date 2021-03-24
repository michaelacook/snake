# Snake

A simple Snake game that runs in the browser. The goal of developing this game was to practice my programming skills and get reacquainted with the canvas.

Enjoy the game!

## Running Locally 
Clone the repo, `npm install` and `npm start`. The application runs on port 5000. The application requires the `--experimental-modules` argument to run, as ES modules are used rather than CommonJS. This has already been added to the start script.

## Technologies 
- JavaScript 
- HTML 
- HTML Canvas 
- Node.js 
- Express.js 

## ES Modules 
I wanted to take the opportunity with this little project to play with using ES modules. It would have been well enough to simply write all my class files and add them to `index.html` in script tags, but I wanted to use a more modern approach and write modules and import them into an `index.js` file. As I learned, this requires a server, and to use ES modules exclusively by adding the `"type": "module"` key to `package.json`. As a result, ES modules are used on the client and server side for this application. I chalk it up to being a quirk.

## License

MIT
