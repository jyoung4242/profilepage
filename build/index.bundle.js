/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Dosis.ttf */ "./src/assets/Dosis.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/OpenSans.ttf */ "./src/assets/OpenSans.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/big_AL_background.jpg */ "./src/assets/big_AL_background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/small_AL_background.jpg */ "./src/assets/small_AL_background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*style.css*/\r\n@font-face {\r\n  font-family: dosis;\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\n@font-face {\r\n  font-family: openSans;\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.lrg {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n  background-repeat: no-repeat;\r\n  background-size: auto;\r\n}\r\n\r\n.sml {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n  background-repeat: no-repeat;\r\n  background-size: auto;\r\n}\r\n\r\n.headshot {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  width: 90%;\r\n  height: 90%;\r\n  transform: translate(-50%, -50%);\r\n  border: 10px white;\r\n  clip-path: polygon(0% 50%, 25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);\r\n}\r\n\r\n.headshotbkgnd {\r\n  position: relative;\r\n  top: 12%;\r\n  left: 45%;\r\n  width: 30%;\r\n  aspect-ratio: 1/1;\r\n  background-color: white;\r\n  clip-path: polygon(0% 50%, 25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);\r\n  z-index: 2;\r\n}\r\n\r\n.rightmasking {\r\n  position: fixed;\r\n  top: 0%;\r\n  right: 0%;\r\n  width: 30%;\r\n  height: 100vh;\r\n  background-color: white;\r\n  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 40% 50%, 0% 0%);\r\n}\r\n\r\n.namediv {\r\n  font-family: dosis;\r\n  font-size: 3vw;\r\n  font-weight: bold;\r\n  position: fixed;\r\n  color: #eeeeee;\r\n  top: 27%;\r\n  right: 2%;\r\n  width: 15%;\r\n  aspect-ratio: 1.1/1;\r\n  text-align: center;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n  clip-path: polygon(0% 50%, 25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.namediv > span {\r\n  text-shadow: 2px 2px 2px black;\r\n}\r\n\r\n.hero {\r\n  font-family: dosis;\r\n  font-size: 6vw;\r\n  font-weight: bold;\r\n  position: fixed;\r\n  color: #595959;\r\n  top: 1%;\r\n  left: 1%;\r\n  width: 60%;\r\n  text-align: left;\r\n  text-shadow: 3px 3px 2px #dddddd;\r\n}\r\n\r\n.svgdiv {\r\n  position: fixed;\r\n  width: 42%;\r\n  top: 39%;\r\n  left: 10%;\r\n  aspect-ratio: 3/1;\r\n  transform: rotate(-25deg) scale(1.2);\r\n}\r\n\r\n.footer {\r\n  font-size: 1.5vw;\r\n  position: fixed;\r\n  width: 100vw;\r\n  background-color: white;\r\n  bottom: 0%;\r\n  left: 0%;\r\n  height: 7%;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n}\r\n\r\n.footer > a {\r\n  color: #595959;\r\n}\r\n\r\n.smhero {\r\n  font-family: dosis;\r\n  font-size: 8vw;\r\n  font-weight: bold;\r\n  position: fixed;\r\n  color: #595959;\r\n  top: 3%;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  width: 60%;\r\n  text-align: left;\r\n  text-shadow: 3px 3px 2px #dddddd;\r\n}\r\n\r\n.smheadshot {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  width: 90%;\r\n  height: 90%;\r\n  transform: translate(-50%, -50%);\r\n  border: 10px white;\r\n  clip-path: polygon(0% 50%, 25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);\r\n}\r\n\r\n.smheadshotbkgnd {\r\n  position: relative;\r\n  top: 10vw;\r\n  left: 45vw;\r\n  width: 50vw;\r\n  aspect-ratio: 1/1;\r\n  background-color: white;\r\n  clip-path: polygon(0% 50%, 25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);\r\n  z-index: 3;\r\n}\r\n\r\n.smsvgdiv {\r\n  position: fixed;\r\n  width: 40vw;\r\n  top: 65vw;\r\n  left: 15vw;\r\n  aspect-ratio: 3/1;\r\n  transform: rotate(-40deg) scale(1.5);\r\n}\r\n\r\n.smfooter {\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 0;\r\n  height: 10%;\r\n  width: 100vw;\r\n  background-color: white;\r\n  border: 1px transparent;\r\n  border-radius: 10px;\r\n  text-align: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 2;\r\n}\r\n.smfooter > span {\r\n  font-family: dosis;\r\n  font-size: 6vw;\r\n  font-weight: bold;\r\n  position: fixed;\r\n  color: #595959;\r\n  text-shadow: 2px 1px 2px #00000066;\r\n}\r\n\r\n.menu {\r\n  position: fixed;\r\n  top: 2%;\r\n  left: 2%;\r\n  width: 10vw;\r\n  height: 10vw;\r\n  background-color: white;\r\n  border: 1px solid white;\r\n  border-radius: 50%;\r\n}\r\n\r\n.imgDiv {\r\n  position: relative;\r\n  top: 2%;\r\n  left: 2%;\r\n  width: 10vw;\r\n  height: 10vw;\r\n\r\n  z-index: 4;\r\n}\r\n\r\n.imgDiv > img {\r\n  position: relative;\r\n  width: 55%;\r\n  height: 55%;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.menuOpen {\r\n  width: 30vw;\r\n  height: 50vh;\r\n  background-color: white;\r\n  border: 1px solid white;\r\n  border-radius: 20px;\r\n  z-index: 3;\r\n}\r\n\r\n.menuLinks {\r\n  margin-top: 20%;\r\n  width: 30vw;\r\n  height: 45vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n}\r\n\r\n.menuLinks > a {\r\n  font-family: openSans;\r\n  color: #595959;\r\n  font-weight: bold;\r\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);\r\n  font-size: 3vw;\r\n}\r\n\r\n.menuOpen > img {\r\n  position: relative;\r\n  top: 25px;\r\n  left: 25px;\r\n  transform: translate(-50%, -50%);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/*style.css*/\r\n@font-face {\r\n  font-family: dosis;\r\n  src: url(\"./assets/Dosis.ttf\");\r\n}\r\n\r\n@font-face {\r\n  font-family: openSans;\r\n  src: url(\"./assets/OpenSans.ttf\");\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.lrg {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-image: url(\"./assets/big_AL_background.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-size: auto;\r\n}\r\n\r\n.sml {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-image: url(\"./assets/small_AL_background.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-size: auto;\r\n}\r\n\r\n.headshot {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  width: 90%;\r\n  height: 90%;\r\n  transform: translate(-50%, -50%);\r\n  border: 10px white;\r\n  clip-path: polygon(0% 50%, 25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);\r\n}\r\n\r\n.headshotbkgnd {\r\n  position: relative;\r\n  top: 12%;\r\n  left: 45%;\r\n  width: 30%;\r\n  aspect-ratio: 1/1;\r\n  background-color: white;\r\n  clip-path: polygon(0% 50%, 25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);\r\n  z-index: 2;\r\n}\r\n\r\n.rightmasking {\r\n  position: fixed;\r\n  top: 0%;\r\n  right: 0%;\r\n  width: 30%;\r\n  height: 100vh;\r\n  background-color: white;\r\n  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 40% 50%, 0% 0%);\r\n}\r\n\r\n.namediv {\r\n  font-family: dosis;\r\n  font-size: 3vw;\r\n  font-weight: bold;\r\n  position: fixed;\r\n  color: #eeeeee;\r\n  top: 27%;\r\n  right: 2%;\r\n  width: 15%;\r\n  aspect-ratio: 1.1/1;\r\n  text-align: center;\r\n  background-image: url(\"./assets/small_AL_background.jpg\");\r\n  clip-path: polygon(0% 50%, 25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.namediv > span {\r\n  text-shadow: 2px 2px 2px black;\r\n}\r\n\r\n.hero {\r\n  font-family: dosis;\r\n  font-size: 6vw;\r\n  font-weight: bold;\r\n  position: fixed;\r\n  color: #595959;\r\n  top: 1%;\r\n  left: 1%;\r\n  width: 60%;\r\n  text-align: left;\r\n  text-shadow: 3px 3px 2px #dddddd;\r\n}\r\n\r\n.svgdiv {\r\n  position: fixed;\r\n  width: 42%;\r\n  top: 39%;\r\n  left: 10%;\r\n  aspect-ratio: 3/1;\r\n  transform: rotate(-25deg) scale(1.2);\r\n}\r\n\r\n.footer {\r\n  font-size: 1.5vw;\r\n  position: fixed;\r\n  width: 100vw;\r\n  background-color: white;\r\n  bottom: 0%;\r\n  left: 0%;\r\n  height: 7%;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n}\r\n\r\n.footer > a {\r\n  color: #595959;\r\n}\r\n\r\n.smhero {\r\n  font-family: dosis;\r\n  font-size: 8vw;\r\n  font-weight: bold;\r\n  position: fixed;\r\n  color: #595959;\r\n  top: 3%;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  width: 60%;\r\n  text-align: left;\r\n  text-shadow: 3px 3px 2px #dddddd;\r\n}\r\n\r\n.smheadshot {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  width: 90%;\r\n  height: 90%;\r\n  transform: translate(-50%, -50%);\r\n  border: 10px white;\r\n  clip-path: polygon(0% 50%, 25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);\r\n}\r\n\r\n.smheadshotbkgnd {\r\n  position: relative;\r\n  top: 10vw;\r\n  left: 45vw;\r\n  width: 50vw;\r\n  aspect-ratio: 1/1;\r\n  background-color: white;\r\n  clip-path: polygon(0% 50%, 25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);\r\n  z-index: 3;\r\n}\r\n\r\n.smsvgdiv {\r\n  position: fixed;\r\n  width: 40vw;\r\n  top: 65vw;\r\n  left: 15vw;\r\n  aspect-ratio: 3/1;\r\n  transform: rotate(-40deg) scale(1.5);\r\n}\r\n\r\n.smfooter {\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 0;\r\n  height: 10%;\r\n  width: 100vw;\r\n  background-color: white;\r\n  border: 1px transparent;\r\n  border-radius: 10px;\r\n  text-align: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 2;\r\n}\r\n.smfooter > span {\r\n  font-family: dosis;\r\n  font-size: 6vw;\r\n  font-weight: bold;\r\n  position: fixed;\r\n  color: #595959;\r\n  text-shadow: 2px 1px 2px #00000066;\r\n}\r\n\r\n.menu {\r\n  position: fixed;\r\n  top: 2%;\r\n  left: 2%;\r\n  width: 10vw;\r\n  height: 10vw;\r\n  background-color: white;\r\n  border: 1px solid white;\r\n  border-radius: 50%;\r\n}\r\n\r\n.imgDiv {\r\n  position: relative;\r\n  top: 2%;\r\n  left: 2%;\r\n  width: 10vw;\r\n  height: 10vw;\r\n\r\n  z-index: 4;\r\n}\r\n\r\n.imgDiv > img {\r\n  position: relative;\r\n  width: 55%;\r\n  height: 55%;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.menuOpen {\r\n  width: 30vw;\r\n  height: 50vh;\r\n  background-color: white;\r\n  border: 1px solid white;\r\n  border-radius: 20px;\r\n  z-index: 3;\r\n}\r\n\r\n.menuLinks {\r\n  margin-top: 20%;\r\n  width: 30vw;\r\n  height: 45vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n}\r\n\r\n.menuLinks > a {\r\n  font-family: openSans;\r\n  color: #595959;\r\n  font-weight: bold;\r\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);\r\n  font-size: 3vw;\r\n}\r\n\r\n.menuOpen > img {\r\n  position: relative;\r\n  top: 25px;\r\n  left: 25px;\r\n  transform: translate(-50%, -50%);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/peasy-ui/dist/index.js":
/*!*********************************************!*\
  !*** ./node_modules/peasy-ui/dist/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

(()=>{"use strict";var e={d:(t,i)=>{for(var s in i)e.o(i,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:i[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{UI:()=>n,UIView:()=>i});class i{constructor(){this.state="created",this.bindings=[],this.animations=[],this.animationQueue=[],this.destroyed="",this.moved=""}static create(e,t,s={},o={parent:null,prepare:!0,sibling:null}){var r;const l=new i;return l.model=s,l.element=t,l.bindings.push(...n.parse(l.element,s,l)),l.parentElement=e,l.sibling=o.sibling,l.parent=null!==(r=o.parent)&&void 0!==r?r:n,l.attached=new Promise((e=>{l.attachResolve=e})),l}destroy(){this.element.classList.add("pui-removing"),this.destroyed="queue",n.destroyed.push(this)}terminate(){Promise.all(this.getAnimations()).then((()=>{var e;null===(e=this.element.parentElement)||void 0===e||e.removeChild(this.element),this.bindings.forEach((e=>e.unbind()));const t=this.parent.views.findIndex((e=>e===this));t>-1&&this.parent.views.splice(t,1)})),this.destroyed="destroyed"}move(e){this.moved="queue",this.element.classList.add("pui-moving"),this.sibling=e}play(e,t){return"string"==typeof e&&(e=this.animations.find((t=>t.name===e)).clone()),e.element=t,e.state="pending",this.animationQueue.push(e),this.updateAnimations(performance.now()),e}updateFromUI(){this.bindings.forEach((e=>e.updateFromUI()))}updateToUI(){var e;switch(this.bindings.forEach((e=>e.updateToUI())),this.state){case"created":this.element.classList.add("pui-adding"),this.parentElement.insertBefore(this.element,null===(e=this.sibling)||void 0===e?void 0:e.nextSibling),this.attachResolve(),this.state="attaching";break;case"attaching":0===this.getAnimations(!1).length&&(this.element.classList.remove("pui-adding"),this.state="attached")}}updateAtEvents(){this.bindings.forEach((e=>e.updateAtEvents()))}updateAnimations(e){for(var t,i;null!==(i="finished"===(null===(t=this.animationQueue[0])||void 0===t?void 0:t.state))&&void 0!==i&&i;)this.animationQueue.shift().destroy();for(let t=0;t<this.animationQueue.length;t++){const i=this.animationQueue[t];"pending"===i.state&&(i.isBlocked(e)||(i.state="playing",i.startTime=e,i.animation=i.element.animate(i.keyframes,i.options),i.finished=i.animation.finished,i.finished.then((()=>{i.state="finished",this.updateAnimations(performance.now())}))))}}updateMove(){switch(this.moved){case"queue":this.moved="move";break;case"move":if(0===this.getAnimations().length){const e=this.element.parentElement;console.log("[view] moving",this.element.nextSibling===this.sibling.nextSibling,">",this.element.nextSibling.cloneNode(),"<",this.sibling.nextSibling.innerText),e.insertBefore(this.element,this.sibling.nextSibling),this.element.classList.remove("pui-moving"),this.moved="",this.sibling=void 0}}this.bindings.forEach((e=>e.updateMove()))}getAnimations(e=!0){return this.element.getAnimations({subtree:e}).filter((e=>"finished"!==e.playState&&e.effect.getTiming().iterations!==1/0)).map((e=>e.finished))}}class s{constructor(){this.fromUI=!1,this.toUI=!0,this.atEvent=!1,this.oneTime=!1,this.views=[],this.firstUpdate=!0,this.events=[],this.triggerAtEvent=e=>{this.events.push(e)},this.id=++n.id}get element(){return null==this.$element&&(this.$element="string"==typeof this.selector?this.context.querySelector(this.selector):this.selector),this.$element}set element(e){this.$element=e}static create(e){var t,i,o,r,l,a,h,u,d;const p=new s;return p.object="$model"in e.object?e.object:{$model:e.object},p.property=e.property,p.context=null!==(t=e.context)&&void 0!==t?t:document,p.selector=e.selector,p.attribute=null!==(i=e.attribute)&&void 0!==i?i:"innerText",p.value=null!==(o=e.value)&&void 0!==o?o:p.value,p.template=null!==(r=e.template)&&void 0!==r?r:p.template,p.fromUI=null!==(l=e.fromUI)&&void 0!==l?l:p.fromUI,p.toUI=null!==(a=e.toUI)&&void 0!==a?a:p.toUI,p.atEvent=null!==(h=e.atEvent)&&void 0!==h?h:p.atEvent,p.oneTime=null!==(u=e.oneTime)&&void 0!==u?u:p.oneTime,p.parent=null!==(d=e.parent)&&void 0!==d?d:n,p.addListener(),"boolean"!=typeof p.fromUI&&(p.fromUI=p.fromUI.bind(p)),"boolean"!=typeof p.toUI&&(p.toUI=p.toUI.bind(p)),p}destroy(){this.element=null,this.removeListener(),this.views.forEach((e=>e.destroy()))}unbind(){n.unbind(this)}addListener(){this.atEvent&&(this.toUI=!1,this.fromUI=!1,this.element.addEventListener(this.attribute,this.triggerAtEvent))}removeListener(){this.atEvent&&this.element.removeEventListener(this.attribute,this.triggerAtEvent)}updateFromUI(){if(!1===this.fromUI||this.firstUpdate)return this.firstUpdate=!1,void this.views.forEach((e=>e.updateFromUI()));const{target:e,property:t}=n.resolveProperty(this.element,this.attribute),i=e[t];if(i!==this.lastUIValue){let e=!0!==this.fromUI?this.fromUI(i,this.lastUIValue,this.property,this.object):i;if(this.lastUIValue=i,void 0!==e&&e!==this.lastValue){this.lastValue=e;const{target:t,property:i}=n.resolveProperty(this.object,this.property);"number"!==n.resolveValue(this.object,this.property)||isNaN(e)||(e=+e),t[i]=e}else this.lastValue=e}this.views.forEach((e=>e.updateFromUI()))}updateToUI(){var e,t,s,o,r,l;if(!1===this.toUI)return void this.views.forEach((e=>e.updateToUI()));let a=n.resolveValue(this.object,this.property),h=!1;if(null!=this.template)if("boolean"==typeof this.attribute){if(a=!1!==(null!=a&&a),a!==this.lastValue){const e=!0!==this.toUI?this.toUI(a,this.lastValue,this.property,this.object):a;if(void 0!==e&&e!==this.lastUIValue){if(e===this.attribute)this.views.push(i.create(this.element.parentElement,this.template.cloneNode(!0),this.object,{parent:this,prepare:!1,sibling:this.element}));else{const e=this.views.pop();null==e||e.destroy()}this.lastValue=a,this.lastUIValue=e}}}else{null==a&&(a=[]);const n=null!==(e=this.lastValue)&&void 0!==e?e:[];if(a.length!==n.length)h=!0;else for(let e=0,t=a.length;e<t;e++)if(a[e]!==n[e]){h=!0;break}if(!h)return this.views.forEach((e=>e.updateToUI())),void(this.oneTime&&this.oneTimeDone());const u=!0!==this.toUI?this.toUI(a,n,this.property,this.object):a;if(null==u)return this.views.forEach((e=>e.updateToUI())),void(this.oneTime&&this.oneTimeDone());const d=null!==(t=this.lastUIValue)&&void 0!==t?t:[];let p=0;for(let e=0,t=u.length,i=0;e<t&&u[e]===d[i];e++,i++)p++;if(p===u.length&&u.length===d.length)return this.views.forEach((e=>e.updateToUI())),void(this.oneTime&&this.oneTimeDone());const m=this.views.splice(0,p);let c=m[m.length-1];for(let e=p,t=u.length,n=p;e<t;e++,n++){const t=u[e];"string"!=typeof t&&(t.$index=e);const n=this.views.shift();if(null==n){const e={$model:{[this.attribute]:t},$parent:this.object},n=i.create(this.element.parentElement,this.template.cloneNode(!0),e,{parent:this,prepare:!1,sibling:null!==(s=null==c?void 0:c.element)&&void 0!==s?s:this.element});m.push(n),c=n;continue}if(t===(null==n?void 0:n.model.$model[this.attribute])){m.push(n),n.move(null!==(o=null==c?void 0:c.element)&&void 0!==o?o:this.element),c=n;continue}const a=null==n?void 0:n.model.$model[this.attribute];if(!u.slice(e).includes(a)){n.destroy(),e--,c=n;continue}this.views.unshift(n);let h=!1;for(let e=0,i=this.views.length;e<i;e++){const i=this.views[e];if(t===(null==i?void 0:i.model.$model[this.attribute])){m.push(...this.views.splice(e,1)),i.move(null!==(r=null==c?void 0:c.element)&&void 0!==r?r:this.element),h=!0,c=i;break}}if(!h){const e={$model:{[this.attribute]:t},$parent:this.object},s=i.create(this.element.parentElement,this.template.cloneNode(!0),e,{parent:this,prepare:!1,sibling:null!==(l=null==c?void 0:c.element)&&void 0!==l?l:this.element});m.push(s),c=s}}this.views.forEach((e=>e.destroy())),this.views=m,this.lastValue=[...a],this.lastUIValue=[...u]}else if(a!==this.lastValue){const e=!0!==this.toUI?this.toUI(a,this.lastValue,this.property,this.object):a;if(void 0!==e&&e!==this.lastUIValue){const{target:t,property:i}=n.resolveProperty(this.element,this.attribute);t[i]=e,this.lastValue=a,this.lastUIValue=e}}this.views.forEach((e=>e.updateToUI())),this.oneTime&&this.oneTimeDone()}oneTimeDone(){this.toUI=!1,this.fromUI=!1}updateAtEvents(){let e=this.events.shift();for(;null!=e;)n.resolveValue(this.object,this.property)(e,this.object.$model,this.element,this.attribute,this.object),e=this.events.shift();this.views.forEach((e=>e.updateAtEvents()))}updateMove(){this.views.forEach((e=>e.updateMove()))}}class n{static create(e,t,s={},o={parent:null,prepare:!0,sibling:null}){if("string"==typeof t){let i=null!=e?e:document;for(;null!=i.parentNode;)i=i.parentNode;const s=i.createElement("div");s.innerHTML=o.prepare?n.prepare(t):t,t=s.firstElementChild}const r=i.create(e,t,s,o);return r.parent===n&&n.views.push(r),r}static play(e,t){return"string"==typeof e?(e=this.globals.animations.find((t=>t.name===e)).clone()).play(t):e.play()}static parse(e,t,i=null){var s,o,r;const l=[];if(3===e.nodeType){let s=e.textContent,o=s.match(n.regexValue);for(;null!=o;){const r=o[1];let a=o[2];s=o[3];let h=!1;a.startsWith("|")&&(h=!0,a=a.slice(1).trimStart());let u=e.cloneNode();e.textContent=r,e.parentElement.insertBefore(u,e.nextSibling),l.push(n.bind({selector:u,attribute:"textContent",object:t,property:a,parent:i,oneTime:h})),u=(e=u).cloneNode(),u.textContent=s,e.parentElement.insertBefore(u,e.nextSibling),e=u,o=s.match(n.regexValue)}}else{if(l.push(...Object.keys(null!==(s=e.attributes)&&void 0!==s?s:[]).reverse().map((s=>{const o=[];if(e instanceof Comment)return[];const r=e.attributes[s];if(r.name.startsWith("pui.")){const s=r.value.match(n.regexAttribute);let o,l,[a,h,u,d,p]=s,m=!1;if("@"!==u){const i=h.match(/^'(.*?)'$/);if(null!=i)o=i[1],e.setAttribute("value",o),h="option"===e.nodeName.toLowerCase()?"selected":"checked",d=e=>e?o:void 0,u=e=>e===o;else if(""===h){if(">"===d){const{target:i,property:s}=n.resolveProperty(t,p);return i[s]=e,[]}{const t=document.createComment(r.name);e.parentNode.insertBefore(t,e),e.parentNode.removeChild(e),e.removeAttribute(r.name),l=e,e=t,h="="===u,u=!0,"|"===d&&(m=!0)}}else if("*"===d){const t=document.createComment(r.name);e.parentNode.insertBefore(t,e),e.parentNode.removeChild(e),e.removeAttribute(r.name),l=e,e=t}else"|"===d?m=!0:"checked"!==h&&e.setAttribute(h,"")}return[n.bind({selector:e,attribute:h,value:o,object:t,property:p,template:l,toUI:"string"==typeof u?"<"===u:u,fromUI:"string"==typeof d?">"===d:d,atEvent:"@"===u,parent:i,oneTime:m})]}const l=[r.value];let a=0,h=l[a].match(n.regexValue);for(;null!=h;){let{before:s,property:u,after:d}=h.groups,p=!1;u.startsWith("|")&&(p=!0,u=u.slice(1).trimStart()),o.push(n.bind({selector:e,attribute:r.name,object:t,property:u,oneTime:p,toUI(t,i,s,o){if(this.oneTime){const e=l.indexOf(s);e>-1&&(l[e]=n.resolveValue(o,s),l[e-1]+=l[e]+l[e+1],l.splice(e,2))}const a=l.map(((e,t)=>t%2==0?e:n.resolveValue(o,e))).join("");e.setAttribute(r.name,a)},parent:i})),l[a++]=s,l[a++]=u,l[a]=d,h=l[a].match(n.regexValue)}return o})).flat()),e instanceof Comment)return l.filter((e=>null!=e.template||(e.unbind(),!1)));if(!n.leaveAttributes)for(let t=Object.keys(null!==(o=e.attributes)&&void 0!==o?o:[]).length-1;t>=0;t--){const i=e.attributes[Object.keys(null!==(r=e.attributes)&&void 0!==r?r:[])[t]];i.name.startsWith("pui.")&&e.removeAttribute(i.name)}l.push(...Array.from(e.childNodes).map((e=>n.parse(e,t,i))).flat())}return l}static bind(e){return s.create(e)}static unbind(e){if(e.destroy(),e.parent!==n){const t=e.parent.bindings,i=t.indexOf(e);i>-1&&t.splice(i,1)}}static update(){this.views.forEach((e=>e.updateFromUI())),this.views.forEach((e=>e.updateToUI())),this.views.forEach((e=>e.updateAtEvents()));const e=performance.now();[...this.views,this.globals].forEach((t=>t.updateAnimations(e))),this.views.forEach((e=>{e.updateMove()})),this.destroyed.forEach((e=>{switch(e.destroyed){case"queue":e.destroyed="destroy";break;case"destroy":{e.terminate();const t=this.destroyed.findIndex((t=>e===t));t>-1&&this.destroyed.splice(t,1)}}}))}static resolveProperty(e,t){const i=(t=t.replace("[",".").replace("]",".")).split(".").filter((e=>(null!=e?e:"").length>0));let s="$model"in e?e.$model:e;for(;i.length>1;)s=s[i.shift()];return{target:s,property:i[0]}}static resolveValue(e,t){let i=0;do{const{target:i,property:s}=n.resolveProperty(e,t);if(null!=i&&s in i)return i[s];e=e.$parent}while(null!=e&&i++<1e3)}static prepare(e){let t=e;e="";let i=t.match(n.regexReplace);for(;null!=i;){const[s,o,r,l]=i;r.trim().endsWith("<==")?e+=`${o}div PUI.${n.bindingCounter++}="${r}"`:e+=`${o} PUI.${n.bindingCounter++}="${r}" `,t=l,i=t.match(n.regexReplace)}return e+t}}n.id=0,n.views=[],n.destroyed=[],n.globals=new i,n.leaveAttributes=!1,n.regexReplace=/([\S\s]*?)\$\{([^}]*?[<=@!]=[*=>|][^}]*?)\}([\S\s]*)/m,n.regexAttribute=/^\s*(\S*?)\s*([<=@!])=([*=>|])\s*(\S*?)\s*$/,n.regexValue=/(?<before>[\S\s]*?)\$\{\s*(?<property>[\s\S]*?)\s*\}(?<after>[\S\s]*)/m,n.bindingCounter=0;var o=exports;for(var r in t)o[r]=t[r];t.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/state/state.ts":
/*!****************************!*\
  !*** ./src/state/state.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "model": () => (/* binding */ model)
/* harmony export */ });
/* harmony import */ var _assets_headshot_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/headshot.jpeg */ "./src/assets/headshot.jpeg");
/* harmony import */ var _assets_small_headshot_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/small_headshot.jpeg */ "./src/assets/small_headshot.jpeg");
/* harmony import */ var _assets_menu_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/menu.png */ "./src/assets/menu.png");
/* harmony import */ var _assets_menuclose_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/menuclose.png */ "./src/assets/menuclose.png");




