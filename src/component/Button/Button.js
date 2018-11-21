import React, { Component } from 'react';
import './Button.scss';
import PropTypes from 'prop-types';

class Button extends Component {
    constructor() {
        super();
        this.state ={

        };
    }

    render() {
        return (
            <div className="button-container">
              <button></button>

            </div>
        );
    }
}

Button.propTypes = {
  buttonText: PropTypes.string,
}

export default Button;
