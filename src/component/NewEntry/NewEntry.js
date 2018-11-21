import React, { Component } from 'react';
import './NewEntry.scss';
import Card from'../../component/Card/Card';

class NewEntry extends Component {

    constructor(){
        super();
        this.state = {

        };
    }

    render() {
        return (
            <div className="new-entry">
              <div className="devotional-area">
                <input type="text" className="title" placeholder="Title of your entry"/>
                <input type="text" className="reflected-passages" placeholder="Reflected passages"/>
                <textarea className="content" placeholder="Start your entry here..."/>
              </div>
              <div className="right-card-area">
                <Card />
              </div>

            </div>
        );
    }
}

export default NewEntry;
