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
        <div class="word-wrap">
          <textarea rows="1" className="title-field" type="text" placeholder="Name this space" />
        </div>
        <div class="titlecard-name">
          <input className="name-field" type="text" placeholder="Your name" />
        </div>
        <div class="titlecard-bottom">
          <button className="new-entry-button" onClick={this.props.addEntry}> New Entry </button>
          <img className="calendar-icon" src={calendar} alt="calendar" />
        </div>
      </div>
    );
  }
}

TitleCard.propTypes = {
    addEntry: PropTypes.func,
}

export default TitleCard;
