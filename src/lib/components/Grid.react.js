import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DataGrid, {
  Paging, Pager, Sorting, FilterRow, HeaderFilter, SearchPanel, Selection, Export, ColumnChooser
} from 'devextreme-react/data-grid';
import { Workbook } from 'exceljs';
import saveAs from 'file-saver';
import { exportDataGrid } from 'devextreme/excel_exporter';

export default class Grid extends Component {

  render() {
    const { id, dataSource, columns, keyExpr, defaultSelectedRowKeys, defaultPageSize, pageSizeSelectorIsEnabled, allowedPageSizes, sortingMode, searchPanelIsEnabled, headerFilterIsEnabled, filterRowIsEnabled, columnChooserIsEnabled, selectionMode, selected_rows, exportIsEnabled, setProps } = this.props;
    return (
      <DataGrid
        id={id}
        dataSource={dataSource}
        keyExpr={keyExpr}
        defaultColumns={columns}
        columnAutoWidth={true}
        wordWrapEnabled={true}
        showBorders={true}
        defaultSelectedRowKeys={defaultSelectedRowKeys}
        selected_rows={selected_rows}
        onSelectionChanged={(selectedRowsData) => {
          const data = selectedRowsData["selectedRowsData"];
          setProps({ selected_rows: data })
        }}
        onExporting={this.onExporting}
      >
        <Paging
          defaultPageSize={defaultPageSize} />
        <Pager
          visible={true}
          displayMode='full'
          showPageSizeSelector={pageSizeSelectorIsEnabled}
          allowedPageSizes={allowedPageSizes}
          showInfo={true}
          showNavigationButtons={true} />
        <Sorting mode={sortingMode} />
        <SearchPanel visible={searchPanelIsEnabled}
          width={240}
          placeholder="Search..." />
        <HeaderFilter visible={headerFilterIsEnabled} />
        <FilterRow visible={filterRowIsEnabled} />
        <ColumnChooser enabled={columnChooserIsEnabled} />
        <Selection
          mode={selectionMode}
          selectAllMode='allPages'
          showCheckBoxesMode='always'
        />
        <Export enabled={exportIsEnabled} />
      </DataGrid>
    );
  }
  onExporting(e) {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Main sheet');

    exportDataGrid({
      component: e.component,
      worksheet: worksheet
    }).then(function () {
      workbook.xlsx.writeBuffer()
        .then(function (buffer) {
          saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Grid.xlsx');
        });
    });
    e.cancel = true;
  }
}


Grid.defaultProps = { defaultPageSize: 10, pageSizeSelectorIsEnabled: false, sortingMode: "multiple", searchPanelIsEnabled: true, headerFilterIsEnabled: true, filterRowIsEnabled: true, columnChooserIsEnabled: false, selectionMode: 'multiple', exportIsEnabled: true, selected_rows: [] };

Grid.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: PropTypes.string,
  /**
  * An key,value array of data to be displayed in the datagrid
  */
  dataSource: PropTypes.array.isRequired,
  /**
  * An array of columns config.
  * Obligatory fields are : dataField (same as the dataSource array key), caption (the displayed column label)
  * Optionally fields are : width (number|auto), dataType (date|)
  * Ex : [{}]
  */
  columns: PropTypes.array,
  /**
  * The dataField to be used as index|key.
  */
  keyExpr: PropTypes.string,
  /**
  * The array of default selected row keys id.
  */
   defaultSelectedRowKeys: PropTypes.array,
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
  * Activate the feauture of row's selection (none|single|multiple).
  */
  selectionMode: PropTypes.string,
  /**
  * Array of selected items.
  */
  selected_rows: PropTypes.array,
  /**
  * enable dataGrid export to Excel (true|false).
  */
  exportIsEnabled: PropTypes.bool,
  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: PropTypes.func
};