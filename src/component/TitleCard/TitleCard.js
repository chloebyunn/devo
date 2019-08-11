import React, { Component } from 'react';
import './TitleCard.scss';
import PropTypes from 'prop-types';

import calendar from '../../icons/calendar.png';
import search from '../../icons/search.png';

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
          <input rows="1" className="title-field" type="text" placeholder="Name this space" />
          <div class="titlecard-name">
            <input className="name-field" type="text" placeholder="Your name" />
          </div>
        </div>
        <div class="titlecard-bottom">
          <button className="new-entry-button" onClick={this.props.addEntry}> New Entry </button>
          {/* <img className="calendar-icon" src={calendar} alt="calendar" /> */}
        </div>
        <div className="search">
          <img className="search-icon" alt="search-icon" src={search}/>
          <input placeholder="Search" className="search-field" type="text"></input>
        </div>
      </div>
    );
  }
}

TitleCard.propTypes = {
    addEntry: PropTypes.func,
}

export default TitleCard;