var model = {
    global: {
        size: "large",
        orientation: "portrait",
        windowWidth: 800,
        windowHeight: 600,
        screenWidth: 800,
        screenHeight: 600,
        get respContent() {
            if (model.global.size == "large")
                return true;
            else
                return false;
        },
        update: function (e) {
            model.global.screenWidth = window.screen.availWidth;
            model.global.screenHeight = window.screen.availHeight;
            model.global.windowWidth = window.innerWidth;
            model.global.windowHeight = window.innerHeight;
            if (window.matchMedia("(orientation: portrait)").matches) {
                model.global.orientation = "portrait";
            }
            else if (window.matchMedia("(orientation: landscape)").matches) {
                model.global.orientation = "landscape";
            }
            if ((model.global.windowWidth < 800 || model.global.screenWidth < 1000) && model.global.orientation == "portrait") {
                model.global.size = "small";
                model.main.mug = _assets_small_headshot_jpeg__WEBPACK_IMPORTED_MODULE_1__;
            }
            else {
                model.global.size = "large";
                model.main.mug = _assets_headshot_jpeg__WEBPACK_IMPORTED_MODULE_0__;
            }
            console.log(model.global.orientation);
        },
    },
    main: {
        mug: _assets_headshot_jpeg__WEBPACK_IMPORTED_MODULE_0__,
    },
    menu: {
        src: _assets_menu_png__WEBPACK_IMPORTED_MODULE_2__,
        cssString: "",
        isOpen: false,
        toggle: function (_event, model) {
            if (model.menu.isOpen) {
                model.menu.isOpen = false;
                model.menu.src = _assets_menu_png__WEBPACK_IMPORTED_MODULE_2__;
                model.menu.cssString = "";
            }
            else {
                model.menu.isOpen = true;
                model.menu.src = _assets_menuclose_png__WEBPACK_IMPORTED_MODULE_3__;
                model.menu.cssString = "menuOpen";
            }
        },
    },
};


/***/ }),

/***/ "./src/assets/Dosis.ttf":
/*!******************************!*\
  !*** ./src/assets/Dosis.ttf ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1af19a28a29fcb2321da.ttf";

/***/ }),

/***/ "./src/assets/OpenSans.ttf":
/*!*********************************!*\
  !*** ./src/assets/OpenSans.ttf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ceb05254cedfa895b512.ttf";

/***/ }),

/***/ "./src/assets/big_AL_background.jpg":
/*!******************************************!*\
  !*** ./src/assets/big_AL_background.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f9957dab6a46bcba1ce2.jpg";

/***/ }),

/***/ "./src/assets/headshot.jpeg":
/*!**********************************!*\
  !*** ./src/assets/headshot.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "763d73084bef03e132cd.jpeg";

/***/ }),

/***/ "./src/assets/menu.png":
/*!*****************************!*\
  !*** ./src/assets/menu.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4a9d7101e2ae1532065e.png";

/***/ }),

/***/ "./src/assets/menuclose.png":
/*!**********************************!*\
  !*** ./src/assets/menuclose.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b94c949bdcca87ff2cb4.png";

/***/ }),

/***/ "./src/assets/small_AL_background.jpg":
/*!********************************************!*\
  !*** ./src/assets/small_AL_background.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3c13a49793429f7de2c2.jpg";

/***/ }),

/***/ "./src/assets/small_headshot.jpeg":
/*!****************************************!*\
  !*** ./src/assets/small_headshot.jpeg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "27f35815b23e2e88a648.jpeg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var peasy_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! peasy-ui */ "./node_modules/peasy-ui/dist/index.js");
/* harmony import */ var peasy_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(peasy_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state/state */ "./src/state/state.ts");



