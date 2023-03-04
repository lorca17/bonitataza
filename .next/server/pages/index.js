"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5316:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/Header.jsx + 1 modules
var Header = __webpack_require__(4364);
// EXTERNAL MODULE: ./cfg.json
var cfg = __webpack_require__(1279);
;// CONCATENATED MODULE: ./components/Heroehead.jsx


function Heroehead() {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "bg-gray-900",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "flex h-96 flex-col md:flex-row p-4 gap:4 justify-center ",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col justify-center my-8 items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-4xl self-start md:text-6xl text-gray-200 font-semibold ",
                        children: cfg/* nombrePagina */.k8
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "my-4 text-xl md:text-lg self-start md:self-center text-left text-gray-400",
                        children: [
                            "Descarga gratis este PDF de ",
                            cfg/* tituloHome */.e8,
                            "."
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col sm:flex-row justify-center gap-2 my-4 w-full",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                className: " text-lg flex gap-2 items-center justify-center w-full md:w-48 h-12 hover:bg-blue-700 bg-blue-600 rounded-full text-gray-50 focus:outline-none",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-8 w-8 ",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 1,
                                            d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                        })
                                    }),
                                    "Noticias"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                className: "flex gap-2 text-lg items-center justify-center w-full md:w-48 h-12 hover:bg-blue-700 bg-blue-600 rounded-full text-gray-50 focus:outline-none",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-8 w-8 ",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 1,
                                            d: "M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                                        })
                                    }),
                                    "Download Now"
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/Newsletter.jsx


function Newsletter() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "container mx-auto mt-10",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            id: "newsletter",
            className: "grid grid-cols-2 gap-2 my-8 p-2",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    className: "text-4xl col-span-2 md:text-left border-l-4 border-blue-800 pl-2 text-blue-800",
                    children: [
                        "Suscr\xedbase a nuestro bolet\xedn de ",
                        cfg/* nombrePagina */.k8
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col col-span-2 md:col-span-1 justify-center items-center ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-40 w-40 md:h-60 md:w-60 text-blue-700 stroke-current",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 1,
                                d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "text-xl text-center text-blue-800",
                            children: [
                                "\xdanase a nuestro bolet\xedn de ",
                                cfg/* tituloHome */.e8,
                                " y reciba las pr\xf3ximas publicaciones directamente en su correo"
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    className: "flex flex-col justify-center col-span-2 md:col-span-1 md:mt-0 mt-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "email",
                                placeholder: "tu email",
                                className: "mt-4 p-4 mb-8 border focus:outline-white w-full text-gray-800"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            placeholder: "tu nombre",
                            className: "p-4 border focus:outline-white w-full text-gray-800"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "w-full p-4 bg-blue-700 mt-8 text-xl uppercase text-gray-50 hover:bg-blue-800 focus:outline-none",
                            type: "submit",
                            children: "Subscr\xedbeme"
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Featureposts.jsx




function Featuraposts({ datosArticulos  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "featured-posts",
        className: "container mx-auto grid sm:grid-cols-3 gap-4 p-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "col-span-full text-3xl md:text-4xl mb-8 border-l-4 border-blue-800 pl-2 my-4 text-blue-800 ",
                children: "Publicaciones Destacadas"
            }),
            datosArticulos.map((e, index)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: e.slug,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid lg:grid-cols-2 border rounded-lg gap-4 h-auto p-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "max-w-2xl h-auto flex items-center relative ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/img/" + e.slug + ".webp",
                                        /*  loading="lazy" */ width: 300,
                                        height: 300,
                                        className: "w-full h-auto",
                                        alt: e.slug.replaceAll("-", " "),
                                        title: e.titulo
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "bg-blue-400 w-24 pt-1 h-8 text-gray-50 font-semibold text-center absolute top-0",
                                        children: e.categoria
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "text-xl font-bold text-gray-800 mb-2 cursor-pointer capitalize",
                                        children: e.titulo.replaceAll('"', "")
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex gap-2 mb-2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "text-sm text-gray-600",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                children: [
                                                    "By ",
                                                    cfg/* nombreAutor */.NL
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "py-2 border px-4 w-full bg-blue-500 text-gray-50 rounded-lg mt-3 outline-none focus:outline-none hover:bg-blue-600 hover:text-gray-100",
                                        children: "Leer Mas"
                                    })
                                ]
                            })
                        ]
                    })
                }, index);
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/Footer.jsx
var Footer = __webpack_require__(7127);
;// CONCATENATED MODULE: ./pages/index.jsx









function Home(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: cfg/* tituloHome */.e8
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "UTF-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        httpEquiv: "X-UA-Compatible",
                        content: "IE=edge"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "robots",
                        content: "index,follow"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "title",
                        content: cfg/* tituloHome */.e8
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: cfg/* descripcionHome */.Y$
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "canonical",
                        href: cfg/* dominio */.ag
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Featuraposts, {
                datosArticulos: props.datosArticulos.datosArticulos
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Heroehead, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Newsletter, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
        ]
    });
}
async function getServerSideProps() {
    let res = await fetch(`${"http://localhost:3000/"}api/page/50`);
    let datosArticulos = await res.json();
    return {
        props: {
            datosArticulos
        }
    };
}


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,675,364,127], () => (__webpack_exec__(5316)));
module.exports = __webpack_exports__;

})();