import React, { Component } from 'react'
import LoginCard from '../components/LoginCard';
import Account from '../components/Account';
import AppDownloads from '../components/AppDownloads';

export default class RightBodyArea extends Component {
  render() {
    return (
      <div>
        <LoginCard />
        <Account />
        <AppDownloads />
      </div>
    )
  }
}
