"use strict";
exports.id = 364;
exports.ids = [364];
exports.modules = {

/***/ 4364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/NavToggle.jsx




function Home({ nombreHome  }) {
    const [navbar, setNavbar] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-gray-800 shadow ",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center justify-between py-3 md:py-5 md:block",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex text-3xl font-normal relative items-center text-white",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "h-10 w-10",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 1,
                                                    d: "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                className: "text-2xl",
                                                children: nombreHome
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "md:hidden",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border mx-auto",
                                            onClick: ()=>setNavbar(!navbar),
                                            children: navbar ? /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "w-6 h-6 text-white",
                                                viewBox: "0 0 20 20",
                                                fill: "currentColor",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    fillRule: "evenodd",
                                                    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                                    clipRule: "evenodd"
                                                })
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "w-6 h-6 text-white",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                strokeWidth: 2,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M4 6h16M4 12h16M4 18h16"
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "text-white",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/blog",
                                                children: "Blogs"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "text-white",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/legal/contacto",
                                                children: "Contacto"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "text-white",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/legal/aviso-legal",
                                                children: "Aviso Legal"
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            }),
            ";"
        ]
    });
}

// EXTERNAL MODULE: ./cfg.json
var cfg = __webpack_require__(1279);
;// CONCATENATED MODULE: ./components/Header.jsx




function Header() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("header", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Home, {
                nombreHome: cfg/* nombrePagina */.k8
            })
        })
    });
}


/***/ }),

/***/ 1279:
/***/ ((module) => {

module.exports = JSON.parse('{"ag":"https://bonitataza.com/","k8":"BonitaTaza.com","e8":"Bonita Taza","Y$":"Descubre como despertarse mejor","fc":"El blog para los muy mañaneros","EZ":"Este es el blog para los que quieren despertarse con energia","Ty":"info@bonitataza.com","yZ":" C/ Araceli, 24 28027 , España","f3":"+91 88400856678","NL":"Maria Santana","_y":"Me encanta vivir cada dia."}');

/***/ })

};
;