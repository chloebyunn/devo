import React, { Component } from 'react';
import './ImageSelector.scss';

import blue_orange_venice from '../../images/blue_orange_venice.png';
// import green_nature from '../../images/green_nature.png';
// import grey_brown_street from '../../images/grey_brown_street.png';
// import grey_rain_on_window from '../../images/grey_rain_on_window.png';
// import grey_trees from '../../images/grey_trees.png';
// import orange_blue_street_to_sky from '../../images/orange_blue_street_to_sky.png';
// import purple_nightsky from '../../images/purple_nightsky.png';
// import red_sunset from '../../images/red_sunset.png';
// import red_trees from '../../images/red_trees.png';
// import yellow_elephant from '../../images/yellow_elephant.png';
// import yellow_flower from '../../images/yellow_flower.png'; 

class ImageSelector extends Component {
    constructor() {
        super();
        this.state ={

        };
    }

    render(){
        return (
            <div className="image-selector">
                <img src={blue_orange_venice.png} alt="blue orange venice" />
            </div>
        );
    }
}

export default ImageSelector;
