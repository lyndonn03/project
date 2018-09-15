/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/Components/hocs/auth.js":
/*!********************************************!*\
  !*** ./src/client/Components/hocs/auth.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nexports.default = function (ChildComponent) {\n    var Auth = function (_React$Component) {\n        _inherits(Auth, _React$Component);\n\n        function Auth() {\n            _classCallCheck(this, Auth);\n\n            return _possibleConstructorReturn(this, (Auth.__proto__ || Object.getPrototypeOf(Auth)).apply(this, arguments));\n        }\n\n        _createClass(Auth, [{\n            key: 'render',\n            value: function render() {\n                switch (this.props.checkAuth.payload) {\n                    case false:\n                        console.log('wews');\n                        return _react2.default.createElement(ChildComponent, this.props);\n                    case null:\n                        console.log(\"null\");\n                        return _react2.default.createElement(ChildComponent, this.props);\n                    default:\n                        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/test1' });\n                }\n            }\n        }]);\n\n        return Auth;\n    }(_react2.default.Component);\n\n    function mapStateToProps(_ref) {\n        var checkAuth = _ref.checkAuth;\n\n        return { checkAuth: checkAuth };\n    }\n\n    return (0, _reactRedux.connect)(mapStateToProps)(Auth);\n};\n\n//# sourceURL=webpack:///./src/client/Components/hocs/auth.js?");

/***/ }),

/***/ "./src/client/Components/hocs/requireAuth.js":
/*!***************************************************!*\
  !*** ./src/client/Components/hocs/requireAuth.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nexports.default = function (ChildComponent) {\n    var RequireAuth = function (_React$Component) {\n        _inherits(RequireAuth, _React$Component);\n\n        function RequireAuth() {\n            _classCallCheck(this, RequireAuth);\n\n            return _possibleConstructorReturn(this, (RequireAuth.__proto__ || Object.getPrototypeOf(RequireAuth)).apply(this, arguments));\n        }\n\n        _createClass(RequireAuth, [{\n            key: 'render',\n            value: function render() {\n                switch (this.props.checkAuth.payload) {\n                    case false:\n                        console.log('wews');\n                        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/auth' });\n                    case null:\n                        console.log(\"null\");\n                        return _react2.default.createElement(\n                            'div',\n                            null,\n                            'Loading...'\n                        );\n                    default:\n                        return _react2.default.createElement(ChildComponent, this.props);\n                }\n            }\n        }]);\n\n        return RequireAuth;\n    }(_react2.default.Component);\n\n    var mapStateToProps = function mapStateToProps(_ref) {\n        var checkAuth = _ref.checkAuth;\n\n        return { checkAuth: checkAuth };\n    };\n\n    return (0, _reactRedux.connect)(mapStateToProps)(RequireAuth);\n};\n\n//# sourceURL=webpack:///./src/client/Components/hocs/requireAuth.js?");

/***/ }),

/***/ "./src/client/Pages/HomePage.js":
/*!**************************************!*\
  !*** ./src/client/Pages/HomePage.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _index = __webpack_require__(/*! ../_actions/index */ \"./src/client/_actions/index.js\");\n\nvar _requireAuth = __webpack_require__(/*! ../Components/hocs/requireAuth */ \"./src/client/Components/hocs/requireAuth.js\");\n\nvar _requireAuth2 = _interopRequireDefault(_requireAuth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar HomePage = function (_React$Component) {\n    _inherits(HomePage, _React$Component);\n\n    function HomePage() {\n        _classCallCheck(this, HomePage);\n\n        return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));\n    }\n\n    _createClass(HomePage, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            this.props.FETCH_USER_ACTION();\n        }\n    }, {\n        key: 'renderUser',\n        value: function renderUser() {\n            return this.props.res ? this.props.res[\"acc_user\"] : '';\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'p',\n                    null,\n                    'Welcome, ',\n                    _react2.default.createElement(\n                        'strong',\n                        null,\n                        this.renderUser()\n                    )\n                )\n            );\n        }\n    }]);\n\n    return HomePage;\n}(_react2.default.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        res: state.checkAuth.payload\n    };\n};\n\nvar loadData = function loadData(_ref) {\n    var dispatch = _ref.dispatch;\n\n    console.log(\"loadDAta\");\n    return dispatch((0, _index.FETCH_USER_ACTION)());\n};\nexports.default = {\n    component: (0, _reactRedux.connect)(mapStateToProps, { FETCH_USER_ACTION: _index.FETCH_USER_ACTION })((0, _requireAuth2.default)(HomePage)),\n    loadData: loadData\n};\n\n//# sourceURL=webpack:///./src/client/Pages/HomePage.js?");

