"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layouts_HomeLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/layouts/HomeLayout */ \"./components/layouts/HomeLayout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [subjects, setSubjects] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        try {\n            axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(NEXT_PUBLIC_API_URI + \"/subject\").then((res)=>{\n                setSubjects(res.data);\n            });\n        } catch (err) {\n            console.log(err);\n        }\n    }, []);\n    console.log(NEXT_PUBLIC_API_URI);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Jumair\\\\Web Dev\\\\QuizApp\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Jumair\\\\Web Dev\\\\QuizApp\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Jumair\\\\Web Dev\\\\QuizApp\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Jumair\\\\Web Dev\\\\QuizApp\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Jumair\\\\Web Dev\\\\QuizApp\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_HomeLayout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"subjectDiv container\",\n                    children: subjects && (subjects === null || subjects === void 0 ? void 0 : subjects.map((subject, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"subjectBtn\",\n                            onClick: ()=>router.push({\n                                    pathname: \"/question\",\n                                    query: {\n                                        id: subject.subject\n                                    }\n                                }),\n                            children: subject.subject\n                        }, i, false, {\n                            fileName: \"D:\\\\Jumair\\\\Web Dev\\\\QuizApp\\\\client\\\\pages\\\\index.js\",\n                            lineNumber: 37,\n                            columnNumber: 7\n                        }, this)))\n                }, void 0, false, {\n                    fileName: \"D:\\\\Jumair\\\\Web Dev\\\\QuizApp\\\\client\\\\pages\\\\index.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Jumair\\\\Web Dev\\\\QuizApp\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"DdmKbSZHYg3xSlW9zeonoSIbs1I=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNFO0FBRWE7QUFDYTtBQUM1QjtBQUNIO0FBQ2M7QUFFeEIsU0FBU1E7O0lBQ3RCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNUSxTQUFTSixzREFBU0E7SUFDeEJMLGdEQUFTQSxDQUFDO1FBQ1IsSUFBRztZQUNESSxpREFBU00sQ0FBQ0Msc0JBQW9CLFlBQVlDLEtBQUssQ0FBQ0M7Z0JBQ2hETCxZQUFZSyxJQUFJQztZQUNqQjtRQUVMLEVBQ0EsT0FBTUMsS0FBSTtZQUNOQyxRQUFRQyxJQUFJRjtRQUNoQjtJQUNFLEdBQUcsRUFBRTtJQUNMQyxRQUFRQyxJQUFJTjtJQUNaLHFCQUNFOzswQkFDRSw4REFBQ2Isa0RBQUlBOztrQ0FDSCw4REFBQ29CO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUN0QixzRUFBVUE7MEJBQ1QsNEVBQUN1QjtvQkFBSUMsV0FBVTs4QkFFZG5CLGFBQVlBLHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsU0FBVW9CLElBQUksQ0FBQ0MsU0FBUUMsa0JBQ3RDLDhEQUFDQzs0QkFBT0osV0FBVTs0QkFBYUssU0FBUyxJQUFJdEIsT0FBT3VCLEtBQUs7b0NBQUVDLFVBQVU7b0NBQ3BFQyxPQUFPO3dDQUFFQyxJQUFJUCxRQUFRQTtvQ0FBUTtnQ0FBQztzQ0FBYUEsUUFBUUE7MkJBQVpDOzs7Ozs7Ozs7Ozs7Ozs7OztBQU83QztHQW5Dd0J2Qjs7UUFFUEQsa0RBQVNBOzs7S0FGRkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgeyBJbnRlciB9IGZyb20gJ25leHQvZm9udC9nb29nbGUnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhvbWVMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL2xheW91dHMvSG9tZUxheW91dCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbc3ViamVjdHMsIHNldFN1YmplY3RzXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHRyeXtcclxuICAgICAgYXhpb3MuZ2V0KE5FWFRfUFVCTElDX0FQSV9VUkkrJy9zdWJqZWN0JykudGhlbigocmVzKT0+e1xyXG4gICAgICBzZXRTdWJqZWN0cyhyZXMuZGF0YSlcclxuICAgICB9XHJcbiAgICAgIClcclxufVxyXG5jYXRjaChlcnIpe1xyXG4gICAgY29uc29sZS5sb2coZXJyKVxyXG59XHJcbiAgfSwgW10pXHJcbiAgY29uc29sZS5sb2coTkVYVF9QVUJMSUNfQVBJX1VSSSlcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxIb21lTGF5b3V0PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdWJqZWN0RGl2IGNvbnRhaW5lcic+XHJcbiAgICAgICAgICB7LyogPGgxPlN1YmplY3RzPC9oMT4gKi99XHJcbiAgICAgICAge3N1YmplY3RzICYmIHN1YmplY3RzPy5tYXAoKHN1YmplY3QsaSk9PihcclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3N1YmplY3RCdG4nIG9uQ2xpY2s9eygpPT5yb3V0ZXIucHVzaCh7IHBhdGhuYW1lOiAnL3F1ZXN0aW9uJywgXHJcbiAgICAgIHF1ZXJ5OiB7IGlkOiBzdWJqZWN0LnN1YmplY3QgfX0pfSBrZXk9e2l9PntzdWJqZWN0LnN1YmplY3R9PC9idXR0b24+XHJcbiAgICAgICkpXHJcbiAgICB9XHJcbiAgICA8L2Rpdj5cclxuICAgICAgPC9Ib21lTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWVMYXlvdXQiLCJMaW5rIiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJIb21lIiwic3ViamVjdHMiLCJzZXRTdWJqZWN0cyIsInJvdXRlciIsImdldCIsIk5FWFRfUFVCTElDX0FQSV9VUkkiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwic3ViamVjdCIsImkiLCJidXR0b24iLCJvbkNsaWNrIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});