var template = "\n<div>\n    <div class=\"lrg\" ${===global.respContent}> \n        <div class=\"hero\">\n            <span>Creative Developer</span>\n        </div>\n        <div class=\"headshotbkgnd\">\n            <img class=\"headshot\" alt=\"\" src=\"${main.mug}\" />\n        </div>\n        <div class=\"rightmasking\"></div>\n        <div class=\"namediv\">\n            <span>Justin</span>\n            <span>Young</span>\n        </div>\n        <div class=\"svgdiv\">\n            <svg viewBox=\"-9.235 3.736 199.035 92.468\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <g transform=\"matrix(1, 0, 0, 1, -20.537664, -69.250595)\">\n                    <path style=\"stroke: rgb(0, 0, 0); fill: none; stroke-width: 2px;\" d=\"M 27.705 138.525 C 30.275 191.643 83.773 152.12 83.115 138.525\"/>\n                    <path style=\"stroke: rgb(0, 0, 0); fill: none; stroke-width: 2px;\" d=\"M 70.074 134.013 C 71.843 128.706 70.766 121.921 69.525 118.928 C 68.284 115.933 60.461 105.225 54.083 98.395 C 45.574 89.286 40.077 84.052 21.345 77.499\" transform=\"matrix(-0.330292, -0.943879, 0.943879, -0.330292, -38.39465, 184.269937)\"/>\n                    <path style=\"stroke: rgb(0, 0, 0); fill: none; stroke-width: 2px; stroke-linecap: round;\" d=\"M 64.645 73.886 C 83.424 73.528 90.082 90.234 110.82 92.35\"/>\n                    <path style=\"stroke: rgb(0, 0, 0); stroke-width: 2px; fill: none; stroke-linecap: round;\" d=\"M 83.194 138.737 C 83.094 132.246 88.153 129.798 92.28 129.362 C 95.067 129.068 110.748 129.079 110.748 129.079\" transform=\"matrix(0.999882, 0.015334, -0.015334, 0.999882, 2.064747, -1.471199)\"/>\n                    <ellipse style=\"stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255); stroke-width: 2px;\" cx=\"88.071\" cy=\"127.078\" rx=\"11.753\" ry=\"11.87\"/>\n                    <ellipse style=\"stroke: rgb(0, 0, 0); fill: rgb(39, 39, 39);\" cx=\"88.037\" cy=\"126.967\" rx=\"7.846\" ry=\"8.1\"/>\n                    <ellipse style=\"stroke: rgb(0, 0, 0); fill: none; stroke-width: 2px;\" cx=\"66\" cy=\"95\" rx=\"16\" ry=\"16\"/>\n                    <g transform=\"matrix(1.112741, 0, 0, 1.112741, -6.93627, -9.594408)\">\n                    <path style=\"stroke: rgb(0, 0, 0); fill: rgb(1, 1, 1);\" d=\"M 75.432 90.909 L 75.432 97.742 L 68.963 96.192 L 68.963 92.805 L 75.432 90.909 Z\"/>\n                    <path style=\"stroke: rgb(0, 0, 0); fill: rgb(1, 1, 1);\" d=\"M 62.13 97.742 L 62.13 90.909 L 55.661 92.459 L 55.661 95.846 L 62.13 97.742 Z\" transform=\"matrix(-1, 0, 0, -1, 117.791, 188.650993)\"/>\n                    <path style=\"stroke: rgb(0, 0, 0); fill: rgb(1, 1, 1);\" d=\"M 68.781 104.393 L 68.781 97.56 L 62.312 99.11 L 62.312 102.497 L 68.781 104.393 Z\" transform=\"matrix(0, 1, -1, 0, 166.522997, 35.429998)\"/>\n                    <path style=\"stroke: rgb(0, 0, 0); fill: rgb(1, 1, 1);\" d=\"M 68.781 91.091 L 68.781 84.258 L 62.312 85.808 L 62.312 89.195 L 68.781 91.091 Z\" transform=\"matrix(0, -1, 1, 0, -22.128004, 153.221003)\"/>\n                    </g>\n                    <rect style=\"stroke: rgb(0, 0, 0); fill: rgb(77, 77, 77);\" transform=\"matrix(0.003146, -0.999995, 0.999995, 0.003146, -9.70647, 156.073563)\" x=\"53.934\" y=\"106.489\" width=\"4.059\" height=\"10.841\" rx=\"2\" ry=\"2\"/>\n                    <path style=\"stroke: rgb(0, 0, 0); fill: none; stroke-width: 2px;\" d=\"M 138.519 165.454 C 141.089 112.336 194.587 151.859 193.929 165.454\" transform=\"matrix(-1, 0, 0, -1, 332.454025, 303.978989)\"/>\n                    <path style=\"stroke: rgb(0, 0, 0); fill: none; stroke-width: 2px;\" d=\"M 199.364 77.499 C 201.133 82.806 200.056 89.591 198.815 92.584 C 197.574 95.579 189.751 106.287 183.373 113.117 C 174.864 122.226 169.367 127.46 150.635 134.013\" transform=\"matrix(0.330292, -0.943879, 0.943879, 0.330292, 17.689461, 236.443323)\"/>\n                    <path style=\"stroke: rgb(0, 0, 0); fill: none; stroke-width: 2px; stroke-linecap: round;\" d=\"M 110.82 92.344 C 129.599 92.702 136.257 75.996 156.995 73.88\" transform=\"matrix(-1, 0, 0, -1, 267.814995, 166.229668)\"/>\n                    <path style=\"stroke: rgb(0, 0, 0); stroke-width: 2px; fill: none; stroke-linecap: round;\" d=\"M 110.894 129.078 C 110.794 135.569 115.853 138.017 119.98 138.453 C 122.767 138.747 138.448 138.736 138.448 138.736\" transform=\"matrix(-0.999882, 0.015334, -0.015334, -0.999882, 251.379211, 265.886603)\"/>\n                    <ellipse style=\"stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255); stroke-width: 2px;\" cx=\"-133.569\" cy=\"127.078\" rx=\"11.753\" ry=\"11.87\" transform=\"matrix(-1, 0, 0, 1, 0, 0)\"/>\n                    <ellipse style=\"stroke: rgb(0, 0, 0); fill: rgb(39, 39, 39);\" cx=\"-133.603\" cy=\"126.967\" rx=\"7.846\" ry=\"8.1\" transform=\"matrix(-1, 0, 0, 1, 0, 0)\"/>\n                    <ellipse style=\"stroke: rgb(0, 0, 0); fill: none; stroke-width: 2px;\" cx=\"-155.64\" cy=\"95\" rx=\"16\" ry=\"16\" transform=\"matrix(-1, 0, 0, 1, 0, 0)\"/>\n                    <rect style=\"stroke: rgb(0, 0, 0); fill: rgb(77, 77, 77);\" transform=\"matrix(-0.003146, -0.999995, -0.999995, 0.003146, 18.029969, 48.876105)\" x=\"-53.934\" y=\"-106.489\" width=\"4.059\" height=\"10.841\" rx=\"2\" ry=\"2\"/>\n                    <g transform=\"matrix(1, 0, 0, 1, -0.324172, -0.194503)\">\n                    <ellipse style=\"stroke: rgb(0, 0, 0); fill: rgb(102, 102, 102);\" cx=\"156\" cy=\"87\" rx=\"4.5\" ry=\"4.5\"/>\n                    <ellipse style=\"stroke: rgb(0, 0, 0); fill: rgb(102, 102, 102);\" cx=\"156\" cy=\"101.865\" rx=\"4.5\" ry=\"4.5\"/>\n                    <ellipse style=\"stroke: rgb(0, 0, 0); fill: rgb(102, 102, 102);\" cx=\"148.102\" cy=\"94.629\" rx=\"4.5\" ry=\"4.5\"/>\n                    <ellipse style=\"stroke: rgb(0, 0, 0); fill: rgb(102, 102, 102);\" cx=\"164.028\" cy=\"94.629\" rx=\"4.5\" ry=\"4.5\"/>\n                    </g>\n                </g>\n            </svg>\n        </div>\n        <div class=\"footer\">\n            <a href=\"#\">My Story</a>\n            <a href=\"#\">Projects</a>\n            <a href=\"#\">Technologies</a>\n            <a href=\"#\">Game Jams</a>\n            <a href=\"#\">My Games</a>\n            <a href=\"#\">Contact Me</a>\n        </div>\n    </div>\n    <div class=\"sml\" ${!==global.respContent}> \n        <div class=\"imgDiv\">\n            <img alt=\"\" src=\"${menu.src}\" ${click@=>menu.toggle}/>\n        </div>\n        <div class=\"menu ${menu.cssString}\" >\n            \n            \n            <div class=\"menuLinks\">\n                <a href=\"#\" ${===menu.isOpen}>My Story</a>\n                <a href=\"#\" ${===menu.isOpen}>Projects</a>\n                <a href=\"#\" ${===menu.isOpen}>Technologies</a>\n                <a href=\"#\" ${===menu.isOpen}>Game Jams</a>\n                <a href=\"#\" ${===menu.isOpen}>My Games</a>\n                <a href=\"#\" ${===menu.isOpen}>Contact Me</a>\n            </div>\n            \n        </div>\n        <div class=\"smhero\">\n            <span>Creative Developer</span>\n        </div>\n        <div class=\"smheadshotbkgnd\">\n            <img class=\"smheadshot\" alt=\"\" src=\"${main.mug}\" />\n        </div>\n        <div class=\"smfooter\">\n            <span>Justin Young</span>\n        </div>\n        <div class=\"smsvgdiv\">\n            <svg viewBox=\"-9.235 3.736 199.035 92.468\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <g transform=\"matrix(1, 0, 0, 1, -20.537664, -69.250595)\">\n                    <path style=\"stroke: rgb(0, 0, 0); fill: none; stroke-width: 2px;\" d=\"M 27.705 138.525 C 30.275 191.643 83.773 152.12 83.115 138.525\"/>\n                    <path style=\"stroke: rgb(0, 0, 0); fill: none; stroke-width: 2px;\" d=\"M 70.074 134.013 C 71.843 128.706 70.766 121.921 69.525 118.928 C 68.284 115.933 60.461 105.225 54.083 98.395 C 45.574 89.286 40.077 84.052 21.345 77.499\" transform=\"matrix(-0.330292, -0.943879, 0.943879, -0.330292, -38.39465, 184.269937)\"/>\n                    <path style=\"stroke: rgb(0, 0, 0); fill: none; stroke-width: 2px; stroke-linecap: round;\" d=\"M 64.645 73.886 C 83.424 73.528 90.082 90.234 110.82 92.35\"/>\n                    <path style=\"stroke: rgb(0, 0, 0); stroke-width: 2px; fill: none; stroke-linecap: round;\" d=\"M 83.194 138.737 C 83.094 132.246 88.153 129.798 92.28 129.362 C 95.067 129.068 110.748 129.079 110.748 129.079\" transform=\"matrix(0.999882, 0.015334, -0.015334, 0.999882, 2.064747, -1.471199)\"/>\n                    <ellipse style=\"stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255); stroke-width: 2px;\" cx=\"88.071\" cy=\"127.078\" rx=\"11.753\" ry=\"11.87\"/>\n                    <ellipse style=\"stroke: rgb(0, 0, 0); fill: rgb(39, 39, 39);\" cx=\"88.037\" cy=\"126.967\" rx=\"7.846\" ry=\"8.1\"/>\n                    <ellipse style=\"stroke: rgb(0, 0, 0); fill: none; stroke-width: 2px;\" cx=\"66\" cy=\"95\" rx=\"16\" ry=\"16\"/>\n                    <g transform=\"matrix(1.112741, 0, 0, 1.112741, -6.93627, -9.594408)\">\n                    <path style=\"stroke: rgb(0, 0, 0); fill: rgb(1, 1, 1);\" d=\"M 75.432 90.909 L 75.432 97.742 L 68.963 96.192 L 68.963 92.805 L 75.432 90.909 Z\"/>\n                    <path style=\"stroke: rgb(0, 0, 0); fill: rgb(1, 1, 1);\" d=\"M 62.13 97.742 L 62.13 90.909 L 55.661 92.459 L 55.661 95.846 L 62.13 97.742 Z\" transform=\"matrix(-1, 0, 0, -1, 117.791, 188.650993)\"/>\n                    <path style=\"stroke: rgb(0, 0, 0); fill: rgb(1, 1, 1);\" d=\"M 68.781 104.393 L 68.781 97.56 L 62.312 99.11 L 62.312 102.497 L 68.781 104.393 Z\" transform=\"matrix(0, 1, -1, 0, 166.522997, 35.429998)\"/>\n                    <path style=\"stroke: rgb(0, 0, 0); fill: rgb(1, 1, 1);\" d=\"M 68.781 91.091 L 68.781 84.258 L 62.312 85.808 L 62.312 89.195 L 68.781 91.091 Z\" transform=\"matrix(0, -1, 1, 0, -22.128004, 153.221003)\"/>\n                    </g>\n                    <rect style=\"stroke: rgb(0, 0, 0); fill: rgb(77, 77, 77);\" transform=\"matrix(0.003146, -0.999995, 0.999995, 0.003146, -9.70647, 156.073563)\" x=\"53.934\" y=\"106.489\" width=\"4.059\" height=\"10.841\" rx=\"2\" ry=\"2\"/>\n                    <path style=\"stroke: rgb(0, 0, 0); fill: none; stroke-width: 2px;\" d=\"M 138.519 165.454 C 141.089 112.336 194.587 151.859 193.929 165.454\" transform=\"matrix(-1, 0, 0, -1, 332.454025, 303.978989)\"/>\n                    <path style=\"stroke: rgb(0, 0, 0); fill: none; stroke-width: 2px;\" d=\"M 199.364 77.499 C 201.133 82.806 200.056 89.591 198.815 92.584 C 197.574 95.579 189.751 106.287 183.373 113.117 C 174.864 122.226 169.367 127.46 150.635 134.013\" transform=\"matrix(0.330292, -0.943879, 0.943879, 0.330292, 17.689461, 236.443323)\"/>\n                    <path style=\"stroke: rgb(0, 0, 0); fill: none; stroke-width: 2px; stroke-linecap: round;\" d=\"M 110.82 92.344 C 129.599 92.702 136.257 75.996 156.995 73.88\" transform=\"matrix(-1, 0, 0, -1, 267.814995, 166.229668)\"/>\n                    <path style=\"stroke: rgb(0, 0, 0); stroke-width: 2px; fill: none; stroke-linecap: round;\" d=\"M 110.894 129.078 C 110.794 135.569 115.853 138.017 119.98 138.453 C 122.767 138.747 138.448 138.736 138.448 138.736\" transform=\"matrix(-0.999882, 0.015334, -0.015334, -0.999882, 251.379211, 265.886603)\"/>\n                    <ellipse style=\"stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255); stroke-width: 2px;\" cx=\"-133.569\" cy=\"127.078\" rx=\"11.753\" ry=\"11.87\" transform=\"matrix(-1, 0, 0, 1, 0, 0)\"/>\n                    <ellipse style=\"stroke: rgb(0, 0, 0); fill: rgb(39, 39, 39);\" cx=\"-133.603\" cy=\"126.967\" rx=\"7.846\" ry=\"8.1\" transform=\"matrix(-1, 0, 0, 1, 0, 0)\"/>\n                    <ellipse style=\"stroke: rgb(0, 0, 0); fill: none; stroke-width: 2px;\" cx=\"-155.64\" cy=\"95\" rx=\"16\" ry=\"16\" transform=\"matrix(-1, 0, 0, 1, 0, 0)\"/>\n                    <rect style=\"stroke: rgb(0, 0, 0); fill: rgb(77, 77, 77);\" transform=\"matrix(-0.003146, -0.999995, -0.999995, 0.003146, 18.029969, 48.876105)\" x=\"-53.934\" y=\"-106.489\" width=\"4.059\" height=\"10.841\" rx=\"2\" ry=\"2\"/>\n                    <g transform=\"matrix(1, 0, 0, 1, -0.324172, -0.194503)\">\n                    <ellipse style=\"stroke: rgb(0, 0, 0); fill: rgb(102, 102, 102);\" cx=\"156\" cy=\"87\" rx=\"4.5\" ry=\"4.5\"/>\n                    <ellipse style=\"stroke: rgb(0, 0, 0); fill: rgb(102, 102, 102);\" cx=\"156\" cy=\"101.865\" rx=\"4.5\" ry=\"4.5\"/>\n                    <ellipse style=\"stroke: rgb(0, 0, 0); fill: rgb(102, 102, 102);\" cx=\"148.102\" cy=\"94.629\" rx=\"4.5\" ry=\"4.5\"/>\n                    <ellipse style=\"stroke: rgb(0, 0, 0); fill: rgb(102, 102, 102);\" cx=\"164.028\" cy=\"94.629\" rx=\"4.5\" ry=\"4.5\"/>\n                    </g>\n                </g>\n            </svg>\n        </div>\n    </div>\n</div>";
peasy_ui__WEBPACK_IMPORTED_MODULE_1__.UI.create(document.body, template, _state_state__WEBPACK_IMPORTED_MODULE_2__.model);
/**
 * get initial window size and set up model
 */
_state_state__WEBPACK_IMPORTED_MODULE_2__.model.global.screenWidth = window.screen.availWidth;
_state_state__WEBPACK_IMPORTED_MODULE_2__.model.global.screenHeight = window.screen.availHeight;
_state_state__WEBPACK_IMPORTED_MODULE_2__.model.global.windowWidth = window.innerWidth;
_state_state__WEBPACK_IMPORTED_MODULE_2__.model.global.windowHeight = window.innerHeight;
window.addEventListener("resize", _state_state__WEBPACK_IMPORTED_MODULE_2__.model.global.update);
if (_state_state__WEBPACK_IMPORTED_MODULE_2__.model.global.windowWidth < 800 || _state_state__WEBPACK_IMPORTED_MODULE_2__.model.global.screenWidth < 1000)
    _state_state__WEBPACK_IMPORTED_MODULE_2__.model.global.size = "small";
else
    _state_state__WEBPACK_IMPORTED_MODULE_2__.model.global.size = "large";
