import React, { Component } from 'react';
import './NewEntry.scss';
import Card from'../../component/Card/Card';
import Tags from '../../component/Tags/Tags';

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
                <Tags />
                <textarea className="content" placeholder="Start your entry here..."/>
              </div>
              <div className="right-card-area">
                <Card title="Write down your short prayer here" height={275}/>
                <Card title="Actions points for today" height={125}/>

              </div>

            </div>
        );
    }
}

export default NewEntry;
