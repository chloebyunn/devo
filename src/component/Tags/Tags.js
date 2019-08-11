import React, { Component } from 'react';
import './Tags.scss'
import PropTypes from 'prop-types'; 

import whitedeleteicon from '../../icons/whitedeleteicon.png';

class Tags extends Component {
    constructor() {
        super();
        this.state ={

        };
    }

    render(){
        return (
            <div className="tags-area">
                <div className="tag-container">
                    <p className="tag-content"> {this.props.tagTitle} </p>
                    <img className="tag-delete" src={whitedeleteicon} alt="X" />
                </div>
            </div>
        );
    }
}

Tags.propTypes = {
    tagTitle: PropTypes.string.isRequired,
    
}

export default Tags;