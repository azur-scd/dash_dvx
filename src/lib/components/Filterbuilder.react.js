import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilterBuilder from 'devextreme-react/filter-builder';

const divStyle = {
  margin: '40px',
  border: '5px solid pink'
};
export default class Filterbuilder extends Component {
    render() {
        const { id, fields, value,setProps } = this.props;
        return (
            <FilterBuilder
            id={id}
            fields={fields}
            value={value}
            //groupOperations={['AND', 'OR']}
            //onValueChanged={this.onValueChanged}
            onValueChanged={(e) => {
                setProps({ value: e.value })
              }}
          >
          </FilterBuilder>
        )
}
}
Filterbuilder.defaultProps = { value: [] };
Filterbuilder.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
   id: PropTypes.string,
  /**
   * An key,value array of datafield with at least a datafield key, example [{dataField: 'Name',}, {dataField: 'Price',dataType: 'number',format: 'currency',}, {dataField: 'Current_Inventory',dataType: 'number',caption: 'Inventory',}]
   */
  fields: PropTypes.array,
  /**
  * builded array of combined queries
  */
  value: PropTypes.array,
  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
   setProps: PropTypes.func
}