/***/ }),

/***/ "./src/client/Pages/LogInPage.js":
/*!***************************************!*\
  !*** ./src/client/Pages/LogInPage.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _index = __webpack_require__(/*! ../_actions/index */ \"./src/client/_actions/index.js\");\n\nvar _auth = __webpack_require__(/*! ../Components/hocs/auth */ \"./src/client/Components/hocs/auth.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar LogInPage = function (_React$Component) {\n    _inherits(LogInPage, _React$Component);\n\n    function LogInPage() {\n        _classCallCheck(this, LogInPage);\n\n        var _this = _possibleConstructorReturn(this, (LogInPage.__proto__ || Object.getPrototypeOf(LogInPage)).call(this));\n\n        _this.SignIn = _this.SignIn.bind(_this);\n        return _this;\n    }\n\n    _createClass(LogInPage, [{\n        key: 'SignIn',\n        value: function SignIn() {\n            var data = {\n                username: document.querySelector('#username').value,\n                password: document.querySelector('#password').value\n            };\n\n            _axios2.default.post('/api/auth', data).then(function (data) {\n                console.log(data);\n                if (data.data.success) {\n                    window.location = \"/test1\";\n                }\n            }).catch(function (err) {\n                return console.log(err);\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                { id: \"LogInpage\" },\n                _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement(\n                        'label',\n                        { htmlFor: \"username\" },\n                        'Username : '\n                    ),\n                    _react2.default.createElement('input', { type: \"text\", id: \"username\", name: 'username', placeholder: 'Username' })\n                ),\n                _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement(\n                        'label',\n                        { htmlFor: \"password\" },\n                        'Password : '\n                    ),\n                    _react2.default.createElement('input', { type: \"password\", id: \"password\", name: 'password', placeholder: 'Password' })\n                ),\n                _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement('input', { onClick: this.SignIn, type: \"submit\", value: 'Sign in' })\n                )\n            );\n        }\n    }]);\n\n    return LogInPage;\n}(_react2.default.Component);\n\nvar mapStateToProps = function mapStateToProps(_ref) {\n    var checkAuth = _ref.checkAuth;\n\n    return {\n        res: checkAuth\n    };\n};\n\nexports.default = {\n    component: (0, _reactRedux.connect)(mapStateToProps, { FETCH_USER_ACTION: _index.FETCH_USER_ACTION })((0, _auth2.default)(LogInPage)),\n    loadData: function loadData(_ref2) {\n        var dispatch = _ref2.dispatch;\n        return dispatch((0, _index.FETCH_USER_ACTION)());\n    }\n};\n\n//# sourceURL=webpack:///./src/client/Pages/LogInPage.js?");

/***/ }),

/***/ "./src/client/Pages/NotFoundPage.js":
/*!******************************************!*\
  !*** ./src/client/Pages/NotFoundPage.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar NotFoundPage = function NotFoundPage(_ref) {\n    var _ref$staticContext = _ref.staticContext,\n        staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;\n\n\n    staticContext.notFound = true;\n\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n            'h1',\n            null,\n            'Page Not Found'\n        )\n    );\n};\n\nexports.default = {\n    component: NotFoundPage\n};\n\n//# sourceURL=webpack:///./src/client/Pages/NotFoundPage.js?");

/***/ }),

/***/ "./src/client/Routes.js":
/*!******************************!*\
  !*** ./src/client/Routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _LogInPage = __webpack_require__(/*! ./Pages/LogInPage */ \"./src/client/Pages/LogInPage.js\");\n\nvar _LogInPage2 = _interopRequireDefault(_LogInPage);\n\nvar _HomePage = __webpack_require__(/*! ./Pages/HomePage */ \"./src/client/Pages/HomePage.js\");\n\nvar _HomePage2 = _interopRequireDefault(_HomePage);\n\nvar _NotFoundPage = __webpack_require__(/*! ./Pages/NotFoundPage */ \"./src/client/Pages/NotFoundPage.js\");\n\nvar _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = [_extends({}, _LogInPage2.default, {\n    path: '/auth',\n    exact: true\n}), _extends({}, _HomePage2.default, {\n    path: '/test1'\n}), _extends({}, _NotFoundPage2.default)];\n\n//# sourceURL=webpack:///./src/client/Routes.js?");

/***/ }),

