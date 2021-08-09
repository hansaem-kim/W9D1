/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\")\r\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\")\r\n\r\nconst defaultAsteroid = {\r\n    color: \"blue\",\r\n    radius: 17\r\n}\r\n\r\nfunction Asteroid(argument){\r\n    MovingObject.call(this,{\r\n        pos: argument,\r\n        vel: Util.randomVec(10),\r\n        radius: defaultAsteroid[\"radius\"],\r\n        color: defaultAsteroid[\"color\"]\r\n    } )\r\n}\r\n\r\nUtil.inherits(Asteroid, MovingObject);\r\n\r\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack://asteroids/./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\")\r\n\r\nconst DIM_X = window.innerWidth; \r\nconst DIM_Y = window.innerHeight; \r\nNUM_ASTEROIDS = 10;\r\n\r\nfunction Game() {\r\n    this.asteroids = [];\r\n    for (let i = 0; i<NUM_ASTEROIDS; i++){\r\n        this.addAsteroids();\r\n    }\r\n    \r\n}\r\n\r\nGame.prototype.addAsteroids = function() {\r\n    this.asteroids.push(new Asteroid(this.randomPosition()));\r\n}\r\n\r\nGame.prototype.randomPosition = function() {\r\n    return [Math.floor(Math.random() * DIM_X), Math.floor(Math.random() * DIM_Y)];\r\n}\r\n\r\nGame.prototype.draw = function(ctx) {\r\n    ctx.clearRect(0,0, DIM_X, DIM_Y);\r\n    this.asteroids.forEach(ele => ele.draw(ctx));\r\n}\r\n\r\nGame.prototype.moveObjects = function(){\r\n    console.log(\"Im working\")\r\n    this.asteroids.forEach(ele => ele.move);\r\n}\r\n\r\nmodule.exports = Game;\n\n//# sourceURL=webpack://asteroids/./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\")\r\n\r\nfunction GameView(ctx) {\r\n    this.game = new Game();\r\n    this.ctx = ctx;\r\n}\r\n\r\nGameView.prototype.start = function(){\r\n    const that = this;\r\n    // setInterval(function(){\r\n    //     that.game.moveObjects();\r\n    // }, 20)\r\n    // setInterval(function(){\r\n    //     that.game.draw(that.ctx);\r\n    // }, 20)\r\n    this.game.draw(this.ctx);\r\n    setInterval((this.game.moveObjects.bind(this.game)), 20);\r\n    setInterval((this.game.draw.bind(this.game, this.ctx)), 20);\r\n}\r\n\r\nmodule.exports = GameView;\n\n//# sourceURL=webpack://asteroids/./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("console.log(\"Webpack is working!\")\r\n\r\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\r\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\")\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function() {\r\n\r\n    const canvas = document.getElementById(\"game-canvas\");\r\n    canvas.width = window.innerWidth;\r\n    canvas.height = window.innerHeight;\r\n\r\n    const ctx = canvas.getContext(\"2d\");\r\n\r\n    const gameView = new GameView(ctx);\r\n    gameView.start();\r\n\r\n})\r\n\r\nwindow.MovingObject = MovingObject;\n\n//# sourceURL=webpack://asteroids/./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(option_obj){\r\n  this.pos = option_obj[\"pos\"];\r\n  this.vel = option_obj[\"vel\"];\r\n  this.radius = option_obj[\"radius\"];\r\n  this.color = option_obj[\"color\"];\r\n}\r\n\r\nconst testCircle = new MovingObject({\r\npos: [50, 50],\r\nvel: [3, 4],\r\nradius: 25,\r\ncolor: \"green\"\r\n})\r\n\r\n\r\n\r\nMovingObject.prototype.draw = function (ctx) {\r\n  ctx.beginPath();\r\n\r\n  ctx.arc(\r\n    this.pos[0],\r\n    this.pos[1],\r\n    this.radius,\r\n    0,\r\n    2 * Math.PI,\r\n    true\r\n  );\r\n\r\n  ctx.fillStyle = this.color;\r\n  ctx.fill()\r\n\r\n};\r\n\r\nMovingObject.prototype.move = function() {\r\n  this.pos[0] += this.vel[0];\r\n  this.pos[1] += this.vel[1];\r\n}\r\n\r\nmodule.exports = MovingObject;\r\n\n\n//# sourceURL=webpack://asteroids/./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((module) => {

eval("const Util = {\r\n    inherits: function inherits(childClass, parentClass) {\r\n        childClass.prototype = Object.create(parentClass.prototype);\r\n        childClass.prototype.constructor = childClass;\r\n    },\r\n\r\n    randomVec: function(length) {\r\n        const deg = 2 * Math.PI * Math.random();\r\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\r\n    },\r\n\r\n      // Scale the length of a vector by the given amount.\r\n    scale: function(vec, m) {\r\n        return [vec[0] * m, vec[1] * m];\r\n    }\r\n};\r\n  \r\nmodule.exports = Util;\n\n//# sourceURL=webpack://asteroids/./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;