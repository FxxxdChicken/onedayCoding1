import React, { Component } from 'react'


const mockDeviceImageUrl = "https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png"

const images = [
  "https://www.instagram.com/static/images/homepage/screenshot2-2x.jpg/177140221987.jpg",
  "https://www.instagram.com/static/images/homepage/screenshot1-2x.jpg/9144d6673849.jpg"
]
const style = {
  'backgroundImage': `url(${mockDeviceImageUrl})`,
  'backgroundSize': '454px 618px;',
  width: 453,
  height: 618,
}
const imageStyle = {
  'position': 'absolute',
  width: 240,
  height: 417,
  marginLeft: 151,
  marginTop: 99,
}
const dummyTopStyle = {
  width: 304,
}

const imageDivStyle = {
  top: 80,
  left: 120,
}

export default class LeftBody extends Component {
  render() {
    return (
      <div style={style}>
      <div style={dummyTopStyle} />
        <img src={images[0]} style={imageStyle} />
        <img src={images[1]} style={imageStyle} />
      </div>
    )
  }
}
