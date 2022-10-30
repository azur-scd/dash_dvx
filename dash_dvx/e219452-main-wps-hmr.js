webpackHotUpdatedash_dvx("main",{

/***/ "./src/demo/AppGrid.js":
false,

/***/ "./src/demo/AppList.js":
/*!*****************************!*\
  !*** ./src/demo/AppList.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib */ "./src/lib/index.js");
/* harmony import */ var _data_example_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data_example_list.js */ "./src/demo/data_example_list.js");
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
var selectedRowKeys = [28, 32];
var expandedRowKeys = [3];

var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App() {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this);
    _this.state = {
      dataSource: _data_example_list_js__WEBPACK_IMPORTED_MODULE_2__["tasks"],
      keyExpr: "Task_ID",
      parentIdExpr: "Task_Parent_ID",
      selectedRowKeys: selectedRowKeys,
      columns: columns,
      selected_rows: [],
      autoExpandAll: true //defaultExpandedRowKeys: expandedRowKeys

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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["List"], {
        id: "test",
        dataSource: this.state.dataSource,
        keyExpr: this.state.keyExpr,
        parentIdExpr: this.state.parentIdExpr,
        selectedRowKeys: this.state.selectedRowKeys,
        defaultColumns: this.state.columns,
        selected_rows: this.state.selected_rows,
        autoExpandAll: this.state.autoExpandAll //defaultExpandedRowKeys={this.state.defaultExpandedRowKeys}
        ,
        setProps: this.setProps
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/demo/data_example_grid.js":
false,

/***/ "./src/demo/data_example_list.js":
/*!***************************************!*\
  !*** ./src/demo/data_example_list.js ***!
  \***************************************/
/*! exports provided: tasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tasks", function() { return tasks; });
var tasks = [{
  Task_ID: 1,
  Task_Assigned_Employee_ID: 1,
  Task_Subject: 'Plans 2015',
  Task_Start_Date: '2015-01-01T00:00:00',
  Task_Due_Date: '2015-04-01T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 4,
  Task_Completion: 100,
  Task_Parent_ID: 0
}, {
  Task_ID: 2,
  Task_Assigned_Employee_ID: 2,
  Task_Subject: 'Health Insurance',
  Task_Start_Date: '2015-02-12T00:00:00',
  Task_Due_Date: '2015-05-30T00:00:00',
  Task_Status: 'In Progress',
  Task_Priority: 4,
  Task_Completion: 75,
  Task_Parent_ID: 0
}, {
  Task_ID: 3,
  Task_Assigned_Employee_ID: 4,
  Task_Subject: 'New Brochures',
  Task_Start_Date: '2015-02-17T00:00:00',
  Task_Due_Date: '2015-03-01T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 3,
  Task_Completion: 100,
  Task_Parent_ID: 0
}, {
  Task_ID: 4,
  Task_Assigned_Employee_ID: 31,
  Task_Subject: 'Training',
  Task_Start_Date: '2015-03-02T00:00:00',
  Task_Due_Date: '2015-06-29T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 3,
  Task_Completion: 100,
  Task_Parent_ID: 0
}, {
  Task_ID: 5,
  Task_Assigned_Employee_ID: 5,
  Task_Subject: 'NDA',
  Task_Start_Date: '2015-03-12T00:00:00',
  Task_Due_Date: '2015-05-01T00:00:00',
  Task_Status: 'In Progress',
  Task_Priority: 3,
  Task_Completion: 90,
  Task_Parent_ID: 0
}, {
  Task_ID: 6,
  Task_Assigned_Employee_ID: 7,
  Task_Subject: 'Revenue Projections',
  Task_Start_Date: '2015-03-24T00:00:00',
  Task_Due_Date: '2015-04-15T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 3,
  Task_Completion: 100,
  Task_Parent_ID: 0
}, {
  Task_ID: 7,
  Task_Assigned_Employee_ID: 9,
  Task_Subject: 'TV Recall',
  Task_Start_Date: '2015-04-18T00:00:00',
  Task_Due_Date: '2016-02-04T00:00:00',
  Task_Status: 'In Progress',
  Task_Priority: 4,
  Task_Completion: 90,
  Task_Parent_ID: 0
}, {
  Task_ID: 8,
  Task_Assigned_Employee_ID: 6,
  Task_Subject: 'Overtime',
  Task_Start_Date: '2015-06-10T00:00:00',
  Task_Due_Date: '2015-06-20T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 2,
  Task_Completion: 100,
  Task_Parent_ID: 0
}, {
  Task_ID: 9,
  Task_Assigned_Employee_ID: 8,
  Task_Subject: 'Recall and Refund Forms',
  Task_Start_Date: '2015-06-17T00:00:00',
  Task_Due_Date: '2016-04-09T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 2,
  Task_Completion: 100,
  Task_Parent_ID: 0
}, {
  Task_ID: 10,
  Task_Assigned_Employee_ID: 10,
  Task_Subject: 'Shippers',
  Task_Start_Date: '2015-07-10T00:00:00',
  Task_Due_Date: '2016-04-11T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 2,
  Task_Completion: 100,
  Task_Parent_ID: 0
}, {
  Task_ID: 11,
  Task_Assigned_Employee_ID: 6,
  Task_Subject: 'Hardware Upgrade',
  Task_Start_Date: '2015-07-22T00:00:00',
  Task_Due_Date: '2016-05-01T00:00:00',
  Task_Status: 'In Progress',
  Task_Priority: 3,
  Task_Completion: 95,
  Task_Parent_ID: 0
}, {
  Task_ID: 12,
  Task_Assigned_Employee_ID: 6,
  Task_Subject: 'Touch-Enabled Apps',
  Task_Start_Date: '2015-08-05T00:00:00',
  Task_Due_Date: '2016-04-30T00:00:00',
  Task_Status: 'In Progress',
  Task_Priority: 2,
  Task_Completion: 90,
  Task_Parent_ID: 0
}, {
  Task_ID: 13,
  Task_Assigned_Employee_ID: 6,
  Task_Subject: 'Online Sales',
  Task_Start_Date: '2015-08-20T00:00:00',
  Task_Due_Date: '2015-09-15T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 4,
  Task_Completion: 100,
  Task_Parent_ID: 0
}, {
  Task_ID: 14,
  Task_Assigned_Employee_ID: 6,
  Task_Subject: 'New Website Design',
  Task_Start_Date: '2015-09-17T00:00:00',
  Task_Due_Date: '2015-11-01T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 4,
  Task_Completion: 100,
  Task_Parent_ID: 0
}, {
  Task_ID: 15,
  Task_Assigned_Employee_ID: 6,
  Task_Subject: 'Bandwidth Increase',
  Task_Start_Date: '2015-11-01T00:00:00',
  Task_Due_Date: '2015-11-07T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 3,
  Task_Completion: 100,
  Task_Parent_ID: 0
}, {
  Task_ID: 16,
  Task_Assigned_Employee_ID: 18,
  Task_Subject: 'Support',
  Task_Start_Date: '2015-11-10T00:00:00',
  Task_Due_Date: '2015-11-15T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 2,
  Task_Completion: 100,
  Task_Parent_ID: 0
}, {
  Task_ID: 17,
  Task_Assigned_Employee_ID: 31,
  Task_Subject: 'Training Material',
  Task_Start_Date: '2015-11-14T00:00:00',
  Task_Due_Date: '2016-02-05T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 3,
  Task_Completion: 100,
  Task_Parent_ID: 0
}, {
  Task_ID: 18,
  Task_Assigned_Employee_ID: 22,
  Task_Subject: 'New Database',
  Task_Start_Date: '2015-12-24T00:00:00',
  Task_Due_Date: '2015-12-29T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 4,
  Task_Completion: 95,
  Task_Parent_ID: 0
}, {
  Task_ID: 19,
  Task_Assigned_Employee_ID: 32,
  Task_Subject: 'New HDMI Specification',
  Task_Start_Date: '2016-01-02T00:00:00',
  Task_Due_Date: '2016-01-31T00:00:00',
  Task_Status: 'Deferred',
  Task_Priority: 2,
  Task_Completion: 50,
  Task_Parent_ID: 0
}, {
  Task_ID: 20,
  Task_Assigned_Employee_ID: 3,
  Task_Subject: 'Automation Server',
  Task_Start_Date: '2016-01-15T00:00:00',
  Task_Due_Date: '2016-04-30T00:00:00',
  Task_Status: 'In Progress',
  Task_Priority: 3,
  Task_Completion: 85,
  Task_Parent_ID: 0
}, {
  Task_ID: 21,
  Task_Assigned_Employee_ID: 40,
  Task_Subject: 'Retail Sales',
  Task_Start_Date: '2016-01-20T00:00:00',
  Task_Due_Date: '2016-02-10T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 4,
  Task_Completion: 100,
  Task_Parent_ID: 0
}, {
  Task_ID: 22,
  Task_Assigned_Employee_ID: 1,
  Task_Subject: 'Reports',
  Task_Start_Date: '2016-03-13T00:00:00',
  Task_Due_Date: '2016-05-07T00:00:00',
  Task_Status: 'In Progress',
  Task_Priority: 4,
  Task_Completion: 50,
  Task_Parent_ID: 0
}, {
  Task_ID: 23,
  Task_Assigned_Employee_ID: 5,
  Task_Subject: 'Budget',
  Task_Start_Date: '2016-03-20T00:00:00',
  Task_Due_Date: '2016-04-01T00:00:00',
  Task_Status: 'In Progress',
  Task_Priority: 4,
  Task_Completion: 30,
  Task_Parent_ID: 0
}, {
  Task_ID: 24,
  Task_Assigned_Employee_ID: 13,
  Task_Subject: 'Shipping Labels',
  Task_Start_Date: '2016-04-01T00:00:00',
  Task_Due_Date: '2016-04-15T00:00:00',
  Task_Status: 'In Progress',
  Task_Priority: 2,
  Task_Completion: 50,
  Task_Parent_ID: 0
}, {
  Task_ID: 25,
  Task_Assigned_Employee_ID: 10,
  Task_Subject: 'New Warehouse',
  Task_Start_Date: '2016-04-05T00:00:00',
  Task_Due_Date: '2016-04-15T00:00:00',
  Task_Status: 'In Progress',
  Task_Priority: 2,
  Task_Completion: 65,
  Task_Parent_ID: 0
}, {
  Task_ID: 26,
  Task_Assigned_Employee_ID: 10,
  Task_Subject: 'Forklift',
  Task_Start_Date: '2016-04-07T00:00:00',
  Task_Due_Date: '2016-04-20T00:00:00',
  Task_Status: 'In Progress',
  Task_Priority: 2,
  Task_Completion: 20,
  Task_Parent_ID: 0
}, {
  Task_ID: 27,
  Task_Assigned_Employee_ID: 1,
  Task_Subject: 'Customer Follow Up Plan',
  Task_Start_Date: '2016-05-05T00:00:00',
  Task_Due_Date: '2016-05-11T00:00:00',
  Task_Status: 'In Progress',
  Task_Priority: 2,
  Task_Completion: 40,
  Task_Parent_ID: 0
}, {
  Task_ID: 28,
  Task_Assigned_Employee_ID: 7,
  Task_Subject: 'Prepare 2015 Financial',
  Task_Start_Date: '2015-01-15T00:00:00',
  Task_Due_Date: '2015-01-31T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 4,
  Task_Completion: 100,
  Task_Parent_ID: 1
}, {
  Task_ID: 29,
  Task_Assigned_Employee_ID: 4,
  Task_Subject: 'Prepare 2015 Marketing Plan',
  Task_Start_Date: '2015-01-01T00:00:00',
  Task_Due_Date: '2015-01-31T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 4,
  Task_Completion: 100,
  Task_Parent_ID: 1
}, {
  Task_ID: 30,
  Task_Assigned_Employee_ID: 2,
  Task_Subject: 'Review Health Insurance Options Under the Affordable Care Act',
  Task_Start_Date: '2015-02-12T00:00:00',
  Task_Due_Date: '2015-04-25T00:00:00',
  Task_Status: 'In Progress',
  Task_Priority: 4,
  Task_Completion: 50,
  Task_Parent_ID: 2
}, {
  Task_ID: 31,
  Task_Assigned_Employee_ID: 1,
  Task_Subject: 'Choose between PPO and HMO Health Plan',
  Task_Start_Date: '2015-02-15T00:00:00',
  Task_Due_Date: '2015-04-15T00:00:00',
  Task_Status: 'In Progress',
  Task_Priority: 4,
  Task_Completion: 75,
  Task_Parent_ID: 2
}, {
  Task_ID: 32,
  Task_Assigned_Employee_ID: 1,
  Task_Subject: 'Google AdWords Strategy',
  Task_Start_Date: '2015-02-16T00:00:00',
  Task_Due_Date: '2015-02-28T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 4,
  Task_Completion: 100,
  Task_Parent_ID: 29
}, {
  Task_ID: 34,
  Task_Assigned_Employee_ID: 28,
  Task_Subject: '2015 Brochure Designs',
  Task_Start_Date: '2015-02-19T00:00:00',
  Task_Due_Date: '2015-02-24T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 3,
  Task_Completion: 100,
  Task_Parent_ID: 3
}, {
  Task_ID: 35,
  Task_Assigned_Employee_ID: 29,
  Task_Subject: 'Brochure Design Review',
  Task_Start_Date: '2015-02-19T00:00:00',
  Task_Due_Date: '2015-02-22T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 2,
  Task_Completion: 100,
  Task_Parent_ID: 34
}, {
  Task_ID: 36,
  Task_Assigned_Employee_ID: 29,
  Task_Subject: 'Website Re-Design Plan',
  Task_Start_Date: '2015-02-19T00:00:00',
  Task_Due_Date: '2015-02-24T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 4,
  Task_Completion: 100,
  Task_Parent_ID: 34
}, {
  Task_ID: 37,
  Task_Assigned_Employee_ID: 4,
  Task_Subject: 'Rollout of New Website and Marketing Brochures',
  Task_Start_Date: '2015-02-20T00:00:00',
  Task_Due_Date: '2015-02-28T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 4,
  Task_Completion: 100,
  Task_Parent_ID: 3
}, {
  Task_ID: 38,
  Task_Assigned_Employee_ID: 8,
  Task_Subject: 'Update Sales Strategy Documents',
  Task_Start_Date: '2015-02-20T00:00:00',
  Task_Due_Date: '2015-02-22T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 2,
  Task_Completion: 100,
  Task_Parent_ID: 29
}, {
  Task_ID: 39,
  Task_Assigned_Employee_ID: 41,
  Task_Subject: 'Create 2012 Sales Report',
  Task_Start_Date: '2015-02-20T00:00:00',
  Task_Due_Date: '2015-02-21T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 2,
  Task_Completion: 100,
  Task_Parent_ID: 29
}, {
  Task_ID: 40,
  Task_Assigned_Employee_ID: 42,
  Task_Subject: 'Direct vs Online Sales Comparison Report',
  Task_Start_Date: '2015-02-20T00:00:00',
  Task_Due_Date: '2015-02-22T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 4,
  Task_Completion: 100,
  Task_Parent_ID: 29
}, {
  Task_ID: 41,
  Task_Assigned_Employee_ID: 4,
  Task_Subject: 'Review 2012 Sales Report and Approve 2015 Plans',
  Task_Start_Date: '2015-02-23T00:00:00',
  Task_Due_Date: '2015-02-28T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 2,
  Task_Completion: 100,
  Task_Parent_ID: 29
}, {
  Task_ID: 42,
  Task_Assigned_Employee_ID: 3,
  Task_Subject: 'Deliver R&D Plans for 2015',
  Task_Start_Date: '2015-03-01T00:00:00',
  Task_Due_Date: '2015-03-10T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 4,
  Task_Completion: 100,
  Task_Parent_ID: 1
}, {
  Task_ID: 43,
  Task_Assigned_Employee_ID: 32,
  Task_Subject: 'Create 2015 R&D Plans',
  Task_Start_Date: '2015-03-01T00:00:00',
  Task_Due_Date: '2015-03-07T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 2,
  Task_Completion: 100,
  Task_Parent_ID: 42
}, {
  Task_ID: 44,
  Task_Assigned_Employee_ID: 33,
  Task_Subject: '2015 QA Strategy Report',
  Task_Start_Date: '2015-03-02T00:00:00',
  Task_Due_Date: '2015-03-05T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 2,
  Task_Completion: 100,
  Task_Parent_ID: 42
}, {
  Task_ID: 45,
  Task_Assigned_Employee_ID: 31,
  Task_Subject: '2015 Training Events',
  Task_Start_Date: '2015-03-02T00:00:00',
  Task_Due_Date: '2015-03-04T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 4,
  Task_Completion: 100,
  Task_Parent_ID: 4
}, {
  Task_ID: 46,
  Task_Assigned_Employee_ID: 2,
  Task_Subject: 'Non-Compete Agreements',
  Task_Start_Date: '2015-03-12T00:00:00',
  Task_Due_Date: '2015-03-14T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 1,
  Task_Completion: 100,
  Task_Parent_ID: 5
}, {
  Task_ID: 47,
  Task_Assigned_Employee_ID: 1,
  Task_Subject: 'Update NDA Agreement',
  Task_Start_Date: '2015-03-14T00:00:00',
  Task_Due_Date: '2015-03-16T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 4,
  Task_Completion: 100,
  Task_Parent_ID: 5
}, {
  Task_ID: 48,
  Task_Assigned_Employee_ID: 5,
  Task_Subject: 'Update Employee Files with New NDA',
  Task_Start_Date: '2015-03-16T00:00:00',
  Task_Due_Date: '2015-03-26T00:00:00',
  Task_Status: 'Need Assistance',
  Task_Priority: 2,
  Task_Completion: 90,
  Task_Parent_ID: 5
}, {
  Task_ID: 49,
  Task_Assigned_Employee_ID: 6,
  Task_Subject: 'Sign Updated NDA',
  Task_Start_Date: '2015-03-20T00:00:00',
  Task_Due_Date: '2015-03-25T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 3,
  Task_Completion: 100,
  Task_Parent_ID: 5
}, {
  Task_ID: 50,
  Task_Assigned_Employee_ID: 7,
  Task_Subject: 'Sign Updated NDA',
  Task_Start_Date: '2015-03-20T00:00:00',
  Task_Due_Date: '2015-03-25T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 3,
  Task_Completion: 100,
  Task_Parent_ID: 5
}, {
  Task_ID: 51,
  Task_Assigned_Employee_ID: 8,
  Task_Subject: 'Sign Updated NDA',
  Task_Start_Date: '2015-03-20T00:00:00',
  Task_Due_Date: '2015-03-25T00:00:00',
  Task_Status: 'Need Assistance',
  Task_Priority: 3,
  Task_Completion: 25,
  Task_Parent_ID: 5
}, {
  Task_ID: 52,
  Task_Assigned_Employee_ID: 9,
  Task_Subject: 'Sign Updated NDA',
  Task_Start_Date: '2015-03-20T00:00:00',
  Task_Due_Date: '2015-03-25T00:00:00',
  Task_Status: 'In Progress',
  Task_Priority: 3,
  Task_Completion: 100,
  Task_Parent_ID: 5
}, {
  Task_ID: 53,
  Task_Assigned_Employee_ID: 17,
  Task_Subject: 'Submit Questions Regarding New NDA',
  Task_Start_Date: '2015-03-21T00:00:00',
  Task_Due_Date: '2015-03-24T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 4,
  Task_Completion: 100,
  Task_Parent_ID: 5
}, {
  Task_ID: 54,
  Task_Assigned_Employee_ID: 18,
  Task_Subject: 'Submit Questions Regarding New NDA',
  Task_Start_Date: '2015-03-21T00:00:00',
  Task_Due_Date: '2015-03-24T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 4,
  Task_Completion: 100,
  Task_Parent_ID: 5
}, {
  Task_ID: 55,
  Task_Assigned_Employee_ID: 19,
  Task_Subject: 'Submit Questions Regarding New NDA',
  Task_Start_Date: '2015-03-21T00:00:00',
  Task_Due_Date: '2015-03-24T00:00:00',
  Task_Status: 'Need Assistance',
  Task_Priority: 4,
  Task_Completion: 25,
  Task_Parent_ID: 5
}, {
  Task_ID: 56,
  Task_Assigned_Employee_ID: 14,
  Task_Subject: 'Submit Signed NDA',
  Task_Start_Date: '2015-03-22T00:00:00',
  Task_Due_Date: '2015-03-24T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 3,
  Task_Completion: 100,
  Task_Parent_ID: 5
}, {
  Task_ID: 57,
  Task_Assigned_Employee_ID: 13,
  Task_Subject: 'Submit Signed NDA',
  Task_Start_Date: '2015-03-22T00:00:00',
  Task_Due_Date: '2015-03-24T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 3,
  Task_Completion: 100,
  Task_Parent_ID: 5
}, {
  Task_ID: 58,
  Task_Assigned_Employee_ID: 15,
  Task_Subject: 'Submit Signed NDA',
  Task_Start_Date: '2015-03-22T00:00:00',
  Task_Due_Date: '2015-03-24T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 3,
  Task_Completion: 100,
  Task_Parent_ID: 5
}, {
  Task_ID: 59,
  Task_Assigned_Employee_ID: 16,
  Task_Subject: 'Submit Signed NDA',
  Task_Start_Date: '2015-03-22T00:00:00',
  Task_Due_Date: '2015-03-24T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 3,
  Task_Completion: 100,
  Task_Parent_ID: 5
}, {
  Task_ID: 60,
  Task_Assigned_Employee_ID: 7,
  Task_Subject: 'Update Revenue Projections',
  Task_Start_Date: '2015-03-24T00:00:00',
  Task_Due_Date: '2015-04-07T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 2,
  Task_Completion: 100,
  Task_Parent_ID: 6
}, {
  Task_ID: 61,
  Task_Assigned_Employee_ID: 8,
  Task_Subject: 'Review Revenue Projections',
  Task_Start_Date: '2015-03-25T00:00:00',
  Task_Due_Date: '2015-04-06T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 4,
  Task_Completion: 100,
  Task_Parent_ID: 6
}, {
  Task_ID: 62,
  Task_Assigned_Employee_ID: 41,
  Task_Subject: 'Comment on Revenue Projections',
  Task_Start_Date: '2015-03-25T00:00:00',
  Task_Due_Date: '2015-04-03T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 3,
  Task_Completion: 100,
  Task_Parent_ID: 6
}, {
  Task_ID: 63,
  Task_Assigned_Employee_ID: 42,
  Task_Subject: 'Comment on Revenue Projections',
  Task_Start_Date: '2015-03-25T00:00:00',
  Task_Due_Date: '2015-04-03T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 3,
  Task_Completion: 100,
  Task_Parent_ID: 6
}, {
  Task_ID: 64,
  Task_Assigned_Employee_ID: 45,
  Task_Subject: 'Comment on Revenue Projections',
  Task_Start_Date: '2015-03-25T00:00:00',
  Task_Due_Date: '2015-04-03T00:00:00',
  Task_Status: 'Deferred',
  Task_Priority: 3,
  Task_Completion: 25,
  Task_Parent_ID: 6
}];

/***/ }),

/***/ "./src/demo/index.js":
/*!***************************!*\
  !*** ./src/demo/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AppList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppList */ "./src/demo/AppList.js");



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AppList__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById('root'));

/***/ })

})
//# sourceMappingURL=e219452-main-wps-hmr.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlMjE5NDUyLW1haW4td3BzLWhtci5qcyIsInNvdXJjZVJvb3QiOiIifQ==