import React, { Component } from 'react';
import './PreviousEntry.scss';
import PropTypes from 'prop-types'; 

class PreviousEntry extends Component { 

    getNumDay() {
        return new Date().getDate();
      }
    
      getWeekday() {
        let weekday = new Date().getDay();
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satday"]
        return dayNames[weekday];
      }
    
      getCurrentMonth() { 
        let mm = new Date().getMonth();
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
      
        return monthNames[mm];
      }
    
      getCurrentYear() {
        return new Date().getFullYear();
      }

    render() {
        return (
            <div className="previous-container">
                <div className="date-section">   
                    <div className="weekday">{this.getWeekday()}</div>
                    <div className="numday">{this.getNumDay()}</div>
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
    month: PropTypes.string.isRequired,
    weekday: PropTypes.string.isRequired,
    numday: PropTypes.number.isRequired,
}

export default PreviousEntry;