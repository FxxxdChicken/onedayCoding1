import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './containers/Footer';
import LeftBody from './containers/LeftBody';
import RightBody from './containers/RightBody';

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
          <LeftBody />
          <RightBody />
        </div>
      <Footer />
      </div>
    );
  }
}

export default App;
