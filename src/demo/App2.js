/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';
import { List } from '../lib';
import { tasks } from './data_list.js';

const columns = ['CompanyName', 'City', 'State', 'Phone', 'Fax'];

class App extends Component {

    constructor() {
        super();
        this.state = {
            dataSource: tasks,
            keyExpr: "Task_ID",
            parentIdExpr: "Task_Parent_ID",
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
                 <List
                     id="test"
                     dataSource={this.state.dataSource}
                     keyExpr={this.state.keyExpr}
                     parentIdExpr={this.state.parentIdExpr}
                     selected_rows={this.state.selected_rows}  
                     setProps={this.setProps}               
                />
            </div>
        )
    }
}

export default App;