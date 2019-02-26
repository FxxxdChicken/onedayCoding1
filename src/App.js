import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './containers/Footer';
import LeftBody from './containers/LeftBody';
import RightBody from './containers/RightBody';
import MediaQuery from 'react-responsive';

const bodyStyle = {
  'margin-top': '40px',
  'display': 'flex',
  'justify-content': 'space-around'
}
class App extends Component {
  render() {
    return (
      <div>
        <div style = {bodyStyle}>
        <MediaQuery query="(min-width: 880px)">
          <LeftBody />
        </MediaQuery>
          <RightBody />
        </div>
      <Footer />
      </div>
    );
  }
}

export default App;
