import React, { Component } from 'react';
import './NewEntry.scss';
import Tags from '../../component/Tags/Tags';
import firebase from '../Firestore';

class NewEntry extends Component {

    constructor(){
        super();
        this.state = {
            title: '', 
            passages: '', 
            content: '',
            month: '', 
            day: '', 
            weekday: '',
            year: '', 
        };
    }

    componentDidMount() {
      const todaysDate = new Date()
      const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const monthNames = ['December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November']
      this.setState({
        month: monthNames[todaysDate.getMonth()],
        day: todaysDate.getDate(),
        weekday: dayNames[todaysDate.getDay()],
        year: todaysDate.getFullYear(), 
      })
    }

    updateTitle = e => {
        this.setState({
          title: e.target.value
        });
    }
    
    updatePassages = e => {
        this.setState({
          passages: e.target.value
        });
    }

    updateContent = e => {
        this.setState({
          content: e.target.value
        });
    }

    addEntry= e => {
      e.preventDefault();
      const db = firebase.firestore();
      db.settings({
        timestampsInSnapshots: true
      });
      const userRef = db.collection('entry').add({
          EntryPassages: this.state.passages,
          EntryContent: this.state.content, 
          EntryTitle: this.state.title,
          Month: this.state.month, 
          Day: this.state.day, 
          Weekday: this.state.weekday, 
          Year: this.state.year,
      });  
    };
    
    render() {
        return (
            <div className="devotional-area">
              <form className="title-and-entry" onSubmit={this.addEntry} id="save-entry">
                <input 
                type="text" 
                className="title" 
                placeholder="Title of your entry"
                onChange={this.updateTitle}
                value={this.state.title}
                />
                <input 
                type="text" 
                className="reflected-passages" 
                placeholder="Reflected passages"
                onChange={this.updatePassages}
                value={this.state.passages}/> 
              </form>
              <Tags tagTitle="daily"/>
              <textarea 
              className="new-content" 
              placeholder="Start your entry here..."
              onChange={this.updateContent}
              value={this.state.content} />
              <button className="save-button" type="submit" form="save-entry"> 
                <p className="save-text">Save</p> 
              </button> 
            </div>
        );
    }
}

export default NewEntry;
