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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/config */ \"./constants/config.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Main = function() {\n    _s();\n    // True if waiting for a transaction to be mined, false otherwise.\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), ethPriceInUsd = ref1[0], setEthPriceInUsd = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), amountToSend = ref2[0], setAmountToSend = ref2[1];\n    // True if user has connected their wallet, false otherwise\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), walletConnected = ref3[0], setWalletConnected = ref3[1];\n    var web3ModalRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    // Helper function to connect wallet\n    var connectWallet = function() {\n        var _ref = _asyncToGenerator(_Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return getProviderOrSigner();\n                    case 3:\n                        setWalletConnected(true);\n                        _ctx.next = 9;\n                        break;\n                    case 6:\n                        _ctx.prev = 6;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.error(_ctx.t0);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    6\n                ]\n            ]);\n        }));\n        return function connectWallet() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Helper function to fetch a Provider/Signer instance from Metamask\n    var getProviderOrSigner = function() {\n        var _ref = _asyncToGenerator(_Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var needSigner, provider, web3Provider, chainId, signer, _args = arguments;\n            return _Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        needSigner = _args.length > 0 && _args[0] !== void 0 ? _args[0] : false;\n                        _ctx.next = 3;\n                        return web3ModalRef.current.connect();\n                    case 3:\n                        provider = _ctx.sent;\n                        web3Provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.providers.Web3Provider(provider);\n                        _ctx.next = 7;\n                        return web3Provider.getNetwork();\n                    case 7:\n                        chainId = _ctx.sent.chainId;\n                        if (!(chainId !== 42)) {\n                            _ctx.next = 11;\n                            break;\n                        }\n                        window.alert(\"Please switch to the Kovan network!\");\n                        throw new Error(\"Please switch to the Kovan network\");\n                    case 11:\n                        if (!needSigner) {\n                            _ctx.next = 14;\n                            break;\n                        }\n                        signer = web3Provider.getSigner();\n                        return _ctx.abrupt(\"return\", signer);\n                    case 14:\n                        return _ctx.abrupt(\"return\", web3Provider);\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getProviderOrSigner() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Helper function to return a DAO Contract instance\n    // given a Provider/Signer\n    var getContractInstance = function(providerOrSigner) {\n        return new ethers__WEBPACK_IMPORTED_MODULE_5__.Contract(_constants_config__WEBPACK_IMPORTED_MODULE_4__.config.contractAddress, _constants_config__WEBPACK_IMPORTED_MODULE_4__.config.contractAbi, providerOrSigner);\n    };\n    //  piece of code that runs everytime the wallet is connected/disconnected and/or the component refreshes\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (!walletConnected) {\n            web3ModalRef.current = new (web3modal__WEBPACK_IMPORTED_MODULE_3___default())({\n                network: \"kovan\",\n                providerOptions: {},\n                disableInjectedProvider: false\n            });\n            connectWallet().then(function() {});\n            getEthPrice();\n        }\n    }, [\n        walletConnected\n    ]);\n    var getEthPrice = function() {\n        var _ref = _asyncToGenerator(_Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var signer, contract, _ethPriceInUsd;\n            return _Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return getProviderOrSigner(true);\n                    case 3:\n                        signer = _ctx.sent;\n                        contract = getContractInstance(signer);\n                        _ctx.next = 7;\n                        return contract.getEthUsd();\n                    case 7:\n                        _ethPriceInUsd = _ctx.sent;\n                        setEthPriceInUsd(parseInt(ethers__WEBPACK_IMPORTED_MODULE_5__.BigNumber.from(_ethPriceInUsd).toString()) / 100000000);\n                        _ctx.next = 15;\n                        break;\n                    case 11:\n                        _ctx.prev = 11;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.error(_ctx.t0);\n                        alert(_ctx.t0 === null || _ctx.t0 === void 0 ? void 0 : _ctx.t0.message);\n                    case 15:\n                        _ctx.prev = 15;\n                        return _ctx.finish(15);\n                    case 17:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    11,\n                    15,\n                    17\n                ]\n            ]);\n        }));\n        return function getEthPrice() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var sendEth = function() {\n        var _ref = _asyncToGenerator(_Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var signer, contract, txn;\n            return _Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return getProviderOrSigner(true);\n                    case 3:\n                        signer = _ctx.sent;\n                        contract = getContractInstance(signer);\n                        _ctx.next = 7;\n                        return contract.sendEther(amountToSend);\n                    case 7:\n                        txn = _ctx.sent;\n                        setLoading(true);\n                        txn.wait();\n                        alert(\"txn sent\");\n                        console.log({\n                            txn: txn\n                        });\n                        _ctx.next = 18;\n                        break;\n                    case 14:\n                        _ctx.prev = 14;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.error(_ctx.t0);\n                        alert(_ctx.t0 === null || _ctx.t0 === void 0 ? void 0 : _ctx.t0.message);\n                    case 18:\n                        _ctx.prev = 18;\n                        setLoading(false);\n                        return _ctx.finish(18);\n                    case 21:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    14,\n                    18,\n                    21\n                ]\n            ]);\n        }));\n        return function sendEth() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                className: \"flex justify-center underline my-8\",\n                children: \"Send ETH in USD\"\n            }, void 0, false, {\n                fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        className: \"my-2\",\n                        children: [\n                            \"Recipient:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                name: \"recipient\",\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        className: \"my-2 flex\",\n                        children: [\n                            \"Anount to send (in USD):\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                children: [\n                                    \"Current ETH price (in USD): \",\n                                    ethPriceInUsd\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                onChange: function(event) {\n                                    setAmountToSend(parseInt(event.target.value));\n                                },\n                                name: \"amount\",\n                                type: \"number\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                                lineNumber: 117,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: _asyncToGenerator(_Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    return _Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.next = 2;\n                                return sendEth();\n                            case 2:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                })),\n                children: \"Send ETH\"\n            }, void 0, false, {\n                fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n        lineNumber: 107,\n        columnNumber: 5\n    }, _this));\n};\n_s(Main, \"YzziZ0y0VU8+iTWSh6/4F58otCI=\");\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YixNQUFNLDZFQUNISyxDQUFHOzt3RkFDREMsQ0FBRTtnQkFBQ0MsU0FBUyxFQUFDLENBQW9DOzBCQUFDLENBQWU7Ozs7Ozt3RkFDakVGLENBQUc7Z0JBQUNFLFNBQVMsRUFBQyxDQUFlOztnR0FDM0JDLENBQUs7d0JBQUNELFNBQVMsRUFBQyxDQUFNOzs0QkFBQyxDQUV0Qjt3R0FBQ0UsQ0FBSztnQ0FBQ0MsSUFBSSxFQUFDLENBQVc7Z0NBQUNDLElBQUksRUFBRSxDQUFNOzs7Ozs7Ozs7Ozs7Z0dBRXJDSCxDQUFLO3dCQUFDRCxTQUFTLEVBQUMsQ0FBVzs7NEJBQUMsQ0FFM0I7d0dBQUNLLENBQUk7O29DQUFDLENBQTRCO29DQUFDcEQsYUFBYTs7Ozs7Ozt3R0FDL0NpRCxDQUFLO2dDQUNKSSxRQUFRLEVBQUUsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQztvQ0FDcEJuRCxlQUFlLENBQUNpQyxRQUFRLENBQUNrQixLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSztnQ0FDN0MsQ0FBQztnQ0FDRE4sSUFBSSxFQUFDLENBQVE7Z0NBQ2JDLElBQUksRUFBRSxDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBSW5CTSxDQUFNO2dCQUNMQyxPQUFPLG9NQUFFLFFBQVEsV0FBSSxDQUFDOzs7Ozt1Q0FDZGxCLE9BQU87Ozs7OztnQkFDZixDQUFDOzBCQUNGLENBRUQ7Ozs7Ozs7Ozs7OztBQUdOLENBQUM7R0FoSUszQyxJQUFJO0tBQUpBLElBQUk7QUFrSVYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9NYWluLnRzeD85NWI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQmlnTnVtYmVyLCBDb250cmFjdCwgcHJvdmlkZXJzLCBTaWduZXIgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgV2ViM01vZGFsIGZyb20gXCJ3ZWIzbW9kYWxcIjtcbmltcG9ydCBDb3JlIGZyb20gXCJ3ZWIzbW9kYWxcIjtcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLi9jb25zdGFudHMvY29uZmlnXCI7XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gIC8vIFRydWUgaWYgd2FpdGluZyBmb3IgYSB0cmFuc2FjdGlvbiB0byBiZSBtaW5lZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW2V0aFByaWNlSW5Vc2QsIHNldEV0aFByaWNlSW5Vc2RdID0gdXNlU3RhdGU8bnVtYmVyPigpO1xuXG4gIGNvbnN0IFthbW91bnRUb1NlbmQsIHNldEFtb3VudFRvU2VuZF0gPSB1c2VTdGF0ZTxudW1iZXI+KCk7XG5cbiAgLy8gVHJ1ZSBpZiB1c2VyIGhhcyBjb25uZWN0ZWQgdGhlaXIgd2FsbGV0LCBmYWxzZSBvdGhlcndpc2VcbiAgY29uc3QgW3dhbGxldENvbm5lY3RlZCwgc2V0V2FsbGV0Q29ubmVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB3ZWIzTW9kYWxSZWYgPSB1c2VSZWY8Q29yZT4oKTtcblxuICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gY29ubmVjdCB3YWxsZXRcbiAgY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZ2V0UHJvdmlkZXJPclNpZ25lcigpO1xuICAgICAgc2V0V2FsbGV0Q29ubmVjdGVkKHRydWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGZldGNoIGEgUHJvdmlkZXIvU2lnbmVyIGluc3RhbmNlIGZyb20gTWV0YW1hc2tcbiAgY29uc3QgZ2V0UHJvdmlkZXJPclNpZ25lciA9IGFzeW5jIChuZWVkU2lnbmVyID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCBwcm92aWRlciA9IGF3YWl0IHdlYjNNb2RhbFJlZiEuY3VycmVudCEuY29ubmVjdCgpO1xuICAgIGNvbnN0IHdlYjNQcm92aWRlciA9IG5ldyBwcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHByb3ZpZGVyKTtcblxuICAgIGNvbnN0IHsgY2hhaW5JZCB9ID0gYXdhaXQgd2ViM1Byb3ZpZGVyLmdldE5ldHdvcmsoKTtcbiAgICBpZiAoY2hhaW5JZCAhPT0gNDIpIHtcbiAgICAgIHdpbmRvdy5hbGVydChcIlBsZWFzZSBzd2l0Y2ggdG8gdGhlIEtvdmFuIG5ldHdvcmshXCIpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHN3aXRjaCB0byB0aGUgS292YW4gbmV0d29ya1wiKTtcbiAgICB9XG5cbiAgICBpZiAobmVlZFNpZ25lcikge1xuICAgICAgY29uc3Qgc2lnbmVyID0gd2ViM1Byb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgICAgcmV0dXJuIHNpZ25lcjtcbiAgICB9XG4gICAgcmV0dXJuIHdlYjNQcm92aWRlcjtcbiAgfTtcblxuICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gcmV0dXJuIGEgREFPIENvbnRyYWN0IGluc3RhbmNlXG4gIC8vIGdpdmVuIGEgUHJvdmlkZXIvU2lnbmVyXG4gIGNvbnN0IGdldENvbnRyYWN0SW5zdGFuY2UgPSAoXG4gICAgcHJvdmlkZXJPclNpZ25lcjogcHJvdmlkZXJzLlByb3ZpZGVyIHwgU2lnbmVyXG4gICkgPT4ge1xuICAgIHJldHVybiBuZXcgQ29udHJhY3QoXG4gICAgICBjb25maWcuY29udHJhY3RBZGRyZXNzLFxuICAgICAgY29uZmlnLmNvbnRyYWN0QWJpLFxuICAgICAgcHJvdmlkZXJPclNpZ25lclxuICAgICk7XG4gIH07XG5cbiAgLy8gIHBpZWNlIG9mIGNvZGUgdGhhdCBydW5zIGV2ZXJ5dGltZSB0aGUgd2FsbGV0IGlzIGNvbm5lY3RlZC9kaXNjb25uZWN0ZWQgYW5kL29yIHRoZSBjb21wb25lbnQgcmVmcmVzaGVzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF3YWxsZXRDb25uZWN0ZWQpIHtcbiAgICAgIHdlYjNNb2RhbFJlZi5jdXJyZW50ID0gbmV3IFdlYjNNb2RhbCh7XG4gICAgICAgIG5ldHdvcms6IFwia292YW5cIixcbiAgICAgICAgcHJvdmlkZXJPcHRpb25zOiB7fSxcbiAgICAgICAgZGlzYWJsZUluamVjdGVkUHJvdmlkZXI6IGZhbHNlLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbm5lY3RXYWxsZXQoKS50aGVuKCgpID0+IHt9KTtcbiAgICAgIGdldEV0aFByaWNlKCk7XG4gICAgfVxuICB9LCBbd2FsbGV0Q29ubmVjdGVkXSk7XG5cbiAgY29uc3QgZ2V0RXRoUHJpY2UgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNpZ25lciA9IGF3YWl0IGdldFByb3ZpZGVyT3JTaWduZXIodHJ1ZSk7XG4gICAgICBjb25zdCBjb250cmFjdCA9IGdldENvbnRyYWN0SW5zdGFuY2Uoc2lnbmVyKTtcbiAgICAgIGNvbnN0IF9ldGhQcmljZUluVXNkID0gYXdhaXQgY29udHJhY3QuZ2V0RXRoVXNkKCk7XG4gICAgICBzZXRFdGhQcmljZUluVXNkKFxuICAgICAgICBwYXJzZUludChCaWdOdW1iZXIuZnJvbShfZXRoUHJpY2VJblVzZCkudG9TdHJpbmcoKSkgLyAxMDAwMDAwMDBcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICBhbGVydChlcnJvcj8ubWVzc2FnZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2VuZEV0aCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2lnbmVyID0gYXdhaXQgZ2V0UHJvdmlkZXJPclNpZ25lcih0cnVlKTtcbiAgICAgIGNvbnN0IGNvbnRyYWN0ID0gZ2V0Q29udHJhY3RJbnN0YW5jZShzaWduZXIpO1xuICAgICAgY29uc3QgdHhuID0gYXdhaXQgY29udHJhY3Quc2VuZEV0aGVyKGFtb3VudFRvU2VuZCk7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgdHhuLndhaXQoKTtcbiAgICAgIGFsZXJ0KFwidHhuIHNlbnRcIik7XG4gICAgICBjb25zb2xlLmxvZyh7IHR4biB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIGFsZXJ0KGVycm9yPy5tZXNzYWdlKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHVuZGVybGluZSBteS04XCI+U2VuZCBFVEggaW4gVVNEPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibXktMlwiPlxuICAgICAgICAgIFJlY2lwaWVudDpcbiAgICAgICAgICA8aW5wdXQgbmFtZT1cInJlY2lwaWVudFwiIHR5cGU9e1widGV4dFwifSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibXktMiBmbGV4XCI+XG4gICAgICAgICAgQW5vdW50IHRvIHNlbmQgKGluIFVTRCk6XG4gICAgICAgICAgPHNwYW4+Q3VycmVudCBFVEggcHJpY2UgKGluIFVTRCk6IHtldGhQcmljZUluVXNkfTwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgc2V0QW1vdW50VG9TZW5kKHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSkpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG5hbWU9XCJhbW91bnRcIlxuICAgICAgICAgICAgdHlwZT17XCJudW1iZXJcIn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcbiAgICAgICAgICBhd2FpdCBzZW5kRXRoKCk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIFNlbmQgRVRIXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJCaWdOdW1iZXIiLCJDb250cmFjdCIsInByb3ZpZGVycyIsIldlYjNNb2RhbCIsImNvbmZpZyIsIk1haW4iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImV0aFByaWNlSW5Vc2QiLCJzZXRFdGhQcmljZUluVXNkIiwiYW1vdW50VG9TZW5kIiwic2V0QW1vdW50VG9TZW5kIiwid2FsbGV0Q29ubmVjdGVkIiwic2V0V2FsbGV0Q29ubmVjdGVkIiwid2ViM01vZGFsUmVmIiwiY29ubmVjdFdhbGxldCIsImdldFByb3ZpZGVyT3JTaWduZXIiLCJjb25zb2xlIiwiZXJyb3IiLCJuZWVkU2lnbmVyIiwicHJvdmlkZXIiLCJ3ZWIzUHJvdmlkZXIiLCJjaGFpbklkIiwic2lnbmVyIiwiY3VycmVudCIsImNvbm5lY3QiLCJXZWIzUHJvdmlkZXIiLCJnZXROZXR3b3JrIiwid2luZG93IiwiYWxlcnQiLCJFcnJvciIsImdldFNpZ25lciIsImdldENvbnRyYWN0SW5zdGFuY2UiLCJwcm92aWRlck9yU2lnbmVyIiwiY29udHJhY3RBZGRyZXNzIiwiY29udHJhY3RBYmkiLCJuZXR3b3JrIiwicHJvdmlkZXJPcHRpb25zIiwiZGlzYWJsZUluamVjdGVkUHJvdmlkZXIiLCJ0aGVuIiwiZ2V0RXRoUHJpY2UiLCJjb250cmFjdCIsIl9ldGhQcmljZUluVXNkIiwiZ2V0RXRoVXNkIiwicGFyc2VJbnQiLCJmcm9tIiwidG9TdHJpbmciLCJtZXNzYWdlIiwic2VuZEV0aCIsInR4biIsInNlbmRFdGhlciIsIndhaXQiLCJsb2ciLCJkaXYiLCJoMSIsImNsYXNzTmFtZSIsImxhYmVsIiwiaW5wdXQiLCJuYW1lIiwidHlwZSIsInNwYW4iLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Main.tsx\n");

/***/ })

});