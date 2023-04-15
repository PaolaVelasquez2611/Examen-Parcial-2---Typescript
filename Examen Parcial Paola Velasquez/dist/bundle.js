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

/***/ "./src/components/botones/boton.css":
/*!******************************************!*\
  !*** ./src/components/botones/boton.css ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \" \\r\\n button{\\r\\n    background-color: rgb(241, 168, 168);\\r\\n    border-radius: 30px;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    border: none;\\r\\n    width: 100px;\\r\\n    height: 25px;\\r\\n    margin: 5px;\\r\\n    padding: 2px;\\r\\n}\\r\\n.sec{\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/botones/boton.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://dca_scoffolding/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://dca_scoffolding/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/components/botones/boton.ts":
/*!*****************************************!*\
  !*** ./src/components/botones/boton.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Attributes\": () => (/* binding */ Attributes),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _boton_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boton.css */ \"./src/components/botones/boton.css\");\n\nvar Attributes;\n(function (Attributes) {\n    Attributes[\"category\"] = \"category\";\n})(Attributes || (Attributes = {}));\nclass Buttons extends HTMLElement {\n    static get observedAttributes() {\n        const attributes = {\n            category: null,\n        };\n        return Object.keys(attributes);\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = ``;\n            //<link rel=\"stylesheet\" href=\"../src/componentes/botones/boton.css\">\n            this.shadowRoot.innerHTML += `\r\n        <section class=\"sec\">\r\n        <style>${_boton_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toString()}</style>\r\n        <button id=\"boton\">${this.category}<button>\r\n        </section>\r\n        \r\n        `;\n            //const botones = this.ownerDocument.createElement('button');\n            //botones.innerText=${this.category}\n            //this.shadowRoot?.appendChild(botones);\n        }\n    }\n}\ncustomElements.define(\"botones-categorias\", Buttons);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Buttons);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/botones/boton.ts?");

/***/ }),

/***/ "./src/components/chiste/chiste.ts":
/*!*****************************************!*\
  !*** ./src/components/chiste/chiste.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Attributes2\": () => (/* binding */ Attributes2),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Attributes2;\n(function (Attributes2) {\n    Attributes2[\"chiste\"] = \"chiste\";\n})(Attributes2 || (Attributes2 = {}));\nclass Chistes extends HTMLElement {\n    static get observedAttributes() {\n        const attributes = {\n            chiste: null,\n        };\n        return Object.keys(attributes);\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = ``;\n            this.shadowRoot.innerHTML += `\r\n        <h1>${this.chiste}</h1>\r\n        \r\n        `;\n            //const botones = this.ownerDocument.createElement('button');\n            //botones.innerText=${this.category}\n            //this.shadowRoot?.appendChild(botones);\n        }\n    }\n}\ncustomElements.define(\"chistes-categorias\", Chistes);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chistes);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/chiste/chiste.ts?");

/***/ }),

/***/ "./src/components/data.ts":
/*!********************************!*\
  !*** ./src/components/data.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getApi\": () => (/* binding */ getApi),\n/* harmony export */   \"getApi2\": () => (/* binding */ getApi2)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nfunction getApi() {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            const datachistes = yield (yield fetch(\"https://api.chucknorris.io/jokes/categories\")).json();\n            return datachistes;\n        }\n        catch (error) {\n            console.log(\"no sirve el api\");\n        }\n    });\n}\nfunction getApi2() {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            const datachistes2 = yield (yield fetch(\"https://api.chucknorris.io/jokes/random?category=animal\")).json();\n            console.log(datachistes2);\n            return datachistes2;\n        }\n        catch (error) {\n            console.log(\"no sirve el api\");\n        }\n    });\n}\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/data.ts?");

/***/ }),

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Buttons\": () => (/* reexport safe */ _botones_boton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _botones_boton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./botones/boton */ \"./src/components/botones/boton.ts\");\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_botones_boton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/botones/boton */ \"./src/components/botones/boton.ts\");\n/* harmony import */ var _components_chiste_chiste__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/chiste/chiste */ \"./src/components/chiste/chiste.ts\");\n/* harmony import */ var _components_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/data */ \"./src/components/data.ts\");\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.botones = [];\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const data = yield (0,_components_data__WEBPACK_IMPORTED_MODULE_2__.getApi)();\n            data === null || data === void 0 ? void 0 : data.forEach((category) => {\n                const botoness = this.ownerDocument.createElement('botones-categorias');\n                botoness.setAttribute(_components_botones_boton__WEBPACK_IMPORTED_MODULE_0__.Attributes.category, category);\n                this.botones.push(botoness);\n            });\n            const data2 = yield (0,_components_data__WEBPACK_IMPORTED_MODULE_2__.getApi2)();\n            const card = this.ownerDocument.createElement('chistes-categorias');\n            card.setAttribute(_components_chiste_chiste__WEBPACK_IMPORTED_MODULE_1__.Attributes2.chiste, data2.value);\n            this.botones.push(card);\n            this.render(this.botones);\n        });\n    }\n    render(botones) {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = ``;\n            botones.forEach((botones) => {\n                var _a;\n                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(botones);\n            });\n        }\n        //const something = this.ownerDocument.createElement('div');\n        // this.shadowRoot?.appendChild(something);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;