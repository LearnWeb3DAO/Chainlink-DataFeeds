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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/config */ \"./constants/config.ts\");\n/* harmony import */ var ethers_lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers/lib/utils */ \"./node_modules/ethers/lib/utils.js\");\n/* harmony import */ var ethers_lib_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ethers_lib_utils__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Main = function() {\n    _s();\n    // True if waiting for a transaction to be mined, false otherwise.\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), ethPriceInUsd = ref1[0], setEthPriceInUsd = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), amountToSend = ref2[0], setAmountToSend = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), recipientAddress = ref3[0], setRecipientAddress = ref3[1];\n    // True if user has connected their wallet, false otherwise\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), walletConnected = ref4[0], setWalletConnected = ref4[1];\n    var web3ModalRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    // Helper function to connect wallet\n    var connectWallet = function() {\n        var _ref = _asyncToGenerator(_Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return getProviderOrSigner();\n                    case 3:\n                        setWalletConnected(true);\n                        _ctx.next = 9;\n                        break;\n                    case 6:\n                        _ctx.prev = 6;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.error(_ctx.t0);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    6\n                ]\n            ]);\n        }));\n        return function connectWallet() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Helper function to fetch a Provider/Signer instance from Metamask\n    var getProviderOrSigner = function() {\n        var _ref = _asyncToGenerator(_Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var needSigner, provider, web3Provider, chainId, signer, _args = arguments;\n            return _Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        needSigner = _args.length > 0 && _args[0] !== void 0 ? _args[0] : false;\n                        _ctx.next = 3;\n                        return web3ModalRef.current.connect();\n                    case 3:\n                        provider = _ctx.sent;\n                        web3Provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.providers.Web3Provider(provider);\n                        _ctx.next = 7;\n                        return web3Provider.getNetwork();\n                    case 7:\n                        chainId = _ctx.sent.chainId;\n                        if (!(chainId !== 42)) {\n                            _ctx.next = 11;\n                            break;\n                        }\n                        window.alert(\"Please switch to the Kovan network!\");\n                        throw new Error(\"Please switch to the Kovan network\");\n                    case 11:\n                        if (!needSigner) {\n                            _ctx.next = 14;\n                            break;\n                        }\n                        signer = web3Provider.getSigner();\n                        return _ctx.abrupt(\"return\", signer);\n                    case 14:\n                        return _ctx.abrupt(\"return\", web3Provider);\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getProviderOrSigner() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Helper function to return a DAO Contract instance\n    // given a Provider/Signer\n    var getContractInstance = function(providerOrSigner) {\n        return new ethers__WEBPACK_IMPORTED_MODULE_5__.Contract(_constants_config__WEBPACK_IMPORTED_MODULE_4__.config.contractAddress, _constants_config__WEBPACK_IMPORTED_MODULE_4__.config.contractAbi, providerOrSigner);\n    };\n    //  piece of code that runs everytime the wallet is connected/disconnected and/or the component refreshes\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (!walletConnected) {\n            web3ModalRef.current = new (web3modal__WEBPACK_IMPORTED_MODULE_3___default())({\n                network: \"kovan\",\n                providerOptions: {},\n                disableInjectedProvider: false\n            });\n            connectWallet().then(function() {});\n            getEthPrice();\n        }\n    }, [\n        walletConnected\n    ]);\n    var getEthPrice = function() {\n        var _ref = _asyncToGenerator(_Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var signer, contract, _ethPriceInUsd;\n            return _Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return getProviderOrSigner(true);\n                    case 3:\n                        signer = _ctx.sent;\n                        contract = getContractInstance(signer);\n                        _ctx.next = 7;\n                        return contract.getEthUsd();\n                    case 7:\n                        _ethPriceInUsd = _ctx.sent;\n                        setEthPriceInUsd(parseInt(ethers__WEBPACK_IMPORTED_MODULE_5__.BigNumber.from(_ethPriceInUsd).toString()) / 100000000);\n                        _ctx.next = 15;\n                        break;\n                    case 11:\n                        _ctx.prev = 11;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.error(_ctx.t0);\n                        alert(_ctx.t0 === null || _ctx.t0 === void 0 ? void 0 : _ctx.t0.message);\n                    case 15:\n                        _ctx.prev = 15;\n                        return _ctx.finish(15);\n                    case 17:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    11,\n                    15,\n                    17\n                ]\n            ]);\n        }));\n        return function getEthPrice() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var sendEth = function() {\n        var _ref = _asyncToGenerator(_Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var signer, contract, txn;\n            return _Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        if (!amountToSend || !recipientAddress) {\n                            alert(\"please fill the \");\n                        }\n                        _ctx.next = 4;\n                        return getProviderOrSigner(true);\n                    case 4:\n                        signer = _ctx.sent;\n                        contract = getContractInstance(signer);\n                        _ctx.next = 8;\n                        return contract.sendEther(recipientAddress, {\n                            value: (0,ethers_lib_utils__WEBPACK_IMPORTED_MODULE_6__.parseEther)(amountToSend.toString())\n                        });\n                    case 8:\n                        txn = _ctx.sent;\n                        setLoading(true);\n                        txn.wait();\n                        alert(\"txn sent\");\n                        console.log({\n                            txn: txn\n                        });\n                        _ctx.next = 19;\n                        break;\n                    case 15:\n                        _ctx.prev = 15;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.error(_ctx.t0);\n                        alert(_ctx.t0 === null || _ctx.t0 === void 0 ? void 0 : _ctx.t0.message);\n                    case 19:\n                        _ctx.prev = 19;\n                        setLoading(false);\n                        return _ctx.finish(19);\n                    case 22:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    15,\n                    19,\n                    22\n                ]\n            ]);\n        }));\n        return function sendEth() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                className: \"flex justify-center underline my-8\",\n                children: \"Send ETH in USD\"\n            }, void 0, false, {\n                fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        className: \"my-2\",\n                        children: [\n                            \"Recipient:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                onChange: function(event) {\n                                    setRecipientAddress(event.target.value);\n                                },\n                                name: \"recipient\",\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                                lineNumber: 120,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        className: \"my-2 flex flex-col\",\n                        children: [\n                            \"Anount to send (in USD):\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                className: \"text-xs mb-1\",\n                                children: [\n                                    \"Current ETH price (in USD): \",\n                                    ethPriceInUsd\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                                lineNumber: 130,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                onChange: function(event) {\n                                    setAmountToSend(parseInt(event.target.value));\n                                },\n                                name: \"amount\",\n                                type: \"number\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                                lineNumber: 133,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                        lineNumber: 128,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                className: \"flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    className: \"rounded-full border bg-indigo-500 p-2 my-2\",\n                    onClick: _asyncToGenerator(_Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                        return _Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                            while(1)switch(_ctx.prev = _ctx.next){\n                                case 0:\n                                    _ctx.next = 2;\n                                    return sendEth();\n                                case 2:\n                                case \"end\":\n                                    return _ctx.stop();\n                            }\n                        }, _callee);\n                    })),\n                    children: \"Send ETH\"\n                }, void 0, false, {\n                    fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                    lineNumber: 143,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                lineNumber: 142,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n        lineNumber: 115,\n        columnNumber: 5\n    }, _this));\n};\n_s(Main, \"5tj9RM/VGtZlW9hDXieQ2YpwzqI=\");\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9NYWluLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1k7QUFDOUI7QUFFVztBQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxHQUFLLENBQUNTLElBQUksR0FBRyxRQUNiLEdBRG1CLENBQUM7O0lBQ2xCLEVBQWtFO0lBQ2xFLEdBQUssQ0FBeUJQLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQXJDUSxPQUFPLEdBQWdCUixHQUFlLEtBQTdCUyxVQUFVLEdBQUlULEdBQWU7SUFFN0MsR0FBSyxDQUFxQ0EsSUFBa0IsR0FBbEJBLCtDQUFRLElBQTNDVSxhQUFhLEdBQXNCVixJQUFrQixLQUF0Q1csZ0JBQWdCLEdBQUlYLElBQWtCO0lBRTVELEdBQUssQ0FBbUNBLElBQWtCLEdBQWxCQSwrQ0FBUSxJQUF6Q1ksWUFBWSxHQUFxQlosSUFBa0IsS0FBckNhLGVBQWUsR0FBSWIsSUFBa0I7SUFFMUQsR0FBSyxDQUEyQ0EsSUFBa0IsR0FBbEJBLCtDQUFRLElBQWpEYyxnQkFBZ0IsR0FBeUJkLElBQWtCLEtBQXpDZSxtQkFBbUIsR0FBSWYsSUFBa0I7SUFFbEUsRUFBMkQ7SUFDM0QsR0FBSyxDQUF5Q0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBckRnQixlQUFlLEdBQXdCaEIsSUFBZSxLQUFyQ2lCLGtCQUFrQixHQUFJakIsSUFBZTtJQUU3RCxHQUFLLENBQUNrQixZQUFZLEdBQUduQiw2Q0FBTTtJQUUzQixFQUFvQztJQUNwQyxHQUFLLENBQUNvQixhQUFhO3FOQUFHLFFBQVEsV0FBSSxDQUFDOzs7Ozs7K0JBRXpCQyxtQkFBbUI7O3dCQUN6Qkgsa0JBQWtCLENBQUMsSUFBSTs7Ozs7O3dCQUV2QkksT0FBTyxDQUFDQyxLQUFLOzs7Ozs7Ozs7OztRQUVqQixDQUFDO3dCQVBLSCxhQUFhOzs7O0lBU25CLEVBQW9FO0lBQ3BFLEdBQUssQ0FBQ0MsbUJBQW1CO3FOQUFHLFFBQVEsV0FBc0IsQ0FBQztnQkFBeEJHLFVBQVUsRUFDckNDLFFBQVEsRUFDUkMsWUFBWSxFQUVWQyxPQUFPLEVBT1BDLE1BQU07Ozs7d0JBWG1CSixVQUFVLHdEQUFHLEtBQUs7OytCQUM1QkwsWUFBWSxDQUFFVSxPQUFPLENBQUVDLE9BQU87O3dCQUEvQ0wsUUFBUTt3QkFDUkMsWUFBWSxHQUFHLEdBQUcsQ0FBQ3RCLDBEQUFzQixDQUFDcUIsUUFBUTs7K0JBRTlCQyxZQUFZLENBQUNNLFVBQVU7O3dCQUF6Q0wsT0FBTyxhQUFQQSxPQUFPOzhCQUNYQSxPQUFPLEtBQUssRUFBRTs7Ozt3QkFDaEJNLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQXFDO3dCQUNsRCxLQUFLLENBQUMsR0FBRyxDQUFDQyxLQUFLLENBQUMsQ0FBb0M7OzZCQUdsRFgsVUFBVTs7Ozt3QkFDTkksTUFBTSxHQUFHRixZQUFZLENBQUNVLFNBQVM7cURBQzlCUixNQUFNOztxREFFUkYsWUFBWTs7Ozs7O1FBQ3JCLENBQUM7d0JBZktMLG1CQUFtQjs7OztJQWlCekIsRUFBb0Q7SUFDcEQsRUFBMEI7SUFDMUIsR0FBSyxDQUFDZ0IsbUJBQW1CLEdBQUcsUUFDeEIsQ0FBRkMsZ0JBQTZDLEVBQzFDLENBQUM7UUFDSixNQUFNLENBQUMsR0FBRyxDQUFDbkMsNENBQVEsQ0FDakJHLHFFQUFzQixFQUN0QkEsaUVBQWtCLEVBQ2xCZ0MsZ0JBQWdCO0lBRXBCLENBQUM7SUFFRCxFQUF5RztJQUN6R3ZDLGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2YsRUFBRSxHQUFHa0IsZUFBZSxFQUFFLENBQUM7WUFDckJFLFlBQVksQ0FBQ1UsT0FBTyxHQUFHLEdBQUcsQ0FBQ3hCLGtEQUFTLENBQUMsQ0FBQztnQkFDcENvQyxPQUFPLEVBQUUsQ0FBTztnQkFDaEJDLGVBQWUsRUFBRSxDQUFDLENBQUM7Z0JBQ25CQyx1QkFBdUIsRUFBRSxLQUFLO1lBQ2hDLENBQUM7WUFFRHZCLGFBQWEsR0FBR3dCLElBQUksQ0FBQyxRQUFRLEdBQUYsQ0FBQyxDQUFDO1lBQzdCQyxXQUFXO1FBQ2IsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDNUI7UUFBQUEsZUFBZTtJQUFBLENBQUM7SUFFcEIsR0FBSyxDQUFDNEIsV0FBVztxTkFBRyxRQUFRLFdBQUksQ0FBQztnQkFFdkJqQixNQUFNLEVBQ05rQixRQUFRLEVBQ1JDLGNBQWM7Ozs7OzsrQkFGQzFCLG1CQUFtQixDQUFDLElBQUk7O3dCQUF2Q08sTUFBTTt3QkFDTmtCLFFBQVEsR0FBR1QsbUJBQW1CLENBQUNULE1BQU07OytCQUNka0IsUUFBUSxDQUFDRSxTQUFTOzt3QkFBekNELGNBQWM7d0JBQ3BCbkMsZ0JBQWdCLENBQ2RxQyxRQUFRLENBQUMvQyxrREFBYyxDQUFDNkMsY0FBYyxFQUFFSSxRQUFRLE1BQU0sU0FBUzs7Ozs7O3dCQUdqRTdCLE9BQU8sQ0FBQ0MsS0FBSzt3QkFDYlcsS0FBSyxpQ0FBQ1gsSUFBSSxDQUFKQSxDQUFjLEdBQWRBLElBQUksQ0FBSkEsQ0FBYyxXQUFQNkIsT0FBTzs7Ozs7Ozs7Ozs7Ozs7OztRQUd4QixDQUFDO3dCQWJLUCxXQUFXOzs7O0lBZWpCLEdBQUssQ0FBQ1EsT0FBTztxTkFBRyxRQUFRLFdBQUksQ0FBQztnQkFLbkJ6QixNQUFNLEVBQ05rQixRQUFRLEVBQ1JRLEdBQUc7Ozs7O3dCQUxULEVBQUUsR0FBR3pDLFlBQVksS0FBS0UsZ0JBQWdCLEVBQUUsQ0FBQzs0QkFDdkNtQixLQUFLLENBQUMsQ0FBa0I7d0JBQzFCLENBQUM7OytCQUNvQmIsbUJBQW1CLENBQUMsSUFBSTs7d0JBQXZDTyxNQUFNO3dCQUNOa0IsUUFBUSxHQUFHVCxtQkFBbUIsQ0FBQ1QsTUFBTTs7K0JBQ3pCa0IsUUFBUSxDQUFDUyxTQUFTLENBQUN4QyxnQkFBZ0IsRUFBRSxDQUFDOzRCQUN0RHlDLEtBQUssRUFBRWpELDREQUFVLENBQUNNLFlBQVksQ0FBRXNDLFFBQVE7d0JBQzFDLENBQUM7O3dCQUZLRyxHQUFHO3dCQUdUNUMsVUFBVSxDQUFDLElBQUk7d0JBQ2Y0QyxHQUFHLENBQUNHLElBQUk7d0JBQ1J2QixLQUFLLENBQUMsQ0FBVTt3QkFDaEJaLE9BQU8sQ0FBQ29DLEdBQUcsQ0FBQyxDQUFDOzRCQUFDSixHQUFHLEVBQUhBLEdBQUc7d0JBQUMsQ0FBQzs7Ozs7O3dCQUVuQmhDLE9BQU8sQ0FBQ0MsS0FBSzt3QkFDYlcsS0FBSyxpQ0FBQ1gsSUFBSSxDQUFKQSxDQUFjLEdBQWRBLElBQUksQ0FBSkEsQ0FBYyxXQUFQNkIsT0FBTzs7O3dCQUVwQjFDLFVBQVUsQ0FBQyxLQUFLOzs7Ozs7Ozs7Ozs7OztRQUVwQixDQUFDO3dCQXBCSzJDLE9BQU87Ozs7SUFzQmIsTUFBTSw2RUFDSE0sQ0FBRzs7d0ZBQ0RDLENBQUU7Z0JBQUNDLFNBQVMsRUFBQyxDQUFvQzswQkFBQyxDQUFlOzs7Ozs7d0ZBQ2pFRixDQUFHO2dCQUFDRSxTQUFTLEVBQUMsQ0FBZTs7Z0dBQzNCQyxDQUFLO3dCQUFDRCxTQUFTLEVBQUMsQ0FBTTs7NEJBQUMsQ0FFdEI7d0dBQUNFLENBQUs7Z0NBQ0pDLFFBQVEsRUFBRSxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDO29DQUNwQmpELG1CQUFtQixDQUFDaUQsS0FBSyxDQUFDQyxNQUFNLENBQUNWLEtBQUs7Z0NBQ3hDLENBQUM7Z0NBQ0RXLElBQUksRUFBQyxDQUFXO2dDQUNoQkMsSUFBSSxFQUFFLENBQU07Ozs7Ozs7Ozs7OztnR0FHZk4sQ0FBSzt3QkFBQ0QsU0FBUyxFQUFDLENBQW9COzs0QkFBQyxDQUVwQzt3R0FBQ1EsQ0FBSTtnQ0FBQ1IsU0FBUyxFQUFDLENBQWM7O29DQUFDLENBQ0Q7b0NBQUNsRCxhQUFhOzs7Ozs7O3dHQUUzQ29ELENBQUs7Z0NBQ0pDLFFBQVEsRUFBRSxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDO29DQUNwQm5ELGVBQWUsQ0FBQ21DLFFBQVEsQ0FBQ2dCLEtBQUssQ0FBQ0MsTUFBTSxDQUFDVixLQUFLO2dDQUM3QyxDQUFDO2dDQUNEVyxJQUFJLEVBQUMsQ0FBUTtnQ0FDYkMsSUFBSSxFQUFFLENBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFJbkJDLENBQUk7Z0JBQUNSLFNBQVMsRUFBQyxDQUFxQjtzR0FDbENTLENBQU07b0JBQ0xULFNBQVMsRUFBQyxDQUE0QztvQkFDdERVLE9BQU8sb01BQUUsUUFBUSxXQUFJLENBQUM7Ozs7OzJDQUNkbEIsT0FBTzs7Ozs7O29CQUNmLENBQUM7OEJBQ0YsQ0FFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJUixDQUFDO0dBbEpLN0MsSUFBSTtLQUFKQSxJQUFJO0FBb0pWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTWFpbi50c3g/OTViNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJpZ051bWJlciwgQ29udHJhY3QsIHByb3ZpZGVycywgU2lnbmVyIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IFdlYjNNb2RhbCBmcm9tIFwid2ViM21vZGFsXCI7XG5pbXBvcnQgQ29yZSBmcm9tIFwid2ViM21vZGFsXCI7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2NvbmZpZ1wiO1xuaW1wb3J0IHsgcGFyc2VFdGhlciB9IGZyb20gXCJldGhlcnMvbGliL3V0aWxzXCI7XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gIC8vIFRydWUgaWYgd2FpdGluZyBmb3IgYSB0cmFuc2FjdGlvbiB0byBiZSBtaW5lZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW2V0aFByaWNlSW5Vc2QsIHNldEV0aFByaWNlSW5Vc2RdID0gdXNlU3RhdGU8bnVtYmVyPigpO1xuXG4gIGNvbnN0IFthbW91bnRUb1NlbmQsIHNldEFtb3VudFRvU2VuZF0gPSB1c2VTdGF0ZTxudW1iZXI+KCk7XG5cbiAgY29uc3QgW3JlY2lwaWVudEFkZHJlc3MsIHNldFJlY2lwaWVudEFkZHJlc3NdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuXG4gIC8vIFRydWUgaWYgdXNlciBoYXMgY29ubmVjdGVkIHRoZWlyIHdhbGxldCwgZmFsc2Ugb3RoZXJ3aXNlXG4gIGNvbnN0IFt3YWxsZXRDb25uZWN0ZWQsIHNldFdhbGxldENvbm5lY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgd2ViM01vZGFsUmVmID0gdXNlUmVmPENvcmU+KCk7XG5cbiAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNvbm5lY3Qgd2FsbGV0XG4gIGNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGdldFByb3ZpZGVyT3JTaWduZXIoKTtcbiAgICAgIHNldFdhbGxldENvbm5lY3RlZCh0cnVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiB0byBmZXRjaCBhIFByb3ZpZGVyL1NpZ25lciBpbnN0YW5jZSBmcm9tIE1ldGFtYXNrXG4gIGNvbnN0IGdldFByb3ZpZGVyT3JTaWduZXIgPSBhc3luYyAobmVlZFNpZ25lciA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCB3ZWIzTW9kYWxSZWYhLmN1cnJlbnQhLmNvbm5lY3QoKTtcbiAgICBjb25zdCB3ZWIzUHJvdmlkZXIgPSBuZXcgcHJvdmlkZXJzLldlYjNQcm92aWRlcihwcm92aWRlcik7XG5cbiAgICBjb25zdCB7IGNoYWluSWQgfSA9IGF3YWl0IHdlYjNQcm92aWRlci5nZXROZXR3b3JrKCk7XG4gICAgaWYgKGNoYWluSWQgIT09IDQyKSB7XG4gICAgICB3aW5kb3cuYWxlcnQoXCJQbGVhc2Ugc3dpdGNoIHRvIHRoZSBLb3ZhbiBuZXR3b3JrIVwiKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBzd2l0Y2ggdG8gdGhlIEtvdmFuIG5ldHdvcmtcIik7XG4gICAgfVxuXG4gICAgaWYgKG5lZWRTaWduZXIpIHtcbiAgICAgIGNvbnN0IHNpZ25lciA9IHdlYjNQcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgIHJldHVybiBzaWduZXI7XG4gICAgfVxuICAgIHJldHVybiB3ZWIzUHJvdmlkZXI7XG4gIH07XG5cbiAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHJldHVybiBhIERBTyBDb250cmFjdCBpbnN0YW5jZVxuICAvLyBnaXZlbiBhIFByb3ZpZGVyL1NpZ25lclxuICBjb25zdCBnZXRDb250cmFjdEluc3RhbmNlID0gKFxuICAgIHByb3ZpZGVyT3JTaWduZXI6IHByb3ZpZGVycy5Qcm92aWRlciB8IFNpZ25lclxuICApID0+IHtcbiAgICByZXR1cm4gbmV3IENvbnRyYWN0KFxuICAgICAgY29uZmlnLmNvbnRyYWN0QWRkcmVzcyxcbiAgICAgIGNvbmZpZy5jb250cmFjdEFiaSxcbiAgICAgIHByb3ZpZGVyT3JTaWduZXJcbiAgICApO1xuICB9O1xuXG4gIC8vICBwaWVjZSBvZiBjb2RlIHRoYXQgcnVucyBldmVyeXRpbWUgdGhlIHdhbGxldCBpcyBjb25uZWN0ZWQvZGlzY29ubmVjdGVkIGFuZC9vciB0aGUgY29tcG9uZW50IHJlZnJlc2hlc1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghd2FsbGV0Q29ubmVjdGVkKSB7XG4gICAgICB3ZWIzTW9kYWxSZWYuY3VycmVudCA9IG5ldyBXZWIzTW9kYWwoe1xuICAgICAgICBuZXR3b3JrOiBcImtvdmFuXCIsXG4gICAgICAgIHByb3ZpZGVyT3B0aW9uczoge30sXG4gICAgICAgIGRpc2FibGVJbmplY3RlZFByb3ZpZGVyOiBmYWxzZSxcbiAgICAgIH0pO1xuXG4gICAgICBjb25uZWN0V2FsbGV0KCkudGhlbigoKSA9PiB7fSk7XG4gICAgICBnZXRFdGhQcmljZSgpO1xuICAgIH1cbiAgfSwgW3dhbGxldENvbm5lY3RlZF0pO1xuXG4gIGNvbnN0IGdldEV0aFByaWNlID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzaWduZXIgPSBhd2FpdCBnZXRQcm92aWRlck9yU2lnbmVyKHRydWUpO1xuICAgICAgY29uc3QgY29udHJhY3QgPSBnZXRDb250cmFjdEluc3RhbmNlKHNpZ25lcik7XG4gICAgICBjb25zdCBfZXRoUHJpY2VJblVzZCA9IGF3YWl0IGNvbnRyYWN0LmdldEV0aFVzZCgpO1xuICAgICAgc2V0RXRoUHJpY2VJblVzZChcbiAgICAgICAgcGFyc2VJbnQoQmlnTnVtYmVyLmZyb20oX2V0aFByaWNlSW5Vc2QpLnRvU3RyaW5nKCkpIC8gMTAwMDAwMDAwXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgYWxlcnQoZXJyb3I/Lm1lc3NhZ2UpO1xuICAgIH0gZmluYWxseSB7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNlbmRFdGggPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghYW1vdW50VG9TZW5kIHx8ICFyZWNpcGllbnRBZGRyZXNzKSB7IFxuICAgICAgICBhbGVydChcInBsZWFzZSBmaWxsIHRoZSBcIilcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNpZ25lciA9IGF3YWl0IGdldFByb3ZpZGVyT3JTaWduZXIodHJ1ZSk7XG4gICAgICBjb25zdCBjb250cmFjdCA9IGdldENvbnRyYWN0SW5zdGFuY2Uoc2lnbmVyKTtcbiAgICAgIGNvbnN0IHR4biA9IGF3YWl0IGNvbnRyYWN0LnNlbmRFdGhlcihyZWNpcGllbnRBZGRyZXNzLCB7XG4gICAgICAgIHZhbHVlOiBwYXJzZUV0aGVyKGFtb3VudFRvU2VuZCEudG9TdHJpbmcoKSksXG4gICAgICB9KTtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICB0eG4ud2FpdCgpO1xuICAgICAgYWxlcnQoXCJ0eG4gc2VudFwiKTtcbiAgICAgIGNvbnNvbGUubG9nKHsgdHhuIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgYWxlcnQoZXJyb3I/Lm1lc3NhZ2UpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdW5kZXJsaW5lIG15LThcIj5TZW5kIEVUSCBpbiBVU0Q8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJteS0yXCI+XG4gICAgICAgICAgUmVjaXBpZW50OlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICBzZXRSZWNpcGllbnRBZGRyZXNzKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgbmFtZT1cInJlY2lwaWVudFwiXG4gICAgICAgICAgICB0eXBlPXtcInRleHRcIn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibXktMiBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgQW5vdW50IHRvIHNlbmQgKGluIFVTRCk6XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBtYi0xXCI+XG4gICAgICAgICAgICBDdXJyZW50IEVUSCBwcmljZSAoaW4gVVNEKToge2V0aFByaWNlSW5Vc2R9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICBzZXRBbW91bnRUb1NlbmQocGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgbmFtZT1cImFtb3VudFwiXG4gICAgICAgICAgICB0eXBlPXtcIm51bWJlclwifVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBib3JkZXIgYmctaW5kaWdvLTUwMCBwLTIgbXktMlwiXG4gICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgYXdhaXQgc2VuZEV0aCgpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBTZW5kIEVUSFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJCaWdOdW1iZXIiLCJDb250cmFjdCIsInByb3ZpZGVycyIsIldlYjNNb2RhbCIsImNvbmZpZyIsInBhcnNlRXRoZXIiLCJNYWluIiwibG9hZGluZyIsInNldExvYWRpbmciLCJldGhQcmljZUluVXNkIiwic2V0RXRoUHJpY2VJblVzZCIsImFtb3VudFRvU2VuZCIsInNldEFtb3VudFRvU2VuZCIsInJlY2lwaWVudEFkZHJlc3MiLCJzZXRSZWNpcGllbnRBZGRyZXNzIiwid2FsbGV0Q29ubmVjdGVkIiwic2V0V2FsbGV0Q29ubmVjdGVkIiwid2ViM01vZGFsUmVmIiwiY29ubmVjdFdhbGxldCIsImdldFByb3ZpZGVyT3JTaWduZXIiLCJjb25zb2xlIiwiZXJyb3IiLCJuZWVkU2lnbmVyIiwicHJvdmlkZXIiLCJ3ZWIzUHJvdmlkZXIiLCJjaGFpbklkIiwic2lnbmVyIiwiY3VycmVudCIsImNvbm5lY3QiLCJXZWIzUHJvdmlkZXIiLCJnZXROZXR3b3JrIiwid2luZG93IiwiYWxlcnQiLCJFcnJvciIsImdldFNpZ25lciIsImdldENvbnRyYWN0SW5zdGFuY2UiLCJwcm92aWRlck9yU2lnbmVyIiwiY29udHJhY3RBZGRyZXNzIiwiY29udHJhY3RBYmkiLCJuZXR3b3JrIiwicHJvdmlkZXJPcHRpb25zIiwiZGlzYWJsZUluamVjdGVkUHJvdmlkZXIiLCJ0aGVuIiwiZ2V0RXRoUHJpY2UiLCJjb250cmFjdCIsIl9ldGhQcmljZUluVXNkIiwiZ2V0RXRoVXNkIiwicGFyc2VJbnQiLCJmcm9tIiwidG9TdHJpbmciLCJtZXNzYWdlIiwic2VuZEV0aCIsInR4biIsInNlbmRFdGhlciIsInZhbHVlIiwid2FpdCIsImxvZyIsImRpdiIsImgxIiwiY2xhc3NOYW1lIiwibGFiZWwiLCJpbnB1dCIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwidHlwZSIsInNwYW4iLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Main.tsx\n");

/***/ })

});