setTimeout(function () {
    setInterval(function () { return peasy_ui__WEBPACK_IMPORTED_MODULE_1__.UI.update(); }, 1000 / 60);
}, 1000);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsaUhBQXFDO0FBQ2pGLDRDQUE0Qyx1SEFBd0M7QUFDcEYsNENBQTRDLHlJQUFpRDtBQUM3Riw0Q0FBNEMsNklBQW1EO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLHVFQUF1RSx5QkFBeUIsMkRBQTJELEtBQUssb0JBQW9CLDRCQUE0QiwyREFBMkQsS0FBSyxXQUFXLDZCQUE2QixnQkFBZ0IsaUJBQWlCLEtBQUssY0FBYyxtQkFBbUIsb0JBQW9CLHdFQUF3RSxtQ0FBbUMsNEJBQTRCLEtBQUssY0FBYyxtQkFBbUIsb0JBQW9CLHdFQUF3RSxtQ0FBbUMsNEJBQTRCLEtBQUssbUJBQW1CLHlCQUF5QixlQUFlLGdCQUFnQixpQkFBaUIsa0JBQWtCLHVDQUF1Qyx5QkFBeUIsdUZBQXVGLEtBQUssd0JBQXdCLHlCQUF5QixlQUFlLGdCQUFnQixpQkFBaUIsd0JBQXdCLDhCQUE4Qix1RkFBdUYsaUJBQWlCLEtBQUssdUJBQXVCLHNCQUFzQixjQUFjLGdCQUFnQixpQkFBaUIsb0JBQW9CLDhCQUE4Qiw2RUFBNkUsS0FBSyxrQkFBa0IseUJBQXlCLHFCQUFxQix3QkFBd0Isc0JBQXNCLHFCQUFxQixlQUFlLGdCQUFnQixpQkFBaUIsMEJBQTBCLHlCQUF5Qix3RUFBd0UsdUZBQXVGLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixLQUFLLHlCQUF5QixxQ0FBcUMsS0FBSyxlQUFlLHlCQUF5QixxQkFBcUIsd0JBQXdCLHNCQUFzQixxQkFBcUIsY0FBYyxlQUFlLGlCQUFpQix1QkFBdUIsdUNBQXVDLEtBQUssaUJBQWlCLHNCQUFzQixpQkFBaUIsZUFBZSxnQkFBZ0Isd0JBQXdCLDJDQUEyQyxLQUFLLGlCQUFpQix1QkFBdUIsc0JBQXNCLG1CQUFtQiw4QkFBOEIsaUJBQWlCLGVBQWUsaUJBQWlCLG9CQUFvQixvQ0FBb0MsMEJBQTBCLEtBQUsscUJBQXFCLHFCQUFxQixLQUFLLGlCQUFpQix5QkFBeUIscUJBQXFCLHdCQUF3QixzQkFBc0IscUJBQXFCLGNBQWMsZ0JBQWdCLGtDQUFrQyxpQkFBaUIsdUJBQXVCLHVDQUF1QyxLQUFLLHFCQUFxQix5QkFBeUIsZUFBZSxnQkFBZ0IsaUJBQWlCLGtCQUFrQix1Q0FBdUMseUJBQXlCLHVGQUF1RixLQUFLLDBCQUEwQix5QkFBeUIsZ0JBQWdCLGlCQUFpQixrQkFBa0Isd0JBQXdCLDhCQUE4Qix1RkFBdUYsaUJBQWlCLEtBQUssbUJBQW1CLHNCQUFzQixrQkFBa0IsZ0JBQWdCLGlCQUFpQix3QkFBd0IsMkNBQTJDLEtBQUssbUJBQW1CLHNCQUFzQixnQkFBZ0IsY0FBYyxrQkFBa0IsbUJBQW1CLDhCQUE4Qiw4QkFBOEIsMEJBQTBCLHlCQUF5QixvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsaUJBQWlCLEtBQUssc0JBQXNCLHlCQUF5QixxQkFBcUIsd0JBQXdCLHNCQUFzQixxQkFBcUIseUNBQXlDLEtBQUssZUFBZSxzQkFBc0IsY0FBYyxlQUFlLGtCQUFrQixtQkFBbUIsOEJBQThCLDhCQUE4Qix5QkFBeUIsS0FBSyxpQkFBaUIseUJBQXlCLGNBQWMsZUFBZSxrQkFBa0IsbUJBQW1CLHFCQUFxQixLQUFLLHVCQUF1Qix5QkFBeUIsaUJBQWlCLGtCQUFrQixlQUFlLGdCQUFnQix1Q0FBdUMsS0FBSyxtQkFBbUIsa0JBQWtCLG1CQUFtQiw4QkFBOEIsOEJBQThCLDBCQUEwQixpQkFBaUIsS0FBSyxvQkFBb0Isc0JBQXNCLGtCQUFrQixtQkFBbUIsb0JBQW9CLDZCQUE2QixvQ0FBb0MsMEJBQTBCLEtBQUssd0JBQXdCLDRCQUE0QixxQkFBcUIsd0JBQXdCLGtEQUFrRCxxQkFBcUIsS0FBSyx5QkFBeUIseUJBQXlCLGdCQUFnQixpQkFBaUIsdUNBQXVDLEtBQUssV0FBVyxxRkFBcUYsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FB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Ozs7O0FDQXFCO0FBQ1M7QUFDUTtBQUV0QyxJQUFJLFFBQVEsR0FBRyxvalpBc0hSLENBQUM7QUFFUiwrQ0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLCtDQUFLLENBQUMsQ0FBQztBQUUxQzs7R0FFRztBQUNILGtFQUF3QixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO0FBQ3BELG1FQUF5QixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO0FBQ3RELGtFQUF3QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7QUFDN0MsbUVBQXlCLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztBQUMvQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLDZEQUFtQixDQUFDLENBQUM7QUFDdkQsSUFBSSxrRUFBd0IsR0FBRyxHQUFHLElBQUksa0VBQXdCLEdBQUcsSUFBSTtJQUFFLDJEQUFpQixHQUFHLE9BQU8sQ0FBQzs7SUFDOUYsMkRBQWlCLEdBQUcsT0FBTyxDQUFDO0FBQ2pDLFVBQVUsQ0FBQztJQUNULFdBQVcsQ0FBQyxjQUFNLHNEQUFTLEVBQUUsRUFBWCxDQUFXLEVBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQzVDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2ZpbGVwYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wcm9maWxlcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvZmlsZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Byb2ZpbGVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcHJvZmlsZXBhZ2UvLi9ub2RlX21vZHVsZXMvcGVhc3ktdWkvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9maWxlcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9wcm9maWxlcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wcm9maWxlcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvZmlsZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvZmlsZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvZmlsZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9maWxlcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2ZpbGVwYWdlLy4vc3JjL3N0YXRlL3N0YXRlLnRzIiwid2VicGFjazovL3Byb2ZpbGVwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2ZpbGVwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2ZpbGVwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9maWxlcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Byb2ZpbGVwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvZmlsZXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9maWxlcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wcm9maWxlcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wcm9maWxlcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcHJvZmlsZXBhZ2UvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL0Rvc2lzLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL09wZW5TYW5zLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2JpZ19BTF9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL3NtYWxsX0FMX2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypzdHlsZS5jc3MqL1xcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IGRvc2lzO1xcclxcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBvcGVuU2FucztcXHJcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxyZyB7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5zbWwge1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZHNob3Qge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgaGVpZ2h0OiA5MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGJvcmRlcjogMTBweCB3aGl0ZTtcXHJcXG4gIGNsaXAtcGF0aDogcG9seWdvbigwJSA1MCUsIDI1JSAwJSwgNzUlIDAlLCAxMDAlIDUwJSwgNzUlIDEwMCUsIDI1JSAxMDAlLCAwJSA1MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZHNob3Ria2duZCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDEyJTtcXHJcXG4gIGxlZnQ6IDQ1JTtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDUwJSwgMjUlIDAlLCA3NSUgMCUsIDEwMCUgNTAlLCA3NSUgMTAwJSwgMjUlIDEwMCUsIDAlIDUwJSk7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHRtYXNraW5nIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMCU7XFxyXFxuICByaWdodDogMCU7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAlLCAxMDAlIDAlLCAxMDAlIDEwMCUsIDAlIDEwMCUsIDQwJSA1MCUsIDAlIDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWVkaXYge1xcclxcbiAgZm9udC1mYW1pbHk6IGRvc2lzO1xcclxcbiAgZm9udC1zaXplOiAzdnc7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGNvbG9yOiAjZWVlZWVlO1xcclxcbiAgdG9wOiAyNyU7XFxyXFxuICByaWdodDogMiU7XFxyXFxuICB3aWR0aDogMTUlO1xcclxcbiAgYXNwZWN0LXJhdGlvOiAxLjEvMTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxyXFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgNTAlLCAyNSUgMCUsIDc1JSAwJSwgMTAwJSA1MCUsIDc1JSAxMDAlLCAyNSUgMTAwJSwgMCUgNTAlKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZWRpdiA+IHNwYW4ge1xcclxcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVybyB7XFxyXFxuICBmb250LWZhbWlseTogZG9zaXM7XFxyXFxuICBmb250LXNpemU6IDZ2dztcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgY29sb3I6ICM1OTU5NTk7XFxyXFxuICB0b3A6IDElO1xcclxcbiAgbGVmdDogMSU7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDJweCAjZGRkZGRkO1xcclxcbn1cXHJcXG5cXHJcXG4uc3ZnZGl2IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHdpZHRoOiA0MiU7XFxyXFxuICB0b3A6IDM5JTtcXHJcXG4gIGxlZnQ6IDEwJTtcXHJcXG4gIGFzcGVjdC1yYXRpbzogMy8xO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTI1ZGVnKSBzY2FsZSgxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41dnc7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvdHRvbTogMCU7XFxyXFxuICBsZWZ0OiAwJTtcXHJcXG4gIGhlaWdodDogNyU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyID4gYSB7XFxyXFxuICBjb2xvcjogIzU5NTk1OTtcXHJcXG59XFxyXFxuXFxyXFxuLnNtaGVybyB7XFxyXFxuICBmb250LWZhbWlseTogZG9zaXM7XFxyXFxuICBmb250LXNpemU6IDh2dztcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgY29sb3I6ICM1OTU5NTk7XFxyXFxuICB0b3A6IDMlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAycHggI2RkZGRkZDtcXHJcXG59XFxyXFxuXFxyXFxuLnNtaGVhZHNob3Qge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgaGVpZ2h0OiA5MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGJvcmRlcjogMTBweCB3aGl0ZTtcXHJcXG4gIGNsaXAtcGF0aDogcG9seWdvbigwJSA1MCUsIDI1JSAwJSwgNzUlIDAlLCAxMDAlIDUwJSwgNzUlIDEwMCUsIDI1JSAxMDAlLCAwJSA1MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uc21oZWFkc2hvdGJrZ25kIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogMTB2dztcXHJcXG4gIGxlZnQ6IDQ1dnc7XFxyXFxuICB3aWR0aDogNTB2dztcXHJcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgNTAlLCAyNSUgMCUsIDc1JSAwJSwgMTAwJSA1MCUsIDc1JSAxMDAlLCAyNSUgMTAwJSwgMCUgNTAlKTtcXHJcXG4gIHotaW5kZXg6IDM7XFxyXFxufVxcclxcblxcclxcbi5zbXN2Z2RpdiB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB3aWR0aDogNDB2dztcXHJcXG4gIHRvcDogNjV2dztcXHJcXG4gIGxlZnQ6IDE1dnc7XFxyXFxuICBhc3BlY3QtcmF0aW86IDMvMTtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00MGRlZykgc2NhbGUoMS41KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNtZm9vdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBoZWlnaHQ6IDEwJTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAxcHggdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG4uc21mb290ZXIgPiBzcGFuIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBkb3NpcztcXHJcXG4gIGZvbnQtc2l6ZTogNnZ3O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBjb2xvcjogIzU5NTk1OTtcXHJcXG4gIHRleHQtc2hhZG93OiAycHggMXB4IDJweCAjMDAwMDAwNjY7XFxyXFxufVxcclxcblxcclxcbi5tZW51IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMiU7XFxyXFxuICBsZWZ0OiAyJTtcXHJcXG4gIHdpZHRoOiAxMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMHZ3O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmltZ0RpdiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDIlO1xcclxcbiAgbGVmdDogMiU7XFxyXFxuICB3aWR0aDogMTB2dztcXHJcXG4gIGhlaWdodDogMTB2dztcXHJcXG5cXHJcXG4gIHotaW5kZXg6IDQ7XFxyXFxufVxcclxcblxcclxcbi5pbWdEaXYgPiBpbWcge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDU1JTtcXHJcXG4gIGhlaWdodDogNTUlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVPcGVuIHtcXHJcXG4gIHdpZHRoOiAzMHZ3O1xcclxcbiAgaGVpZ2h0OiA1MHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICB6LWluZGV4OiAzO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUxpbmtzIHtcXHJcXG4gIG1hcmdpbi10b3A6IDIwJTtcXHJcXG4gIHdpZHRoOiAzMHZ3O1xcclxcbiAgaGVpZ2h0OiA0NXZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51TGlua3MgPiBhIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBvcGVuU2FucztcXHJcXG4gIGNvbG9yOiAjNTk1OTU5O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgZm9udC1zaXplOiAzdnc7XFxyXFxufVxcclxcblxcclxcbi5tZW51T3BlbiA+IGltZyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDI1cHg7XFxyXFxuICBsZWZ0OiAyNXB4O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsWUFBWTtBQUNaO0VBQ0Usa0JBQWtCO0VBQ2xCLDRDQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiw0Q0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IseURBQXVEO0VBQ3ZELDRCQUE0QjtFQUM1QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHlEQUF5RDtFQUN6RCw0QkFBNEI7RUFDNUIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLGdGQUFnRjtBQUNsRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGdGQUFnRjtFQUNoRixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzRUFBc0U7QUFD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c0NvbnRlbnRcIjpbXCIvKnN0eWxlLmNzcyovXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogZG9zaXM7XFxyXFxuICBzcmM6IHVybChcXFwiLi9hc3NldHMvRG9zaXMudHRmXFxcIik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IG9wZW5TYW5zO1xcclxcbiAgc3JjOiB1cmwoXFxcIi4vYXNzZXRzL09wZW5TYW5zLnR0ZlxcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubHJnIHtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vYXNzZXRzL2JpZ19BTF9iYWNrZ3JvdW5kLmpwZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnNtbCB7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2Fzc2V0cy9zbWFsbF9BTF9iYWNrZ3JvdW5kLmpwZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRzaG90IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogOTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBib3JkZXI6IDEwcHggd2hpdGU7XFxyXFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgNTAlLCAyNSUgMCUsIDc1JSAwJSwgMTAwJSA1MCUsIDc1JSAxMDAlLCAyNSUgMTAwJSwgMCUgNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRzaG90YmtnbmQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAxMiU7XFxyXFxuICBsZWZ0OiA0NSU7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGNsaXAtcGF0aDogcG9seWdvbigwJSA1MCUsIDI1JSAwJSwgNzUlIDAlLCAxMDAlIDUwJSwgNzUlIDEwMCUsIDI1JSAxMDAlLCAwJSA1MCUpO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0bWFza2luZyB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDAlO1xcclxcbiAgcmlnaHQ6IDAlO1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGNsaXAtcGF0aDogcG9seWdvbigwJSAwJSwgMTAwJSAwJSwgMTAwJSAxMDAlLCAwJSAxMDAlLCA0MCUgNTAlLCAwJSAwJSk7XFxyXFxufVxcclxcblxcclxcbi5uYW1lZGl2IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBkb3NpcztcXHJcXG4gIGZvbnQtc2l6ZTogM3Z3O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBjb2xvcjogI2VlZWVlZTtcXHJcXG4gIHRvcDogMjclO1xcclxcbiAgcmlnaHQ6IDIlO1xcclxcbiAgd2lkdGg6IDE1JTtcXHJcXG4gIGFzcGVjdC1yYXRpbzogMS4xLzE7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vYXNzZXRzL3NtYWxsX0FMX2JhY2tncm91bmQuanBnXFxcIik7XFxyXFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgNTAlLCAyNSUgMCUsIDc1JSAwJSwgMTAwJSA1MCUsIDc1JSAxMDAlLCAyNSUgMTAwJSwgMCUgNTAlKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZWRpdiA+IHNwYW4ge1xcclxcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVybyB7XFxyXFxuICBmb250LWZhbWlseTogZG9zaXM7XFxyXFxuICBmb250LXNpemU6IDZ2dztcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgY29sb3I6ICM1OTU5NTk7XFxyXFxuICB0b3A6IDElO1xcclxcbiAgbGVmdDogMSU7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDJweCAjZGRkZGRkO1xcclxcbn1cXHJcXG5cXHJcXG4uc3ZnZGl2IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHdpZHRoOiA0MiU7XFxyXFxuICB0b3A6IDM5JTtcXHJcXG4gIGxlZnQ6IDEwJTtcXHJcXG4gIGFzcGVjdC1yYXRpbzogMy8xO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTI1ZGVnKSBzY2FsZSgxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41dnc7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvdHRvbTogMCU7XFxyXFxuICBsZWZ0OiAwJTtcXHJcXG4gIGhlaWdodDogNyU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyID4gYSB7XFxyXFxuICBjb2xvcjogIzU5NTk1OTtcXHJcXG59XFxyXFxuXFxyXFxuLnNtaGVybyB7XFxyXFxuICBmb250LWZhbWlseTogZG9zaXM7XFxyXFxuICBmb250LXNpemU6IDh2dztcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgY29sb3I6ICM1OTU5NTk7XFxyXFxuICB0b3A6IDMlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAycHggI2RkZGRkZDtcXHJcXG59XFxyXFxuXFxyXFxuLnNtaGVhZHNob3Qge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgaGVpZ2h0OiA5MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGJvcmRlcjogMTBweCB3aGl0ZTtcXHJcXG4gIGNsaXAtcGF0aDogcG9seWdvbigwJSA1MCUsIDI1JSAwJSwgNzUlIDAlLCAxMDAlIDUwJSwgNzUlIDEwMCUsIDI1JSAxMDAlLCAwJSA1MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uc21oZWFkc2hvdGJrZ25kIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogMTB2dztcXHJcXG4gIGxlZnQ6IDQ1dnc7XFxyXFxuICB3aWR0aDogNTB2dztcXHJcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgNTAlLCAyNSUgMCUsIDc1JSAwJSwgMTAwJSA1MCUsIDc1JSAxMDAlLCAyNSUgMTAwJSwgMCUgNTAlKTtcXHJcXG4gIHotaW5kZXg6IDM7XFxyXFxufVxcclxcblxcclxcbi5zbXN2Z2RpdiB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB3aWR0aDogNDB2dztcXHJcXG4gIHRvcDogNjV2dztcXHJcXG4gIGxlZnQ6IDE1dnc7XFxyXFxuICBhc3BlY3QtcmF0aW86IDMvMTtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00MGRlZykgc2NhbGUoMS41KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNtZm9vdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBoZWlnaHQ6IDEwJTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAxcHggdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG4uc21mb290ZXIgPiBzcGFuIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBkb3NpcztcXHJcXG4gIGZvbnQtc2l6ZTogNnZ3O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBjb2xvcjogIzU5NTk1OTtcXHJcXG4gIHRleHQtc2hhZG93OiAycHggMXB4IDJweCAjMDAwMDAwNjY7XFxyXFxufVxcclxcblxcclxcbi5tZW51IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMiU7XFxyXFxuICBsZWZ0OiAyJTtcXHJcXG4gIHdpZHRoOiAxMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMHZ3O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmltZ0RpdiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDIlO1xcclxcbiAgbGVmdDogMiU7XFxyXFxuICB3aWR0aDogMTB2dztcXHJcXG4gIGhlaWdodDogMTB2dztcXHJcXG5cXHJcXG4gIHotaW5kZXg6IDQ7XFxyXFxufVxcclxcblxcclxcbi5pbWdEaXYgPiBpbWcge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDU1JTtcXHJcXG4gIGhlaWdodDogNTUlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVPcGVuIHtcXHJcXG4gIHdpZHRoOiAzMHZ3O1xcclxcbiAgaGVpZ2h0OiA1MHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICB6LWluZGV4OiAzO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUxpbmtzIHtcXHJcXG4gIG1hcmdpbi10b3A6IDIwJTtcXHJcXG4gIHdpZHRoOiAzMHZ3O1xcclxcbiAgaGVpZ2h0OiA0NXZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51TGlua3MgPiBhIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBvcGVuU2FucztcXHJcXG4gIGNvbG9yOiAjNTk1OTU5O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgZm9udC1zaXplOiAzdnc7XFxyXFxufVxcclxcblxcclxcbi5tZW51T3BlbiA+IGltZyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDI1cHg7XFxyXFxuICBsZWZ0OiAyNXB4O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIigoKT0+e1widXNlIHN0cmljdFwiO3ZhciBlPXtkOih0LGkpPT57Zm9yKHZhciBzIGluIGkpZS5vKGkscykmJiFlLm8odCxzKSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQscyx7ZW51bWVyYWJsZTohMCxnZXQ6aVtzXX0pfSxvOihlLHQpPT5PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KSxyOmU9PntcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfX0sdD17fTtlLnIodCksZS5kKHQse1VJOigpPT5uLFVJVmlldzooKT0+aX0pO2NsYXNzIGl7Y29uc3RydWN0b3IoKXt0aGlzLnN0YXRlPVwiY3JlYXRlZFwiLHRoaXMuYmluZGluZ3M9W10sdGhpcy5hbmltYXRpb25zPVtdLHRoaXMuYW5pbWF0aW9uUXVldWU9W10sdGhpcy5kZXN0cm95ZWQ9XCJcIix0aGlzLm1vdmVkPVwiXCJ9c3RhdGljIGNyZWF0ZShlLHQscz17fSxvPXtwYXJlbnQ6bnVsbCxwcmVwYXJlOiEwLHNpYmxpbmc6bnVsbH0pe3ZhciByO2NvbnN0IGw9bmV3IGk7cmV0dXJuIGwubW9kZWw9cyxsLmVsZW1lbnQ9dCxsLmJpbmRpbmdzLnB1c2goLi4ubi5wYXJzZShsLmVsZW1lbnQscyxsKSksbC5wYXJlbnRFbGVtZW50PWUsbC5zaWJsaW5nPW8uc2libGluZyxsLnBhcmVudD1udWxsIT09KHI9by5wYXJlbnQpJiZ2b2lkIDAhPT1yP3I6bixsLmF0dGFjaGVkPW5ldyBQcm9taXNlKChlPT57bC5hdHRhY2hSZXNvbHZlPWV9KSksbH1kZXN0cm95KCl7dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwdWktcmVtb3ZpbmdcIiksdGhpcy5kZXN0cm95ZWQ9XCJxdWV1ZVwiLG4uZGVzdHJveWVkLnB1c2godGhpcyl9dGVybWluYXRlKCl7UHJvbWlzZS5hbGwodGhpcy5nZXRBbmltYXRpb25zKCkpLnRoZW4oKCgpPT57dmFyIGU7bnVsbD09PShlPXRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50KXx8dm9pZCAwPT09ZXx8ZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpLHRoaXMuYmluZGluZ3MuZm9yRWFjaCgoZT0+ZS51bmJpbmQoKSkpO2NvbnN0IHQ9dGhpcy5wYXJlbnQudmlld3MuZmluZEluZGV4KChlPT5lPT09dGhpcykpO3Q+LTEmJnRoaXMucGFyZW50LnZpZXdzLnNwbGljZSh0LDEpfSkpLHRoaXMuZGVzdHJveWVkPVwiZGVzdHJveWVkXCJ9bW92ZShlKXt0aGlzLm1vdmVkPVwicXVldWVcIix0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInB1aS1tb3ZpbmdcIiksdGhpcy5zaWJsaW5nPWV9cGxheShlLHQpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlJiYoZT10aGlzLmFuaW1hdGlvbnMuZmluZCgodD0+dC5uYW1lPT09ZSkpLmNsb25lKCkpLGUuZWxlbWVudD10LGUuc3RhdGU9XCJwZW5kaW5nXCIsdGhpcy5hbmltYXRpb25RdWV1ZS5wdXNoKGUpLHRoaXMudXBkYXRlQW5pbWF0aW9ucyhwZXJmb3JtYW5jZS5ub3coKSksZX11cGRhdGVGcm9tVUkoKXt0aGlzLmJpbmRpbmdzLmZvckVhY2goKGU9PmUudXBkYXRlRnJvbVVJKCkpKX11cGRhdGVUb1VJKCl7dmFyIGU7c3dpdGNoKHRoaXMuYmluZGluZ3MuZm9yRWFjaCgoZT0+ZS51cGRhdGVUb1VJKCkpKSx0aGlzLnN0YXRlKXtjYXNlXCJjcmVhdGVkXCI6dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwdWktYWRkaW5nXCIpLHRoaXMucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUodGhpcy5lbGVtZW50LG51bGw9PT0oZT10aGlzLnNpYmxpbmcpfHx2b2lkIDA9PT1lP3ZvaWQgMDplLm5leHRTaWJsaW5nKSx0aGlzLmF0dGFjaFJlc29sdmUoKSx0aGlzLnN0YXRlPVwiYXR0YWNoaW5nXCI7YnJlYWs7Y2FzZVwiYXR0YWNoaW5nXCI6MD09PXRoaXMuZ2V0QW5pbWF0aW9ucyghMSkubGVuZ3RoJiYodGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJwdWktYWRkaW5nXCIpLHRoaXMuc3RhdGU9XCJhdHRhY2hlZFwiKX19dXBkYXRlQXRFdmVudHMoKXt0aGlzLmJpbmRpbmdzLmZvckVhY2goKGU9PmUudXBkYXRlQXRFdmVudHMoKSkpfXVwZGF0ZUFuaW1hdGlvbnMoZSl7Zm9yKHZhciB0LGk7bnVsbCE9PShpPVwiZmluaXNoZWRcIj09PShudWxsPT09KHQ9dGhpcy5hbmltYXRpb25RdWV1ZVswXSl8fHZvaWQgMD09PXQ/dm9pZCAwOnQuc3RhdGUpKSYmdm9pZCAwIT09aSYmaTspdGhpcy5hbmltYXRpb25RdWV1ZS5zaGlmdCgpLmRlc3Ryb3koKTtmb3IobGV0IHQ9MDt0PHRoaXMuYW5pbWF0aW9uUXVldWUubGVuZ3RoO3QrKyl7Y29uc3QgaT10aGlzLmFuaW1hdGlvblF1ZXVlW3RdO1wicGVuZGluZ1wiPT09aS5zdGF0ZSYmKGkuaXNCbG9ja2VkKGUpfHwoaS5zdGF0ZT1cInBsYXlpbmdcIixpLnN0YXJ0VGltZT1lLGkuYW5pbWF0aW9uPWkuZWxlbWVudC5hbmltYXRlKGkua2V5ZnJhbWVzLGkub3B0aW9ucyksaS5maW5pc2hlZD1pLmFuaW1hdGlvbi5maW5pc2hlZCxpLmZpbmlzaGVkLnRoZW4oKCgpPT57aS5zdGF0ZT1cImZpbmlzaGVkXCIsdGhpcy51cGRhdGVBbmltYXRpb25zKHBlcmZvcm1hbmNlLm5vdygpKX0pKSkpfX11cGRhdGVNb3ZlKCl7c3dpdGNoKHRoaXMubW92ZWQpe2Nhc2VcInF1ZXVlXCI6dGhpcy5tb3ZlZD1cIm1vdmVcIjticmVhaztjYXNlXCJtb3ZlXCI6aWYoMD09PXRoaXMuZ2V0QW5pbWF0aW9ucygpLmxlbmd0aCl7Y29uc3QgZT10aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudDtjb25zb2xlLmxvZyhcIlt2aWV3XSBtb3ZpbmdcIix0aGlzLmVsZW1lbnQubmV4dFNpYmxpbmc9PT10aGlzLnNpYmxpbmcubmV4dFNpYmxpbmcsXCI+XCIsdGhpcy5lbGVtZW50Lm5leHRTaWJsaW5nLmNsb25lTm9kZSgpLFwiPFwiLHRoaXMuc2libGluZy5uZXh0U2libGluZy5pbm5lclRleHQpLGUuaW5zZXJ0QmVmb3JlKHRoaXMuZWxlbWVudCx0aGlzLnNpYmxpbmcubmV4dFNpYmxpbmcpLHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwicHVpLW1vdmluZ1wiKSx0aGlzLm1vdmVkPVwiXCIsdGhpcy5zaWJsaW5nPXZvaWQgMH19dGhpcy5iaW5kaW5ncy5mb3JFYWNoKChlPT5lLnVwZGF0ZU1vdmUoKSkpfWdldEFuaW1hdGlvbnMoZT0hMCl7cmV0dXJuIHRoaXMuZWxlbWVudC5nZXRBbmltYXRpb25zKHtzdWJ0cmVlOmV9KS5maWx0ZXIoKGU9PlwiZmluaXNoZWRcIiE9PWUucGxheVN0YXRlJiZlLmVmZmVjdC5nZXRUaW1pbmcoKS5pdGVyYXRpb25zIT09MS8wKSkubWFwKChlPT5lLmZpbmlzaGVkKSl9fWNsYXNzIHN7Y29uc3RydWN0b3IoKXt0aGlzLmZyb21VST0hMSx0aGlzLnRvVUk9ITAsdGhpcy5hdEV2ZW50PSExLHRoaXMub25lVGltZT0hMSx0aGlzLnZpZXdzPVtdLHRoaXMuZmlyc3RVcGRhdGU9ITAsdGhpcy5ldmVudHM9W10sdGhpcy50cmlnZ2VyQXRFdmVudD1lPT57dGhpcy5ldmVudHMucHVzaChlKX0sdGhpcy5pZD0rK24uaWR9Z2V0IGVsZW1lbnQoKXtyZXR1cm4gbnVsbD09dGhpcy4kZWxlbWVudCYmKHRoaXMuJGVsZW1lbnQ9XCJzdHJpbmdcIj09dHlwZW9mIHRoaXMuc2VsZWN0b3I/dGhpcy5jb250ZXh0LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3Rvcik6dGhpcy5zZWxlY3RvciksdGhpcy4kZWxlbWVudH1zZXQgZWxlbWVudChlKXt0aGlzLiRlbGVtZW50PWV9c3RhdGljIGNyZWF0ZShlKXt2YXIgdCxpLG8scixsLGEsaCx1LGQ7Y29uc3QgcD1uZXcgcztyZXR1cm4gcC5vYmplY3Q9XCIkbW9kZWxcImluIGUub2JqZWN0P2Uub2JqZWN0OnskbW9kZWw6ZS5vYmplY3R9LHAucHJvcGVydHk9ZS5wcm9wZXJ0eSxwLmNvbnRleHQ9bnVsbCE9PSh0PWUuY29udGV4dCkmJnZvaWQgMCE9PXQ/dDpkb2N1bWVudCxwLnNlbGVjdG9yPWUuc2VsZWN0b3IscC5hdHRyaWJ1dGU9bnVsbCE9PShpPWUuYXR0cmlidXRlKSYmdm9pZCAwIT09aT9pOlwiaW5uZXJUZXh0XCIscC52YWx1ZT1udWxsIT09KG89ZS52YWx1ZSkmJnZvaWQgMCE9PW8/bzpwLnZhbHVlLHAudGVtcGxhdGU9bnVsbCE9PShyPWUudGVtcGxhdGUpJiZ2b2lkIDAhPT1yP3I6cC50ZW1wbGF0ZSxwLmZyb21VST1udWxsIT09KGw9ZS5mcm9tVUkpJiZ2b2lkIDAhPT1sP2w6cC5mcm9tVUkscC50b1VJPW51bGwhPT0oYT1lLnRvVUkpJiZ2b2lkIDAhPT1hP2E6cC50b1VJLHAuYXRFdmVudD1udWxsIT09KGg9ZS5hdEV2ZW50KSYmdm9pZCAwIT09aD9oOnAuYXRFdmVudCxwLm9uZVRpbWU9bnVsbCE9PSh1PWUub25lVGltZSkmJnZvaWQgMCE9PXU/dTpwLm9uZVRpbWUscC5wYXJlbnQ9bnVsbCE9PShkPWUucGFyZW50KSYmdm9pZCAwIT09ZD9kOm4scC5hZGRMaXN0ZW5lcigpLFwiYm9vbGVhblwiIT10eXBlb2YgcC5mcm9tVUkmJihwLmZyb21VST1wLmZyb21VSS5iaW5kKHApKSxcImJvb2xlYW5cIiE9dHlwZW9mIHAudG9VSSYmKHAudG9VST1wLnRvVUkuYmluZChwKSkscH1kZXN0cm95KCl7dGhpcy5lbGVtZW50PW51bGwsdGhpcy5yZW1vdmVMaXN0ZW5lcigpLHRoaXMudmlld3MuZm9yRWFjaCgoZT0+ZS5kZXN0cm95KCkpKX11bmJpbmQoKXtuLnVuYmluZCh0aGlzKX1hZGRMaXN0ZW5lcigpe3RoaXMuYXRFdmVudCYmKHRoaXMudG9VST0hMSx0aGlzLmZyb21VST0hMSx0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmF0dHJpYnV0ZSx0aGlzLnRyaWdnZXJBdEV2ZW50KSl9cmVtb3ZlTGlzdGVuZXIoKXt0aGlzLmF0RXZlbnQmJnRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMuYXR0cmlidXRlLHRoaXMudHJpZ2dlckF0RXZlbnQpfXVwZGF0ZUZyb21VSSgpe2lmKCExPT09dGhpcy5mcm9tVUl8fHRoaXMuZmlyc3RVcGRhdGUpcmV0dXJuIHRoaXMuZmlyc3RVcGRhdGU9ITEsdm9pZCB0aGlzLnZpZXdzLmZvckVhY2goKGU9PmUudXBkYXRlRnJvbVVJKCkpKTtjb25zdHt0YXJnZXQ6ZSxwcm9wZXJ0eTp0fT1uLnJlc29sdmVQcm9wZXJ0eSh0aGlzLmVsZW1lbnQsdGhpcy5hdHRyaWJ1dGUpLGk9ZVt0XTtpZihpIT09dGhpcy5sYXN0VUlWYWx1ZSl7bGV0IGU9ITAhPT10aGlzLmZyb21VST90aGlzLmZyb21VSShpLHRoaXMubGFzdFVJVmFsdWUsdGhpcy5wcm9wZXJ0eSx0aGlzLm9iamVjdCk6aTtpZih0aGlzLmxhc3RVSVZhbHVlPWksdm9pZCAwIT09ZSYmZSE9PXRoaXMubGFzdFZhbHVlKXt0aGlzLmxhc3RWYWx1ZT1lO2NvbnN0e3RhcmdldDp0LHByb3BlcnR5Oml9PW4ucmVzb2x2ZVByb3BlcnR5KHRoaXMub2JqZWN0LHRoaXMucHJvcGVydHkpO1wibnVtYmVyXCIhPT1uLnJlc29sdmVWYWx1ZSh0aGlzLm9iamVjdCx0aGlzLnByb3BlcnR5KXx8aXNOYU4oZSl8fChlPStlKSx0W2ldPWV9ZWxzZSB0aGlzLmxhc3RWYWx1ZT1lfXRoaXMudmlld3MuZm9yRWFjaCgoZT0+ZS51cGRhdGVGcm9tVUkoKSkpfXVwZGF0ZVRvVUkoKXt2YXIgZSx0LHMsbyxyLGw7aWYoITE9PT10aGlzLnRvVUkpcmV0dXJuIHZvaWQgdGhpcy52aWV3cy5mb3JFYWNoKChlPT5lLnVwZGF0ZVRvVUkoKSkpO2xldCBhPW4ucmVzb2x2ZVZhbHVlKHRoaXMub2JqZWN0LHRoaXMucHJvcGVydHkpLGg9ITE7aWYobnVsbCE9dGhpcy50ZW1wbGF0ZSlpZihcImJvb2xlYW5cIj09dHlwZW9mIHRoaXMuYXR0cmlidXRlKXtpZihhPSExIT09KG51bGwhPWEmJmEpLGEhPT10aGlzLmxhc3RWYWx1ZSl7Y29uc3QgZT0hMCE9PXRoaXMudG9VST90aGlzLnRvVUkoYSx0aGlzLmxhc3RWYWx1ZSx0aGlzLnByb3BlcnR5LHRoaXMub2JqZWN0KTphO2lmKHZvaWQgMCE9PWUmJmUhPT10aGlzLmxhc3RVSVZhbHVlKXtpZihlPT09dGhpcy5hdHRyaWJ1dGUpdGhpcy52aWV3cy5wdXNoKGkuY3JlYXRlKHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50LHRoaXMudGVtcGxhdGUuY2xvbmVOb2RlKCEwKSx0aGlzLm9iamVjdCx7cGFyZW50OnRoaXMscHJlcGFyZTohMSxzaWJsaW5nOnRoaXMuZWxlbWVudH0pKTtlbHNle2NvbnN0IGU9dGhpcy52aWV3cy5wb3AoKTtudWxsPT1lfHxlLmRlc3Ryb3koKX10aGlzLmxhc3RWYWx1ZT1hLHRoaXMubGFzdFVJVmFsdWU9ZX19fWVsc2V7bnVsbD09YSYmKGE9W10pO2NvbnN0IG49bnVsbCE9PShlPXRoaXMubGFzdFZhbHVlKSYmdm9pZCAwIT09ZT9lOltdO2lmKGEubGVuZ3RoIT09bi5sZW5ndGgpaD0hMDtlbHNlIGZvcihsZXQgZT0wLHQ9YS5sZW5ndGg7ZTx0O2UrKylpZihhW2VdIT09bltlXSl7aD0hMDticmVha31pZighaClyZXR1cm4gdGhpcy52aWV3cy5mb3JFYWNoKChlPT5lLnVwZGF0ZVRvVUkoKSkpLHZvaWQodGhpcy5vbmVUaW1lJiZ0aGlzLm9uZVRpbWVEb25lKCkpO2NvbnN0IHU9ITAhPT10aGlzLnRvVUk/dGhpcy50b1VJKGEsbix0aGlzLnByb3BlcnR5LHRoaXMub2JqZWN0KTphO2lmKG51bGw9PXUpcmV0dXJuIHRoaXMudmlld3MuZm9yRWFjaCgoZT0+ZS51cGRhdGVUb1VJKCkpKSx2b2lkKHRoaXMub25lVGltZSYmdGhpcy5vbmVUaW1lRG9uZSgpKTtjb25zdCBkPW51bGwhPT0odD10aGlzLmxhc3RVSVZhbHVlKSYmdm9pZCAwIT09dD90OltdO2xldCBwPTA7Zm9yKGxldCBlPTAsdD11Lmxlbmd0aCxpPTA7ZTx0JiZ1W2VdPT09ZFtpXTtlKyssaSsrKXArKztpZihwPT09dS5sZW5ndGgmJnUubGVuZ3RoPT09ZC5sZW5ndGgpcmV0dXJuIHRoaXMudmlld3MuZm9yRWFjaCgoZT0+ZS51cGRhdGVUb1VJKCkpKSx2b2lkKHRoaXMub25lVGltZSYmdGhpcy5vbmVUaW1lRG9uZSgpKTtjb25zdCBtPXRoaXMudmlld3Muc3BsaWNlKDAscCk7bGV0IGM9bVttLmxlbmd0aC0xXTtmb3IobGV0IGU9cCx0PXUubGVuZ3RoLG49cDtlPHQ7ZSsrLG4rKyl7Y29uc3QgdD11W2VdO1wic3RyaW5nXCIhPXR5cGVvZiB0JiYodC4kaW5kZXg9ZSk7Y29uc3Qgbj10aGlzLnZpZXdzLnNoaWZ0KCk7aWYobnVsbD09bil7Y29uc3QgZT17JG1vZGVsOntbdGhpcy5hdHRyaWJ1dGVdOnR9LCRwYXJlbnQ6dGhpcy5vYmplY3R9LG49aS5jcmVhdGUodGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQsdGhpcy50ZW1wbGF0ZS5jbG9uZU5vZGUoITApLGUse3BhcmVudDp0aGlzLHByZXBhcmU6ITEsc2libGluZzpudWxsIT09KHM9bnVsbD09Yz92b2lkIDA6Yy5lbGVtZW50KSYmdm9pZCAwIT09cz9zOnRoaXMuZWxlbWVudH0pO20ucHVzaChuKSxjPW47Y29udGludWV9aWYodD09PShudWxsPT1uP3ZvaWQgMDpuLm1vZGVsLiRtb2RlbFt0aGlzLmF0dHJpYnV0ZV0pKXttLnB1c2gobiksbi5tb3ZlKG51bGwhPT0obz1udWxsPT1jP3ZvaWQgMDpjLmVsZW1lbnQpJiZ2b2lkIDAhPT1vP286dGhpcy5lbGVtZW50KSxjPW47Y29udGludWV9Y29uc3QgYT1udWxsPT1uP3ZvaWQgMDpuLm1vZGVsLiRtb2RlbFt0aGlzLmF0dHJpYnV0ZV07aWYoIXUuc2xpY2UoZSkuaW5jbHVkZXMoYSkpe24uZGVzdHJveSgpLGUtLSxjPW47Y29udGludWV9dGhpcy52aWV3cy51bnNoaWZ0KG4pO2xldCBoPSExO2ZvcihsZXQgZT0wLGk9dGhpcy52aWV3cy5sZW5ndGg7ZTxpO2UrKyl7Y29uc3QgaT10aGlzLnZpZXdzW2VdO2lmKHQ9PT0obnVsbD09aT92b2lkIDA6aS5tb2RlbC4kbW9kZWxbdGhpcy5hdHRyaWJ1dGVdKSl7bS5wdXNoKC4uLnRoaXMudmlld3Muc3BsaWNlKGUsMSkpLGkubW92ZShudWxsIT09KHI9bnVsbD09Yz92b2lkIDA6Yy5lbGVtZW50KSYmdm9pZCAwIT09cj9yOnRoaXMuZWxlbWVudCksaD0hMCxjPWk7YnJlYWt9fWlmKCFoKXtjb25zdCBlPXskbW9kZWw6e1t0aGlzLmF0dHJpYnV0ZV06dH0sJHBhcmVudDp0aGlzLm9iamVjdH0scz1pLmNyZWF0ZSh0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudCx0aGlzLnRlbXBsYXRlLmNsb25lTm9kZSghMCksZSx7cGFyZW50OnRoaXMscHJlcGFyZTohMSxzaWJsaW5nOm51bGwhPT0obD1udWxsPT1jP3ZvaWQgMDpjLmVsZW1lbnQpJiZ2b2lkIDAhPT1sP2w6dGhpcy5lbGVtZW50fSk7bS5wdXNoKHMpLGM9c319dGhpcy52aWV3cy5mb3JFYWNoKChlPT5lLmRlc3Ryb3koKSkpLHRoaXMudmlld3M9bSx0aGlzLmxhc3RWYWx1ZT1bLi4uYV0sdGhpcy5sYXN0VUlWYWx1ZT1bLi4udV19ZWxzZSBpZihhIT09dGhpcy5sYXN0VmFsdWUpe2NvbnN0IGU9ITAhPT10aGlzLnRvVUk/dGhpcy50b1VJKGEsdGhpcy5sYXN0VmFsdWUsdGhpcy5wcm9wZXJ0eSx0aGlzLm9iamVjdCk6YTtpZih2b2lkIDAhPT1lJiZlIT09dGhpcy5sYXN0VUlWYWx1ZSl7Y29uc3R7dGFyZ2V0OnQscHJvcGVydHk6aX09bi5yZXNvbHZlUHJvcGVydHkodGhpcy5lbGVtZW50LHRoaXMuYXR0cmlidXRlKTt0W2ldPWUsdGhpcy5sYXN0VmFsdWU9YSx0aGlzLmxhc3RVSVZhbHVlPWV9fXRoaXMudmlld3MuZm9yRWFjaCgoZT0+ZS51cGRhdGVUb1VJKCkpKSx0aGlzLm9uZVRpbWUmJnRoaXMub25lVGltZURvbmUoKX1vbmVUaW1lRG9uZSgpe3RoaXMudG9VST0hMSx0aGlzLmZyb21VST0hMX11cGRhdGVBdEV2ZW50cygpe2xldCBlPXRoaXMuZXZlbnRzLnNoaWZ0KCk7Zm9yKDtudWxsIT1lOyluLnJlc29sdmVWYWx1ZSh0aGlzLm9iamVjdCx0aGlzLnByb3BlcnR5KShlLHRoaXMub2JqZWN0LiRtb2RlbCx0aGlzLmVsZW1lbnQsdGhpcy5hdHRyaWJ1dGUsdGhpcy5vYmplY3QpLGU9dGhpcy5ldmVudHMuc2hpZnQoKTt0aGlzLnZpZXdzLmZvckVhY2goKGU9PmUudXBkYXRlQXRFdmVudHMoKSkpfXVwZGF0ZU1vdmUoKXt0aGlzLnZpZXdzLmZvckVhY2goKGU9PmUudXBkYXRlTW92ZSgpKSl9fWNsYXNzIG57c3RhdGljIGNyZWF0ZShlLHQscz17fSxvPXtwYXJlbnQ6bnVsbCxwcmVwYXJlOiEwLHNpYmxpbmc6bnVsbH0pe2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXtsZXQgaT1udWxsIT1lP2U6ZG9jdW1lbnQ7Zm9yKDtudWxsIT1pLnBhcmVudE5vZGU7KWk9aS5wYXJlbnROb2RlO2NvbnN0IHM9aS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3MuaW5uZXJIVE1MPW8ucHJlcGFyZT9uLnByZXBhcmUodCk6dCx0PXMuZmlyc3RFbGVtZW50Q2hpbGR9Y29uc3Qgcj1pLmNyZWF0ZShlLHQscyxvKTtyZXR1cm4gci5wYXJlbnQ9PT1uJiZuLnZpZXdzLnB1c2gocikscn1zdGF0aWMgcGxheShlLHQpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlPyhlPXRoaXMuZ2xvYmFscy5hbmltYXRpb25zLmZpbmQoKHQ9PnQubmFtZT09PWUpKS5jbG9uZSgpKS5wbGF5KHQpOmUucGxheSgpfXN0YXRpYyBwYXJzZShlLHQsaT1udWxsKXt2YXIgcyxvLHI7Y29uc3QgbD1bXTtpZigzPT09ZS5ub2RlVHlwZSl7bGV0IHM9ZS50ZXh0Q29udGVudCxvPXMubWF0Y2gobi5yZWdleFZhbHVlKTtmb3IoO251bGwhPW87KXtjb25zdCByPW9bMV07bGV0IGE9b1syXTtzPW9bM107bGV0IGg9ITE7YS5zdGFydHNXaXRoKFwifFwiKSYmKGg9ITAsYT1hLnNsaWNlKDEpLnRyaW1TdGFydCgpKTtsZXQgdT1lLmNsb25lTm9kZSgpO2UudGV4dENvbnRlbnQ9cixlLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHUsZS5uZXh0U2libGluZyksbC5wdXNoKG4uYmluZCh7c2VsZWN0b3I6dSxhdHRyaWJ1dGU6XCJ0ZXh0Q29udGVudFwiLG9iamVjdDp0LHByb3BlcnR5OmEscGFyZW50Omksb25lVGltZTpofSkpLHU9KGU9dSkuY2xvbmVOb2RlKCksdS50ZXh0Q29udGVudD1zLGUucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUodSxlLm5leHRTaWJsaW5nKSxlPXUsbz1zLm1hdGNoKG4ucmVnZXhWYWx1ZSl9fWVsc2V7aWYobC5wdXNoKC4uLk9iamVjdC5rZXlzKG51bGwhPT0ocz1lLmF0dHJpYnV0ZXMpJiZ2b2lkIDAhPT1zP3M6W10pLnJldmVyc2UoKS5tYXAoKHM9Pntjb25zdCBvPVtdO2lmKGUgaW5zdGFuY2VvZiBDb21tZW50KXJldHVybltdO2NvbnN0IHI9ZS5hdHRyaWJ1dGVzW3NdO2lmKHIubmFtZS5zdGFydHNXaXRoKFwicHVpLlwiKSl7Y29uc3Qgcz1yLnZhbHVlLm1hdGNoKG4ucmVnZXhBdHRyaWJ1dGUpO2xldCBvLGwsW2EsaCx1LGQscF09cyxtPSExO2lmKFwiQFwiIT09dSl7Y29uc3QgaT1oLm1hdGNoKC9eJyguKj8pJyQvKTtpZihudWxsIT1pKW89aVsxXSxlLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsbyksaD1cIm9wdGlvblwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpP1wic2VsZWN0ZWRcIjpcImNoZWNrZWRcIixkPWU9PmU/bzp2b2lkIDAsdT1lPT5lPT09bztlbHNlIGlmKFwiXCI9PT1oKXtpZihcIj5cIj09PWQpe2NvbnN0e3RhcmdldDppLHByb3BlcnR5OnN9PW4ucmVzb2x2ZVByb3BlcnR5KHQscCk7cmV0dXJuIGlbc109ZSxbXX17Y29uc3QgdD1kb2N1bWVudC5jcmVhdGVDb21tZW50KHIubmFtZSk7ZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LGUpLGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKSxlLnJlbW92ZUF0dHJpYnV0ZShyLm5hbWUpLGw9ZSxlPXQsaD1cIj1cIj09PXUsdT0hMCxcInxcIj09PWQmJihtPSEwKX19ZWxzZSBpZihcIipcIj09PWQpe2NvbnN0IHQ9ZG9jdW1lbnQuY3JlYXRlQ29tbWVudChyLm5hbWUpO2UucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxlKSxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSksZS5yZW1vdmVBdHRyaWJ1dGUoci5uYW1lKSxsPWUsZT10fWVsc2VcInxcIj09PWQ/bT0hMDpcImNoZWNrZWRcIiE9PWgmJmUuc2V0QXR0cmlidXRlKGgsXCJcIil9cmV0dXJuW24uYmluZCh7c2VsZWN0b3I6ZSxhdHRyaWJ1dGU6aCx2YWx1ZTpvLG9iamVjdDp0LHByb3BlcnR5OnAsdGVtcGxhdGU6bCx0b1VJOlwic3RyaW5nXCI9PXR5cGVvZiB1P1wiPFwiPT09dTp1LGZyb21VSTpcInN0cmluZ1wiPT10eXBlb2YgZD9cIj5cIj09PWQ6ZCxhdEV2ZW50OlwiQFwiPT09dSxwYXJlbnQ6aSxvbmVUaW1lOm19KV19Y29uc3QgbD1bci52YWx1ZV07bGV0IGE9MCxoPWxbYV0ubWF0Y2gobi5yZWdleFZhbHVlKTtmb3IoO251bGwhPWg7KXtsZXR7YmVmb3JlOnMscHJvcGVydHk6dSxhZnRlcjpkfT1oLmdyb3VwcyxwPSExO3Uuc3RhcnRzV2l0aChcInxcIikmJihwPSEwLHU9dS5zbGljZSgxKS50cmltU3RhcnQoKSksby5wdXNoKG4uYmluZCh7c2VsZWN0b3I6ZSxhdHRyaWJ1dGU6ci5uYW1lLG9iamVjdDp0LHByb3BlcnR5OnUsb25lVGltZTpwLHRvVUkodCxpLHMsbyl7aWYodGhpcy5vbmVUaW1lKXtjb25zdCBlPWwuaW5kZXhPZihzKTtlPi0xJiYobFtlXT1uLnJlc29sdmVWYWx1ZShvLHMpLGxbZS0xXSs9bFtlXStsW2UrMV0sbC5zcGxpY2UoZSwyKSl9Y29uc3QgYT1sLm1hcCgoKGUsdCk9PnQlMj09MD9lOm4ucmVzb2x2ZVZhbHVlKG8sZSkpKS5qb2luKFwiXCIpO2Uuc2V0QXR0cmlidXRlKHIubmFtZSxhKX0scGFyZW50Oml9KSksbFthKytdPXMsbFthKytdPXUsbFthXT1kLGg9bFthXS5tYXRjaChuLnJlZ2V4VmFsdWUpfXJldHVybiBvfSkpLmZsYXQoKSksZSBpbnN0YW5jZW9mIENvbW1lbnQpcmV0dXJuIGwuZmlsdGVyKChlPT5udWxsIT1lLnRlbXBsYXRlfHwoZS51bmJpbmQoKSwhMSkpKTtpZighbi5sZWF2ZUF0dHJpYnV0ZXMpZm9yKGxldCB0PU9iamVjdC5rZXlzKG51bGwhPT0obz1lLmF0dHJpYnV0ZXMpJiZ2b2lkIDAhPT1vP286W10pLmxlbmd0aC0xO3Q+PTA7dC0tKXtjb25zdCBpPWUuYXR0cmlidXRlc1tPYmplY3Qua2V5cyhudWxsIT09KHI9ZS5hdHRyaWJ1dGVzKSYmdm9pZCAwIT09cj9yOltdKVt0XV07aS5uYW1lLnN0YXJ0c1dpdGgoXCJwdWkuXCIpJiZlLnJlbW92ZUF0dHJpYnV0ZShpLm5hbWUpfWwucHVzaCguLi5BcnJheS5mcm9tKGUuY2hpbGROb2RlcykubWFwKChlPT5uLnBhcnNlKGUsdCxpKSkpLmZsYXQoKSl9cmV0dXJuIGx9c3RhdGljIGJpbmQoZSl7cmV0dXJuIHMuY3JlYXRlKGUpfXN0YXRpYyB1bmJpbmQoZSl7aWYoZS5kZXN0cm95KCksZS5wYXJlbnQhPT1uKXtjb25zdCB0PWUucGFyZW50LmJpbmRpbmdzLGk9dC5pbmRleE9mKGUpO2k+LTEmJnQuc3BsaWNlKGksMSl9fXN0YXRpYyB1cGRhdGUoKXt0aGlzLnZpZXdzLmZvckVhY2goKGU9PmUudXBkYXRlRnJvbVVJKCkpKSx0aGlzLnZpZXdzLmZvckVhY2goKGU9PmUudXBkYXRlVG9VSSgpKSksdGhpcy52aWV3cy5mb3JFYWNoKChlPT5lLnVwZGF0ZUF0RXZlbnRzKCkpKTtjb25zdCBlPXBlcmZvcm1hbmNlLm5vdygpO1suLi50aGlzLnZpZXdzLHRoaXMuZ2xvYmFsc10uZm9yRWFjaCgodD0+dC51cGRhdGVBbmltYXRpb25zKGUpKSksdGhpcy52aWV3cy5mb3JFYWNoKChlPT57ZS51cGRhdGVNb3ZlKCl9KSksdGhpcy5kZXN0cm95ZWQuZm9yRWFjaCgoZT0+e3N3aXRjaChlLmRlc3Ryb3llZCl7Y2FzZVwicXVldWVcIjplLmRlc3Ryb3llZD1cImRlc3Ryb3lcIjticmVhaztjYXNlXCJkZXN0cm95XCI6e2UudGVybWluYXRlKCk7Y29uc3QgdD10aGlzLmRlc3Ryb3llZC5maW5kSW5kZXgoKHQ9PmU9PT10KSk7dD4tMSYmdGhpcy5kZXN0cm95ZWQuc3BsaWNlKHQsMSl9fX0pKX1zdGF0aWMgcmVzb2x2ZVByb3BlcnR5KGUsdCl7Y29uc3QgaT0odD10LnJlcGxhY2UoXCJbXCIsXCIuXCIpLnJlcGxhY2UoXCJdXCIsXCIuXCIpKS5zcGxpdChcIi5cIikuZmlsdGVyKChlPT4obnVsbCE9ZT9lOlwiXCIpLmxlbmd0aD4wKSk7bGV0IHM9XCIkbW9kZWxcImluIGU/ZS4kbW9kZWw6ZTtmb3IoO2kubGVuZ3RoPjE7KXM9c1tpLnNoaWZ0KCldO3JldHVybnt0YXJnZXQ6cyxwcm9wZXJ0eTppWzBdfX1zdGF0aWMgcmVzb2x2ZVZhbHVlKGUsdCl7bGV0IGk9MDtkb3tjb25zdHt0YXJnZXQ6aSxwcm9wZXJ0eTpzfT1uLnJlc29sdmVQcm9wZXJ0eShlLHQpO2lmKG51bGwhPWkmJnMgaW4gaSlyZXR1cm4gaVtzXTtlPWUuJHBhcmVudH13aGlsZShudWxsIT1lJiZpKys8MWUzKX1zdGF0aWMgcHJlcGFyZShlKXtsZXQgdD1lO2U9XCJcIjtsZXQgaT10Lm1hdGNoKG4ucmVnZXhSZXBsYWNlKTtmb3IoO251bGwhPWk7KXtjb25zdFtzLG8scixsXT1pO3IudHJpbSgpLmVuZHNXaXRoKFwiPD09XCIpP2UrPWAke299ZGl2IFBVSS4ke24uYmluZGluZ0NvdW50ZXIrK309XCIke3J9XCJgOmUrPWAke299IFBVSS4ke24uYmluZGluZ0NvdW50ZXIrK309XCIke3J9XCIgYCx0PWwsaT10Lm1hdGNoKG4ucmVnZXhSZXBsYWNlKX1yZXR1cm4gZSt0fX1uLmlkPTAsbi52aWV3cz1bXSxuLmRlc3Ryb3llZD1bXSxuLmdsb2JhbHM9bmV3IGksbi5sZWF2ZUF0dHJpYnV0ZXM9ITEsbi5yZWdleFJlcGxhY2U9LyhbXFxTXFxzXSo/KVxcJFxceyhbXn1dKj9bPD1AIV09Wyo9PnxdW159XSo/KVxcfShbXFxTXFxzXSopL20sbi5yZWdleEF0dHJpYnV0ZT0vXlxccyooXFxTKj8pXFxzKihbPD1AIV0pPShbKj0+fF0pXFxzKihcXFMqPylcXHMqJC8sbi5yZWdleFZhbHVlPS8oPzxiZWZvcmU+W1xcU1xcc10qPylcXCRcXHtcXHMqKD88cHJvcGVydHk+W1xcc1xcU10qPylcXHMqXFx9KD88YWZ0ZXI+W1xcU1xcc10qKS9tLG4uYmluZGluZ0NvdW50ZXI9MDt2YXIgbz1leHBvcnRzO2Zvcih2YXIgciBpbiB0KW9bcl09dFtyXTt0Ll9fZXNNb2R1bGUmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSkoKTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IG11Z3Nob3QgZnJvbSBcIi4uL2Fzc2V0cy9oZWFkc2hvdC5qcGVnXCI7XHJcbmltcG9ydCBTTW11Z3Nob3QgZnJvbSBcIi4uL2Fzc2V0cy9zbWFsbF9oZWFkc2hvdC5qcGVnXCI7XHJcbmltcG9ydCBtZW51b3BlbiBmcm9tIFwiLi4vYXNzZXRzL21lbnUucG5nXCI7XHJcbmltcG9ydCBtZW51Y2xvc2UgZnJvbSBcIi4uL2Fzc2V0cy9tZW51Y2xvc2UucG5nXCI7XHJcblxyXG5leHBvcnQgbGV0IG1vZGVsID0ge1xyXG4gIGdsb2JhbDoge1xyXG4gICAgc2l6ZTogXCJsYXJnZVwiLFxyXG4gICAgb3JpZW50YXRpb246IFwicG9ydHJhaXRcIixcclxuICAgIHdpbmRvd1dpZHRoOiA4MDAsXHJcbiAgICB3aW5kb3dIZWlnaHQ6IDYwMCxcclxuICAgIHNjcmVlbldpZHRoOiA4MDAsXHJcbiAgICBzY3JlZW5IZWlnaHQ6IDYwMCxcclxuICAgIGdldCByZXNwQ29udGVudCgpIHtcclxuICAgICAgaWYgKG1vZGVsLmdsb2JhbC5zaXplID09IFwibGFyZ2VcIikgcmV0dXJuIHRydWU7XHJcbiAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGU6IGFueSkge1xyXG4gICAgICBtb2RlbC5nbG9iYWwuc2NyZWVuV2lkdGggPSB3aW5kb3cuc2NyZWVuLmF2YWlsV2lkdGg7XHJcbiAgICAgIG1vZGVsLmdsb2JhbC5zY3JlZW5IZWlnaHQgPSB3aW5kb3cuc2NyZWVuLmF2YWlsSGVpZ2h0O1xyXG4gICAgICBtb2RlbC5nbG9iYWwud2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgbW9kZWwuZ2xvYmFsLndpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcIikubWF0Y2hlcykge1xyXG4gICAgICAgIG1vZGVsLmdsb2JhbC5vcmllbnRhdGlvbiA9IFwicG9ydHJhaXRcIjtcclxuICAgICAgfSBlbHNlIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKS5tYXRjaGVzKSB7XHJcbiAgICAgICAgbW9kZWwuZ2xvYmFsLm9yaWVudGF0aW9uID0gXCJsYW5kc2NhcGVcIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoKG1vZGVsLmdsb2JhbC53aW5kb3dXaWR0aCA8IDgwMCB8fCBtb2RlbC5nbG9iYWwuc2NyZWVuV2lkdGggPCAxMDAwKSAmJiBtb2RlbC5nbG9iYWwub3JpZW50YXRpb24gPT0gXCJwb3J0cmFpdFwiKSB7XHJcbiAgICAgICAgbW9kZWwuZ2xvYmFsLnNpemUgPSBcInNtYWxsXCI7XHJcbiAgICAgICAgbW9kZWwubWFpbi5tdWcgPSBTTW11Z3Nob3Q7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbW9kZWwuZ2xvYmFsLnNpemUgPSBcImxhcmdlXCI7XHJcbiAgICAgICAgbW9kZWwubWFpbi5tdWcgPSBtdWdzaG90O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhtb2RlbC5nbG9iYWwub3JpZW50YXRpb24pO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIG1haW46IHtcclxuICAgIG11ZzogbXVnc2hvdCxcclxuICB9LFxyXG4gIG1lbnU6IHtcclxuICAgIHNyYzogbWVudW9wZW4sXHJcbiAgICBjc3NTdHJpbmc6IFwiXCIsXHJcbiAgICBpc09wZW46IGZhbHNlLFxyXG4gICAgdG9nZ2xlOiAoX2V2ZW50OiBhbnksIG1vZGVsOiBhbnkpID0+IHtcclxuICAgICAgaWYgKG1vZGVsLm1lbnUuaXNPcGVuKSB7XHJcbiAgICAgICAgbW9kZWwubWVudS5pc09wZW4gPSBmYWxzZTtcclxuICAgICAgICBtb2RlbC5tZW51LnNyYyA9IG1lbnVvcGVuO1xyXG4gICAgICAgIG1vZGVsLm1lbnUuY3NzU3RyaW5nID0gXCJcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtb2RlbC5tZW51LmlzT3BlbiA9IHRydWU7XHJcbiAgICAgICAgbW9kZWwubWVudS5zcmMgPSBtZW51Y2xvc2U7XHJcbiAgICAgICAgbW9kZWwubWVudS5jc3NTdHJpbmcgPSBcIm1lbnVPcGVuXCI7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBVSSB9IGZyb20gXCJwZWFzeS11aVwiO1xyXG5pbXBvcnQgeyBtb2RlbCB9IGZyb20gXCIuL3N0YXRlL3N0YXRlXCI7XHJcblxyXG5sZXQgdGVtcGxhdGUgPSBgXHJcbjxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibHJnXCIgXFwkez09PWdsb2JhbC5yZXNwQ29udGVudH0+IFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZXJvXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPkNyZWF0aXZlIERldmVsb3Blcjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZHNob3Ria2duZFwiPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiaGVhZHNob3RcIiBhbHQ9XCJcIiBzcmM9XCJcXCR7bWFpbi5tdWd9XCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHRtYXNraW5nXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVkaXZcIj5cclxuICAgICAgICAgICAgPHNwYW4+SnVzdGluPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj5Zb3VuZzwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3ZnZGl2XCI+XHJcbiAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIi05LjIzNSAzLjczNiAxOTkuMDM1IDkyLjQ2OFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJtYXRyaXgoMSwgMCwgMCwgMSwgLTIwLjUzNzY2NCwgLTY5LjI1MDU5NSlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZTogcmdiKDAsIDAsIDApOyBmaWxsOiBub25lOyBzdHJva2Utd2lkdGg6IDJweDtcIiBkPVwiTSAyNy43MDUgMTM4LjUyNSBDIDMwLjI3NSAxOTEuNjQzIDgzLjc3MyAxNTIuMTIgODMuMTE1IDEzOC41MjVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2U6IHJnYigwLCAwLCAwKTsgZmlsbDogbm9uZTsgc3Ryb2tlLXdpZHRoOiAycHg7XCIgZD1cIk0gNzAuMDc0IDEzNC4wMTMgQyA3MS44NDMgMTI4LjcwNiA3MC43NjYgMTIxLjkyMSA2OS41MjUgMTE4LjkyOCBDIDY4LjI4NCAxMTUuOTMzIDYwLjQ2MSAxMDUuMjI1IDU0LjA4MyA5OC4zOTUgQyA0NS41NzQgODkuMjg2IDQwLjA3NyA4NC4wNTIgMjEuMzQ1IDc3LjQ5OVwiIHRyYW5zZm9ybT1cIm1hdHJpeCgtMC4zMzAyOTIsIC0wLjk0Mzg3OSwgMC45NDM4NzksIC0wLjMzMDI5MiwgLTM4LjM5NDY1LCAxODQuMjY5OTM3KVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZTogcmdiKDAsIDAsIDApOyBmaWxsOiBub25lOyBzdHJva2Utd2lkdGg6IDJweDsgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1wiIGQ9XCJNIDY0LjY0NSA3My44ODYgQyA4My40MjQgNzMuNTI4IDkwLjA4MiA5MC4yMzQgMTEwLjgyIDkyLjM1XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0eWxlPVwic3Ryb2tlOiByZ2IoMCwgMCwgMCk7IHN0cm9rZS13aWR0aDogMnB4OyBmaWxsOiBub25lOyBzdHJva2UtbGluZWNhcDogcm91bmQ7XCIgZD1cIk0gODMuMTk0IDEzOC43MzcgQyA4My4wOTQgMTMyLjI0NiA4OC4xNTMgMTI5Ljc5OCA5Mi4yOCAxMjkuMzYyIEMgOTUuMDY3IDEyOS4wNjggMTEwLjc0OCAxMjkuMDc5IDExMC43NDggMTI5LjA3OVwiIHRyYW5zZm9ybT1cIm1hdHJpeCgwLjk5OTg4MiwgMC4wMTUzMzQsIC0wLjAxNTMzNCwgMC45OTk4ODIsIDIuMDY0NzQ3LCAtMS40NzExOTkpXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxlbGxpcHNlIHN0eWxlPVwic3Ryb2tlOiByZ2IoMCwgMCwgMCk7IGZpbGw6IHJnYigyNTUsIDI1NSwgMjU1KTsgc3Ryb2tlLXdpZHRoOiAycHg7XCIgY3g9XCI4OC4wNzFcIiBjeT1cIjEyNy4wNzhcIiByeD1cIjExLjc1M1wiIHJ5PVwiMTEuODdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGVsbGlwc2Ugc3R5bGU9XCJzdHJva2U6IHJnYigwLCAwLCAwKTsgZmlsbDogcmdiKDM5LCAzOSwgMzkpO1wiIGN4PVwiODguMDM3XCIgY3k9XCIxMjYuOTY3XCIgcng9XCI3Ljg0NlwiIHJ5PVwiOC4xXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxlbGxpcHNlIHN0eWxlPVwic3Ryb2tlOiByZ2IoMCwgMCwgMCk7IGZpbGw6IG5vbmU7IHN0cm9rZS13aWR0aDogMnB4O1wiIGN4PVwiNjZcIiBjeT1cIjk1XCIgcng9XCIxNlwiIHJ5PVwiMTZcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwibWF0cml4KDEuMTEyNzQxLCAwLCAwLCAxLjExMjc0MSwgLTYuOTM2MjcsIC05LjU5NDQwOClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZTogcmdiKDAsIDAsIDApOyBmaWxsOiByZ2IoMSwgMSwgMSk7XCIgZD1cIk0gNzUuNDMyIDkwLjkwOSBMIDc1LjQzMiA5Ny43NDIgTCA2OC45NjMgOTYuMTkyIEwgNjguOTYzIDkyLjgwNSBMIDc1LjQzMiA5MC45MDkgWlwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZTogcmdiKDAsIDAsIDApOyBmaWxsOiByZ2IoMSwgMSwgMSk7XCIgZD1cIk0gNjIuMTMgOTcuNzQyIEwgNjIuMTMgOTAuOTA5IEwgNTUuNjYxIDkyLjQ1OSBMIDU1LjY2MSA5NS44NDYgTCA2Mi4xMyA5Ny43NDIgWlwiIHRyYW5zZm9ybT1cIm1hdHJpeCgtMSwgMCwgMCwgLTEsIDExNy43OTEsIDE4OC42NTA5OTMpXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0eWxlPVwic3Ryb2tlOiByZ2IoMCwgMCwgMCk7IGZpbGw6IHJnYigxLCAxLCAxKTtcIiBkPVwiTSA2OC43ODEgMTA0LjM5MyBMIDY4Ljc4MSA5Ny41NiBMIDYyLjMxMiA5OS4xMSBMIDYyLjMxMiAxMDIuNDk3IEwgNjguNzgxIDEwNC4zOTMgWlwiIHRyYW5zZm9ybT1cIm1hdHJpeCgwLCAxLCAtMSwgMCwgMTY2LjUyMjk5NywgMzUuNDI5OTk4KVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZTogcmdiKDAsIDAsIDApOyBmaWxsOiByZ2IoMSwgMSwgMSk7XCIgZD1cIk0gNjguNzgxIDkxLjA5MSBMIDY4Ljc4MSA4NC4yNTggTCA2Mi4zMTIgODUuODA4IEwgNjIuMzEyIDg5LjE5NSBMIDY4Ljc4MSA5MS4wOTEgWlwiIHRyYW5zZm9ybT1cIm1hdHJpeCgwLCAtMSwgMSwgMCwgLTIyLjEyODAwNCwgMTUzLjIyMTAwMylcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxyZWN0IHN0eWxlPVwic3Ryb2tlOiByZ2IoMCwgMCwgMCk7IGZpbGw6IHJnYig3NywgNzcsIDc3KTtcIiB0cmFuc2Zvcm09XCJtYXRyaXgoMC4wMDMxNDYsIC0wLjk5OTk5NSwgMC45OTk5OTUsIDAuMDAzMTQ2LCAtOS43MDY0NywgMTU2LjA3MzU2MylcIiB4PVwiNTMuOTM0XCIgeT1cIjEwNi40ODlcIiB3aWR0aD1cIjQuMDU5XCIgaGVpZ2h0PVwiMTAuODQxXCIgcng9XCIyXCIgcnk9XCIyXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0eWxlPVwic3Ryb2tlOiByZ2IoMCwgMCwgMCk7IGZpbGw6IG5vbmU7IHN0cm9rZS13aWR0aDogMnB4O1wiIGQ9XCJNIDEzOC41MTkgMTY1LjQ1NCBDIDE0MS4wODkgMTEyLjMzNiAxOTQuNTg3IDE1MS44NTkgMTkzLjkyOSAxNjUuNDU0XCIgdHJhbnNmb3JtPVwibWF0cml4KC0xLCAwLCAwLCAtMSwgMzMyLjQ1NDAyNSwgMzAzLjk3ODk4OSlcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2U6IHJnYigwLCAwLCAwKTsgZmlsbDogbm9uZTsgc3Ryb2tlLXdpZHRoOiAycHg7XCIgZD1cIk0gMTk5LjM2NCA3Ny40OTkgQyAyMDEuMTMzIDgyLjgwNiAyMDAuMDU2IDg5LjU5MSAxOTguODE1IDkyLjU4NCBDIDE5Ny41NzQgOTUuNTc5IDE4OS43NTEgMTA2LjI4NyAxODMuMzczIDExMy4xMTcgQyAxNzQuODY0IDEyMi4yMjYgMTY5LjM2NyAxMjcuNDYgMTUwLjYzNSAxMzQuMDEzXCIgdHJhbnNmb3JtPVwibWF0cml4KDAuMzMwMjkyLCAtMC45NDM4NzksIDAuOTQzODc5LCAwLjMzMDI5MiwgMTcuNjg5NDYxLCAyMzYuNDQzMzIzKVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZTogcmdiKDAsIDAsIDApOyBmaWxsOiBub25lOyBzdHJva2Utd2lkdGg6IDJweDsgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1wiIGQ9XCJNIDExMC44MiA5Mi4zNDQgQyAxMjkuNTk5IDkyLjcwMiAxMzYuMjU3IDc1Ljk5NiAxNTYuOTk1IDczLjg4XCIgdHJhbnNmb3JtPVwibWF0cml4KC0xLCAwLCAwLCAtMSwgMjY3LjgxNDk5NSwgMTY2LjIyOTY2OClcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2U6IHJnYigwLCAwLCAwKTsgc3Ryb2tlLXdpZHRoOiAycHg7IGZpbGw6IG5vbmU7IHN0cm9rZS1saW5lY2FwOiByb3VuZDtcIiBkPVwiTSAxMTAuODk0IDEyOS4wNzggQyAxMTAuNzk0IDEzNS41NjkgMTE1Ljg1MyAxMzguMDE3IDExOS45OCAxMzguNDUzIEMgMTIyLjc2NyAxMzguNzQ3IDEzOC40NDggMTM4LjczNiAxMzguNDQ4IDEzOC43MzZcIiB0cmFuc2Zvcm09XCJtYXRyaXgoLTAuOTk5ODgyLCAwLjAxNTMzNCwgLTAuMDE1MzM0LCAtMC45OTk4ODIsIDI1MS4zNzkyMTEsIDI2NS44ODY2MDMpXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxlbGxpcHNlIHN0eWxlPVwic3Ryb2tlOiByZ2IoMCwgMCwgMCk7IGZpbGw6IHJnYigyNTUsIDI1NSwgMjU1KTsgc3Ryb2tlLXdpZHRoOiAycHg7XCIgY3g9XCItMTMzLjU2OVwiIGN5PVwiMTI3LjA3OFwiIHJ4PVwiMTEuNzUzXCIgcnk9XCIxMS44N1wiIHRyYW5zZm9ybT1cIm1hdHJpeCgtMSwgMCwgMCwgMSwgMCwgMClcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGVsbGlwc2Ugc3R5bGU9XCJzdHJva2U6IHJnYigwLCAwLCAwKTsgZmlsbDogcmdiKDM5LCAzOSwgMzkpO1wiIGN4PVwiLTEzMy42MDNcIiBjeT1cIjEyNi45NjdcIiByeD1cIjcuODQ2XCIgcnk9XCI4LjFcIiB0cmFuc2Zvcm09XCJtYXRyaXgoLTEsIDAsIDAsIDEsIDAsIDApXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxlbGxpcHNlIHN0eWxlPVwic3Ryb2tlOiByZ2IoMCwgMCwgMCk7IGZpbGw6IG5vbmU7IHN0cm9rZS13aWR0aDogMnB4O1wiIGN4PVwiLTE1NS42NFwiIGN5PVwiOTVcIiByeD1cIjE2XCIgcnk9XCIxNlwiIHRyYW5zZm9ybT1cIm1hdHJpeCgtMSwgMCwgMCwgMSwgMCwgMClcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJlY3Qgc3R5bGU9XCJzdHJva2U6IHJnYigwLCAwLCAwKTsgZmlsbDogcmdiKDc3LCA3NywgNzcpO1wiIHRyYW5zZm9ybT1cIm1hdHJpeCgtMC4wMDMxNDYsIC0wLjk5OTk5NSwgLTAuOTk5OTk1LCAwLjAwMzE0NiwgMTguMDI5OTY5LCA0OC44NzYxMDUpXCIgeD1cIi01My45MzRcIiB5PVwiLTEwNi40ODlcIiB3aWR0aD1cIjQuMDU5XCIgaGVpZ2h0PVwiMTAuODQxXCIgcng9XCIyXCIgcnk9XCIyXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cIm1hdHJpeCgxLCAwLCAwLCAxLCAtMC4zMjQxNzIsIC0wLjE5NDUwMylcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZWxsaXBzZSBzdHlsZT1cInN0cm9rZTogcmdiKDAsIDAsIDApOyBmaWxsOiByZ2IoMTAyLCAxMDIsIDEwMik7XCIgY3g9XCIxNTZcIiBjeT1cIjg3XCIgcng9XCI0LjVcIiByeT1cIjQuNVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZWxsaXBzZSBzdHlsZT1cInN0cm9rZTogcmdiKDAsIDAsIDApOyBmaWxsOiByZ2IoMTAyLCAxMDIsIDEwMik7XCIgY3g9XCIxNTZcIiBjeT1cIjEwMS44NjVcIiByeD1cIjQuNVwiIHJ5PVwiNC41XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxlbGxpcHNlIHN0eWxlPVwic3Ryb2tlOiByZ2IoMCwgMCwgMCk7IGZpbGw6IHJnYigxMDIsIDEwMiwgMTAyKTtcIiBjeD1cIjE0OC4xMDJcIiBjeT1cIjk0LjYyOVwiIHJ4PVwiNC41XCIgcnk9XCI0LjVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGVsbGlwc2Ugc3R5bGU9XCJzdHJva2U6IHJnYigwLCAwLCAwKTsgZmlsbDogcmdiKDEwMiwgMTAyLCAxMDIpO1wiIGN4PVwiMTY0LjAyOFwiIGN5PVwiOTQuNjI5XCIgcng9XCI0LjVcIiByeT1cIjQuNVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5NeSBTdG9yeTwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5Qcm9qZWN0czwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5UZWNobm9sb2dpZXM8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+R2FtZSBKYW1zPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPk15IEdhbWVzPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPkNvbnRhY3QgTWU8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJzbWxcIiBcXCR7IT09Z2xvYmFsLnJlc3BDb250ZW50fT4gXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImltZ0RpdlwiPlxyXG4gICAgICAgICAgICA8aW1nIGFsdD1cIlwiIHNyYz1cIlxcJHttZW51LnNyY31cIiBcXCR7Y2xpY2tAPT5tZW51LnRvZ2dsZX0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51IFxcJHttZW51LmNzc1N0cmluZ31cIiA+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnVMaW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBcXCR7PT09bWVudS5pc09wZW59Pk15IFN0b3J5PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBcXCR7PT09bWVudS5pc09wZW59PlByb2plY3RzPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBcXCR7PT09bWVudS5pc09wZW59PlRlY2hub2xvZ2llczwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgXFwkez09PW1lbnUuaXNPcGVufT5HYW1lIEphbXM8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIFxcJHs9PT1tZW51LmlzT3Blbn0+TXkgR2FtZXM8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIFxcJHs9PT1tZW51LmlzT3Blbn0+Q29udGFjdCBNZTwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzbWhlcm9cIj5cclxuICAgICAgICAgICAgPHNwYW4+Q3JlYXRpdmUgRGV2ZWxvcGVyPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzbWhlYWRzaG90YmtnbmRcIj5cclxuICAgICAgICAgICAgPGltZyBjbGFzcz1cInNtaGVhZHNob3RcIiBhbHQ9XCJcIiBzcmM9XCJcXCR7bWFpbi5tdWd9XCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic21mb290ZXJcIj5cclxuICAgICAgICAgICAgPHNwYW4+SnVzdGluIFlvdW5nPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzbXN2Z2RpdlwiPlxyXG4gICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCItOS4yMzUgMy43MzYgMTk5LjAzNSA5Mi40NjhcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwibWF0cml4KDEsIDAsIDAsIDEsIC0yMC41Mzc2NjQsIC02OS4yNTA1OTUpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2U6IHJnYigwLCAwLCAwKTsgZmlsbDogbm9uZTsgc3Ryb2tlLXdpZHRoOiAycHg7XCIgZD1cIk0gMjcuNzA1IDEzOC41MjUgQyAzMC4yNzUgMTkxLjY0MyA4My43NzMgMTUyLjEyIDgzLjExNSAxMzguNTI1XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0eWxlPVwic3Ryb2tlOiByZ2IoMCwgMCwgMCk7IGZpbGw6IG5vbmU7IHN0cm9rZS13aWR0aDogMnB4O1wiIGQ9XCJNIDcwLjA3NCAxMzQuMDEzIEMgNzEuODQzIDEyOC43MDYgNzAuNzY2IDEyMS45MjEgNjkuNTI1IDExOC45MjggQyA2OC4yODQgMTE1LjkzMyA2MC40NjEgMTA1LjIyNSA1NC4wODMgOTguMzk1IEMgNDUuNTc0IDg5LjI4NiA0MC4wNzcgODQuMDUyIDIxLjM0NSA3Ny40OTlcIiB0cmFuc2Zvcm09XCJtYXRyaXgoLTAuMzMwMjkyLCAtMC45NDM4NzksIDAuOTQzODc5LCAtMC4zMzAyOTIsIC0zOC4zOTQ2NSwgMTg0LjI2OTkzNylcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2U6IHJnYigwLCAwLCAwKTsgZmlsbDogbm9uZTsgc3Ryb2tlLXdpZHRoOiAycHg7IHN0cm9rZS1saW5lY2FwOiByb3VuZDtcIiBkPVwiTSA2NC42NDUgNzMuODg2IEMgODMuNDI0IDczLjUyOCA5MC4wODIgOTAuMjM0IDExMC44MiA5Mi4zNVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZTogcmdiKDAsIDAsIDApOyBzdHJva2Utd2lkdGg6IDJweDsgZmlsbDogbm9uZTsgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1wiIGQ9XCJNIDgzLjE5NCAxMzguNzM3IEMgODMuMDk0IDEzMi4yNDYgODguMTUzIDEyOS43OTggOTIuMjggMTI5LjM2MiBDIDk1LjA2NyAxMjkuMDY4IDExMC43NDggMTI5LjA3OSAxMTAuNzQ4IDEyOS4wNzlcIiB0cmFuc2Zvcm09XCJtYXRyaXgoMC45OTk4ODIsIDAuMDE1MzM0LCAtMC4wMTUzMzQsIDAuOTk5ODgyLCAyLjA2NDc0NywgLTEuNDcxMTk5KVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZWxsaXBzZSBzdHlsZT1cInN0cm9rZTogcmdiKDAsIDAsIDApOyBmaWxsOiByZ2IoMjU1LCAyNTUsIDI1NSk7IHN0cm9rZS13aWR0aDogMnB4O1wiIGN4PVwiODguMDcxXCIgY3k9XCIxMjcuMDc4XCIgcng9XCIxMS43NTNcIiByeT1cIjExLjg3XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxlbGxpcHNlIHN0eWxlPVwic3Ryb2tlOiByZ2IoMCwgMCwgMCk7IGZpbGw6IHJnYigzOSwgMzksIDM5KTtcIiBjeD1cIjg4LjAzN1wiIGN5PVwiMTI2Ljk2N1wiIHJ4PVwiNy44NDZcIiByeT1cIjguMVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZWxsaXBzZSBzdHlsZT1cInN0cm9rZTogcmdiKDAsIDAsIDApOyBmaWxsOiBub25lOyBzdHJva2Utd2lkdGg6IDJweDtcIiBjeD1cIjY2XCIgY3k9XCI5NVwiIHJ4PVwiMTZcIiByeT1cIjE2XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cIm1hdHJpeCgxLjExMjc0MSwgMCwgMCwgMS4xMTI3NDEsIC02LjkzNjI3LCAtOS41OTQ0MDgpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2U6IHJnYigwLCAwLCAwKTsgZmlsbDogcmdiKDEsIDEsIDEpO1wiIGQ9XCJNIDc1LjQzMiA5MC45MDkgTCA3NS40MzIgOTcuNzQyIEwgNjguOTYzIDk2LjE5MiBMIDY4Ljk2MyA5Mi44MDUgTCA3NS40MzIgOTAuOTA5IFpcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2U6IHJnYigwLCAwLCAwKTsgZmlsbDogcmdiKDEsIDEsIDEpO1wiIGQ9XCJNIDYyLjEzIDk3Ljc0MiBMIDYyLjEzIDkwLjkwOSBMIDU1LjY2MSA5Mi40NTkgTCA1NS42NjEgOTUuODQ2IEwgNjIuMTMgOTcuNzQyIFpcIiB0cmFuc2Zvcm09XCJtYXRyaXgoLTEsIDAsIDAsIC0xLCAxMTcuNzkxLCAxODguNjUwOTkzKVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZTogcmdiKDAsIDAsIDApOyBmaWxsOiByZ2IoMSwgMSwgMSk7XCIgZD1cIk0gNjguNzgxIDEwNC4zOTMgTCA2OC43ODEgOTcuNTYgTCA2Mi4zMTIgOTkuMTEgTCA2Mi4zMTIgMTAyLjQ5NyBMIDY4Ljc4MSAxMDQuMzkzIFpcIiB0cmFuc2Zvcm09XCJtYXRyaXgoMCwgMSwgLTEsIDAsIDE2Ni41MjI5OTcsIDM1LjQyOTk5OClcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2U6IHJnYigwLCAwLCAwKTsgZmlsbDogcmdiKDEsIDEsIDEpO1wiIGQ9XCJNIDY4Ljc4MSA5MS4wOTEgTCA2OC43ODEgODQuMjU4IEwgNjIuMzEyIDg1LjgwOCBMIDYyLjMxMiA4OS4xOTUgTCA2OC43ODEgOTEuMDkxIFpcIiB0cmFuc2Zvcm09XCJtYXRyaXgoMCwgLTEsIDEsIDAsIC0yMi4xMjgwMDQsIDE1My4yMjEwMDMpXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICA8cmVjdCBzdHlsZT1cInN0cm9rZTogcmdiKDAsIDAsIDApOyBmaWxsOiByZ2IoNzcsIDc3LCA3Nyk7XCIgdHJhbnNmb3JtPVwibWF0cml4KDAuMDAzMTQ2LCAtMC45OTk5OTUsIDAuOTk5OTk1LCAwLjAwMzE0NiwgLTkuNzA2NDcsIDE1Ni4wNzM1NjMpXCIgeD1cIjUzLjkzNFwiIHk9XCIxMDYuNDg5XCIgd2lkdGg9XCI0LjA1OVwiIGhlaWdodD1cIjEwLjg0MVwiIHJ4PVwiMlwiIHJ5PVwiMlwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZTogcmdiKDAsIDAsIDApOyBmaWxsOiBub25lOyBzdHJva2Utd2lkdGg6IDJweDtcIiBkPVwiTSAxMzguNTE5IDE2NS40NTQgQyAxNDEuMDg5IDExMi4zMzYgMTk0LjU4NyAxNTEuODU5IDE5My45MjkgMTY1LjQ1NFwiIHRyYW5zZm9ybT1cIm1hdHJpeCgtMSwgMCwgMCwgLTEsIDMzMi40NTQwMjUsIDMwMy45Nzg5ODkpXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0eWxlPVwic3Ryb2tlOiByZ2IoMCwgMCwgMCk7IGZpbGw6IG5vbmU7IHN0cm9rZS13aWR0aDogMnB4O1wiIGQ9XCJNIDE5OS4zNjQgNzcuNDk5IEMgMjAxLjEzMyA4Mi44MDYgMjAwLjA1NiA4OS41OTEgMTk4LjgxNSA5Mi41ODQgQyAxOTcuNTc0IDk1LjU3OSAxODkuNzUxIDEwNi4yODcgMTgzLjM3MyAxMTMuMTE3IEMgMTc0Ljg2NCAxMjIuMjI2IDE2OS4zNjcgMTI3LjQ2IDE1MC42MzUgMTM0LjAxM1wiIHRyYW5zZm9ybT1cIm1hdHJpeCgwLjMzMDI5MiwgLTAuOTQzODc5LCAwLjk0Mzg3OSwgMC4zMzAyOTIsIDE3LjY4OTQ2MSwgMjM2LjQ0MzMyMylcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2U6IHJnYigwLCAwLCAwKTsgZmlsbDogbm9uZTsgc3Ryb2tlLXdpZHRoOiAycHg7IHN0cm9rZS1saW5lY2FwOiByb3VuZDtcIiBkPVwiTSAxMTAuODIgOTIuMzQ0IEMgMTI5LjU5OSA5Mi43MDIgMTM2LjI1NyA3NS45OTYgMTU2Ljk5NSA3My44OFwiIHRyYW5zZm9ybT1cIm1hdHJpeCgtMSwgMCwgMCwgLTEsIDI2Ny44MTQ5OTUsIDE2Ni4yMjk2NjgpXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0eWxlPVwic3Ryb2tlOiByZ2IoMCwgMCwgMCk7IHN0cm9rZS13aWR0aDogMnB4OyBmaWxsOiBub25lOyBzdHJva2UtbGluZWNhcDogcm91bmQ7XCIgZD1cIk0gMTEwLjg5NCAxMjkuMDc4IEMgMTEwLjc5NCAxMzUuNTY5IDExNS44NTMgMTM4LjAxNyAxMTkuOTggMTM4LjQ1MyBDIDEyMi43NjcgMTM4Ljc0NyAxMzguNDQ4IDEzOC43MzYgMTM4LjQ0OCAxMzguNzM2XCIgdHJhbnNmb3JtPVwibWF0cml4KC0wLjk5OTg4MiwgMC4wMTUzMzQsIC0wLjAxNTMzNCwgLTAuOTk5ODgyLCAyNTEuMzc5MjExLCAyNjUuODg2NjAzKVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZWxsaXBzZSBzdHlsZT1cInN0cm9rZTogcmdiKDAsIDAsIDApOyBmaWxsOiByZ2IoMjU1LCAyNTUsIDI1NSk7IHN0cm9rZS13aWR0aDogMnB4O1wiIGN4PVwiLTEzMy41NjlcIiBjeT1cIjEyNy4wNzhcIiByeD1cIjExLjc1M1wiIHJ5PVwiMTEuODdcIiB0cmFuc2Zvcm09XCJtYXRyaXgoLTEsIDAsIDAsIDEsIDAsIDApXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxlbGxpcHNlIHN0eWxlPVwic3Ryb2tlOiByZ2IoMCwgMCwgMCk7IGZpbGw6IHJnYigzOSwgMzksIDM5KTtcIiBjeD1cIi0xMzMuNjAzXCIgY3k9XCIxMjYuOTY3XCIgcng9XCI3Ljg0NlwiIHJ5PVwiOC4xXCIgdHJhbnNmb3JtPVwibWF0cml4KC0xLCAwLCAwLCAxLCAwLCAwKVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZWxsaXBzZSBzdHlsZT1cInN0cm9rZTogcmdiKDAsIDAsIDApOyBmaWxsOiBub25lOyBzdHJva2Utd2lkdGg6IDJweDtcIiBjeD1cIi0xNTUuNjRcIiBjeT1cIjk1XCIgcng9XCIxNlwiIHJ5PVwiMTZcIiB0cmFuc2Zvcm09XCJtYXRyaXgoLTEsIDAsIDAsIDEsIDAsIDApXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxyZWN0IHN0eWxlPVwic3Ryb2tlOiByZ2IoMCwgMCwgMCk7IGZpbGw6IHJnYig3NywgNzcsIDc3KTtcIiB0cmFuc2Zvcm09XCJtYXRyaXgoLTAuMDAzMTQ2LCAtMC45OTk5OTUsIC0wLjk5OTk5NSwgMC4wMDMxNDYsIDE4LjAyOTk2OSwgNDguODc2MTA1KVwiIHg9XCItNTMuOTM0XCIgeT1cIi0xMDYuNDg5XCIgd2lkdGg9XCI0LjA1OVwiIGhlaWdodD1cIjEwLjg0MVwiIHJ4PVwiMlwiIHJ5PVwiMlwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJtYXRyaXgoMSwgMCwgMCwgMSwgLTAuMzI0MTcyLCAtMC4xOTQ1MDMpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGVsbGlwc2Ugc3R5bGU9XCJzdHJva2U6IHJnYigwLCAwLCAwKTsgZmlsbDogcmdiKDEwMiwgMTAyLCAxMDIpO1wiIGN4PVwiMTU2XCIgY3k9XCI4N1wiIHJ4PVwiNC41XCIgcnk9XCI0LjVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGVsbGlwc2Ugc3R5bGU9XCJzdHJva2U6IHJnYigwLCAwLCAwKTsgZmlsbDogcmdiKDEwMiwgMTAyLCAxMDIpO1wiIGN4PVwiMTU2XCIgY3k9XCIxMDEuODY1XCIgcng9XCI0LjVcIiByeT1cIjQuNVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZWxsaXBzZSBzdHlsZT1cInN0cm9rZTogcmdiKDAsIDAsIDApOyBmaWxsOiByZ2IoMTAyLCAxMDIsIDEwMik7XCIgY3g9XCIxNDguMTAyXCIgY3k9XCI5NC42MjlcIiByeD1cIjQuNVwiIHJ5PVwiNC41XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxlbGxpcHNlIHN0eWxlPVwic3Ryb2tlOiByZ2IoMCwgMCwgMCk7IGZpbGw6IHJnYigxMDIsIDEwMiwgMTAyKTtcIiBjeD1cIjE2NC4wMjhcIiBjeT1cIjk0LjYyOVwiIHJ4PVwiNC41XCIgcnk9XCI0LjVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5gO1xyXG5cclxuVUkuY3JlYXRlKGRvY3VtZW50LmJvZHksIHRlbXBsYXRlLCBtb2RlbCk7XHJcblxyXG4vKipcclxuICogZ2V0IGluaXRpYWwgd2luZG93IHNpemUgYW5kIHNldCB1cCBtb2RlbFxyXG4gKi9cclxubW9kZWwuZ2xvYmFsLnNjcmVlbldpZHRoID0gd2luZG93LnNjcmVlbi5hdmFpbFdpZHRoO1xyXG5tb2RlbC5nbG9iYWwuc2NyZWVuSGVpZ2h0ID0gd2luZG93LnNjcmVlbi5hdmFpbEhlaWdodDtcclxubW9kZWwuZ2xvYmFsLndpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbm1vZGVsLmdsb2JhbC53aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIG1vZGVsLmdsb2JhbC51cGRhdGUpO1xyXG5pZiAobW9kZWwuZ2xvYmFsLndpbmRvd1dpZHRoIDwgODAwIHx8IG1vZGVsLmdsb2JhbC5zY3JlZW5XaWR0aCA8IDEwMDApIG1vZGVsLmdsb2JhbC5zaXplID0gXCJzbWFsbFwiO1xyXG5lbHNlIG1vZGVsLmdsb2JhbC5zaXplID0gXCJsYXJnZVwiO1xyXG5zZXRUaW1lb3V0KCgpID0+IHtcclxuICBzZXRJbnRlcnZhbCgoKSA9PiBVSS51cGRhdGUoKSwgMTAwMCAvIDYwKTtcclxufSwgMTAwMCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==