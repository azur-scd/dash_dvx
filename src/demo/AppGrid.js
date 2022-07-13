/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';
import { Grid } from '../lib';
import { customers } from './data_example_grid.js';

const columns = ['CompanyName', 'City', 'State', 'Phone', 'Fax'];
const selectedRowKeys = [8,9]

class App extends Component {

    constructor() {
        super();
        this.state = {
            dataSource: customers,
            columns: columns,
            keyExpr: "ID",
            defaultSelectedRowKeys: selectedRowKeys,
            selected_rows:[]
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
        console.log(newProps)
    }

    render() {
        return (
            <div>
                 <Grid
                     id="test"
                     dataSource={this.state.dataSource}
                     keyExpr={this.state.keyExpr}
                     defaultColumns={this.state.columns}  
                     defaultSelectedRowKeys={this.state.defaultSelectedRowKeys}
                     selected_rows={this.state.selected_rows}  
                     setProps={this.setProps}               
                />
            </div>
        )
    }
}

export default App;
