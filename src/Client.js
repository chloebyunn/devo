import React, { Component } from 'react'
import './Client.scss';
import TitleCard from './component/TitleCard/TitleCard';
import PreviousEntry from './component/PreviousEntry/PreviousEntry';
import NewEntry from './component/NewEntry/NewEntry';
import ImageSelector from './component/ImageSelector/ImageSelector';
import Card from './component/Card/Card';
import firebase from './component/Firestore';

export class Client extends Component {

    previousEntry = e => {
 
        e.preventDefault();
        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
  
        var ref = db.ref("entry");
  
        // Attach an asynchronous callback to read the data at our posts reference
        ref.on("entry", function(snapshot) {
          console.log(snapshot.val());
        }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        });
  
        ref.on("child_added", function(snapshot, prevChildKey) {
          var newPost = snapshot.val();
          console.log("Author: " + newPost.EntryTitle);
          console.log("Title: " + newPost.EntryPassages);
          console.log("Previous Post ID: " + prevChildKey);
       });
      // <PreviousEntry />
    }
      
  render() {
    return (
      <div className="client">
        <TitleCard className="title-card" addEntry={this.addEntry} />
        <div className="entries-list"></div>
        <ImageSelector className="image-selector"/>
        <NewEntry className="content" />
        <div className="card-list">
          <Card className="card-list" title="Write down your prayer here..." height={275}/>
          <Card className="card-list" title="Actions points for today" height={125}/>
        </div>
      </div>
    )
  }
}

export default Client;
