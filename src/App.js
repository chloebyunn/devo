import React, { Component } from 'react';
import './App.scss';

import TitleCard from './component/TitleCard/TitleCard';
import PreviousEntry from './component/PreviousEntry/PreviousEntry';
import NewEntry from './component/NewEntry/NewEntry';
import ImageSelector from './component/ImageSelector/ImageSelector';
import Tags from './component/Tags/Tags';
import Card from './component/Card/Card';

class App extends Component {
  constructor() {
    super();
    this.state = {
      previousEntries: [],
    };
  }

  getNumDay() {
    return new Date().getDate();
  }

  getWeekday() {
    let weekday = new Date().getDay();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satday"]
    return dayNames[weekday];
  }

  getCurrentMonth() { 
    let mm = new Date().getMonth();
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  
    return monthNames[mm];
  }

  getCurrentYear() {
    return new Date().getFullYear();
  }


  render() {

    const noPreviousEntriesMessage = (
      <p className="no-entries-message">You have no previous entries! <br />
         Click the New Entry Button to get started :) </p>
    )
    
    
    return (
      <div className="App">
        <div className="sidebar">
          <TitleCard />
          <div className="entries-container">
            {this.state.previousEntries.length === 0 && noPreviousEntriesMessage}
            {/* <PreviousEntry /> */}
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
