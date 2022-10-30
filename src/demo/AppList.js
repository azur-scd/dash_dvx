/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';
import { List } from '../lib';
import { tasks } from './data_example_list.js';

const columns = ['CompanyName', 'City', 'State', 'Phone', 'Fax'];
const selectedRowKeys = [28,32]

class App extends Component {

    constructor() {
        super();
        this.state = {
            dataSource: tasks,
            keyExpr: "Task_ID",
            parentIdExpr: "Task_Parent_ID",
            default_selected_row_keys: selectedRowKeys,
            columns: columns,
            selected_rows:[],

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
                 <List
                     id="test"
                     dataSource={this.state.dataSource}
                     keyExpr={this.state.keyExpr}
                     parentIdExpr={this.state.parentIdExpr}
                     defaultSelectedRowKeys={this.state.default_selected_row_keys}
                     defaultColumns={this.state.columns}  
                     selected_rows={this.state.selected_rows}  
                     default_selected_row_keys={this.state.default_selected_row_keys}
                     setProps={this.setProps}               
                />
            </div>
        )
    }
}

export default App;