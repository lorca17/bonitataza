"use strict";
(() => {
var exports = {};
exports.id = 744;
exports.ids = [744];
exports.modules = {

/***/ 2501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Single),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Header.jsx + 1 modules
var Header = __webpack_require__(4364);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/Categorias.jsx

function Categorias() {
    return /*#__PURE__*/ _jsxs("div", {
        className: "mb-8 ",
        children: [
            /*#__PURE__*/ _jsx("p", {
                className: "text-3xl font-semibold border-l-4 border-gray-800 pl-2 my-8 text-gray-700",
                children: "Categorias"
            }),
            /*#__PURE__*/ _jsx("ul", {
                className: "ml-3 text-lg font-semibold text-gray-700",
                children: /*#__PURE__*/ _jsxs("li", {
                    className: "border py-2 px-2 mt-2 mb-1 cursor-pointer hover:text-gray-900 rounded-sm flex justify-between",
                    children: [
                        "lista ",
                        /*#__PURE__*/ _jsx("span", {
                            className: "text-gray-900",
                            children: "1"
                        })
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./cfg.json
var cfg = __webpack_require__(1279);
;// CONCATENATED MODULE: ./components/Autor.jsx



function Autor() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "author-card",
        className: "flex flex-col items-center my-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-3xl font-semibold border-l-4 my-8 border-gray-800 pl-2 text-gray-700 self-start",
                children: "Autor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: "w-48 h-48 bg-gray-900 bg-author-img bg-contain bg-no-repeat bg-center rounded-full",
                        src: "/images/autor.webp",
                        title: cfg/* nombreAutor */.NL,
                        alt: `autor ${cfg/* nombreAutor */.NL}`,
                        width: 200,
                        height: 200
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        id: "author-name",
                        className: "text-2xl text-center font-medium my-4 text-gray-800",
                        children: cfg/* nombreAutor */.NL
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "my-1 text-gray-600 text-center",
                        children: cfg/* biografia */._y
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-center gap-8",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-16 h-16 cursor-pointer flex justify-center rounded-full",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "-204.79995 -341.33325 1774.9329 2047.9995",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M1365.333 682.667C1365.333 305.64 1059.693 0 682.667 0 305.64 0 0 305.64 0 682.667c0 340.738 249.641 623.16 576 674.373V880H402.667V682.667H576v-150.4c0-171.094 101.917-265.6 257.853-265.6 74.69 0 152.814 13.333 152.814 13.333v168h-86.083c-84.804 0-111.25 52.623-111.25 106.61v128.057h189.333L948.4 880H789.333v477.04c326.359-51.213 576-333.635 576-674.373",
                                            fill: "#1877f2"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M948.4 880l30.267-197.333H789.333V554.609C789.333 500.623 815.78 448 900.584 448h86.083V280s-78.124-13.333-152.814-13.333c-155.936 0-257.853 94.506-257.853 265.6v150.4H402.667V880H576v477.04a687.805 687.805 0 00106.667 8.293c36.288 0 71.91-2.84 106.666-8.293V880H948.4",
                                            fill: "#fff"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-16 h-16 flex justify-center cursor-pointer rounded-full",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "-36.45 -60.8 315.9 364.8",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                            r: "121.5",
                                            cy: "121.5",
                                            cx: "121.5",
                                            fill: "#fff"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M121.5 0C54.4 0 0 54.4 0 121.5 0 173 32 217 77.2 234.7c-1.1-9.6-2-24.4.4-34.9 2.2-9.5 14.2-60.4 14.2-60.4s-3.6-7.3-3.6-18c0-16.9 9.8-29.5 22-29.5 10.4 0 15.4 7.8 15.4 17.1 0 10.4-6.6 26-10.1 40.5-2.9 12.1 6.1 22 18 22 21.6 0 38.2-22.8 38.2-55.6 0-29.1-20.9-49.4-50.8-49.4-34.6 0-54.9 25.9-54.9 52.7 0 10.4 4 21.6 9 27.7 1 1.2 1.1 2.3.8 3.5-.9 3.8-3 12.1-3.4 13.8-.5 2.2-1.8 2.7-4.1 1.6-15.2-7.1-24.7-29.2-24.7-47.1 0-38.3 27.8-73.5 80.3-73.5 42.1 0 74.9 30 74.9 70.2 0 41.9-26.4 75.6-63 75.6-12.3 0-23.9-6.4-27.8-14 0 0-6.1 23.2-7.6 28.9-2.7 10.6-10.1 23.8-15.1 31.9 11.4 3.5 23.4 5.4 36 5.4 67.1 0 121.5-54.4 121.5-121.5C243 54.4 188.6 0 121.5 0z",
                                            fill: "#e60023"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-16 h-16 flex justify-center cursor-pointer rounded-full",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "-44.7006 -60.54775 387.4052 363.2865",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        fill: "#1da1f2",
                                        d: "M93.719 242.19c112.46 0 173.96-93.168 173.96-173.96 0-2.646-.054-5.28-.173-7.903a124.338 124.338 0 0030.498-31.66c-10.955 4.87-22.744 8.148-35.11 9.626 12.622-7.57 22.313-19.543 26.885-33.817a122.62 122.62 0 01-38.824 14.841C239.798 7.433 223.915 0 206.326 0c-33.764 0-61.144 27.381-61.144 61.132 0 4.798.537 9.465 1.586 13.941-50.815-2.557-95.874-26.886-126.03-63.88a60.977 60.977 0 00-8.279 30.73c0 21.212 10.794 39.938 27.208 50.893a60.685 60.685 0 01-27.69-7.647c-.009.257-.009.507-.009.781 0 29.61 21.075 54.332 49.051 59.934a61.218 61.218 0 01-16.122 2.152 60.84 60.84 0 01-11.491-1.103c7.784 24.293 30.355 41.971 57.115 42.465-20.926 16.402-47.287 26.171-75.937 26.171-4.929 0-9.798-.28-14.584-.846 27.059 17.344 59.189 27.464 93.722 27.464"
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Relacionados.jsx



function Relacionados({ datoRelacionados  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "related-posts",
        className: "grid gap-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-3xl font-semibold border-l-4 my-8 border-gray-800 pl-2 text-gray-700",
                children: "Art\xedculos Relacionados"
            }),
            datoRelacionados.map((e, index)=>{
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "grid grid-cols-2 border rounded-lg",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: " md:col-span-2 lg:col-span-1",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: `img/${e.postsRelacionados.slug}.webp`,
                                        className: "w-full h-auto",
                                        /* loading="lazy" */ alt: e.postsRelacionados.ppa,
                                        title: e.postsRelacionados.titulo,
                                        width: 200,
                                        height: 200
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-span-1 md:col-span-2 lg:col-span-1 px-2 flex flex-col justify-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-xl cursor-pointer capitalize",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: e.postsRelacionados.slug,
                                            alt: e.postsRelacionados.ppa,
                                            title: e.postsRelacionados.titulo,
                                            children: e.postsRelacionados.titulo
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: e.postsRelacionados.slug,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "py-2 border px-4 w-full bg-blue-500 text-gray-50 rounded-lg mb-10 outline-none focus:outline-none hover:bg-blue-600 hover:text-gray-100",
                                children: "Leer Mas"
                            })
                        })
                    ]
                }, index);
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/Comentarios.jsx

function Comentarios() {
    return /*#__PURE__*/ _jsxs("form", {
        id: "comment",
        children: [
            /*#__PURE__*/ _jsx("textarea", {
                placeholder: "your comment",
                cols: 5,
                rows: 6,
                className: "outline-none focus:outline-none text-xl bg-gray-100 rounded p-4 text-gray-800 font-semibold w-full",
                defaultValue: ""
            }),
            /*#__PURE__*/ _jsx("input", {
                type: "email",
                className: "w-full bg-gray-100 p-2 my-2 px-4 text-xl text-gray-800 rounded focus:outline-none",
                placeholder: "your email",
                required: "true "
            }),
            /*#__PURE__*/ _jsx("input", {
                type: "text",
                className: "w-full bg-gray-100 p-2 px-4 text-xl text-gray-800 rounded focus:outline-none",
                placeholder: "your name",
                required: "true "
            }),
            /*#__PURE__*/ _jsx("button", {
                className: "my-2 py-2 text-xl text-center w-full bg-blue-700 text-gray-50 hover:bg-blue-600 focus:outline-none rounded",
                type: "submit",
                children: "Comment"
            })
        ]
    });
}

;// CONCATENATED MODULE: external "markdown-to-jsx"
const external_markdown_to_jsx_namespaceObject = require("markdown-to-jsx");
var external_markdown_to_jsx_default = /*#__PURE__*/__webpack_require__.n(external_markdown_to_jsx_namespaceObject);
// EXTERNAL MODULE: ./components/Footer.jsx
var Footer = __webpack_require__(7127);
;// CONCATENATED MODULE: ./utils/toUrl.js
function toUrl(str) {
    let salida = str.toLowerCase();
    salida = salida.replaceAll(",", "");
    salida = salida.replaceAll("\xbf", "");
    salida = salida.replaceAll("?", "");
    salida = salida.replaceAll("\xa1", "");
    salida = salida.replaceAll("!", "");
    salida = salida.replaceAll("\xe1", "a");
    salida = salida.replaceAll("\xe9", "e");
    salida = salida.replaceAll("\xed", "i");
    salida = salida.replaceAll("\xf3", "o");
    salida = salida.replaceAll("\xfa", "u");
    salida = salida.replaceAll(":", "");
    salida = salida.replaceAll(";", "");
    salida = salida.replaceAll(" ", "-");
    return salida;
}

;// CONCATENATED MODULE: external "next/error"
const error_namespaceObject = require("next/error");
var error_default = /*#__PURE__*/__webpack_require__.n(error_namespaceObject);
;// CONCATENATED MODULE: ./pages/[single].jsx














function Single({ datos  }) {
    // Si hay error en los datos
    if (datos === null) {
        return /*#__PURE__*/ jsx_runtime_.jsx((error_default()), {
            statusCode: 404,
            title: "page Not Found 404"
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: datos.titulo.replaceAll('"', "")
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
                        content: datos.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: datos.descripcion
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "canonical",
                        href: datos.slug
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container mx-auto px-2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    className: "grid md:grid-cols-3 mt-12",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                            className: "col-span-2 relative md:mr-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "text-3xl font-bold text-gray-800 capitalize",
                                    children: datos.titulo.replaceAll('"', "")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex mt-2 my-2 items-center gap-4",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "text-gray-500",
                                        children: [
                                            "By",
                                            " ",
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                className: "text-gray-800 cursor-pointer",
                                                children: [
                                                    cfg/* nombreAutor */.NL,
                                                    " - ",
                                                    datos.categoria
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex justify-center border",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        width: 412,
                                        height: 412,
                                        src: "/img" + datos.slug + ".webp",
                                        className: "cursor-pointer w-full p-5",
                                        alt: datos.slug.replaceAll("-", " "),
                                        title: datos.titulo.replaceAll('"', "")
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "my-8 capitalize",
                                    children: datos.ppa
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("blockquote", {
                                    className: "italic font-semibold font-serif text-gray-800 border-l-4 border-gray-900 my-3 pl-2 ml-8 m-4 sm:mx-8",
                                    children: datos.descripcion
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "text-xl bg-slate-300 border border-gray-500 rounded-lg my-5",
                                    children: [
                                        "Otros articulos interesantes y relacionados:",
                                        "  ",
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            title: cfg/* tituloHome */.e8,
                                            className: "text-2xl text-blue-700 underline",
                                            children: cfg/* tituloHome */.e8
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                                    className: "m-10",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((external_markdown_to_jsx_default()), {
                                            children: datos.articuloIntelinking.split("\n\n").slice(2).join("\n\n")
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                "En esta pagina tambien respondemos a otras preguntas tipicas como por ejemplo:",
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    className: "underline text-blue-600 hover:text-blue-800 visited:text-purple-600 ",
                                                    href: "/" + toUrl(datos.az),
                                                    children: datos.az
                                                }),
                                                " ",
                                                "y",
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    className: "underline text-blue-600 hover:text-blue-800 visited:text-purple-600 ",
                                                    href: "/" + toUrl(datos.za),
                                                    children: datos.za
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("aside", {
                            className: "col-span-2 md:col-span-1 mt-4 md:mt-0",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Relacionados, {
                                    datoRelacionados: datos.relacionados
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Autor, {})
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
        ]
    });
}
async function getServerSideProps(context) {
    let slug = context.resolvedUrl;
    let res = await fetch(`${"http://localhost:3000/"}api/posts${slug}`);
    let datos = await res.json();
    if (datos === null) {
        return {
            props: {
                datos: null
            }
        };
    }
    datos.img = "/img" + slug + ".webp";
    datos.slug = slug;
    return {
        props: {
            datos
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
var __webpack_exports__ = __webpack_require__.X(0, [676,664,675,364,127], () => (__webpack_exec__(2501)));
module.exports = __webpack_exports__;

})();