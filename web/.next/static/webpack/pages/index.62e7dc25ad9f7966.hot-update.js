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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/config */ \"./constants/config.ts\");\n/* harmony import */ var ethers_lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers/lib/utils */ \"./node_modules/ethers/lib/utils.js\");\n/* harmony import */ var ethers_lib_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ethers_lib_utils__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Main = function() {\n    _s();\n    // True if waiting for a transaction to be mined, false otherwise.\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), ethPriceInUsd = ref1[0], setEthPriceInUsd = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), amountToSend = ref2[0], setAmountToSend = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), recipientAddress = ref3[0], setRecipientAddress = ref3[1];\n    // True if user has connected their wallet, false otherwise\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), walletConnected = ref4[0], setWalletConnected = ref4[1];\n    var web3ModalRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    // Helper function to connect wallet\n    var connectWallet = function() {\n        var _ref = _asyncToGenerator(_Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return getProviderOrSigner();\n                    case 3:\n                        setWalletConnected(true);\n                        _ctx.next = 9;\n                        break;\n                    case 6:\n                        _ctx.prev = 6;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.error(_ctx.t0);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    6\n                ]\n            ]);\n        }));\n        return function connectWallet() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Helper function to fetch a Provider/Signer instance from Metamask\n    var getProviderOrSigner = function() {\n        var _ref = _asyncToGenerator(_Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var needSigner, provider, web3Provider, chainId, signer, _args = arguments;\n            return _Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        needSigner = _args.length > 0 && _args[0] !== void 0 ? _args[0] : false;\n                        _ctx.next = 3;\n                        return web3ModalRef.current.connect();\n                    case 3:\n                        provider = _ctx.sent;\n                        web3Provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.providers.Web3Provider(provider);\n                        _ctx.next = 7;\n                        return web3Provider.getNetwork();\n                    case 7:\n                        chainId = _ctx.sent.chainId;\n                        if (!(chainId !== 42)) {\n                            _ctx.next = 11;\n                            break;\n                        }\n                        window.alert(\"Please switch to the Kovan network!\");\n                        throw new Error(\"Please switch to the Kovan network\");\n                    case 11:\n                        if (!needSigner) {\n                            _ctx.next = 14;\n                            break;\n                        }\n                        signer = web3Provider.getSigner();\n                        return _ctx.abrupt(\"return\", signer);\n                    case 14:\n                        return _ctx.abrupt(\"return\", web3Provider);\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getProviderOrSigner() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Helper function to return a DAO Contract instance\n    // given a Provider/Signer\n    var getContractInstance = function(providerOrSigner) {\n        return new ethers__WEBPACK_IMPORTED_MODULE_5__.Contract(_constants_config__WEBPACK_IMPORTED_MODULE_4__.config.contractAddress, _constants_config__WEBPACK_IMPORTED_MODULE_4__.config.contractAbi, providerOrSigner);\n    };\n    //  piece of code that runs everytime the wallet is connected/disconnected and/or the component refreshes\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (!walletConnected) {\n            web3ModalRef.current = new (web3modal__WEBPACK_IMPORTED_MODULE_3___default())({\n                network: \"kovan\",\n                providerOptions: {},\n                disableInjectedProvider: false\n            });\n            connectWallet().then(function() {});\n            getEthPrice();\n        }\n    }, [\n        walletConnected\n    ]);\n    var getEthPrice = function() {\n        var _ref = _asyncToGenerator(_Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var signer, contract, _ethPriceInUsd;\n            return _Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return getProviderOrSigner(true);\n                    case 3:\n                        signer = _ctx.sent;\n                        contract = getContractInstance(signer);\n                        _ctx.next = 7;\n                        return contract.getEthUsd();\n                    case 7:\n                        _ethPriceInUsd = _ctx.sent;\n                        setEthPriceInUsd(parseInt(ethers__WEBPACK_IMPORTED_MODULE_5__.BigNumber.from(_ethPriceInUsd).toString()) / 100000000);\n                        _ctx.next = 15;\n                        break;\n                    case 11:\n                        _ctx.prev = 11;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.error(_ctx.t0);\n                        alert(_ctx.t0 === null || _ctx.t0 === void 0 ? void 0 : _ctx.t0.message);\n                    case 15:\n                        _ctx.prev = 15;\n                        return _ctx.finish(15);\n                    case 17:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    11,\n                    15,\n                    17\n                ]\n            ]);\n        }));\n        return function getEthPrice() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var sendEth = function() {\n        var _ref = _asyncToGenerator(_Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethToSend, signer, contract, txn;\n            return _Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        if (!(!amountToSend || !recipientAddress)) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        alert(\"please fill the form\");\n                        console.log({\n                            amountToSend: amountToSend,\n                            recipientAddress: recipientAddress\n                        });\n                        return _ctx.abrupt(\"return\");\n                    case 5:\n                        console.log({\n                            amountToSend: amountToSend,\n                            recipientAddress: recipientAddress\n                        });\n                        ethToSend = ethPriceInUsd;\n                        _ctx.next = 9;\n                        return getProviderOrSigner(true);\n                    case 9:\n                        signer = _ctx.sent;\n                        contract = getContractInstance(signer);\n                        _ctx.next = 13;\n                        return contract.sendEther(recipientAddress, {\n                            value: (0,ethers_lib_utils__WEBPACK_IMPORTED_MODULE_6__.parseEther)(amountToSend.toString())\n                        });\n                    case 13:\n                        txn = _ctx.sent;\n                        setLoading(true);\n                        txn.wait();\n                        alert(\"txn sent\");\n                        console.log({\n                            txn: txn\n                        });\n                        _ctx.next = 24;\n                        break;\n                    case 20:\n                        _ctx.prev = 20;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.error(_ctx.t0);\n                        alert(_ctx.t0 === null || _ctx.t0 === void 0 ? void 0 : _ctx.t0.message);\n                    case 24:\n                        _ctx.prev = 24;\n                        setLoading(false);\n                        return _ctx.finish(24);\n                    case 27:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    20,\n                    24,\n                    27\n                ]\n            ]);\n        }));\n        return function sendEth() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                className: \"flex justify-center underline my-8\",\n                children: \"Send ETH in USD\"\n            }, void 0, false, {\n                fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        className: \"my-2\",\n                        children: [\n                            \"Recipient:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                onChange: function(event) {\n                                    setRecipientAddress(event.target.value);\n                                },\n                                name: \"recipient\",\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                                lineNumber: 126,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        className: \"my-2 flex flex-col\",\n                        children: [\n                            \"Anount to send (in USD):\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                className: \"text-xs mb-1\",\n                                children: [\n                                    \"Current ETH price (in USD): \",\n                                    ethPriceInUsd\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                                lineNumber: 136,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                onChange: function(event) {\n                                    setAmountToSend(parseFloat(event.target.value));\n                                },\n                                name: \"amount\",\n                                step: \"any\",\n                                type: \"number\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                                lineNumber: 139,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                        lineNumber: 134,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                className: \"flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    className: \"rounded-full border bg-indigo-500 p-2 my-2\",\n                    onClick: _asyncToGenerator(_Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                        return _Users_danisharora099_Developer_lw3_lessons_chainlink_data_feeds_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                            while(1)switch(_ctx.prev = _ctx.next){\n                                case 0:\n                                    _ctx.next = 2;\n                                    return sendEth();\n                                case 2:\n                                case \"end\":\n                                    return _ctx.stop();\n                            }\n                        }, _callee);\n                    })),\n                    children: \"Send ETH\"\n                }, void 0, false, {\n                    fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                    lineNumber: 150,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n                lineNumber: 149,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danisharora099/Developer/lw3/lessons/chainlink-data-feeds/web/pages/Main.tsx\",\n        lineNumber: 121,\n        columnNumber: 5\n    }, _this));\n};\n_s(Main, \"5tj9RM/VGtZlW9hDXieQ2YpwzqI=\");\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozt3R0FFM0NxRCxDQUFLO2dDQUNKQyxRQUFRLEVBQUUsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQztvQ0FDcEJwRCxlQUFlLENBQUN5RCxVQUFVLENBQUNMLEtBQUssQ0FBQ0MsTUFBTSxDQUFDVCxLQUFLO2dDQUMvQyxDQUFDO2dDQUNEVSxJQUFJLEVBQUUsQ0FBUTtnQ0FDZEksSUFBSSxFQUFFLENBQUs7Z0NBQ1hILElBQUksRUFBRSxDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBSW5CQyxDQUFJO2dCQUFDUixTQUFTLEVBQUMsQ0FBcUI7c0dBQ2xDVyxDQUFNO29CQUNMWCxTQUFTLEVBQUMsQ0FBNEM7b0JBQ3REWSxPQUFPLG9NQUFFLFFBQVEsV0FBSSxDQUFDOzs7OzsyQ0FDZHJCLE9BQU87Ozs7OztvQkFDZixDQUFDOzhCQUNGLENBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSVIsQ0FBQztHQXpKSzdDLElBQUk7S0FBSkEsSUFBSTtBQTJKViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL01haW4udHN4Pzk1YjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCaWdOdW1iZXIsIENvbnRyYWN0LCBwcm92aWRlcnMsIFNpZ25lciB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSBcIndlYjNtb2RhbFwiO1xuaW1wb3J0IENvcmUgZnJvbSBcIndlYjNtb2RhbFwiO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9jb25maWdcIjtcbmltcG9ydCB7IHBhcnNlRXRoZXIgfSBmcm9tIFwiZXRoZXJzL2xpYi91dGlsc1wiO1xuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuICAvLyBUcnVlIGlmIHdhaXRpbmcgZm9yIGEgdHJhbnNhY3Rpb24gdG8gYmUgbWluZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFtldGhQcmljZUluVXNkLCBzZXRFdGhQcmljZUluVXNkXSA9IHVzZVN0YXRlPG51bWJlcj4oKTtcblxuICBjb25zdCBbYW1vdW50VG9TZW5kLCBzZXRBbW91bnRUb1NlbmRdID0gdXNlU3RhdGU8bnVtYmVyPigpO1xuXG4gIGNvbnN0IFtyZWNpcGllbnRBZGRyZXNzLCBzZXRSZWNpcGllbnRBZGRyZXNzXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcblxuICAvLyBUcnVlIGlmIHVzZXIgaGFzIGNvbm5lY3RlZCB0aGVpciB3YWxsZXQsIGZhbHNlIG90aGVyd2lzZVxuICBjb25zdCBbd2FsbGV0Q29ubmVjdGVkLCBzZXRXYWxsZXRDb25uZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHdlYjNNb2RhbFJlZiA9IHVzZVJlZjxDb3JlPigpO1xuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiB0byBjb25uZWN0IHdhbGxldFxuICBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBnZXRQcm92aWRlck9yU2lnbmVyKCk7XG4gICAgICBzZXRXYWxsZXRDb25uZWN0ZWQodHJ1ZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gZmV0Y2ggYSBQcm92aWRlci9TaWduZXIgaW5zdGFuY2UgZnJvbSBNZXRhbWFza1xuICBjb25zdCBnZXRQcm92aWRlck9yU2lnbmVyID0gYXN5bmMgKG5lZWRTaWduZXIgPSBmYWxzZSkgPT4ge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgd2ViM01vZGFsUmVmIS5jdXJyZW50IS5jb25uZWN0KCk7XG4gICAgY29uc3Qgd2ViM1Byb3ZpZGVyID0gbmV3IHByb3ZpZGVycy5XZWIzUHJvdmlkZXIocHJvdmlkZXIpO1xuXG4gICAgY29uc3QgeyBjaGFpbklkIH0gPSBhd2FpdCB3ZWIzUHJvdmlkZXIuZ2V0TmV0d29yaygpO1xuICAgIGlmIChjaGFpbklkICE9PSA0Mikge1xuICAgICAgd2luZG93LmFsZXJ0KFwiUGxlYXNlIHN3aXRjaCB0byB0aGUgS292YW4gbmV0d29yayFcIik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2Ugc3dpdGNoIHRvIHRoZSBLb3ZhbiBuZXR3b3JrXCIpO1xuICAgIH1cblxuICAgIGlmIChuZWVkU2lnbmVyKSB7XG4gICAgICBjb25zdCBzaWduZXIgPSB3ZWIzUHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICByZXR1cm4gc2lnbmVyO1xuICAgIH1cbiAgICByZXR1cm4gd2ViM1Byb3ZpZGVyO1xuICB9O1xuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiB0byByZXR1cm4gYSBEQU8gQ29udHJhY3QgaW5zdGFuY2VcbiAgLy8gZ2l2ZW4gYSBQcm92aWRlci9TaWduZXJcbiAgY29uc3QgZ2V0Q29udHJhY3RJbnN0YW5jZSA9IChcbiAgICBwcm92aWRlck9yU2lnbmVyOiBwcm92aWRlcnMuUHJvdmlkZXIgfCBTaWduZXJcbiAgKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBDb250cmFjdChcbiAgICAgIGNvbmZpZy5jb250cmFjdEFkZHJlc3MsXG4gICAgICBjb25maWcuY29udHJhY3RBYmksXG4gICAgICBwcm92aWRlck9yU2lnbmVyXG4gICAgKTtcbiAgfTtcblxuICAvLyAgcGllY2Ugb2YgY29kZSB0aGF0IHJ1bnMgZXZlcnl0aW1lIHRoZSB3YWxsZXQgaXMgY29ubmVjdGVkL2Rpc2Nvbm5lY3RlZCBhbmQvb3IgdGhlIGNvbXBvbmVudCByZWZyZXNoZXNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXdhbGxldENvbm5lY3RlZCkge1xuICAgICAgd2ViM01vZGFsUmVmLmN1cnJlbnQgPSBuZXcgV2ViM01vZGFsKHtcbiAgICAgICAgbmV0d29yazogXCJrb3ZhblwiLFxuICAgICAgICBwcm92aWRlck9wdGlvbnM6IHt9LFxuICAgICAgICBkaXNhYmxlSW5qZWN0ZWRQcm92aWRlcjogZmFsc2UsXG4gICAgICB9KTtcblxuICAgICAgY29ubmVjdFdhbGxldCgpLnRoZW4oKCkgPT4ge30pO1xuICAgICAgZ2V0RXRoUHJpY2UoKTtcbiAgICB9XG4gIH0sIFt3YWxsZXRDb25uZWN0ZWRdKTtcblxuICBjb25zdCBnZXRFdGhQcmljZSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2lnbmVyID0gYXdhaXQgZ2V0UHJvdmlkZXJPclNpZ25lcih0cnVlKTtcbiAgICAgIGNvbnN0IGNvbnRyYWN0ID0gZ2V0Q29udHJhY3RJbnN0YW5jZShzaWduZXIpO1xuICAgICAgY29uc3QgX2V0aFByaWNlSW5Vc2QgPSBhd2FpdCBjb250cmFjdC5nZXRFdGhVc2QoKTtcbiAgICAgIHNldEV0aFByaWNlSW5Vc2QoXG4gICAgICAgIHBhcnNlSW50KEJpZ051bWJlci5mcm9tKF9ldGhQcmljZUluVXNkKS50b1N0cmluZygpKSAvIDEwMDAwMDAwMFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIGFsZXJ0KGVycm9yPy5tZXNzYWdlKTtcbiAgICB9IGZpbmFsbHkge1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZW5kRXRoID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIWFtb3VudFRvU2VuZCB8fCAhcmVjaXBpZW50QWRkcmVzcykge1xuICAgICAgICBhbGVydChcInBsZWFzZSBmaWxsIHRoZSBmb3JtXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyh7IGFtb3VudFRvU2VuZCwgcmVjaXBpZW50QWRkcmVzcyB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coeyBhbW91bnRUb1NlbmQsIHJlY2lwaWVudEFkZHJlc3MgfSk7XG5cbiAgICAgIGNvbnN0IGV0aFRvU2VuZCA9IGV0aFByaWNlSW5Vc2Q7XG5cbiAgICAgIGNvbnN0IHNpZ25lciA9IGF3YWl0IGdldFByb3ZpZGVyT3JTaWduZXIodHJ1ZSk7XG4gICAgICBjb25zdCBjb250cmFjdCA9IGdldENvbnRyYWN0SW5zdGFuY2Uoc2lnbmVyKTtcbiAgICAgIGNvbnN0IHR4biA9IGF3YWl0IGNvbnRyYWN0LnNlbmRFdGhlcihyZWNpcGllbnRBZGRyZXNzLCB7XG4gICAgICAgIHZhbHVlOiBwYXJzZUV0aGVyKGFtb3VudFRvU2VuZC50b1N0cmluZygpKSxcbiAgICAgIH0pO1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIHR4bi53YWl0KCk7XG4gICAgICBhbGVydChcInR4biBzZW50XCIpO1xuICAgICAgY29uc29sZS5sb2coeyB0eG4gfSk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICBhbGVydChlcnJvcj8ubWVzc2FnZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB1bmRlcmxpbmUgbXktOFwiPlNlbmQgRVRIIGluIFVTRDwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm15LTJcIj5cbiAgICAgICAgICBSZWNpcGllbnQ6XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIHNldFJlY2lwaWVudEFkZHJlc3MoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBuYW1lPVwicmVjaXBpZW50XCJcbiAgICAgICAgICAgIHR5cGU9e1widGV4dFwifVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJteS0yIGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICBBbm91bnQgdG8gc2VuZCAoaW4gVVNEKTpcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIG1iLTFcIj5cbiAgICAgICAgICAgIEN1cnJlbnQgRVRIIHByaWNlIChpbiBVU0QpOiB7ZXRoUHJpY2VJblVzZH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIHNldEFtb3VudFRvU2VuZChwYXJzZUZsb2F0KGV2ZW50LnRhcmdldC52YWx1ZSkpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG5hbWU9e1wiYW1vdW50XCJ9XG4gICAgICAgICAgICBzdGVwPXtcImFueVwifVxuICAgICAgICAgICAgdHlwZT17XCJudW1iZXJcIn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYm9yZGVyIGJnLWluZGlnby01MDAgcC0yIG15LTJcIlxuICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGF3YWl0IHNlbmRFdGgoKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgU2VuZCBFVEhcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQmlnTnVtYmVyIiwiQ29udHJhY3QiLCJwcm92aWRlcnMiLCJXZWIzTW9kYWwiLCJjb25maWciLCJwYXJzZUV0aGVyIiwiTWFpbiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXRoUHJpY2VJblVzZCIsInNldEV0aFByaWNlSW5Vc2QiLCJhbW91bnRUb1NlbmQiLCJzZXRBbW91bnRUb1NlbmQiLCJyZWNpcGllbnRBZGRyZXNzIiwic2V0UmVjaXBpZW50QWRkcmVzcyIsIndhbGxldENvbm5lY3RlZCIsInNldFdhbGxldENvbm5lY3RlZCIsIndlYjNNb2RhbFJlZiIsImNvbm5lY3RXYWxsZXQiLCJnZXRQcm92aWRlck9yU2lnbmVyIiwiY29uc29sZSIsImVycm9yIiwibmVlZFNpZ25lciIsInByb3ZpZGVyIiwid2ViM1Byb3ZpZGVyIiwiY2hhaW5JZCIsInNpZ25lciIsImN1cnJlbnQiLCJjb25uZWN0IiwiV2ViM1Byb3ZpZGVyIiwiZ2V0TmV0d29yayIsIndpbmRvdyIsImFsZXJ0IiwiRXJyb3IiLCJnZXRTaWduZXIiLCJnZXRDb250cmFjdEluc3RhbmNlIiwicHJvdmlkZXJPclNpZ25lciIsImNvbnRyYWN0QWRkcmVzcyIsImNvbnRyYWN0QWJpIiwibmV0d29yayIsInByb3ZpZGVyT3B0aW9ucyIsImRpc2FibGVJbmplY3RlZFByb3ZpZGVyIiwidGhlbiIsImdldEV0aFByaWNlIiwiY29udHJhY3QiLCJfZXRoUHJpY2VJblVzZCIsImdldEV0aFVzZCIsInBhcnNlSW50IiwiZnJvbSIsInRvU3RyaW5nIiwibWVzc2FnZSIsInNlbmRFdGgiLCJldGhUb1NlbmQiLCJ0eG4iLCJsb2ciLCJzZW5kRXRoZXIiLCJ2YWx1ZSIsIndhaXQiLCJkaXYiLCJoMSIsImNsYXNzTmFtZSIsImxhYmVsIiwiaW5wdXQiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsInR5cGUiLCJzcGFuIiwicGFyc2VGbG9hdCIsInN0ZXAiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Main.tsx\n");

/***/ })

});