/***/ "./src/client/_actions/index.js":
/*!**************************************!*\
  !*** ./src/client/_actions/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = {\n    PENDING: 'FETCH_CURRENT_USER_PENDING',\n    SUCCESS: 'FETCH_CURRENT_USER_SUCCESS',\n    FAILED: 'FETCH_CURRENT_USER_FAILED'\n};\nvar FETCH_USER_ACTION = exports.FETCH_USER_ACTION = function FETCH_USER_ACTION() {\n    return function () {\n        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {\n            var act;\n            return regeneratorRuntime.wrap(function _callee$(_context) {\n                while (1) {\n                    switch (_context.prev = _context.next) {\n                        case 0:\n                            _context.next = 2;\n                            return api.get('/current_user').catch(function (err) {\n                                console.log(err);\n                                dispatch({\n                                    type: FETCH_CURRENT_USER.FAILED,\n                                    payload: false\n                                });\n                            });\n\n                        case 2:\n                            act = _context.sent;\n\n\n                            dispatch({\n                                type: FETCH_CURRENT_USER.SUCCESS,\n                                payload: act\n                            });\n\n                        case 4:\n                        case 'end':\n                            return _context.stop();\n                    }\n                }\n            }, _callee, undefined);\n        }));\n\n        return function (_x, _x2, _x3) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n};\n\nvar SIGN_IN_USER = exports.SIGN_IN_USER = {\n    PENDING: 'SIGN_IN_USER_PENDING',\n    SUCCESS: 'SIGN_IN_USER_SUCCESS',\n    FAILED: 'SIGN_IN_USER_FAILED'\n};\n\nvar SIGN_IN_USER_ACTION = exports.SIGN_IN_USER_ACTION = function SIGN_IN_USER_ACTION(data) {\n    return function () {\n        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {\n            return regeneratorRuntime.wrap(function _callee2$(_context2) {\n                while (1) {\n                    switch (_context2.prev = _context2.next) {\n                        case 0:\n                            dispatch({\n                                type: SIGN_IN_USER.PENDING,\n                                payload: null\n                            });\n\n                            _context2.next = 3;\n                            return api.post('/auth', data).then(function (data) {\n                                var dispatcher = dispatch({\n                                    type: SIGN_IN_USER.SUCCESS,\n                                    payload: data\n                                });\n\n                                if (getState().signAuth.payload.success) {\n                                    return window.location = '/test1';\n                                }\n\n                                return dispatcher;\n                            }).catch(function (err) {\n                                return dispatch({\n                                    type: SIGN_IN_USER.FAILED,\n                                    payload: false\n                                });\n                            });\n\n                        case 3:\n                        case 'end':\n                            return _context2.stop();\n                    }\n                }\n            }, _callee2, undefined);\n        }));\n\n        return function (_x4, _x5, _x6) {\n            return _ref2.apply(this, arguments);\n        };\n    }();\n};\n\n//# sourceURL=webpack:///./src/client/_actions/index.js?");

/***/ }),

/***/ "./src/client/_reducers/FetchUserReducer.js":
/*!**************************************************!*\
  !*** ./src/client/_reducers/FetchUserReducer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _index = __webpack_require__(/*! ../_actions/index */ \"./src/client/_actions/index.js\");\n\nvar initialState = {\n    payload: {}\n};\n\nexports.default = function () {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n    var action = arguments[1];\n\n    switch (action.type) {\n        case _index.FETCH_CURRENT_USER.PENDING:\n            return Object.assign({}, state, {\n                payload: null\n            });\n        case _index.FETCH_CURRENT_USER.SUCCESS:\n            return Object.assign({}, state, {\n                payload: action.payload.data\n            });\n        case _index.FETCH_CURRENT_USER.FAILED:\n            return Object.assign({}, state, {\n                payload: false\n            });\n        default:\n            return state;\n    }\n};\n\n//# sourceURL=webpack:///./src/client/_reducers/FetchUserReducer.js?");

/***/ }),

/***/ "./src/client/_reducers/SignInReducer.js":
/*!***********************************************!*\
  !*** ./src/client/_reducers/SignInReducer.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _index = __webpack_require__(/*! ../_actions/index */ \"./src/client/_actions/index.js\");\n\nvar initialState = {\n    type: '',\n    payload: null\n};\n\nexports.default = function () {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n    var action = arguments[1];\n\n    switch (action.type) {\n        case _index.SIGN_IN_USER.PENDING:\n            return Object.assign({}, state, {\n                type: action.type,\n                payload: action.payload\n            });\n        case _index.SIGN_IN_USER.SUCCESS:\n            return Object.assign({}, state, {\n                type: action.type,\n                payload: action.payload.data\n            });\n        case _index.SIGN_IN_USER.FAILED:\n            return Object.assign({}, state, {\n                type: action.type,\n                payload: action.payload\n            });\n        default:\n            return state;\n    }\n};\n\n//# sourceURL=webpack:///./src/client/_reducers/SignInReducer.js?");

