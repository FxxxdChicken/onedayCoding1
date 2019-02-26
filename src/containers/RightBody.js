import React, { Component } from 'react'
import LoginCard from '../components/LoginCard';
import Account from '../components/Account';

export default class RightBody extends Component {
  render() {
    return (
      <div>
        <LoginCard />
        <Account />
      </div>
    )
  }
}
