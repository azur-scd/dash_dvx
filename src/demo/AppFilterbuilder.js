/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';
import { Filterbuilder } from '../lib';
import { filter, fields } from './data_example_builder.js';

class App extends Component {

    constructor() {
        super();
        this.state = {
            fields: fields,
            value:filter
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
                 <Filterbuilder
                     id="test"
                     fields={this.state.fields}
                     value={this.state.value} 
                     setProps={this.setProps}               
                />
            </div>
        )
    }
}

export default App;