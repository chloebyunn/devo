import React, { Component } from 'react';
import './App.scss';

import TitleCard from './component/TitleCard/TitleCard';
import PreviousEntry from './component/PreviousEntry/PreviousEntry';
import NewEntry from './component/NewEntry/NewEntry';
import ImageSelector from './component/ImageSelector/ImageSelector';
// import Tags from './component/Tags/Tags';
// import Card from './component/Card/Card';

class App extends Component {
  constructor() {
    super();
    this.state = {
      previousEntries: [],
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
          <div className="sidebar">
            <TitleCard addEntry={this.addEntry} />
            <div className="entries-container">
              {this.state.previousEntries.length === 0 ? noPreviousEntriesMessage : previousMessagesList}
              
            </div>
          </div>
          <div className="main-space">
            <ImageSelector className="image-selector" /> 
            <NewEntry className="new-entry" />
          </div>
        </div>
    );
  } 
}

export default App;
