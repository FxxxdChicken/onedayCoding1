import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './containers/Footer';
import LeftBodyArea from './containers/LeftBodyArea';
import RightBodyArea from './containers/RightBodyArea';
import MediaQuery from 'react-responsive';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const mainBodyStyle = {
  marginTop: '40px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'center',
}
class App extends Component {
  render() {
    return (
      <div>
        <div style={mainBodyStyle}>
          <MediaQuery query="(min-width: 880px)">
            <LeftBodyArea />
          </MediaQuery>
          <RightBodyArea />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
