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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/config */ \"./constants/config.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Main = function() {\n    _s();\n    // True if waiting for a transaction to be mined, false otherwise.\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), ethPriceInUsd = ref1[0], setEthPriceInUsd = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), amountToSend = ref2[0], setAmountToSend = ref2[1];\n    // True if user has connected their wallet, false otherwise\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), walletConnected = ref3[0], setWalletConnected = ref3[1];\n    var web3ModalRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    // Helper function to connect wallet\n    var connectWallet = function() {\n        var _ref = _asyncToGenerator(_Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return getProviderOrSigner();\n                    case 3:\n                        setWalletConnected(true);\n                        _ctx.next = 9;\n                        break;\n                    case 6:\n                        _ctx.prev = 6;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.error(_ctx.t0);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    6\n                ]\n            ]);\n        }));\n        return function connectWallet() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Helper function to fetch a Provider/Signer instance from Metamask\n    var getProviderOrSigner = function() {\n        var _ref = _asyncToGenerator(_Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var needSigner, provider, web3Provider, chainId, signer, _args = arguments;\n            return _Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        needSigner = _args.length > 0 && _args[0] !== void 0 ? _args[0] : false;\n                        _ctx.next = 3;\n                        return web3ModalRef.current.connect();\n                    case 3:\n                        provider = _ctx.sent;\n                        web3Provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.providers.Web3Provider(provider);\n                        _ctx.next = 7;\n                        return web3Provider.getNetwork();\n                    case 7:\n                        chainId = _ctx.sent.chainId;\n                        if (!(chainId !== 42)) {\n                            _ctx.next = 11;\n                            break;\n                        }\n                        window.alert(\"Please switch to the Kovan network!\");\n                        throw new Error(\"Please switch to the Kovan network\");\n                    case 11:\n                        if (!needSigner) {\n                            _ctx.next = 14;\n                            break;\n                        }\n                        signer = web3Provider.getSigner();\n                        return _ctx.abrupt(\"return\", signer);\n                    case 14:\n                        return _ctx.abrupt(\"return\", web3Provider);\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getProviderOrSigner() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Helper function to return a DAO Contract instance\n    // given a Provider/Signer\n    var getContractInstance = function(providerOrSigner) {\n        return new ethers__WEBPACK_IMPORTED_MODULE_5__.Contract(_constants_config__WEBPACK_IMPORTED_MODULE_4__.config.contractAddress, _constants_config__WEBPACK_IMPORTED_MODULE_4__.config.contractAbi, providerOrSigner);\n    };\n    //  piece of code that runs everytime the wallet is connected/disconnected and/or the component refreshes\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (!walletConnected) {\n            web3ModalRef.current = new (web3modal__WEBPACK_IMPORTED_MODULE_3___default())({\n                network: \"kovan\",\n                providerOptions: {},\n                disableInjectedProvider: false\n            });\n            connectWallet().then(function() {});\n            getEthPrice();\n        }\n    }, [\n        walletConnected\n    ]);\n    var getEthPrice = function() {\n        var _ref = _asyncToGenerator(_Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var signer, contract, _ethPriceInUsd;\n            return _Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return getProviderOrSigner(true);\n                    case 3:\n                        signer = _ctx.sent;\n                        contract = getContractInstance(signer);\n                        _ctx.next = 7;\n                        return contract.getEthUsd();\n                    case 7:\n                        _ethPriceInUsd = _ctx.sent;\n                        setEthPriceInUsd(parseInt(ethers__WEBPACK_IMPORTED_MODULE_5__.BigNumber.from(_ethPriceInUsd).toString()) / 100000000);\n                        _ctx.next = 15;\n                        break;\n                    case 11:\n                        _ctx.prev = 11;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.error(_ctx.t0);\n                        alert(_ctx.t0 === null || _ctx.t0 === void 0 ? void 0 : _ctx.t0.message);\n                    case 15:\n                        _ctx.prev = 15;\n                        return _ctx.finish(15);\n                    case 17:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    11,\n                    15,\n                    17\n                ]\n            ]);\n        }));\n        return function getEthPrice() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var sendEth = function() {\n        var _ref = _asyncToGenerator(_Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var signer, contract, txn;\n            return _Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return getProviderOrSigner(true);\n                    case 3:\n                        signer = _ctx.sent;\n                        contract = getContractInstance(signer);\n                        _ctx.next = 7;\n                        return contract.sendEther(amountToSend);\n                    case 7:\n                        txn = _ctx.sent;\n                        setLoading(true);\n                        txn.wait();\n                        alert(\"txn sent\");\n                        console.log({\n                            txn: txn\n                        });\n                        _ctx.next = 18;\n                        break;\n                    case 14:\n                        _ctx.prev = 14;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.error(_ctx.t0);\n                        alert(_ctx.t0 === null || _ctx.t0 === void 0 ? void 0 : _ctx.t0.message);\n                    case 18:\n                        _ctx.prev = 18;\n                        setLoading(false);\n                        return _ctx.finish(18);\n                    case 21:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    14,\n                    18,\n                    21\n                ]\n            ]);\n        }));\n        return function sendEth() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"Send ETH in USD\"\n            }, void 0, false, {\n                fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Recipient:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                name: \"recipient\",\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Anount to send (in USD):\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                children: [\n                                    \"Current ETH price (in USD): \",\n                                    ethPriceInUsd\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                onChange: function(event) {\n                                    setAmountToSend(parseInt(event.target.value));\n                                },\n                                name: \"amount\",\n                                type: \"number\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                                lineNumber: 117,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: _asyncToGenerator(_Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    return _Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.next = 2;\n                                return sendEth();\n                            case 2:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                })),\n                children: \"Send ETH\"\n            }, void 0, false, {\n                fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n        lineNumber: 107,\n        columnNumber: 5\n    }, _this));\n};\n_s(Main, \"YzziZ0y0VU8+iTWSh6/4F58otCI=\");\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YixNQUFNLDZFQUNISyxDQUFHOzt3RkFDREMsQ0FBRTswQkFBQyxDQUFlOzs7Ozs7d0ZBQ2xCRCxDQUFHOztnR0FDREUsQ0FBSzs7NEJBQUMsQ0FFTDt3R0FBQ0MsQ0FBSztnQ0FBQ0MsSUFBSSxFQUFDLENBQVc7Z0NBQUNDLElBQUksRUFBRSxDQUFNOzs7Ozs7Ozs7Ozs7Z0dBRXJDSCxDQUFLOzs0QkFBQyxDQUVMO3dHQUFDSSxDQUFJOztvQ0FBQyxDQUE0QjtvQ0FBQ25ELGFBQWE7Ozs7Ozs7d0dBQy9DZ0QsQ0FBSztnQ0FDSkksUUFBUSxFQUFFLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7b0NBQ3BCbEQsZUFBZSxDQUFDaUMsUUFBUSxDQUFDaUIsS0FBSyxDQUFDQyxNQUFNLENBQUNDLEtBQUs7Z0NBQzdDLENBQUM7Z0NBQ0ROLElBQUksRUFBQyxDQUFRO2dDQUNiQyxJQUFJLEVBQUUsQ0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUluQk0sQ0FBTTtnQkFDTEMsT0FBTyxvTUFBRSxRQUFRLFdBQUksQ0FBQzs7Ozs7dUNBQ2RqQixPQUFPOzs7Ozs7Z0JBQ2YsQ0FBQzswQkFDRixDQUVEOzs7Ozs7Ozs7Ozs7QUFHTixDQUFDO0dBaElLM0MsSUFBSTtLQUFKQSxJQUFJO0FBa0lWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTWFpbi50c3g/OTViNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJpZ051bWJlciwgQ29udHJhY3QsIHByb3ZpZGVycywgU2lnbmVyIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IFdlYjNNb2RhbCBmcm9tIFwid2ViM21vZGFsXCI7XG5pbXBvcnQgQ29yZSBmcm9tIFwid2ViM21vZGFsXCI7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2NvbmZpZ1wiO1xuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuICAvLyBUcnVlIGlmIHdhaXRpbmcgZm9yIGEgdHJhbnNhY3Rpb24gdG8gYmUgbWluZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFtldGhQcmljZUluVXNkLCBzZXRFdGhQcmljZUluVXNkXSA9IHVzZVN0YXRlPG51bWJlcj4oKTtcblxuICBjb25zdCBbYW1vdW50VG9TZW5kLCBzZXRBbW91bnRUb1NlbmRdID0gdXNlU3RhdGU8bnVtYmVyPigpO1xuXG4gIC8vIFRydWUgaWYgdXNlciBoYXMgY29ubmVjdGVkIHRoZWlyIHdhbGxldCwgZmFsc2Ugb3RoZXJ3aXNlXG4gIGNvbnN0IFt3YWxsZXRDb25uZWN0ZWQsIHNldFdhbGxldENvbm5lY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgd2ViM01vZGFsUmVmID0gdXNlUmVmPENvcmU+KCk7XG5cbiAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNvbm5lY3Qgd2FsbGV0XG4gIGNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGdldFByb3ZpZGVyT3JTaWduZXIoKTtcbiAgICAgIHNldFdhbGxldENvbm5lY3RlZCh0cnVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiB0byBmZXRjaCBhIFByb3ZpZGVyL1NpZ25lciBpbnN0YW5jZSBmcm9tIE1ldGFtYXNrXG4gIGNvbnN0IGdldFByb3ZpZGVyT3JTaWduZXIgPSBhc3luYyAobmVlZFNpZ25lciA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCB3ZWIzTW9kYWxSZWYhLmN1cnJlbnQhLmNvbm5lY3QoKTtcbiAgICBjb25zdCB3ZWIzUHJvdmlkZXIgPSBuZXcgcHJvdmlkZXJzLldlYjNQcm92aWRlcihwcm92aWRlcik7XG5cbiAgICBjb25zdCB7IGNoYWluSWQgfSA9IGF3YWl0IHdlYjNQcm92aWRlci5nZXROZXR3b3JrKCk7XG4gICAgaWYgKGNoYWluSWQgIT09IDQyKSB7XG4gICAgICB3aW5kb3cuYWxlcnQoXCJQbGVhc2Ugc3dpdGNoIHRvIHRoZSBLb3ZhbiBuZXR3b3JrIVwiKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBzd2l0Y2ggdG8gdGhlIEtvdmFuIG5ldHdvcmtcIik7XG4gICAgfVxuXG4gICAgaWYgKG5lZWRTaWduZXIpIHtcbiAgICAgIGNvbnN0IHNpZ25lciA9IHdlYjNQcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgIHJldHVybiBzaWduZXI7XG4gICAgfVxuICAgIHJldHVybiB3ZWIzUHJvdmlkZXI7XG4gIH07XG5cbiAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHJldHVybiBhIERBTyBDb250cmFjdCBpbnN0YW5jZVxuICAvLyBnaXZlbiBhIFByb3ZpZGVyL1NpZ25lclxuICBjb25zdCBnZXRDb250cmFjdEluc3RhbmNlID0gKFxuICAgIHByb3ZpZGVyT3JTaWduZXI6IHByb3ZpZGVycy5Qcm92aWRlciB8IFNpZ25lclxuICApID0+IHtcbiAgICByZXR1cm4gbmV3IENvbnRyYWN0KFxuICAgICAgY29uZmlnLmNvbnRyYWN0QWRkcmVzcyxcbiAgICAgIGNvbmZpZy5jb250cmFjdEFiaSxcbiAgICAgIHByb3ZpZGVyT3JTaWduZXJcbiAgICApO1xuICB9O1xuXG4gIC8vICBwaWVjZSBvZiBjb2RlIHRoYXQgcnVucyBldmVyeXRpbWUgdGhlIHdhbGxldCBpcyBjb25uZWN0ZWQvZGlzY29ubmVjdGVkIGFuZC9vciB0aGUgY29tcG9uZW50IHJlZnJlc2hlc1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghd2FsbGV0Q29ubmVjdGVkKSB7XG4gICAgICB3ZWIzTW9kYWxSZWYuY3VycmVudCA9IG5ldyBXZWIzTW9kYWwoe1xuICAgICAgICBuZXR3b3JrOiBcImtvdmFuXCIsXG4gICAgICAgIHByb3ZpZGVyT3B0aW9uczoge30sXG4gICAgICAgIGRpc2FibGVJbmplY3RlZFByb3ZpZGVyOiBmYWxzZSxcbiAgICAgIH0pO1xuXG4gICAgICBjb25uZWN0V2FsbGV0KCkudGhlbigoKSA9PiB7fSk7XG4gICAgICBnZXRFdGhQcmljZSgpO1xuICAgIH1cbiAgfSwgW3dhbGxldENvbm5lY3RlZF0pO1xuXG4gIGNvbnN0IGdldEV0aFByaWNlID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzaWduZXIgPSBhd2FpdCBnZXRQcm92aWRlck9yU2lnbmVyKHRydWUpO1xuICAgICAgY29uc3QgY29udHJhY3QgPSBnZXRDb250cmFjdEluc3RhbmNlKHNpZ25lcik7XG4gICAgICBjb25zdCBfZXRoUHJpY2VJblVzZCA9IGF3YWl0IGNvbnRyYWN0LmdldEV0aFVzZCgpO1xuICAgICAgc2V0RXRoUHJpY2VJblVzZChcbiAgICAgICAgcGFyc2VJbnQoQmlnTnVtYmVyLmZyb20oX2V0aFByaWNlSW5Vc2QpLnRvU3RyaW5nKCkpIC8gMTAwMDAwMDAwXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgYWxlcnQoZXJyb3I/Lm1lc3NhZ2UpO1xuICAgIH0gZmluYWxseSB7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNlbmRFdGggPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNpZ25lciA9IGF3YWl0IGdldFByb3ZpZGVyT3JTaWduZXIodHJ1ZSk7XG4gICAgICBjb25zdCBjb250cmFjdCA9IGdldENvbnRyYWN0SW5zdGFuY2Uoc2lnbmVyKTtcbiAgICAgIGNvbnN0IHR4biA9IGF3YWl0IGNvbnRyYWN0LnNlbmRFdGhlcihhbW91bnRUb1NlbmQpO1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIHR4bi53YWl0KCk7XG4gICAgICBhbGVydChcInR4biBzZW50XCIpO1xuICAgICAgY29uc29sZS5sb2coeyB0eG4gfSk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICBhbGVydChlcnJvcj8ubWVzc2FnZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+U2VuZCBFVEggaW4gVVNEPC9oMT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBSZWNpcGllbnQ6XG4gICAgICAgICAgPGlucHV0IG5hbWU9XCJyZWNpcGllbnRcIiB0eXBlPXtcInRleHRcIn0gLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIEFub3VudCB0byBzZW5kIChpbiBVU0QpOlxuICAgICAgICAgIDxzcGFuPkN1cnJlbnQgRVRIIHByaWNlIChpbiBVU0QpOiB7ZXRoUHJpY2VJblVzZH08L3NwYW4+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIHNldEFtb3VudFRvU2VuZChwYXJzZUludChldmVudC50YXJnZXQudmFsdWUpKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBuYW1lPVwiYW1vdW50XCJcbiAgICAgICAgICAgIHR5cGU9e1wibnVtYmVyXCJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XG4gICAgICAgICAgYXdhaXQgc2VuZEV0aCgpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBTZW5kIEVUSFxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQmlnTnVtYmVyIiwiQ29udHJhY3QiLCJwcm92aWRlcnMiLCJXZWIzTW9kYWwiLCJjb25maWciLCJNYWluIiwibG9hZGluZyIsInNldExvYWRpbmciLCJldGhQcmljZUluVXNkIiwic2V0RXRoUHJpY2VJblVzZCIsImFtb3VudFRvU2VuZCIsInNldEFtb3VudFRvU2VuZCIsIndhbGxldENvbm5lY3RlZCIsInNldFdhbGxldENvbm5lY3RlZCIsIndlYjNNb2RhbFJlZiIsImNvbm5lY3RXYWxsZXQiLCJnZXRQcm92aWRlck9yU2lnbmVyIiwiY29uc29sZSIsImVycm9yIiwibmVlZFNpZ25lciIsInByb3ZpZGVyIiwid2ViM1Byb3ZpZGVyIiwiY2hhaW5JZCIsInNpZ25lciIsImN1cnJlbnQiLCJjb25uZWN0IiwiV2ViM1Byb3ZpZGVyIiwiZ2V0TmV0d29yayIsIndpbmRvdyIsImFsZXJ0IiwiRXJyb3IiLCJnZXRTaWduZXIiLCJnZXRDb250cmFjdEluc3RhbmNlIiwicHJvdmlkZXJPclNpZ25lciIsImNvbnRyYWN0QWRkcmVzcyIsImNvbnRyYWN0QWJpIiwibmV0d29yayIsInByb3ZpZGVyT3B0aW9ucyIsImRpc2FibGVJbmplY3RlZFByb3ZpZGVyIiwidGhlbiIsImdldEV0aFByaWNlIiwiY29udHJhY3QiLCJfZXRoUHJpY2VJblVzZCIsImdldEV0aFVzZCIsInBhcnNlSW50IiwiZnJvbSIsInRvU3RyaW5nIiwibWVzc2FnZSIsInNlbmRFdGgiLCJ0eG4iLCJzZW5kRXRoZXIiLCJ3YWl0IiwibG9nIiwiZGl2IiwiaDEiLCJsYWJlbCIsImlucHV0IiwibmFtZSIsInR5cGUiLCJzcGFuIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Main.tsx\n");

/***/ })

});