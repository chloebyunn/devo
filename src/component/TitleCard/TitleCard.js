import React, { Component } from 'react';
import './TitleCard.scss';
import PropTypes from 'prop-types';
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
        <div className="word-wrap">
          <input rows="1" className="title-field" type="text" placeholder="Name this space" />
          <div className="titlecard-name">
            <input type="text" className="name-field" placeholder="Your name" />
          </div>
        </div>
        <div className="titlecard-bottom">
          <button className="new-entry-button" onClick={this.props.addEntry}> New Entry </button>
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
