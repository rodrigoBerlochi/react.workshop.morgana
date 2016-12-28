'use strict';

import React, {PropTypes, defaultProps, Component} from 'react';

class Input extends Component {
    onKeyPress(e){
        if (e.key === 'Enter') {
            var val = e.currentTarget.value;
            e.currentTarget.value = '';
            this.props.onCreateNewItem(val);
        }
    }
    render(){
        let cssClasses = this.props.styling + ' App-input';
        
        return (
                <input ref={this.props.reference} onKeyPress={this.onKeyPress.bind(this)} type={this.props.type}
                    placeholder={this.props.placeholder} name={this.props.name}
                    className={cssClasses}/>
                );
    }
};

Input.defaultProps = {
    type: 'text'
};

Input.propTypes = {
    reference: PropTypes.string.isRequired
};

export default Input;