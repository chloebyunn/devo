import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { SwatchesPicker } from 'react-color';
import './Card.scss';

import colorwheel from '../../icons/colorwheel.png';
import deleteicon from '../../icons/deleteicon.png';



class Card extends Component {
    constructor(props) {
        super(props);
        this.state ={
            background: '#fff',
            openColorPicker: false,
        };
        this.handleOpenClick = this.handleOpenClick.bind(this);
    }

    handleOpenClick() {
        this.setState({
            openColorPicker: !this.state.openColorPicker,
        });
    }

    handleClose = () => {
        this.setState({
            openColorPicker: false,
        })
    }

    handleColorChange(color, event) {
        this.setState({
            background: color.hex,
        });
    };

    render(){
        const colours = [
            '#DDF7F0',
            '#FFF3D9'
        ];
        const number = Math.floor(Math.random() * (colours.length));


        return (
            <div className="card-container" style={{backgroundColor:colours[number], height:this.props.height+"px"}}>
                <h3 className="card-title">{this.props.title}</h3>
                <img className="card-icons color-icon" src={colorwheel} alt="More colours" onClick={ this.handleOpenClick }/>
                {this.state.openColorPicker && 
                <div className="popover">
                    <div className="cover" onClick={this.handleClose}/>
                    <SwatchesPicker />
                </div>}
                <img className="delete-icon card-icons more-padding-right" src={deleteicon} alt="X" />
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



