import React, { Component } from 'react';
import './TitleCard.scss';
import PropTypes from 'prop-types';

import calendar from '../../icons/calendar.png';

class TitleCard extends Component {
    constructor() {
        super();
        this.state = {
        }
    }



    render() {

        return (
            <div className="titlecard-container">
                <input className="title-field" type="text" placeholder="Name this space" />
                <input className="name-field" type="text" placeholder="Your name" />
                <button className="new-entry-button" onClick={this.props.addEntry}> New Entry </button>
                <img className="calendar-icon" src={calendar} alt="calendar" />
            </div>

        );
    }
}

TitleCard.propTypes = {
    addEntry: PropTypes.func,
}

export default TitleCard;