/***/ }),

/***/ "./src/client/_reducers/index.js":
/*!***************************************!*\
  !*** ./src/client/_reducers/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _FetchUserReducer = __webpack_require__(/*! ./FetchUserReducer */ \"./src/client/_reducers/FetchUserReducer.js\");\n\nvar _FetchUserReducer2 = _interopRequireDefault(_FetchUserReducer);\n\nvar _SignInReducer = __webpack_require__(/*! ./SignInReducer */ \"./src/client/_reducers/SignInReducer.js\");\n\nvar _SignInReducer2 = _interopRequireDefault(_SignInReducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.combineReducers)({\n    checkAuth: _FetchUserReducer2.default,\n    signAuth: _SignInReducer2.default\n});\n\n//# sourceURL=webpack:///./src/client/_reducers/index.js?");

/***/ }),

/***/ "./src/helpers/Renderer.js":
/*!*********************************!*\
  !*** ./src/helpers/Renderer.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Routes = __webpack_require__(/*! ../client/Routes */ \"./src/client/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _serializeJavascript = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n\nvar _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (req, store, context) {\n    var DOM = (0, _server.renderToString)(_react2.default.createElement(\n        _reactRedux.Provider,\n        { store: store },\n        _react2.default.createElement(\n            _reactRouterDom.StaticRouter,\n            { context: context, location: req.path },\n            (0, _reactRouterConfig.renderRoutes)(_Routes2.default)\n        )\n    ));\n\n    return '\\n         <html>\\n            <head>\\n                <body>\\n                    <div id=\"root\">' + DOM + '</div>\\n                    <script>\\n                        window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\\n                    </script>\\n                    <script src=\"build.js\"></script>\\n                </body>\\n            </head>\\n        </html>\\n    ';\n};\n\n//# sourceURL=webpack:///./src/helpers/Renderer.js?");

/***/ }),

/***/ "./src/helpers/createStore.js":
/*!************************************!*\
  !*** ./src/helpers/createStore.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _index = __webpack_require__(/*! ../client/_reducers/index */ \"./src/client/_reducers/index.js\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (req) {\n    var instance = _axios2.default.create({\n        baseURL: \"http://localhost:8080\",\n        headers: { cookie: req.get(\"cookie\") || '' }\n    });\n\n    var store = (0, _redux.createStore)(_index2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(instance)));\n\n    return store;\n};\n\n//# sourceURL=webpack:///./src/helpers/createStore.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _expressHttpProxy = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n\nvar _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Renderer = __webpack_require__(/*! ./helpers/Renderer */ \"./src/helpers/Renderer.js\");\n\nvar _Renderer2 = _interopRequireDefault(_Renderer);\n\nvar _createStore = __webpack_require__(/*! ./helpers/createStore */ \"./src/helpers/createStore.js\");\n\nvar _createStore2 = _interopRequireDefault(_createStore);\n\nvar _Routes = __webpack_require__(/*! ./client/Routes */ \"./src/client/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n\napp.use('/api', (0, _expressHttpProxy2.default)('http://localhost:8080'));\napp.use(_express2.default.static('public'));\n\napp.get('*', function (req, res) {\n\n    var store = (0, _createStore2.default)(req);\n\n    var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {\n        var route = _ref.route;\n\n        return route.loadData ? route.loadData(store) : null;\n    }).map(function (promise) {\n        if (promise) {\n            return new Promise(function (resolve, reject) {\n                return promise.then(resolve).catch(resolve);\n            });\n        }\n    });\n\n    Promise.all(promises).then(function () {\n        var context = {};\n\n        var content = (0, _Renderer2.default)(req, store, context);\n\n        if (context.url) {\n            console.log(\"If url\");\n            return res.redirect(301, context.url);\n        }\n\n        if (context.notFound) {\n            res.status(404);\n        }\n\n        res.send(content);\n    });\n});\n\nvar port = process.env.port || 3000;\napp.listen(port, function () {\n    return console.log('Renderer is running at port ' + port);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");\n\n//# sourceURL=webpack:///external_%22express-http-proxy%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ })

/******/ });