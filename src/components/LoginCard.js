import React, { Component } from 'react'
import { Card,Button } from 'react-bootstrap';

const cardStyle = {
    width: '350px',
    height: '564px',
    'display': 'flex',
    'align-items': 'center',
}
const logoUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
const logoStyle = {
    'width': '175px',
    'height': '51px',
}
export default class LoginCard extends Component {
  render() {
    return (
      <div>
        <Card style={cardStyle}>
        <img src ={logoUrl} style={logoStyle} />
        </Card>
      </div>
    )
  }
}
