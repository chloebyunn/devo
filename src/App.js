import React, { Component } from 'react';
import './App.scss';

import TitleCard from './component/TitleCard/TitleCard';
import PreviousEntry from './component/PreviousEntry/PreviousEntry';
import NewEntry from './component/NewEntry/NewEntry';
import ImageSelector from './component/ImageSelector/ImageSelector';
import Card from './component/Card/Card';

// import Tags from './component/Tags/Tags';
// import Card from './component/Card/Card';

class App extends Component {
  constructor() {
    super();
    this.state = {
      previousEntries: [],
      selectedEntry:'',
    };
    this.addEntry = this.addEntry.bind(this);
  }


  // https://stackoverflow.com/questions/43309773/display-comma-separated-elements-of-array-in-react
  addEntry(previousEntry) {
    this.setState({
      previousEntries: [...this.state.previousEntries, previousEntry],
    });
    // localStorage.setItem(i, previousEntry);
  }

  render() {

    const previousMessagesList = this.state.previousEntries.map((element) => {
      return (
        <PreviousEntry />
        );
      }
    ); 

    const noPreviousEntriesMessage = (
      <div className="no-entries-message">
        <p>You have no previous entries! </p>
        <p> Click the New Entry Button to get started :) </p>
      </div>
    )
    
    return (
        <div className="App">
            <TitleCard className="title-card" addEntry={this.addEntry} />
            <div className="entries-list">
              {this.state.previousEntries.length === 0 ? noPreviousEntriesMessage : previousMessagesList}
            </div>
            <ImageSelector className="image-selector"/>
            <NewEntry className="content" />
            <div className="card-list">
              <Card className="card-list" title="Write down your prayer here..." height={275}/>
              <Card className="card-list" title="Actions points for today" height={125}/>
            </div>
            
        </div>
    );
  } 
}

export default App;
