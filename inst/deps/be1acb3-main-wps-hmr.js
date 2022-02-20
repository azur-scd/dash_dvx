webpackHotUpdatedash_dvx("main",{

/***/ "./src/lib/components/List.react.js":
/*!******************************************!*\
  !*** ./src/lib/components/List.react.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var devextreme_react_tree_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-react/tree-list */ "./node_modules/devextreme-react/tree-list.js");
/* harmony import */ var devextreme_react_tree_list__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_react_tree_list__WEBPACK_IMPORTED_MODULE_2__);
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





var List = /*#__PURE__*/function (_Component) {
  _inherits(List, _Component);

  var _super = _createSuper(List);

  function List() {
    _classCallCheck(this, List);

    return _super.apply(this, arguments);
  }

  _createClass(List, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          dataSource = _this$props.dataSource,
          keyExpr = _this$props.keyExpr,
          parentIdExpr = _this$props.parentIdExpr,
          autoExpandAll = _this$props.autoExpandAll,
          pagingIsEnabled = _this$props.pagingIsEnabled,
          defaultPageSize = _this$props.defaultPageSize,
          pageSizeSelectorIsEnabled = _this$props.pageSizeSelectorIsEnabled,
          allowedPageSizes = _this$props.allowedPageSizes,
          sortingMode = _this$props.sortingMode,
          searchPanelIsEnabled = _this$props.searchPanelIsEnabled,
          headerFilterIsEnabled = _this$props.headerFilterIsEnabled,
          filterRowIsEnabled = _this$props.filterRowIsEnabled,
          columnChooserIsEnabled = _this$props.columnChooserIsEnabled,
          selectionMode = _this$props.selectionMode,
          selectionIsRecursive = _this$props.selectionIsRecursive,
          selected_rows = _this$props.selected_rows,
          setProps = _this$props.setProps;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(devextreme_react_tree_list__WEBPACK_IMPORTED_MODULE_2___default.a, {
        id: id,
        dataSource: dataSource,
        keyExpr: keyExpr,
        parentIdExpr: parentIdExpr,
        autoExpandAll: autoExpandAll,
        showBorders: true,
        columnAutoWidth: true,
        wordWrapEnabled: true,
        selected_rows: selected_rows,
        onSelectionChanged: function onSelectionChanged(e) {
          var data = e.component.getSelectedRowsData(selectionMode);
          setProps({
            selected_rows: data
          });
        },
        onExporting: this.onExporting
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(devextreme_react_tree_list__WEBPACK_IMPORTED_MODULE_2__["Scrolling"], {
        mode: "standard"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(devextreme_react_tree_list__WEBPACK_IMPORTED_MODULE_2__["Paging"], {
        enabled: pagingIsEnabled,
        defaultPageSize: defaultPageSize
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(devextreme_react_tree_list__WEBPACK_IMPORTED_MODULE_2__["Pager"], {
        showPageSizeSelector: pageSizeSelectorIsEnabled,
        allowedPageSizes: allowedPageSizes,
        showInfo: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(devextreme_react_tree_list__WEBPACK_IMPORTED_MODULE_2__["Sorting"], {
        mode: sortingMode
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(devextreme_react_tree_list__WEBPACK_IMPORTED_MODULE_2__["SearchPanel"], {
        visible: searchPanelIsEnabled,
        width: 240,
        placeholder: "Search..."
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(devextreme_react_tree_list__WEBPACK_IMPORTED_MODULE_2__["HeaderFilter"], {
        visible: headerFilterIsEnabled
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(devextreme_react_tree_list__WEBPACK_IMPORTED_MODULE_2__["FilterRow"], {
        visible: filterRowIsEnabled
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(devextreme_react_tree_list__WEBPACK_IMPORTED_MODULE_2__["ColumnChooser"], {
        enabled: columnChooserIsEnabled
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(devextreme_react_tree_list__WEBPACK_IMPORTED_MODULE_2__["Selection"], {
        recursive: selectionIsRecursive,
        mode: "multiple"
      }));
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


List.defaultProps = {
  autoExpandAll: true,
  pagingIsEnabled: true,
  defaultPageSize: 10,
  pageSizeSelectorIsEnabled: false,
  sortingMode: "multiple",
  searchPanelIsEnabled: true,
  headerFilterIsEnabled: true,
  filterRowIsEnabled: true,
  columnChooserIsEnabled: false,
  selectionMode: 'all',
  selectionIsRecursive: true,
  selected_rows: []
};
List.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
  * An key,value array of data to be displayed in the datagrid
  */
  dataSource: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,

  /**
  * The dataField to be used as index|key.
  */
  keyExpr: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,

  /**
  * The dataField to be used as the key to loop on to display the unflattes list.
  */
  parentIdExpr: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,

  /**
   * Deploys the item hierarchy (true|false)
   */
  autoExpandAll: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Enables the paging of results
   */
  pagingIsEnabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * The number of items by page.
   */
  defaultPageSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Enables de pages size selector (to choose the numbe rof displayed items by page)
   */
  pageSizeSelectorIsEnabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
  * Array of possible page size numbers
  */
  allowedPageSizes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
  * The type of sorting data (multiple|).
  */
  sortingMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
  * Displays the search panel above the datagrid (true|false).
  */
  searchPanelIsEnabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Displays a filter search icon beside to the coumn label (true|false).
   */
  headerFilterIsEnabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Displays a filter search line under each column's label in teh datagrid (true|false).
   */
  filterRowIsEnabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Enables dataGrid column chooser widget (true|false).
   */
  columnChooserIsEnabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
  * Activate the feauture of row's selection (none|single|multiple).
  */
  selectionMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
  * Selects the sub-items with a selected item (true|false)
  */
  selectionIsRecursive: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
  * Array of selected items.
  */
  selected_rows: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ })

})
//# sourceMappingURL=be1acb3-main-wps-hmr.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiZTFhY2IzLW1haW4td3BzLWhtci5qcyIsInNvdXJjZVJvb3QiOiIifQ==