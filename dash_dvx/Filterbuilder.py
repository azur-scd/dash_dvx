# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Filterbuilder(Component):
    """A Filterbuilder component.


Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- fields (list; optional):
    An key,value array of datafield with at least a datafield key,
    example [{dataField: 'Name',}, {dataField: 'Price',dataType:
    'number',format: 'currency',}, {dataField:
    'Current_Inventory',dataType: 'number',caption: 'Inventory',}].

- value (list; optional):
    builded array of combined queries."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, fields=Component.UNDEFINED, value=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'fields', 'value']
        self._type = 'Filterbuilder'
        self._namespace = 'dash_dvx'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'fields', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Filterbuilder, self).__init__(**args)
