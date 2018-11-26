import React, { Component } from 'react';
import './ImageSelector.scss';

import blue_orange_venice from '../../images/blue_orange_venice.png';
import green_nature from '../../images/green_nature.png';
import grey_brown_street from '../../images/grey_brown_street.png';
import grey_trees from '../../images/grey_trees.png';
import orange_blue_street_to_sky from '../../images/orange_blue_street_to_sky.png';
import purple_nightsky from '../../images/purple_nightsky.png';
import red_sunset from '../../images/red_sunset.png';
import yellow_elephant from '../../images/yellow_elephant.png';

class ImageSelector extends Component {
    constructor() {
        super();
        this.state ={
            
        };
    }

    render(){
        const images_array = [
            green_nature, 
            grey_brown_street, 
            blue_orange_venice, 
            grey_trees, 
            orange_blue_street_to_sky, 
            purple_nightsky, 
            red_sunset, 
            yellow_elephant, 
        ];

        const number = Math.floor(Math.random() * (images_array.length+1));
        return (
            <div className="image-selector">
                <img src={images_array[number]} alt="blue orange venice" />
            </div>
        );
    }
}

export default ImageSelector;
