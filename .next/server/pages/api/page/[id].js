"use strict";
(() => {
var exports = {};
exports.id = 257;
exports.ids = [257];
exports.modules = {

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 5703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);


async function handler(req, res) {
    const jsonDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "data");
    let numeroPagina = req.query.id;
    let todosAticulos = await fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(jsonDirectory).slice(numeroPagina - 50, numeroPagina);
    let datosArticulos = await todosAticulos.map((e)=>{
        let fileName = jsonDirectory + "/" + e;
        let datosArchivo = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fileName, "utf-8"));
        // delete salida["articulo"];
        const { articulo , ...salida } = datosArchivo;
        salida.slug = e.split(".")[0];
        return salida;
    });
    let json = {
        pagina: numeroPagina,
        todosAticulos,
        datosArticulos
    };
    res.status(200).json(json);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5703));
module.exports = __webpack_exports__;

})();