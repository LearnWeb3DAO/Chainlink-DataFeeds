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

/***/ "./pages/Main.tsx":
/*!************************!*\
  !*** ./pages/Main.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/config */ \"./constants/config.ts\");\n/* harmony import */ var ethers_lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers/lib/utils */ \"./node_modules/ethers/lib/utils.js\");\n/* harmony import */ var ethers_lib_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ethers_lib_utils__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Main = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), ethPriceInUsd = ref[0], setEthPriceInUsd = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), amountToSend = ref1[0], setAmountToSend = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), recipientAddress = ref2[0], setRecipientAddress = ref2[1];\n    // True if user has connected their wallet, false otherwise\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), walletConnected = ref3[0], setWalletConnected = ref3[1];\n    var web3ModalRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    // Helper function to connect wallet\n    var connectWallet = function() {\n        var _ref = _asyncToGenerator(_Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return getProviderOrSigner();\n                    case 3:\n                        setWalletConnected(true);\n                        _ctx.next = 9;\n                        break;\n                    case 6:\n                        _ctx.prev = 6;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.error(_ctx.t0);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    6\n                ]\n            ]);\n        }));\n        return function connectWallet() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Helper function to fetch a Provider/Signer instance from Metamask\n    var getProviderOrSigner = function() {\n        var _ref = _asyncToGenerator(_Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var needSigner, provider, web3Provider, chainId, signer, _args = arguments;\n            return _Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        needSigner = _args.length > 0 && _args[0] !== void 0 ? _args[0] : false;\n                        _ctx.next = 3;\n                        return web3ModalRef.current.connect();\n                    case 3:\n                        provider = _ctx.sent;\n                        web3Provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.providers.Web3Provider(provider);\n                        _ctx.next = 7;\n                        return web3Provider.getNetwork();\n                    case 7:\n                        chainId = _ctx.sent.chainId;\n                        if (!(chainId !== 42)) {\n                            _ctx.next = 11;\n                            break;\n                        }\n                        window.alert(\"Please switch to the Kovan network!\");\n                        throw new Error(\"Please switch to the Kovan network\");\n                    case 11:\n                        if (!needSigner) {\n                            _ctx.next = 14;\n                            break;\n                        }\n                        signer = web3Provider.getSigner();\n                        return _ctx.abrupt(\"return\", signer);\n                    case 14:\n                        return _ctx.abrupt(\"return\", web3Provider);\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getProviderOrSigner() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Helper function to return a DAO Contract instance\n    // given a Provider/Signer\n    var getContractInstance = function(providerOrSigner) {\n        return new ethers__WEBPACK_IMPORTED_MODULE_5__.Contract(_constants_config__WEBPACK_IMPORTED_MODULE_4__.config.contractAddress, _constants_config__WEBPACK_IMPORTED_MODULE_4__.config.contractAbi, providerOrSigner);\n    };\n    //  piece of code that runs everytime the wallet is connected/disconnected and/or the component refreshes\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (!walletConnected) {\n            web3ModalRef.current = new (web3modal__WEBPACK_IMPORTED_MODULE_3___default())({\n                network: \"kovan\",\n                providerOptions: {},\n                disableInjectedProvider: false\n            });\n            connectWallet().then(function() {});\n            getEthPrice();\n        }\n    }, [\n        walletConnected\n    ]);\n    var getEthPrice = function() {\n        var _ref = _asyncToGenerator(_Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var signer, contract, _ethPriceInUsd;\n            return _Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return getProviderOrSigner(true);\n                    case 3:\n                        signer = _ctx.sent;\n                        contract = getContractInstance(signer);\n                        _ctx.next = 7;\n                        return contract.getEthUsd();\n                    case 7:\n                        _ethPriceInUsd = _ctx.sent;\n                        setEthPriceInUsd(parseInt(ethers__WEBPACK_IMPORTED_MODULE_5__.BigNumber.from(_ethPriceInUsd).toString()) / 100000000);\n                        _ctx.next = 15;\n                        break;\n                    case 11:\n                        _ctx.prev = 11;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.error(_ctx.t0);\n                        alert(_ctx.t0 === null || _ctx.t0 === void 0 ? void 0 : _ctx.t0.message);\n                    case 15:\n                        _ctx.prev = 15;\n                        return _ctx.finish(15);\n                    case 17:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    11,\n                    15,\n                    17\n                ]\n            ]);\n        }));\n        return function getEthPrice() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var sendEth = function() {\n        var _ref = _asyncToGenerator(_Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethToSend, signer, contract, txn;\n            return _Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        if (!(!amountToSend || !recipientAddress)) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        alert(\"please fill the form\");\n                        console.log({\n                            amountToSend: amountToSend,\n                            recipientAddress: recipientAddress\n                        });\n                        return _ctx.abrupt(\"return\");\n                    case 5:\n                        console.log({\n                            amountToSend: amountToSend,\n                            recipientAddress: recipientAddress\n                        });\n                        ethToSend = amountToSend / ethPriceInUsd;\n                        _ctx.next = 9;\n                        return getProviderOrSigner(true);\n                    case 9:\n                        signer = _ctx.sent;\n                        contract = getContractInstance(signer);\n                        _ctx.next = 13;\n                        return contract.sendEther(recipientAddress, {\n                            value: (0,ethers_lib_utils__WEBPACK_IMPORTED_MODULE_6__.parseEther)(ethToSend.toString())\n                        });\n                    case 13:\n                        txn = _ctx.sent;\n                        setLoading(true);\n                        txn.wait();\n                        alert(\"txn sent\");\n                        console.log({\n                            txn: txn\n                        });\n                        _ctx.next = 24;\n                        break;\n                    case 20:\n                        _ctx.prev = 20;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.error(_ctx.t0);\n                        alert(_ctx.t0 === null || _ctx.t0 === void 0 ? void 0 : _ctx.t0.message);\n                    case 24:\n                        _ctx.prev = 24;\n                        setLoading(false);\n                        return _ctx.finish(24);\n                    case 27:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    20,\n                    24,\n                    27\n                ]\n            ]);\n        }));\n        return function sendEth() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                className: \"flex justify-center underline my-8\",\n                children: \"Send ETH in USD\"\n            }, void 0, false, {\n                fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        className: \"my-2\",\n                        children: [\n                            \"Recipient:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                onChange: function(event) {\n                                    setRecipientAddress(event.target.value);\n                                },\n                                name: \"recipient\",\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                                lineNumber: 123,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        className: \"my-2 flex flex-col\",\n                        children: [\n                            \"Anount to send (in USD):\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                className: \"text-xs mb-1\",\n                                children: [\n                                    \"Current ETH price (in USD): \",\n                                    ethPriceInUsd\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                                lineNumber: 133,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                onChange: function(event) {\n                                    setAmountToSend(parseFloat(event.target.value));\n                                },\n                                name: \"amount\",\n                                step: \"any\",\n                                type: \"number\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                                lineNumber: 136,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                        lineNumber: 131,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                className: \"flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    disabled: ethPriceInUsd && recipientAddress && amountToSend ? false : true,\n                    className: \"rounded-full border p-2 my-2 \".concat(ethPriceInUsd && recipientAddress && amountToSend ? \"bg-blue-500\" : \"bg-red-500\"),\n                    onClick: _asyncToGenerator(_Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                        return _Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                            while(1)switch(_ctx.prev = _ctx.next){\n                                case 0:\n                                    _ctx.next = 2;\n                                    return sendEth();\n                                case 2:\n                                case \"end\":\n                                    return _ctx.stop();\n                            }\n                        }, _callee);\n                    })),\n                    children: \"Send ETH\"\n                }, void 0, false, {\n                    fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                    lineNumber: 147,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                lineNumber: 146,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n        lineNumber: 118,\n        columnNumber: 5\n    }, _this));\n};\n_s(Main, \"hyoCQK6AO0vISNYDtG0TwL5F7h0=\");\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQyxNQUFNLENBQUNWLEtBQUs7Z0NBQy9DLENBQUM7Z0NBQ0RXLElBQUksRUFBRSxDQUFRO2dDQUNkSSxJQUFJLEVBQUUsQ0FBSztnQ0FDWEgsSUFBSSxFQUFFLENBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFJbkJDLENBQUk7Z0JBQUNSLFNBQVMsRUFBQyxDQUFxQjtzR0FDbENXLENBQU07b0JBQ0xDLFFBQVEsRUFDTmhFLGFBQWEsSUFBSUksZ0JBQWdCLElBQUlGLFlBQVksR0FBRyxLQUFLLEdBQUcsSUFBSTtvQkFFbEVrRCxTQUFTLEVBQUcsQ0FBNkIsK0JBSXhDLE9BSENwRCxhQUFhLElBQUlJLGdCQUFnQixJQUFJRixZQUFZLEdBQzdDLENBQWEsZUFDYixDQUFZO29CQUVsQitELE9BQU8sb01BQUUsUUFBUSxXQUFJLENBQUM7Ozs7OzJDQUNkdkIsT0FBTzs7Ozs7O29CQUNmLENBQUM7OEJBQ0YsQ0FFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJUixDQUFDO0dBN0pLM0MsSUFBSTtLQUFKQSxJQUFJO0FBK0pWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTWFpbi50c3g/OTViNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJpZ051bWJlciwgQ29udHJhY3QsIHByb3ZpZGVycywgU2lnbmVyIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IFdlYjNNb2RhbCBmcm9tIFwid2ViM21vZGFsXCI7XG5pbXBvcnQgQ29yZSBmcm9tIFwid2ViM21vZGFsXCI7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2NvbmZpZ1wiO1xuaW1wb3J0IHsgcGFyc2VFdGhlciB9IGZyb20gXCJldGhlcnMvbGliL3V0aWxzXCI7XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IFtldGhQcmljZUluVXNkLCBzZXRFdGhQcmljZUluVXNkXSA9IHVzZVN0YXRlPG51bWJlcj4oKTtcblxuICBjb25zdCBbYW1vdW50VG9TZW5kLCBzZXRBbW91bnRUb1NlbmRdID0gdXNlU3RhdGU8bnVtYmVyPigpO1xuXG4gIGNvbnN0IFtyZWNpcGllbnRBZGRyZXNzLCBzZXRSZWNpcGllbnRBZGRyZXNzXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcblxuICAvLyBUcnVlIGlmIHVzZXIgaGFzIGNvbm5lY3RlZCB0aGVpciB3YWxsZXQsIGZhbHNlIG90aGVyd2lzZVxuICBjb25zdCBbd2FsbGV0Q29ubmVjdGVkLCBzZXRXYWxsZXRDb25uZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHdlYjNNb2RhbFJlZiA9IHVzZVJlZjxDb3JlPigpO1xuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiB0byBjb25uZWN0IHdhbGxldFxuICBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBnZXRQcm92aWRlck9yU2lnbmVyKCk7XG4gICAgICBzZXRXYWxsZXRDb25uZWN0ZWQodHJ1ZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gZmV0Y2ggYSBQcm92aWRlci9TaWduZXIgaW5zdGFuY2UgZnJvbSBNZXRhbWFza1xuICBjb25zdCBnZXRQcm92aWRlck9yU2lnbmVyID0gYXN5bmMgKG5lZWRTaWduZXIgPSBmYWxzZSkgPT4ge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgd2ViM01vZGFsUmVmIS5jdXJyZW50IS5jb25uZWN0KCk7XG4gICAgY29uc3Qgd2ViM1Byb3ZpZGVyID0gbmV3IHByb3ZpZGVycy5XZWIzUHJvdmlkZXIocHJvdmlkZXIpO1xuXG4gICAgY29uc3QgeyBjaGFpbklkIH0gPSBhd2FpdCB3ZWIzUHJvdmlkZXIuZ2V0TmV0d29yaygpO1xuICAgIGlmIChjaGFpbklkICE9PSA0Mikge1xuICAgICAgd2luZG93LmFsZXJ0KFwiUGxlYXNlIHN3aXRjaCB0byB0aGUgS292YW4gbmV0d29yayFcIik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2Ugc3dpdGNoIHRvIHRoZSBLb3ZhbiBuZXR3b3JrXCIpO1xuICAgIH1cblxuICAgIGlmIChuZWVkU2lnbmVyKSB7XG4gICAgICBjb25zdCBzaWduZXIgPSB3ZWIzUHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICByZXR1cm4gc2lnbmVyO1xuICAgIH1cbiAgICByZXR1cm4gd2ViM1Byb3ZpZGVyO1xuICB9O1xuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiB0byByZXR1cm4gYSBEQU8gQ29udHJhY3QgaW5zdGFuY2VcbiAgLy8gZ2l2ZW4gYSBQcm92aWRlci9TaWduZXJcbiAgY29uc3QgZ2V0Q29udHJhY3RJbnN0YW5jZSA9IChcbiAgICBwcm92aWRlck9yU2lnbmVyOiBwcm92aWRlcnMuUHJvdmlkZXIgfCBTaWduZXJcbiAgKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBDb250cmFjdChcbiAgICAgIGNvbmZpZy5jb250cmFjdEFkZHJlc3MsXG4gICAgICBjb25maWcuY29udHJhY3RBYmksXG4gICAgICBwcm92aWRlck9yU2lnbmVyXG4gICAgKTtcbiAgfTtcblxuICAvLyAgcGllY2Ugb2YgY29kZSB0aGF0IHJ1bnMgZXZlcnl0aW1lIHRoZSB3YWxsZXQgaXMgY29ubmVjdGVkL2Rpc2Nvbm5lY3RlZCBhbmQvb3IgdGhlIGNvbXBvbmVudCByZWZyZXNoZXNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXdhbGxldENvbm5lY3RlZCkge1xuICAgICAgd2ViM01vZGFsUmVmLmN1cnJlbnQgPSBuZXcgV2ViM01vZGFsKHtcbiAgICAgICAgbmV0d29yazogXCJrb3ZhblwiLFxuICAgICAgICBwcm92aWRlck9wdGlvbnM6IHt9LFxuICAgICAgICBkaXNhYmxlSW5qZWN0ZWRQcm92aWRlcjogZmFsc2UsXG4gICAgICB9KTtcblxuICAgICAgY29ubmVjdFdhbGxldCgpLnRoZW4oKCkgPT4ge30pO1xuICAgICAgZ2V0RXRoUHJpY2UoKTtcbiAgICB9XG4gIH0sIFt3YWxsZXRDb25uZWN0ZWRdKTtcblxuICBjb25zdCBnZXRFdGhQcmljZSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2lnbmVyID0gYXdhaXQgZ2V0UHJvdmlkZXJPclNpZ25lcih0cnVlKTtcbiAgICAgIGNvbnN0IGNvbnRyYWN0ID0gZ2V0Q29udHJhY3RJbnN0YW5jZShzaWduZXIpO1xuICAgICAgY29uc3QgX2V0aFByaWNlSW5Vc2QgPSBhd2FpdCBjb250cmFjdC5nZXRFdGhVc2QoKTtcbiAgICAgIHNldEV0aFByaWNlSW5Vc2QoXG4gICAgICAgIHBhcnNlSW50KEJpZ051bWJlci5mcm9tKF9ldGhQcmljZUluVXNkKS50b1N0cmluZygpKSAvIDEwMDAwMDAwMFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIGFsZXJ0KGVycm9yPy5tZXNzYWdlKTtcbiAgICB9IGZpbmFsbHkge1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZW5kRXRoID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIWFtb3VudFRvU2VuZCB8fCAhcmVjaXBpZW50QWRkcmVzcykge1xuICAgICAgICBhbGVydChcInBsZWFzZSBmaWxsIHRoZSBmb3JtXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyh7IGFtb3VudFRvU2VuZCwgcmVjaXBpZW50QWRkcmVzcyB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coeyBhbW91bnRUb1NlbmQsIHJlY2lwaWVudEFkZHJlc3MgfSk7XG5cbiAgICAgIGNvbnN0IGV0aFRvU2VuZCA9IGFtb3VudFRvU2VuZCAvIGV0aFByaWNlSW5Vc2QhO1xuXG4gICAgICBjb25zdCBzaWduZXIgPSBhd2FpdCBnZXRQcm92aWRlck9yU2lnbmVyKHRydWUpO1xuICAgICAgY29uc3QgY29udHJhY3QgPSBnZXRDb250cmFjdEluc3RhbmNlKHNpZ25lcik7XG4gICAgICBjb25zdCB0eG4gPSBhd2FpdCBjb250cmFjdC5zZW5kRXRoZXIocmVjaXBpZW50QWRkcmVzcywge1xuICAgICAgICB2YWx1ZTogcGFyc2VFdGhlcihldGhUb1NlbmQudG9TdHJpbmcoKSksXG4gICAgICB9KTtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICB0eG4ud2FpdCgpO1xuICAgICAgYWxlcnQoXCJ0eG4gc2VudFwiKTtcbiAgICAgIGNvbnNvbGUubG9nKHsgdHhuIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgYWxlcnQoZXJyb3I/Lm1lc3NhZ2UpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdW5kZXJsaW5lIG15LThcIj5TZW5kIEVUSCBpbiBVU0Q8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJteS0yXCI+XG4gICAgICAgICAgUmVjaXBpZW50OlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICBzZXRSZWNpcGllbnRBZGRyZXNzKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgbmFtZT1cInJlY2lwaWVudFwiXG4gICAgICAgICAgICB0eXBlPXtcInRleHRcIn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibXktMiBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgQW5vdW50IHRvIHNlbmQgKGluIFVTRCk6XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBtYi0xXCI+XG4gICAgICAgICAgICBDdXJyZW50IEVUSCBwcmljZSAoaW4gVVNEKToge2V0aFByaWNlSW5Vc2R9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICBzZXRBbW91bnRUb1NlbmQocGFyc2VGbG9hdChldmVudC50YXJnZXQudmFsdWUpKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBuYW1lPXtcImFtb3VudFwifVxuICAgICAgICAgICAgc3RlcD17XCJhbnlcIn1cbiAgICAgICAgICAgIHR5cGU9e1wibnVtYmVyXCJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgZGlzYWJsZWQ9e1xuICAgICAgICAgICAgZXRoUHJpY2VJblVzZCAmJiByZWNpcGllbnRBZGRyZXNzICYmIGFtb3VudFRvU2VuZCA/IGZhbHNlIDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBjbGFzc05hbWU9e2Byb3VuZGVkLWZ1bGwgYm9yZGVyIHAtMiBteS0yICR7XG4gICAgICAgICAgICBldGhQcmljZUluVXNkICYmIHJlY2lwaWVudEFkZHJlc3MgJiYgYW1vdW50VG9TZW5kXG4gICAgICAgICAgICAgID8gXCJiZy1ibHVlLTUwMFwiXG4gICAgICAgICAgICAgIDogXCJiZy1yZWQtNTAwXCJcbiAgICAgICAgICB9YH1cbiAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBhd2FpdCBzZW5kRXRoKCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFNlbmQgRVRIXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkJpZ051bWJlciIsIkNvbnRyYWN0IiwicHJvdmlkZXJzIiwiV2ViM01vZGFsIiwiY29uZmlnIiwicGFyc2VFdGhlciIsIk1haW4iLCJldGhQcmljZUluVXNkIiwic2V0RXRoUHJpY2VJblVzZCIsImFtb3VudFRvU2VuZCIsInNldEFtb3VudFRvU2VuZCIsInJlY2lwaWVudEFkZHJlc3MiLCJzZXRSZWNpcGllbnRBZGRyZXNzIiwid2FsbGV0Q29ubmVjdGVkIiwic2V0V2FsbGV0Q29ubmVjdGVkIiwid2ViM01vZGFsUmVmIiwiY29ubmVjdFdhbGxldCIsImdldFByb3ZpZGVyT3JTaWduZXIiLCJjb25zb2xlIiwiZXJyb3IiLCJuZWVkU2lnbmVyIiwicHJvdmlkZXIiLCJ3ZWIzUHJvdmlkZXIiLCJjaGFpbklkIiwic2lnbmVyIiwiY3VycmVudCIsImNvbm5lY3QiLCJXZWIzUHJvdmlkZXIiLCJnZXROZXR3b3JrIiwid2luZG93IiwiYWxlcnQiLCJFcnJvciIsImdldFNpZ25lciIsImdldENvbnRyYWN0SW5zdGFuY2UiLCJwcm92aWRlck9yU2lnbmVyIiwiY29udHJhY3RBZGRyZXNzIiwiY29udHJhY3RBYmkiLCJuZXR3b3JrIiwicHJvdmlkZXJPcHRpb25zIiwiZGlzYWJsZUluamVjdGVkUHJvdmlkZXIiLCJ0aGVuIiwiZ2V0RXRoUHJpY2UiLCJjb250cmFjdCIsIl9ldGhQcmljZUluVXNkIiwiZ2V0RXRoVXNkIiwicGFyc2VJbnQiLCJmcm9tIiwidG9TdHJpbmciLCJtZXNzYWdlIiwic2VuZEV0aCIsImV0aFRvU2VuZCIsInR4biIsImxvZyIsInNlbmRFdGhlciIsInZhbHVlIiwic2V0TG9hZGluZyIsIndhaXQiLCJkaXYiLCJoMSIsImNsYXNzTmFtZSIsImxhYmVsIiwiaW5wdXQiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsInR5cGUiLCJzcGFuIiwicGFyc2VGbG9hdCIsInN0ZXAiLCJidXR0b24iLCJkaXNhYmxlZCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Main.tsx\n");

/***/ })

});