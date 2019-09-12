import React, { Component } from 'react'
import './Client.scss';
import TitleCard from './component/TitleCard/TitleCard';
import PreviousEntry from './component/PreviousEntry/PreviousEntry';
import NewEntry from './component/NewEntry/NewEntry';
import ImageSelector from './component/ImageSelector/ImageSelector';
import Card from './component/Card/Card';
import FirebaseApp from './component/FirebaseApp';
import menu from './icons/menu.png';

export class Client extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      width: 0, 
      height: 0,
      title: '', 
      passages: '', 
      content: '',
      month: '', 
      day: 0, 
      weekday: '',
      year: 0, 
      DocID: '', 
      entriesList:[],
    };

    this.updateSelectedDocID = this.updateSelectedDocID.bind(this)
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }
  
  componentDidMount() {
    this.updateWindowDimensions();

    window.addEventListener('resize', this.updateWindowDimensions);
    
    const todaysDate = new Date()
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December']
    this.setState({
      month: monthNames[todaysDate.getMonth()],
      day: todaysDate.getDate(),
      weekday: dayNames[todaysDate.getDay()],
      year: todaysDate.getFullYear(), 
    })
  
    this.getEntries()

    if (this.state.DocID !== "") {
      this.getCurrentEntry()
    }
    
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  formatPrevEntry = (element) => {
    return (
      <PreviousEntry 
        title={element.EntryTitle !== "" ? element.EntryTitle : "Untitled"}
        content={element.EntryContent}
        month={element.Month}
        year={element.Year}
        day={element.Day}
        weekday={element.Weekday}
        DocID={element.DocID}
        />
    )
  }

  getEntries() {
    const db = FirebaseApp.db;

    //get collection
    db.collection("entry").get().then((snapshot) => {

      snapshot.docs.forEach(doc => {
        let items = doc.data();

        /* Update the components state with query result */
        this.setState({ 
          entriesList : [{items},...this.state.entriesList],
          DocID: doc.id,
        }) 
        this.formatPrevEntry(items)
      })
    })
    .catch(function(error) {
      console.log("Error getting documents!!!: ", error);
    });
  }

  editEntry = e => {
    e.preventDefault();
  }

  updateSelectedDocID(docID) {
    this.setState({
      DocID: docID
    })

    const db = FirebaseApp.db

    db.collection("entry").doc(docID).get().then((doc) => {
      this.setState({
        title: doc.data().EntryTitle, 
        passages: doc.data().EntryPassages,
        content: doc.data().EntryContent,
        month: doc.data().Month,
        day: doc.data().Day, 
        weekday: doc.data().Weekday,
        year: doc.data().Year, 
      })
    }).catch(function(error) {
      console.log("Error getting document:", error)
    })
  }

  addEntry = e => {
    e.preventDefault();
    const db = FirebaseApp.db;

    db.collection('entry').add({
      EntryPassages: this.state.passages,
      EntryContent: this.state.content, 
      EntryTitle: this.state.title,
      Month: this.state.month, 
      Day: this.state.day, 
      Weekday: this.state.weekday , 
      Year: this.state.year,
      CreatedAt: new Date().getTime(),
    }).then(
      (docRef) => {
        this.setState({
          DocID: docRef.id,
          entriesList: [
            {
              items: {
                EntryPassages: this.state.passages,
                EntryContent: this.state.content, 
                EntryTitle: this.state.title,
                Month: this.state.month, 
                Day: this.state.day, 
                Weekday: this.state.weekday , 
                Year: this.state.year,
                CreatedAt: new Date().getTime(),
                DocID: docRef.id,
              }
            }, 
            ...this.state.entriesList
          ],
        })

        var updateEntry = db.collection('entry').doc(docRef.id);
        updateEntry.update({
          DocID: docRef.id
        })
      }
    );
  };
  

  render() {
    const isMobile = this.state.width <= 768;

    this.state.entriesList.sort(function(a,b) {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(b.items.CreatedAt) - new Date(a.items.CreatedAt);
    });

    const prevEntries = this.state.entriesList.map((element) => {
      return (
        <PreviousEntry 
          title={element.items.EntryTitle !== "" ? element.items.EntryTitle : "Untitled"}
          content={element.items.EntryContent}
          month={element.items.Month}
          year={element.items.Year}
          day={element.items.Day}
          weekday={element.items.Weekday}
          DocID={element.items.DocID}
          updateDocID={this.updateSelectedDocID}
        />
      )
    })

    return (
      <div className="client">
        {isMobile && <img alt="menu" src={menu} className="menu-icon"/>}
        {!isMobile && <TitleCard className="title-card" addEntry={this.addEntry} />}
        {!isMobile && 
        <div className="entries-list">
          {prevEntries}
        </div>}
        <ImageSelector className="image-selector"/>
        <NewEntry 
          className="content" 
          title={this.state.title}
          passages={this.state.passages}
          content={this.state.content}
          month={this.state.month}
          day={this.state.day}
          weekday={this.state.weekday}
          year={this.state.year}
        />
        <div className="cards-list">
          <Card className="card-list" title="Write down your prayer here" height={275} isMobile={isMobile}/>
          <Card className="card-list" title="Actions points for today" height={125} isMobile={isMobile}/>
        </div>
      </div>
    )
  }
}

export default Client;
