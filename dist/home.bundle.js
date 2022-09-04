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

/***/ "./code/activeButton.js":
/*!******************************!*\
  !*** ./code/activeButton.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"activeButon\": () => (/* binding */ activeButon),\n/* harmony export */   \"listItem\": () => (/* binding */ listItem)\n/* harmony export */ });\nconst [...listItem] = document.querySelectorAll(\".list-item a\");\r\n\r\nconst activeButon = (ele) => {\r\n    for (let i = 0; i < listItem.length; i++) {\r\n        if (ele === listItem[i].dataset.number) {\r\n            listItem[i].classList.add(\"active\");\r\n        }\r\n        listItem[i].addEventListener(\"click\", e => {\r\n            if (e.target !== listItem[i]) {\r\n                return;\r\n            } else {\r\n                e.target.classList.add(\"active\");\r\n            }\r\n        })\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://space/./code/activeButton.js?");

/***/ }),

/***/ "./code/hoverButton.js":
/*!*****************************!*\
  !*** ./code/hoverButton.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hoverButton\": () => (/* binding */ hoverButton)\n/* harmony export */ });\n/* harmony import */ var _activeButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activeButton.js */ \"./code/activeButton.js\");\n\r\nconst hoverButton = () =>{\r\n    _activeButton_js__WEBPACK_IMPORTED_MODULE_0__.listItem.forEach((element) => {\r\n\r\n        element.addEventListener(\"mouseover\", (e) => {\r\n            if (e.target !== element) return;\r\n            if (!e.target.classList.contains(\"active\")) {\r\n                e.target.classList.add(\"hover\");\r\n            }\r\n        })\r\n    \r\n        element.addEventListener(\"mouseout\", (e) => {\r\n            if (e.target !== element) return;\r\n            e.target.classList.remove(\"hover\");\r\n        })\r\n    })\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://space/./code/hoverButton.js?");

/***/ }),

/***/ "./code/humbergerClose.js":
/*!********************************!*\
  !*** ./code/humbergerClose.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"humburgerClose\": () => (/* binding */ humburgerClose)\n/* harmony export */ });\n/* harmony import */ var _humburgerOpen_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./humburgerOpen.js */ \"./code/humburgerOpen.js\");\n\r\n\r\nconst humburgerClose = () =>{\r\n    _humburgerOpen_js__WEBPACK_IMPORTED_MODULE_0__.humbergerMenue.classList.remove(\"menue-active\");\r\n}\r\n\r\n\n\n//# sourceURL=webpack://space/./code/humbergerClose.js?");

/***/ }),

/***/ "./code/humburgerOpen.js":
/*!*******************************!*\
  !*** ./code/humburgerOpen.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"humbergerMenue\": () => (/* binding */ humbergerMenue),\n/* harmony export */   \"humburgerOpen\": () => (/* binding */ humburgerOpen)\n/* harmony export */ });\nconst humbergerMenue = document.querySelector(\".nav-bar-humburger\");\r\n\r\nconst humburgerOpen = () =>{\r\n    humbergerMenue.classList.add(\"menue-active\");\r\n    humbergerMenue.style.height = `${document.documentElement.offsetHeight}px`\r\n}\r\n\r\n\n\n//# sourceURL=webpack://space/./code/humburgerOpen.js?");

/***/ }),

/***/ "./code/index.js":
/*!***********************!*\
  !*** ./code/index.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _activeButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activeButton.js */ \"./code/activeButton.js\");\n/* harmony import */ var _hoverButton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hoverButton.js */ \"./code/hoverButton.js\");\n/* harmony import */ var _humbergerClose_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./humbergerClose.js */ \"./code/humbergerClose.js\");\n/* harmony import */ var _humburgerOpen_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./humburgerOpen.js */ \"./code/humburgerOpen.js\");\n/* harmony import */ var _screenTracking_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screenTracking.js */ \"./code/screenTracking.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst divBtn = document.querySelector(\".div-btn\");\r\nconst close = document.querySelector(\".close a\")\r\nconst menue = document.querySelector(\".heder-hamburger-menu\");\r\n\r\n(0,_activeButton_js__WEBPACK_IMPORTED_MODULE_0__.activeButon)(document.body.id);\r\n(0,_hoverButton_js__WEBPACK_IMPORTED_MODULE_1__.hoverButton)();\r\n\r\n//hover btn explore\r\ndivBtn.addEventListener(\"mouseover\", (e) => {\r\n    e.target.classList.add(\"div-hover\");\r\n})\r\n\r\ndivBtn.addEventListener(\"mouseout\", (e) => {\r\n    e.target.classList.remove(\"div-hover\");\r\n})\r\n\r\n// /humberger menue\r\nmenue.addEventListener(\"click\", _humburgerOpen_js__WEBPACK_IMPORTED_MODULE_3__.humburgerOpen);\r\n\r\nclose.addEventListener(\"click\", _humbergerClose_js__WEBPACK_IMPORTED_MODULE_2__.humburgerClose);\r\n\r\n//screen tracking\r\n\r\nwindow.addEventListener('resize', _screenTracking_js__WEBPACK_IMPORTED_MODULE_4__.start);\r\n\r\n\n\n//# sourceURL=webpack://space/./code/index.js?");

/***/ }),

/***/ "./code/screenTracking.js":
/*!********************************!*\
  !*** ./code/screenTracking.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"start\": () => (/* binding */ start)\n/* harmony export */ });\n/* harmony import */ var _humburgerOpen_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./humburgerOpen.js */ \"./code/humburgerOpen.js\");\n\r\n\r\nconst start = () => {\r\n    _humburgerOpen_js__WEBPACK_IMPORTED_MODULE_0__.humbergerMenue.style.height = `${document.documentElement.offsetHeight}px`;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://space/./code/screenTracking.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./code/index.js");
/******/ 	
/******/ })()
;