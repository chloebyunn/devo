import React, { Component } from 'react';
import './App.scss';

import TitleCard from './component/TitleCard/TitleCard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleCard />    
      </div>
    );
  }
}

export default App;
