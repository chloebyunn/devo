import React, { Component } from 'react';
import './App.scss';

import TitleCard from './component/TitleCard/TitleCard';
import PreviousEntry from './component/PreviousEntry/PreviousEntry';

class App extends Component {

  getDate() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let getDate = new Date();
    let day = getDate.getDay;
    let dd = getDate.getDate();
    let mm = getDate.getMonth(); //January is 0!
    let yyyy = getDate.getFullYear();
    if(dd<10) {
        dd = '0' + dd
    }
    return [day, monthNames[mm], dd, yyyy];
};
  render() {
    return (
      <div className="App">
        <TitleCard />    
        <PreviousEntry day={this.getDate()[0]} month={this.getDate()[1]} dd={this.getDate()[2]} />
      </div>
    );
  }
}

export default App;
