import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TreeList, {
  Scrolling, Paging, Pager, Sorting, FilterRow, HeaderFilter, SearchPanel, Selection, Export, ColumnChooser, Lookup
} from 'devextreme-react/tree-list';

export default class List extends Component {

  render() {
    const { id, dataSource, keyExpr, parentIdExpr, default_selected_row_keys, columns, autoExpandAll, pagingIsEnabled, defaultPageSize, pageSizeSelectorIsEnabled, allowedPageSizes, sortingMode, searchPanelIsEnabled, headerFilterIsEnabled, filterRowIsEnabled, columnChooserIsEnabled, selectionMode, selectionIsRecursive, selected_rows, setProps } = this.props;
    return (
      <TreeList
        id={id}
        dataSource={dataSource}
        keyExpr={keyExpr}
        parentIdExpr={parentIdExpr}
        defaultColumns={columns}
        autoExpandAll={autoExpandAll}
        showBorders={true}
        columnAutoWidth={true}
        wordWrapEnabled={true}
        defaultSelectedRowKeys={default_selected_row_keys}
        default_selected_row_keys={default_selected_row_keys}
        selected_rows={selected_rows}
        onSelectionChanged={(e) => {
          const data = e.component.getSelectedRowsData(selectionMode);
          setProps({ selected_rows: data })
          setProps({default_selected_row_keys: data.map(x=>x[`${keyExpr}`])})
        }}
        onExporting={this.onExporting}
      >
        <Scrolling
          mode="standard" />
        <Paging
          enabled={pagingIsEnabled}
          defaultPageSize={defaultPageSize} />
        <Pager
          showPageSizeSelector={pageSizeSelectorIsEnabled}
          allowedPageSizes={allowedPageSizes}
          showInfo={true} />
        <Sorting mode={sortingMode} />
        <SearchPanel visible={searchPanelIsEnabled}
          width={240}
          placeholder="Search..." />
        <HeaderFilter visible={headerFilterIsEnabled} />
        <FilterRow visible={filterRowIsEnabled} />
        <ColumnChooser enabled={columnChooserIsEnabled} />
        <Selection
          recursive={selectionIsRecursive}
          mode="multiple"
        />
      </TreeList>
    );
  }
}

List.defaultProps = { autoExpandAll: true, pagingIsEnabled: true, defaultPageSize: 10, pageSizeSelectorIsEnabled: false, sortingMode: "multiple", searchPanelIsEnabled: true, headerFilterIsEnabled: true, filterRowIsEnabled: true, columnChooserIsEnabled: false, selectionMode: 'leavesOnly', selectionIsRecursive: true, selected_rows: [], defaultSelectedRowKeys: [], default_selected_row_keys: [] };
List.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: PropTypes.string,
  /**
  * An key,value array of data to be displayed in the datagrid
  */
  dataSource: PropTypes.array.isRequired,
  /**
  * The dataField to be used as index|key.
  */
  keyExpr: PropTypes.string.isRequired,
  /**
  * The dataField to be used as the key to loop on to display the unflattes list.
  */
  parentIdExpr: PropTypes.string.isRequired,
    /**
  * The array of default selected row keys id.
  */
     defaultSelectedRowKeys: PropTypes.array,
  /**
   * Deploys the item hierarchy (true|false)
   */
   /**
  * An array of columns config.
  * Obligatory fields are : dataField (same as the dataSource array key), caption (the displayed column label)
  * Optionally fields are : width (number|auto), dataType (date|)
  * Ex : [{}]
  */
  columns: PropTypes.array,
  /**
   * Enables auto expand the tree
   */
  autoExpandAll: PropTypes.bool,
  /**
   * Enables the paging of results
   */
  pagingIsEnabled: PropTypes.bool,
  /**
   * The number of items by page.
   */
  defaultPageSize: PropTypes.number,
  /**
   * Enables de pages size selector (to choose the numbe rof displayed items by page)
   */
  pageSizeSelectorIsEnabled: PropTypes.bool,
  /**
  * Array of possible page size numbers
  */
  allowedPageSizes: PropTypes.array,
  /**
  * The type of sorting data (multiple|single).
  */
  sortingMode: PropTypes.string,
  /**
  * Displays the search panel above the datagrid (true|false).
  */
  searchPanelIsEnabled: PropTypes.bool,
  /**
   * Displays a filter search icon beside to the coumn label (true|false).
   */
  headerFilterIsEnabled: PropTypes.bool,
  /**
   * Displays a filter search line under each column's label in teh datagrid (true|false).
   */
  filterRowIsEnabled: PropTypes.bool,
  /**
   * Enables dataGrid column chooser widget (true|false).
   */
  columnChooserIsEnabled: PropTypes.bool,
   /**
  * Recursively selects sub-items and parent itemsof a selected irow (true|false)
  */
  selectionIsRecursive: PropTypes.bool,
  /**
  * Configure the perimetre of itme selection (single|all|leavesOnly).
  */
  selectionMode: PropTypes.string,
  /**
  * Array of selected items.
  */
  selected_rows: PropTypes.array,
  /**
  * Array of selected items in UI.
  */
   default_selected_row_keys: PropTypes.array,
  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: PropTypes.func
};