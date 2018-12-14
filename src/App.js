import React, { Component } from 'react';
// import { connect } from 'react-redux';

import './App.scss';

import TitleCard from './component/TitleCard/TitleCard';
import PreviousEntry from './component/PreviousEntry/PreviousEntry';
import NewEntry from './component/NewEntry/NewEntry';
import ImageSelector from './component/ImageSelector/ImageSelector';
import Card from './component/Card/Card';
import database from './database';

// import Tags from './component/Tags/Tags';
// import Card from './component/Card/Card';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      selectedEntry:'',
    };
    this.addEntry = this.addEntry.bind(this);
    // this.renderPreviousEntries = this.renderPreviousEntries.bind(this);
  }


  // https://stackoverflow.com/questions/43309773/display-comma-separated-elements-of-array-in-react
  addEntry(previousEntry) {
  
  }

  // renderPreviousEntries() {
  //   database.collection('entries').get().then((snapshot) => {
  //     snapshot.docs.forEach(doc => {
  //       if(doc.exists) {
  //         let data = doc.data();
  //         this.setState({ data: data});
  //         console.log("Document data:", data);
  //       } else{ 
  //         this.setState({ data: null});
  //         console.log("no such document!");
  //       }
  //     });
  //   });
  // }
  renderPreviousEntries() {
    database.collection('entries').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        let data = doc.data();
        this.setState({...{ data: data }});
        console.log("Document data:", data);
      });
    });
  }


render() {
  // const noPreviousEntriesMessage = (
  //   <div className="no-entries-message">
  //     <p>You have no previous entries! </p>
  //     <p> Click the New Entry Button to get started :) </p>
  //   </div>
  // );

  // const previousEntriesList = this.this.state.data.map(element => {
  //   return <PreviousEntry title={element.entryTitle} content={element.entryContent} />
  // });

  let dataUI = this.state.data === null &&
  this.this.state.data.map(element => {
    return <PreviousEntry title={element.entryTitle} content={element.entryContent} />
  });


  return (
    
    <div className="App">
        <TitleCard className="title-card" addEntry={this.addEntry} />
        <div className="entries-list">

        {/* <button onClick={this.renderPreviousEntries}>Load Data</button> */}
        {this.renderPreviousEntries}
        {dataUI}

          {/* { this.state.data.length === 0 ? noPreviousEntriesMessage : previousEntriesList }  */}

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
