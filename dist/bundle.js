/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./script/components/render-game-component.js":
/*!****************************************************!*\
  !*** ./script/components/render-game-component.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderGame: () => (/* binding */ renderGame)\n/* harmony export */ });\nfunction renderGame() {\n    const appEl = document.getElementById('app')\n\n    const cards = '<div class=\"cards-of-shirt\"></div>'.repeat(36)\n    const appHtml = `\n        <header class=\"header center\">\n            <div class=\"timer\"></div>\n            <button class=\"header-game-button\" id=\"showCardButton\">Показать карты</button>\n            <button class=\"header-game-button\" id=\"startNewGameButton\">Начать заново</button>\n        </header>\n        <section class=\"center game-box\">${cards}</section>\n    `\n\n    appEl.innerHTML = appHtml\n\n    document\n        .getElementById('startNewGameButton')\n        .addEventListener('click', () => {\n            console.log('restart')\n            renderGame()\n        })\n    document.getElementById('showCardButton').addEventListener('click', () => {\n        renderOpenedCard()\n    })\n}\n// Функция показа карт\nfunction renderOpenedCard() {\n    const appEl = document.getElementById('app')\n    let cardItems = ''\n    for (let i = 1; i <= 36; i++) {\n        cardItems += `<div class=\"cards-of-shirt card-item${i}\"></div>`\n    }\n    const openCardHtml = `\n            <header class=\"center header\">\n                <div class=\"timer\"></div>\n                <button class=\"header-game-button\" id=\"showCardButton\">Скрыть карты</button>\n                <button class=\"header-game-button\" id=\"startNewGameButton\">Начать заново</button>\n            </header>\n            <section class=\"center game-box\">${cardItems}</section>\n        `\n    appEl.innerHTML = openCardHtml\n\n    document\n        .getElementById('startNewGameButton')\n        .addEventListener('click', () => {\n            console.log('restart')\n            renderGame()\n        })\n    document.getElementById('showCardButton').addEventListener('click', () => {\n        renderOpenedCard()\n    })\n}\n\n\n//# sourceURL=webpack://dev-tools/./script/components/render-game-component.js?");

/***/ }),

/***/ "./script/main.js":
/*!************************!*\
  !*** ./script/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderPageChangeLevel: () => (/* binding */ renderPageChangeLevel)\n/* harmony export */ });\n/* harmony import */ var _components_render_game_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/render-game-component.js */ \"./script/components/render-game-component.js\");\n\n\nlet globalState = {\n    level: '',\n}\n\n// рендер страницы с выбором уровня сложности\nconst renderPageChangeLevel = () => {\n    const appEl = document.getElementById('app')\n    const appHtml = `<div class=\"main\" id=\"main-box\">\n    <h2 class=\"main__title\">Выбери сложность</h2>\n    <div class=\"main__level-box\">\n        <input\n            type=\"radio\"\n            name=\"games\"\n            data-index=\"1\"\n            id=\"level-light\"\n            class=\"level-input\"\n            value=\"1\"\n        />\n        <label for=\"level-light\">1</label>\n\n        <input\n            type=\"radio\"\n            name=\"games\"\n            data-index=\"2\"\n            id=\"level-medium\"\n            class=\"level-input\"\n            value=\"2\"\n        />\n        <label for=\"level-medium\">2</label>\n\n        <input\n            type=\"radio\"\n            name=\"games\"\n            data-index=\"3\"\n            id=\"level-hard\"\n            class=\"level-input\"\n            value=\"3\"\n        />\n        <label for=\"level-hard\">3</label>\n    </div>\n    <button id=\"start-button\" class=\"main__button\">Старт</button>\n</div>`\n    appEl.innerHTML = appHtml\n}\n\nrenderPageChangeLevel()\n\nconst levelEl = document.querySelectorAll('.level-input')\nconst startButtonEl = document.getElementById('start-button')\n\n// Обработчик клика на  все инпуты выбора уровня\nlevelEl.forEach((input) => {\n    input.addEventListener('click', () => {\n        globalState.level = input.dataset.index\n        console.log(globalState.level)\n    })\n})\n\n// Обработчик клика на кнопку старт\nstartButtonEl.addEventListener('click', () => {\n    if (globalState.level) {\n        (0,_components_render_game_component_js__WEBPACK_IMPORTED_MODULE_0__.renderGame)(globalState.level)\n    } else {\n        alert('Пожалуйста, выберите уровень сложности')\n    }\n})\n\n\n//# sourceURL=webpack://dev-tools/./script/main.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script/main.js");
/******/ 	
/******/ })()
;