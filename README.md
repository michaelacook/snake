# Snake

A simple Snake game that runs in the browser. The goal of developing this game was to practice my programming skills, get reacquainted with the canvas, and start getting familiar with unit testing.

Enjoy the game!

## Running Locally 
Clone the repo, `npm install` and `npm start`. The application runs on port 5000. The application requires the `--experimental-modules` argument to run, as ES modules are used rather than CommonJS. This has already been added to the start script.

## Technologies 
- JavaScript 
- HTML 
- HTML Canvas 
- Node.js 
- Express.js 
- Mocha.js
- Chai.js

## ES Modules 
I wanted to take the opportunity with this little project to play with using ES modules. It would have been well enough to simply write all my class files and add them to `index.html` in script tags, but I wanted to use a more modern approach and write modules and import them into an `index.js` file. As I learned, this requires a server, and to use ES modules exclusively by adding the `"type": "module"` key to `package.json`. As a result, ES modules are used on the client and server side for this application. I chalk it up to being a quirk.

## Tests 
I have only recently started to learn about testing with Mocha and Chai. I am taking the opportunity with this project to practice writing tests. The test suite will not be complete, as I currently do not know how to test methods that draw on the canvas. The game itself is now complete, but writing tests is a work in progress (yes, not orthodox TDD :sweat_smile:).

## License

MIT
