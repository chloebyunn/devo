import React, { Component } from 'react';
import './NewEntry.scss';
import Tags from '../../component/Tags/Tags';
import PropTypes from 'prop-types'; 
import FirebaseApp from '../FirebaseApp';

class NewEntry extends Component {
  constructor(){
    super();
    this.state = {};
  }

  getEntry() {
    const db = FirebaseApp.db;

    db.collection("entry").where("uid", "==", this.props.uid).get()
    .then((snapshot => {
        // console.log('snapshot!', snapshot)
      })
    )
  }
  /**
   * Values should be read from each doc from firestore. 
   * 
   * How to determine which is clicked? From previous entry, the UID must be passed.
   */

  render() {
    return (
      <div className="devotional-area">
        <form className="title-and-entry" onSubmit={this.addEntry} id="save-entry">
          <input 
          type="text" 
          className="title" 
          placeholder="Title of your entry"
          onChange={this.updateTitle}
          value={this.state.title} />
          <input 
          type="text" 
          name="reflected-passages"
          className="reflected-passages" 
          placeholder="Reflected passages"
          onChange={this.updatePassages}
          value={this.state.passages} /> 
          <Tags tagTitle="daily" />
          <textarea 
          className="new-content" 
          placeholder="Start your entry here..."
          onChange={this.updateContent}
          value={this.state.content} />
          <button className="save-button" type="submit" form="save-entry"> 
            <p className="save-text"> Save </p> 
          </button> 
        </form>
      </div>
    );
  }
}

NewEntry.propTypes = {
  title: PropTypes.string, 
  content: PropTypes.string,
  month: PropTypes.string,
  year: PropTypes.number,
  day: PropTypes.number,
  weekday: PropTypes.string,
  passages: PropTypes.string,
  uid: PropTypes.string
}

export default NewEntry;
