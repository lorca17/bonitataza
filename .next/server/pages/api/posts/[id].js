"use strict";
(() => {
var exports = {};
exports.id = 789;
exports.ids = [789];
exports.modules = {

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 7962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);


// Enlazado Interno
async function interlinking(articulo, dataLinks, slug) {
    const carpetaLinks = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "interlinking");
    let fileLinks = await fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(carpetaLinks + "/" + dataLinks, "utf-8");
    let enlacesList = fileLinks.trim().split("\n");
    // console.log(enlacesList);
    let texto = await JSON.stringify(articulo);
    async function insertarEnlaces(texto, anchoText, url) {
        if (texto.includes(anchoText)) {
            texto = await texto.replace(anchoText, "[" + anchoText + "](" + url + ")");
        }
        return texto;
    }
    let anchoEnlacesCreados = [];
    let numeroMaximoEnlaces = 10;
    for (let datosLink of enlacesList){
        let [anchoText, url] = datosLink.split(",");
        if (anchoEnlacesCreados.length >= numeroMaximoEnlaces) {
            return JSON.parse(texto);
        }
        // console.log(anchoEnlacesCreados.length);
        let checkAncho = JSON.stringify(anchoEnlacesCreados);
        if (!checkAncho.includes(anchoText) && texto.includes(anchoText) && slug != url) {
            //  console.log(anchoText);
            texto = await insertarEnlaces(texto, anchoText, url).then(anchoEnlacesCreados.push(anchoText));
        }
    }
    return JSON.parse(texto);
}
async function handler(req, res) {
    let nombrePost = req.query.id;
    const jsonDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "data");
    const fileContents = await fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(jsonDirectory);
    // Si no exite el articulo
    if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(jsonDirectory + "/" + nombrePost + ".json")) {
        res.status(200).json(null);
        return;
    }
    // Leer datos del articulo
    const datosArticulo = JSON.parse(await fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(jsonDirectory + "/" + nombrePost + ".json", "utf-8"));
    // leer datos de los relacionados
    let todosAticulos = await fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(jsonDirectory);
    let relacionadosFile = await todosAticulos.filter((e)=>{
        let fileName = jsonDirectory + "/" + e;
        let data = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fileName, "utf-8"));
        if (data.parent === datosArticulo.parent) {
            return data;
        }
    });
    let relacionadosDatos = relacionadosFile.map((e)=>{
        const datosArticulo = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(jsonDirectory + "/" + e, "utf-8"));
        // delete datosArticulo.articulo;
        const { articulo , ...postsRelacionados } = datosArticulo;
        return {
            postsRelacionados
        };
    });
    datosArticulo.articuloIntelinking = await interlinking(datosArticulo.articulo, "enlaces.csv", datosArticulo.slug);
    // console.log(datosArticulo.articuloIntelinking);
    // Fin Enlazado Interno
    datosArticulo.relacionados = relacionadosDatos;
    //Return the content of the data file in json format
    res.status(200).json(datosArticulo);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7962));
module.exports = __webpack_exports__;

})();