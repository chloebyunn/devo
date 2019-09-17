import React, { Component } from 'react';
import './ImageSelector.scss';
import PropTypes from 'prop-types';

import blue_orange_venice from '../../images/blue_orange_venice.png';
import grey_trees from '../../images/grey_trees.png';
import orange_blue_street_to_sky from '../../images/orange_blue_street_to_sky.png';
import purple_nightsky from '../../images/purple_nightsky.png';
import red_sunset from '../../images/red_sunset.png';
import sunset_sky from '../../images/sunset_sky.jpeg';
import brooklyn_bridge from '../../images/brooklyn_bridge.jpeg';
import yellow_elephant from '../../images/yellow_elephant.png';
import brown_green_village from '../../images/brown_green_village.jpg';
import mountain from '../../images/mountain.png';


class ImageSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateImageNumber: this.props.updateImageNumber, 
      photoNumber: 10000,
      newEntry: false, 
      imagesArray: [
        blue_orange_venice, 
        grey_trees, 
        orange_blue_street_to_sky, 
        purple_nightsky, 
        red_sunset, 
        sunset_sky,
        yellow_elephant, 
        brooklyn_bridge,
        brown_green_village,
        mountain
      ]
    };
  }

  componentDidMount() {
    if (this.state.updateImageNumber) {
      const number = Math.floor(Math.random() * (this.state.imagesArray.length))
      this.setState({
        photoNumber: number
      })
    }
    window.addEventListener('load', this.sendData);
    // this.setState({
    //   updateImageNumber: false, 
    // })
  }
 

  sendData = () => {
    this.props.getImageNumber(this.state.photoNumber)
    
  }


  render(){
    console.log('this.state.updateImageNumber', this.state.updateImageNumber)

    //DOCID isnt being properly passed in
    // {console.log(this.props.DocID)}

    return (
      <div className="image-selector" style={{backgroundImage:`url(${this.state.imagesArray[this.state.photoNumber]})`}}>
        <textarea className="image-caption" type="text" placeholder="One memorable thought for today..." />
      </div>
    );
  }
}

ImageSelector.propTypes = {
  getImageNumber: PropTypes.func,
  DocID: PropTypes.string, 
  updateImageNumber: PropTypes.bool, 
}

export default ImageSelector;
