import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { deleteEntry } from '../../actions'
import './PreviousEntry.scss';
import firebase from '../Firestore';
import PropTypes from 'prop-types'; 

import share from '../../icons/share.png';
import deleteicon from '../../icons/deleteicon.png';


class PreviousEntry extends Component { 

    

    render() {
        // const  { entryId, entry } = this.props;
        return (
            <div className="previous-container">
                <div className="date-section">   
                    <div className="weekday">{this.props.weekday}</div>
                    <div className="numday">{this.props.day} </div>
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
    month: PropTypes.string,
    year: PropTypes.string,
    day: PropTypes.string.isRequired,
    weekday: PropTypes.string.isRequired,
}

// const mapSateToProps = ({ data }) => {
//     return {
//         data
//     };
// };

// export default connect(null, { deleteEntry })(PreviousEntry);
export default PreviousEntry;