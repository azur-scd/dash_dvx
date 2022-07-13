webpackHotUpdatedash_dvx("main",{

/***/ "./src/demo/AppGrid.js":
/*!*****************************!*\
  !*** ./src/demo/AppGrid.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib */ "./src/lib/index.js");
/* harmony import */ var _data_example_grid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data_example_grid.js */ "./src/demo/data_example_grid.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint no-magic-numbers: 0 */



var columns = ['CompanyName', 'City', 'State', 'Phone', 'Fax'];
var selectedRowKeys = [8, 9];

var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App() {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this);
    _this.state = {
      dataSource: _data_example_grid_js__WEBPACK_IMPORTED_MODULE_2__["customers"],
      columns: columns,
      keyExpr: "ID",
      defaultSelectedRowKeys: selectedRowKeys,
      selected_rows: []
    };
    _this.setProps = _this.setProps.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "setProps",
    value: function setProps(newProps) {
      this.setState(newProps);
      console.log(newProps);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        id: "test",
        dataSource: this.state.dataSource,
        keyExpr: this.state.keyExpr,
        defaultColumns: this.state.columns,
        defaultSelectedRowKeys: this.state.defaultSelectedRowKeys,
        selected_rows: this.state.selected_rows,
        setProps: this.setProps
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/demo/data_example_grid.js":
/*!***************************************!*\
  !*** ./src/demo/data_example_grid.js ***!
  \***************************************/
/*! exports provided: customers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customers", function() { return customers; });
var customers = [{
  ID: 1,
  CompanyName: 'Super Mart of the West',
  Address: '702 SW 8th Street',
  City: 'Bentonville',
  State: 'Arkansas',
  Zipcode: 72716,
  Phone: '(800) 555-2797',
  Fax: '(800) 555-2171',
  Website: 'http://www.nowebsitesupermart.com'
}, {
  ID: 2,
  CompanyName: 'Electronics Depot',
  Address: '2455 Paces Ferry Road NW',
  City: 'Atlanta',
  State: 'Georgia',
  Zipcode: 30339,
  Phone: '(800) 595-3232',
  Fax: '(800) 595-3231',
  Website: 'http://www.nowebsitedepot.com'
}, {
  ID: 3,
  CompanyName: 'K&S Music',
  Address: '1000 Nicllet Mall',
  City: 'Minneapolis',
  State: 'Minnesota',
  Zipcode: 55403,
  Phone: '(612) 304-6073',
  Fax: '(612) 304-6074',
  Website: 'http://www.nowebsitemusic.com'
}, {
  ID: 4,
  CompanyName: "Tom's Club",
  Address: '999 Lake Drive',
  City: 'Issaquah',
  State: 'Washington',
  Zipcode: 98027,
  Phone: '(800) 955-2292',
  Fax: '(800) 955-2293',
  Website: 'http://www.nowebsitetomsclub.com'
}, {
  ID: 5,
  CompanyName: 'E-Mart',
  Address: '3333 Beverly Rd',
  City: 'Hoffman Estates',
  State: 'Illinois',
  Zipcode: 60179,
  Phone: '(847) 286-2500',
  Fax: '(847) 286-2501',
  Website: 'http://www.nowebsiteemart.com'
}, {
  ID: 6,
  CompanyName: 'Walters',
  Address: '200 Wilmot Rd',
  City: 'Deerfield',
  State: 'Illinois',
  Zipcode: 60015,
  Phone: '(847) 940-2500',
  Fax: '(847) 940-2501',
  Website: 'http://www.nowebsitewalters.com'
}, {
  ID: 7,
  CompanyName: 'StereoShack',
  Address: '400 Commerce S',
  City: 'Fort Worth',
  State: 'Texas',
  Zipcode: 76102,
  Phone: '(817) 820-0741',
  Fax: '(817) 820-0742',
  Website: 'http://www.nowebsiteshack.com'
}, {
  ID: 8,
  CompanyName: 'Circuit Town',
  Address: '2200 Kensington Court',
  City: 'Oak Brook',
  State: 'Illinois',
  Zipcode: 60523,
  Phone: '(800) 955-2929',
  Fax: '(800) 955-9392',
  Website: 'http://www.nowebsitecircuittown.com'
}, {
  ID: 9,
  CompanyName: 'Premier Buy',
  Address: '7601 Penn Avenue South',
  City: 'Richfield',
  State: 'Minnesota',
  Zipcode: 55423,
  Phone: '(612) 291-1000',
  Fax: '(612) 291-2001',
  Website: 'http://www.nowebsitepremierbuy.com'
}, {
  ID: 10,
  CompanyName: 'ElectrixMax',
  Address: '263 Shuman Blvd',
  City: 'Naperville',
  State: 'Illinois',
  Zipcode: 60563,
  Phone: '(630) 438-7800',
  Fax: '(630) 438-7801',
  Website: 'http://www.nowebsiteelectrixmax.com'
}, {
  ID: 11,
  CompanyName: 'Video Emporium',
  Address: '1201 Elm Street',
  City: 'Dallas',
  State: 'Texas',
  Zipcode: 75270,
  Phone: '(214) 854-3000',
  Fax: '(214) 854-3001',
  Website: 'http://www.nowebsitevideoemporium.com'
}, {
  ID: 12,
  CompanyName: 'Screen Shop',
  Address: '1000 Lowes Blvd',
  City: 'Mooresville',
  State: 'North Carolina',
  Zipcode: 28117,
  Phone: '(800) 445-6937',
  Fax: '(800) 445-6938',
  Website: 'http://www.nowebsitescreenshop.com'
}];

/***/ })

})
//# sourceMappingURL=4ce3bef-main-wps-hmr.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiI0Y2UzYmVmLW1haW4td3BzLWhtci5qcyIsInNvdXJjZVJvb3QiOiIifQ==