import React, { Component } from 'react'

const mockDeviceImageUrl = "https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png"
const styles = {
  leftBodyArea: {
    backgroundImage: `url(${mockDeviceImageUrl})`,
    backgroundSize: '454px 618px;',
    width: 453,
    height: 618,
  },
  dummyTopStyle: {
    width: 304,
  },
  thumbnailImage: {
    position: "absolute",
    width: "240px",
    height: "417px",
    marginLeft: "151px",
    marginTop: "99px",
    opacity: "1.0",
    transition: "opacity 1000ms 0ms",
  },
  thumbnailImageHide: {
    position: "absolute",
    width: "240px",
    height: "417px",
    marginLeft: "151px",
    marginTop: "99px",
    opacity: "1.0",
    transition: "opacity 1000ms 0ms",
    opacity: "0.0",
  }
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
      <div style={styles.leftBodyArea}>
        <div style={styles.dummyTopStyle} />
        {
          this.state.images.map((imageUrl, i) => {
            return i == this.state.currentCount ? (<img src={imageUrl} style={styles.thumbnailImage} />) : (<img src={imageUrl} style={styles.thumbnailImageHide} />);
          })
        }
      </div>
    )
  }
}
