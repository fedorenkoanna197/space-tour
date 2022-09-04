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

/***/ "./code/crew-index.js":
/*!****************************!*\
  !*** ./code/crew-index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _activeButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activeButton.js */ \"./code/activeButton.js\");\n/* harmony import */ var _hoverButton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hoverButton.js */ \"./code/hoverButton.js\");\n/* harmony import */ var _humburgerOpen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./humburgerOpen.js */ \"./code/humburgerOpen.js\");\n/* harmony import */ var _humbergerClose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./humbergerClose.js */ \"./code/humbergerClose.js\");\n/* harmony import */ var _screenTracking_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screenTracking.js */ \"./code/screenTracking.js\");\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data.json */ \"./data.json\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst [...btnList] = document.querySelectorAll(\".btn-slider\");\r\nconst post = document.querySelector(\".crew-position\");\r\nconst name = document.querySelector(\".crew-name\");\r\nconst bio = document.querySelector(\".crew-bio\");\r\nconst imgPers = document.querySelector(\".crew-img img\");\r\nconst close = document.querySelector(\".close a\");\r\nconst menue = document.querySelector(\".heder-hamburger-menu\");\r\n\r\n\r\n(0,_activeButton_js__WEBPACK_IMPORTED_MODULE_0__.activeButon)(document.body.id);\r\n(0,_hoverButton_js__WEBPACK_IMPORTED_MODULE_1__.hoverButton)();\r\n\r\nconst print = (element) => {\r\n    let arr = _data_json__WEBPACK_IMPORTED_MODULE_5__.crew;\r\n    for (let i = 0; i < arr.length; i++) {\r\n        if (element === arr[i].role) {\r\n            post.innerText = `${arr[i].role}`;\r\n            name.innerText = `${arr[i].name}`;\r\n            bio.innerText = `${arr[i].bio}`;\r\n            imgPers.setAttribute(\"src\", arr[i].images.webp);\r\n        }\r\n    }\r\n}\r\n\r\n\r\nfor (let i = 0; i < btnList.length; i++) {\r\n    btnList[0].classList.add(\"active-slider\");\r\n    print(btnList[0].id);\r\n    btnList[i].addEventListener(\"click\", e => {\r\n        if (e.target !== btnList[i]) {\r\n            return;\r\n        } else {\r\n            e.target.classList.add(\"active-slider\");\r\n            e.target.classList.remove(\"hover-slider\");\r\n            print(e.target.id);\r\n\r\n        }\r\n\r\n        btnList.forEach((ele) => {\r\n            if (ele !== e.target)\r\n                ele.classList.remove(\"active-slider\");\r\n        })\r\n    })\r\n}\r\n\r\nbtnList.forEach((element) => {\r\n\r\n    element.addEventListener(\"mouseover\", (e) => {\r\n        if (e.target !== element) return;\r\n        if (!e.target.classList.contains(\"active-slider\")) {\r\n            e.target.classList.add(\"hover-slider\");\r\n        }\r\n\r\n    })\r\n\r\n    element.addEventListener(\"mouseout\", (e) => {\r\n        if (e.target !== element) return;\r\n        e.target.classList.remove(\"hover-slider\");\r\n    })\r\n})\r\n\r\nmenue.addEventListener(\"click\", _humburgerOpen_js__WEBPACK_IMPORTED_MODULE_2__.humburgerOpen);\r\n\r\nclose.addEventListener(\"click\", _humbergerClose_js__WEBPACK_IMPORTED_MODULE_3__.humburgerClose);\r\n\r\nwindow.addEventListener('resize', _screenTracking_js__WEBPACK_IMPORTED_MODULE_4__.start);\r\n\r\nconst slider = () => {\r\n    if (document.body.offsetWidth > 375 && document.body.offsetWidth <= 767) {\r\n        document.querySelector(\".line-crew\").before(document.querySelector(\".section-slider\"));\r\n    } else {\r\n        document.querySelector(\".section-crew-info\").append(document.querySelector(\".section-slider\"));\r\n    }\r\n}\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", slider)\r\n\r\nwindow.addEventListener('resize', slider)\r\n\r\n\n\n//# sourceURL=webpack://space/./code/crew-index.js?");

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

