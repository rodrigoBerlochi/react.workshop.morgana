'use strict';

import React, {PropTypes, defaultProps, Component} from 'react';

class Button extends Component {
    render() {
        return <input className="App-button" type="button" onClick={this.props.onClickButton} value={this.props.text} />;
    }
};

Button.propTypes = {
    text: PropTypes.string.isRequired
};

export default Button;

