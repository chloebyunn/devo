import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import './Card.scss'

class Card extends Component {
    constructor() {
        super();
        this.state ={
        };
    }

    deleteCard() {

    }

    chooseColor() {

    }

    render(){
        const colours = [
            '#DDF7F0',
            '#FFF3D9'
        ];
        const number = Math.floor(Math.random() * (colours.length));


        return (
            <div className="card-container" style={{backgroundColor:colours[number], height:this.props.height+"px"}}>
                <h3>{this.props.title}</h3>
                <textarea className="card-content" />
            </div>
        );
    }
}
Card.propTypes = {
    title: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
}

export default Card;
