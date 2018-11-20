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
    };
  }
  ///////////////////////////////////////
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    if (
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) &&
      this.props.list.length
    ) {
      this.props.onPaginatedSearch();
    }
  }
  //////////////////////////////////////

  getDate() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satday"]

    let getDate = new Date();
    let day = getDate.getDay();
    let dd = getDate.getDate();
    let mm = getDate.getMonth(); //January is 0!
    let yyyy = getDate.getFullYear();
    if(dd<10) {
        dd = '0' + dd
    }
    return [dayNames[day], monthNames[mm], dd, yyyy];
};
  render() {
    const previousEntries = this.getDate().map(date => {
      let today = date[0];
      let tomonth = date[1];
      let todd = date[2];
      let toyy = date[3];
      // <PreviousEntry day={today} month={tomonth} dd={todd} />
      let yesterday = new Date() - 1;
      console.log(yesterday);
    

    })
    return (
      <div className="App">
        <div className="sidebar">
          <TitleCard />    
          <PreviousEntry day={this.getDate()[0]} month={this.getDate()[1]} dd={this.getDate()[2]} />
          <PreviousEntry day="Sunday" month="November" dd="18" />
          <PreviousEntry day="Saturday" month="November" dd="17" />
          <PreviousEntry day="Friday" month="November" dd="16" />
          <PreviousEntry day="Thursday" month="November" dd="15" />
          <PreviousEntry day="Wednesday" month="November" dd="14" />
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
