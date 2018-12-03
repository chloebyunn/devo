import React, { Component } from 'react';
import './NewEntry.scss';
import Tags from '../../component/Tags/Tags';

import save from '../../icons/save.png';

class NewEntry extends Component {

    constructor(){
        super();
        this.state = {

        };
    }

    saveEntry() {

    }
    
    addNewTags() {

    }

    addNewCards() {
        
    }

    render() {
        return (
            <div className="devotional-area">
                <input type="text" className="title" placeholder="Title of your entry"/>
                <input type="text" className="reflected-passages" placeholder="Reflected passages"/>
                <Tags tagTitle="daily"/>
                <textarea className="new-content" placeholder="Start your entry here..."/>
                <button className="save-button">
                    <img className="save-img" src={save} alt="V" />
                    <p className="save-text">Save</p> 
                </button>
            </div>
        );
    }
}

export default NewEntry;
