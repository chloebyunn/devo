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

  addEntry() {
    this.state.previousEntries.push({
      numday: this.getNumDay(),
      weekday: this.getWeekday(),
      month: this.getCurrentMonth(),
      year: this.getCurrentYear(),
      title: '',
      passages: '',
      tags: '', 
      content: '',
    })
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

    // const messages = this.props.messages.messages.map((message, i) => {
    //   return (
    //     <ChatBubble agentPicture={stock_photo} botPicture={logo} key={i}
    //       playMessage={this.playDecodedMessage} message={message}
    //       loading={false}>
    //       {message.body}
    //     </ChatBubble>
    //   );
    // });



    const previousMessagesList = this.state.previousEntries.map((element) => {
      return (
        <PreviousEntry numday={element.numday} weekday={element.weekday} month={element.month} year={element.year}
        title={element.title} passages={element.passages} 
        content={element.content} tags={element.tags} />
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
              {previousMessagesList}
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
