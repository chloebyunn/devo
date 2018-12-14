import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { deleteEntry } from '../../actions'
import './PreviousEntry.scss';

import PropTypes from 'prop-types'; 

import share from '../../icons/share.png';
import deleteicon from '../../icons/deleteicon.png';


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
        // const  { entryId, entry } = this.props;
        return (
            <div className="previous-container">
                <div className="date-section">   
                    <div className="weekday">{ this.getWeekday() }</div>
                    <div className="numday">{ this.getNumDay() }</div>
                </div>
                <div className="content-section">
                    <div className="entry-title">{ this.props.title }</div> {/* entry.title */}
                    <div className="entry-content-preview">{ this.props.content }</div>
                </div>
                <div className="hover-menu-items">
                    <img className="menu-icon" src={share} alt="share" />
                    <img className="menu-icon" src={deleteicon} alt="X" />
                </div>
            </div>
        );
    }
}

PreviousEntry.propTypes = {
    title: PropTypes.string.isRequired, 
    content: PropTypes.string.isRequired,
}

// const mapSateToProps = ({ data }) => {
//     return {
//         data
//     };
// };

// export default connect(null, { deleteEntry })(PreviousEntry);
export default PreviousEntry;