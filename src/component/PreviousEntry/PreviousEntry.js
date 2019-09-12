import React, { Component } from 'react';
import './PreviousEntry.scss';
import PropTypes from 'prop-types'; 

class PreviousEntry extends Component { 

  render() {
    const month = this.props.month === "June" || this.props.month === "September" ? this.props.month.slice(0, 4) : this.props.month.slice(0, 3);
    const weekday = this.props.weekday === "Tuesday" || this.props.weekday === "Thursday" ? this.props.weekday.slice(0, 4) : this.props.weekday.slice(0, 3)
    const content = this.props.content.slice(0, 30) + " ...";

    return (
      <div className="previous-container" onClick={() => this.props.updateDocID(this.props.DocID)}>
        <div className="entry-title">{ this.props.title }</div> {/* entry.title */}
        <div className="middle-section">   
          <div className="month">{month}</div>
          <div className="weekday">{weekday}</div>
          <div className="numday">{this.props.day} </div>
          <div className="entry-content-preview">{ this.props.content !== "" ? content : "" }</div>
        </div>
        <div className="tags-section">
        </div>
      </div>
    );
  }
}

PreviousEntry.propTypes = {
  title: PropTypes.string, 
  content: PropTypes.string,
  month: PropTypes.string,
  year: PropTypes.number,
  day: PropTypes.number,
  weekday: PropTypes.string,
  DocID: PropTypes.string,
  updateDocID: PropTypes.func,
}

export default PreviousEntry;