/***/ "./code/screenTracking.js":
/*!********************************!*\
  !*** ./code/screenTracking.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"start\": () => (/* binding */ start)\n/* harmony export */ });\n/* harmony import */ var _humburgerOpen_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./humburgerOpen.js */ \"./code/humburgerOpen.js\");\n\r\n\r\nconst start = () => {\r\n    _humburgerOpen_js__WEBPACK_IMPORTED_MODULE_0__.humbergerMenue.style.height = `${document.documentElement.offsetHeight}px`;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://space/./code/screenTracking.js?");

/***/ }),

/***/ "./data.json":
/*!*******************!*\
  !*** ./data.json ***!
  \*******************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"destinations\":[{\"name\":\"Moon\",\"images\":{\"png\":\"./assets/destination/image-moon.png\",\"webp\":\"./assets/destination/image-moon.webp\"},\"description\":\"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.\",\"distance\":\"384,400 km\",\"travel\":\"3 days\"},{\"name\":\"Mars\",\"images\":{\"png\":\"./assets/destination/image-mars.png\",\"webp\":\"./assets/destination/image-mars.webp\"},\"description\":\"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!\",\"distance\":\"225 mil. km\",\"travel\":\"9 months\"},{\"name\":\"Europa\",\"images\":{\"png\":\"./assets/destination/image-europa.png\",\"webp\":\"./assets/destination/image-europa.webp\"},\"description\":\"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.\",\"distance\":\"628 mil. km\",\"travel\":\"3 years\"},{\"name\":\"Titan\",\"images\":{\"png\":\"./assets/destination/image-titan.png\",\"webp\":\"./assets/destination/image-titan.webp\"},\"description\":\"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.\",\"distance\":\"1.6 bil. km\",\"travel\":\"7 years\"}],\"crew\":[{\"name\":\"Douglas Hurley\",\"images\":{\"png\":\"./assets/crew/image-douglas-hurley.png\",\"webp\":\"./assets/crew/image-douglas-hurley.webp\"},\"role\":\"Commander\",\"bio\":\"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.\"},{\"name\":\"Mark Shuttleworth\",\"images\":{\"png\":\"./assets/crew/image-mark-shuttleworth.png\",\"webp\":\"./assets/crew/image-mark-shuttleworth.webp\"},\"role\":\"Mission Specialist\",\"bio\":\"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.\"},{\"name\":\"Victor Glover\",\"images\":{\"png\":\"./assets/crew/image-victor-glover.png\",\"webp\":\"./assets/crew/image-victor-glover.webp\"},\"role\":\"Pilot\",\"bio\":\"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.\"},{\"name\":\"Anousheh Ansari\",\"images\":{\"png\":\"./assets/crew/image-anousheh-ansari.png\",\"webp\":\"./assets/crew/image-anousheh-ansari.webp\"},\"role\":\"Flight Engineer\",\"bio\":\"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.\"}],\"technology\":[{\"name\":\"Launch vehicle\",\"images\":{\"portrait\":\"./assets/technology/image-launch-vehicle-portrait.jpg\",\"landscape\":\"./assets/technology/image-launch-vehicle-landscape.jpg\"},\"description\":\"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\\'s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it\\'s quite an awe-inspiring sight on the launch pad!\"},{\"name\":\"Spaceport\",\"images\":{\"portrait\":\"./assets/technology/image-spaceport-portrait.jpg\",\"landscape\":\"./assets/technology/image-spaceport-landscape.jpg\"},\"description\":\"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.\"},{\"name\":\"Space capsule\",\"images\":{\"portrait\":\"./assets/technology/image-space-capsule-portrait.jpg\",\"landscape\":\"./assets/technology/image-space-capsule-landscape.jpg\"},\"description\":\"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth\\'s atmosphere without wings. Our capsule is where you\\'ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.\"}]}');\n\n//# sourceURL=webpack://space/./data.json?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./code/crew-index.js");
/******/ 	
/******/ })()
;