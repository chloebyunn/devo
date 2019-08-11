import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import { connect } from 'react-redux';

import './App.scss';
import Client from './Client';


class App extends Component {


render() {
  return (
    <BrowserRouter>
      <Client />
    </BrowserRouter>
    ); 
  }
}


export default App;





/*

Chrome devo app tabs: 


















*/