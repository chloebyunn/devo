import React, { Component } from 'react';
import './TitleCard.scss';
import Button from '../../component/Button/Button';

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
                <div className="name-fields">
                    <p className="small-field">By:  </p>
                    <input className="small-field" type="text" placeholder="Enter your name" />
                </div>
                <Button />
            </div>

        );
    }
}

export default TitleCard;
