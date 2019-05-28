webpackHotUpdate("static/development/pages/create.js",{

/***/ "./pages/create.js":
/*!*************************!*\
  !*** ./pages/create.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");










var baseUrl = 'http://localhost:5000?';

var CreateMadLib =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CreateMadLib, _Component);

  function CreateMadLib() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CreateMadLib);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CreateMadLib)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      madLibContent: '',
      madLibName: '',
      showMadLib: false,
      madLibList: []
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "saveMadLib", function (event) {
      event.preventDefault();
      var url = baseUrl + 'name=' + _this.state.madLibName + '&data=' + _this.state.madLibName;
      console.log('url for query is: ', url);
      fetch(url, {
        method: "POST"
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        return console.log(data);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "submitMadLib", function (event) {
      event.preventDefault();

      if (_this.state.madLibContent === "") {
        console.log('No madlib to display!');
      } else {
        var content = _this.state.madLibContent;

        if (content.substring(0, 2) === "///") {
          content = "    " + content;
        }

        var MadlibArray = content.split("///");

        _this.setState({
          showMadLib: true,
          madLibList: MadlibArray
        });
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CreateMadLib, [{
    key: "renderMadLib",
    value: function renderMadLib() {
      console.log(this.state.madLibList);
      var madLibPreview = this.state.madLibList.map(function (element, index) {
        if ((index + 2) % 2 == 0) {
          //return <h5>{element}</h5>;
          return element;
        } else {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, element, ":______________ _");
        }
      });
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, this.state.madLibName), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, madLibPreview), ";");
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", null, "Create a Mad Lib"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        action: "submit",
        onSubmit: this.submitMadLib
      }, "Name of MadLib:", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        onChange: function onChange(event) {
          return _this2.setState({
            madLibName: event.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), "MadLib Content", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("textarea", {
        cols: "30",
        rows: "5",
        defaultValue: "Enter your madlib text here please wrap the words to be substituted with three backslashes. So if you wanted the user to choose a weather word you would enter the following: The weather on that day was extremelly ///weather word///...",
        onChange: function onChange(event) {
          return _this2.setState({
            madLibContent: event.target.value
          });
        },
        style: {
          width: "75%"
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "submit"
      }, "Create"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: this.saveMadLib
      }, "Save")), this.state.showMadLib && this.renderMadLib());
    }
  }]);

  return CreateMadLib;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CreateMadLib);

/***/ })

})
//# sourceMappingURL=create.js.85e8f8d74a5aa4514523.hot-update.js.map