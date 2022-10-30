# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class List(Component):
    """A List component.


Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- allowedPageSizes (list; optional):
    Array of possible page size numbers.

- autoExpandAll (boolean; default True):
    Enables auto expand the tree.

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

- default_selected_row_keys (list; optional):
    Array of selected items in UI.

- filterRowIsEnabled (boolean; default True):
    Displays a filter search line under each column's label in teh
    datagrid (True|False).

- headerFilterIsEnabled (boolean; default True):
    Displays a filter search icon beside to the coumn label
    (True|False).

- keyExpr (string; required):
    The dataField to be used as index|key.

- pageSizeSelectorIsEnabled (boolean; default False):
    Enables de pages size selector (to choose the numbe rof displayed
    items by page).

- pagingIsEnabled (boolean; default True):
    Enables the paging of results.

- parentIdExpr (string; required):
    The dataField to be used as the key to loop on to display the
    unflattes list.

- searchPanelIsEnabled (boolean; default True):
    Displays the search panel above the datagrid (True|False).

- selected_rows (list; optional):
    Array of selected items.

- selectionIsRecursive (boolean; default True):
    Recursively selects sub-items and parent itemsof a selected irow
    (True|False).

- selectionMode (string; default 'leavesOnly'):
    Configure the perimetre of itme selection (single|all|leavesOnly).

- sortingMode (string; default "multiple"):
    The type of sorting data (multiple|single)."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, dataSource=Component.REQUIRED, keyExpr=Component.REQUIRED, parentIdExpr=Component.REQUIRED, defaultSelectedRowKeys=Component.UNDEFINED, columns=Component.UNDEFINED, autoExpandAll=Component.UNDEFINED, pagingIsEnabled=Component.UNDEFINED, defaultPageSize=Component.UNDEFINED, pageSizeSelectorIsEnabled=Component.UNDEFINED, allowedPageSizes=Component.UNDEFINED, sortingMode=Component.UNDEFINED, searchPanelIsEnabled=Component.UNDEFINED, headerFilterIsEnabled=Component.UNDEFINED, filterRowIsEnabled=Component.UNDEFINED, columnChooserIsEnabled=Component.UNDEFINED, selectionIsRecursive=Component.UNDEFINED, selectionMode=Component.UNDEFINED, selected_rows=Component.UNDEFINED, default_selected_row_keys=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'allowedPageSizes', 'autoExpandAll', 'columnChooserIsEnabled', 'columns', 'dataSource', 'defaultPageSize', 'defaultSelectedRowKeys', 'default_selected_row_keys', 'filterRowIsEnabled', 'headerFilterIsEnabled', 'keyExpr', 'pageSizeSelectorIsEnabled', 'pagingIsEnabled', 'parentIdExpr', 'searchPanelIsEnabled', 'selected_rows', 'selectionIsRecursive', 'selectionMode', 'sortingMode']
        self._type = 'List'
        self._namespace = 'dash_dvx'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'allowedPageSizes', 'autoExpandAll', 'columnChooserIsEnabled', 'columns', 'dataSource', 'defaultPageSize', 'defaultSelectedRowKeys', 'default_selected_row_keys', 'filterRowIsEnabled', 'headerFilterIsEnabled', 'keyExpr', 'pageSizeSelectorIsEnabled', 'pagingIsEnabled', 'parentIdExpr', 'searchPanelIsEnabled', 'selected_rows', 'selectionIsRecursive', 'selectionMode', 'sortingMode']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in ['dataSource', 'keyExpr', 'parentIdExpr']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(List, self).__init__(**args)
