import React, { Component } from 'react';
import './TitleCard.scss';

class TitleCard extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    


    render() {
        
        return (
            <div className="titlecard-container">
                <input className="title-field" type="text" placeholder="Enter the name of this space" />                
                <div className="name-fields">
                    <p className="small-field">By:  </p>
                    <input className="small-field" type="text" placeholder="Your Name" />
                </div>
            </div>

        );
    }
}

export default TitleCard;
