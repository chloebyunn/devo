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
                <div className="date-section">   
                    <div className="day">{this.props.day}</div>
                    <div className="dd">{this.props.dd}</div>
                </div>
                <div className="content-section">
                    <div className="entry-title">Test title</div>
                    <div className="entry-content-preview">Test content</div>
                </div>
            </div>
        );
    }
}

PreviousEntry.propTypes = {
    month: PropTypes.string,
    day: PropTypes.string.isRequired,
    dd: PropTypes.number.isRequired,
}

export default PreviousEntry;