'use strict';

import React, {PropTypes, defaultProps, Component} from 'react';
import Label from './label.jsx';
import Input from './input.jsx';

class Input_Label extends Component {
    constructor(props) {
        super(props); //now, props are available inside the constructor
    }
    onCreateNewItem(item) {
        this.props.onAddItemByEnter(item);
    }
    render() {
        return (
                <div>
                    <Label type={this.props.labelStyle}>{this.props.label}</Label>
                    
                    <Input reference={this.props.InputReference} onCreateNewItem={this.onCreateNewItem.bind(this)} 
                        placeholder={this.props.placeholder} type="text" 
                        name={this.props.name} styling={this.props.inputStyle}/>
                </div>
                );
    }
};

Input_Label.defaultProps = {
    labelStyle: 'regular'
};

Input_Label.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    inputStyle: PropTypes.string
};

export default Input_Label;