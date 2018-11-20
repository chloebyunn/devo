import React, { Component } from 'react';
import './NewEntry.scss'

class NewEntry extends Component {

    constructor(){
        super();
        this.state = {

        };
    }

    render() {
        return (
            <div className="new-entry">
                <input type="text" className="title" placeholder="Title of your entry"/>
                <input type="text" className="reflected-passages" placeholder="Reflected passages"/>
                <textarea className="content" placeholder="Start your entry here..."/>
            </div>
        );
    }
}

export default NewEntry;