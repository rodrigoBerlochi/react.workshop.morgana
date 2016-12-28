import React, {Component, defaultProps} from 'react';

class Label extends Component {
    
    render() {
        let cssClasses = this.props.type + ' App-label';
        return <label className={cssClasses}>{this.props.children}</label>;
    }
    
};

export default Label;