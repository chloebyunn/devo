import React, { Component } from 'react';
import './PreviousEntry.scss';
import PropTypes from 'prop-types';

class PreviousEntry extends Component { 
    constructor() { 
        super();
        this.state = {

        };
    }

    render() {
        return (
            <div className="previous-container">
                <div className="month">{this.props.month}</div>
                <div className="day">{this.props.day}</div>
                <div className="dd">{this.props.dd}</div>

            </div>
        );
    }
}

PreviousEntry.propTypes = {
    month: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    dd: PropTypes.number.isRequired,
}

export default PreviousEntry;