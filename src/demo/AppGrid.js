/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';
import { Grid } from '../lib';
import { customers } from './data_grid.js';

const columns = ['CompanyName', 'City', 'State', 'Phone', 'Fax'];

class App extends Component {

    constructor() {
        super();
        this.state = {
            dataSource: customers,
            columns: columns,
            keyExpr: "ID",
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
                     selected_rows={this.state.selected_rows}  
                     setProps={this.setProps}               
                />
            </div>
        )
    }
}

export default App;
