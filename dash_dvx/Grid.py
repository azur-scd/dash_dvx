# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Grid(Component):
    """A Grid component.


Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- allowedPageSizes (list; optional):
    Array of possible page size numbers.

- columnChooserIsEnabled (boolean; default False):
    Enables dataGrid column chooser widget (True|False).

- columns (list; optional):
    An array of columns config.  Obligatory fields are : dataField
    (same as the dataSource array key), caption (the displayed column
    label)  Optionally fields are : width (number|auto), dataType
    (date|)  Ex : [{}].

- dataSource (list; required):
    An key,value array of data to be displayed in the datagrid.

- defaultPageSize (number; default 10):
    The number of items by page.

- defaultSelectedRowKeys (list; optional):
    The array of default selected row keys id.

- exportIsEnabled (boolean; default True):
    enable dataGrid export to Excel (True|False).

- filterRowIsEnabled (boolean; default True):
    Displays a filter search line under each column's label in teh
    datagrid (True|False).

- headerFilterIsEnabled (boolean; default True):
    Displays a filter search icon beside to the coumn label
    (True|False).

- keyExpr (string; optional):
    The dataField to be used as index|key.

- pageSizeSelectorIsEnabled (boolean; default False):
    Enables de pages size selector (to choose the numbe rof displayed
    items by page).

- searchPanelIsEnabled (boolean; default True):
    Displays the search panel above the datagrid (True|False).

- selected_rows (list; optional):
    Array of selected items.

- selectionMode (string; default 'multiple'):
    Activate the feauture of row's selection (none|single|multiple).

- sortingMode (string; default "multiple"):
    The type of sorting data (multiple|single)."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, dataSource=Component.REQUIRED, columns=Component.UNDEFINED, keyExpr=Component.UNDEFINED, defaultSelectedRowKeys=Component.UNDEFINED, defaultPageSize=Component.UNDEFINED, pageSizeSelectorIsEnabled=Component.UNDEFINED, allowedPageSizes=Component.UNDEFINED, sortingMode=Component.UNDEFINED, searchPanelIsEnabled=Component.UNDEFINED, headerFilterIsEnabled=Component.UNDEFINED, filterRowIsEnabled=Component.UNDEFINED, columnChooserIsEnabled=Component.UNDEFINED, selectionMode=Component.UNDEFINED, selected_rows=Component.UNDEFINED, exportIsEnabled=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'allowedPageSizes', 'columnChooserIsEnabled', 'columns', 'dataSource', 'defaultPageSize', 'defaultSelectedRowKeys', 'exportIsEnabled', 'filterRowIsEnabled', 'headerFilterIsEnabled', 'keyExpr', 'pageSizeSelectorIsEnabled', 'searchPanelIsEnabled', 'selected_rows', 'selectionMode', 'sortingMode']
        self._type = 'Grid'
        self._namespace = 'dash_dvx'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'allowedPageSizes', 'columnChooserIsEnabled', 'columns', 'dataSource', 'defaultPageSize', 'defaultSelectedRowKeys', 'exportIsEnabled', 'filterRowIsEnabled', 'headerFilterIsEnabled', 'keyExpr', 'pageSizeSelectorIsEnabled', 'searchPanelIsEnabled', 'selected_rows', 'selectionMode', 'sortingMode']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in ['dataSource']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Grid, self).__init__(**args)
