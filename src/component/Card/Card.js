import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TwitterPicker } from 'react-color';
import './Card.scss';

import colorwheel from '../../icons/colorwheel.png';
import deleteicon from '../../icons/deleteicon.png';
import minimize from '../../icons/minimize.png';
import '../../Spacing.scss';


class Card extends Component {
    constructor(props) {
        super(props);
        this.state ={
            background: [
                '#DDF7F0',
                '#FFF3D9'
            ][Math.floor(Math.random() * (2))],
            openColorPicker: false,
        };
        this.handleOpenClick = this.handleOpenClick.bind(this);
        this.handleColorChangeComplete = this.handleColorChangeComplete.bind(this);
        this.handleSwatchHover = this.handleSwatchHover.bind(this);
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

    handleColorChangeComplete(color, event) {
      this.setState({ background: color.hex });
      this.handleClose();
    };

    handleSwatchHover(color, event) {
      this.setState({ background: color.hex });
    }

    render(){

        return (
            <div className="card-container" style={{backgroundColor:this.state.background, height:this.props.height+"px"}}>
              <div className="card-header">
                  <h3 className="card-title">{this.props.title}</h3>
                  <div className="card-icons">
                    <img className="color-icon icon" src={colorwheel} alt="More colours" onClick={ this.handleOpenClick }/>
                    {this.state.openColorPicker &&
                    <div className="popover">
                        <div className="cover" onClick={this.handleClose}/>
                        <TwitterPicker
                          triangle="top-right"
                          width={200}
                          color={this.state.background}
                          onSwatchHover={this.handleSwatchHover}
                          onChangeComplete={ this.handleColorChangeComplete }

                        />
                    </div>}
                    <img className="minimize-icon icon" src={minimize} alt="Hide" />
                    <img className="delete-icon icon" src={deleteicon} alt="Delete" />
                  </div>
                </div>
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
