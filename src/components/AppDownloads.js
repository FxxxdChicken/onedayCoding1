import React, { Component } from 'react'


const styles = {
  text: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: "20px 0 0 0",
  },

  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: "20px 0 0 0",
  }
}
const prefixUrl = "https://www.instagram.com/static/images/appstore-install-badges/"

const imgButtons = [
  { link: "https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.signupPage.badge&mt=8&vt=lo", imgUrl: `${prefixUrl}badge_ios_korean-ko.png/4a5c9d62d51b.png`, width: 136 },
  { link: "https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.pngo", imgUrl: `${prefixUrl}badge_android_english-en.png/e9cd846dc748.png`, width: 134 },
]
export default class AppDownloads extends Component {
  render() {
    return (
      <div>
        <div style={styles.text}>
          Get the app.
        </div>
        <div style={styles.button}>
          {imgButtons.map((button) => <img src={button.imgUrl} width={button.width} style={{ margin: 5 }} />)}
        </div>
      </div>
    )
  }
}
