import React, { Component } from 'react'
import './LeftBodyArea.css';


const mockDeviceImageUrl = "https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png"


const style = {
  backgroundImage: `url(${mockDeviceImageUrl})`,
  backgroundSize: '454px 618px;',
  width: 453,
  height: 618,
}
const imageStyle = {
  position: 'absolute',
  width: 240,
  height: 417,
  marginLeft: 151,
  marginTop: 99,
}
const dummyTopStyle = {
  width: 304,
}
export default class LeftBodyArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCount: 0,
      images: [
        "https://www.instagram.com/static/images/homepage/screenshot2-2x.jpg/177140221987.jpg",
        "https://www.instagram.com/static/images/homepage/screenshot1-2x.jpg/9144d6673849.jpg"
      ]
    };

  }
  timer() {
    this.setState({
      currentCount: this.state.images.length - 1 == this.state.currentCount ? 0 : this.state.currentCount + 1
    })
  }
  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 2000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return (
      <div style={style}>
        <div style={dummyTopStyle} />
        {
          this.state.images.map((imageUrl, i) => {
            return i == this.state.currentCount ? (<img src={imageUrl} className="thumbnailImage" />) : (<img src={imageUrl} className="thumbnailImage hide" />);
          })
        }
      </div>
    )
  }
}
