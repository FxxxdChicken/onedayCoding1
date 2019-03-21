import React, { useState, useEffect } from 'react'

const mockDeviceImageUrl = "https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png"
const styles = {
  leftBodyArea: {
    backgroundImage: `url(${mockDeviceImageUrl})`,
    backgroundSize: '454px 618px;',
    marginTop: "50px",
    width: 453,
    height: 618,
  },
  dummyTopStyle: {
    width: 304,
  },
  thumbnailImage: {
    position: "absolute",
    width: "240px",
    height: "427px",
    marginLeft: "151px",
    marginTop: "99px",
    opacity: "1.0",
    transition: "opacity 1000ms 0ms",
  },
  thumbnailImageHide: {
    position: "absolute",
    width: "240px",
    height: "427px",
    marginLeft: "151px",
    marginTop: "99px",
    opacity: "1.0",
    transition: "opacity 1000ms 0ms",
    opacity: "0.0",
  }
}

export default function LeftBodyArea() {
  const [currentCount, setCurrentCount] = useState(0);
  const images = [
    "https://www.instagram.com/static/images/homepage/screenshot2-2x.jpg/177140221987.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot1-2x.jpg/9144d6673849.jpg"
  ]

  function timer() {
    setCurrentCount((currentCount + 1) % images.length)
  }
  useEffect(() => {
    let timer1 = setInterval(() => timer(), 1000)

    return () => {
      clearTimeout(timer1)
    }
  }
  )

  return (
    <div style={styles.leftBodyArea}>
      <div style={styles.dummyTopStyle} />
      {
        images.map((imageUrl, i) => {
          return i == currentCount ? (<img src={imageUrl} style={styles.thumbnailImage} />) : (<img src={imageUrl} style={styles.thumbnailImageHide} />);
        })
      }
    </div>
  )

}

