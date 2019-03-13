import React, { Component } from 'react'


const styles = {
    text: {
        textAlign: 'center',
        margin: "20px 0 0 0",
    }
}

const prefixUrl = "https://www.instagram.com/static/images/appstore-install-badges/"
const urls = [
    {link: "https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.signupPage.badge&mt=8&vt=lo", imgUrl: `${prefixUrl}badge_ios_korean-ko.png/4a5c9d62d51b.png`},
    {link: "https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.pngo", imgUrl: `${prefixUrl}badge_android_english-en.png/e9cd846dc748.png`},
    {link: "https://www.instagram.com/static/images/appstore-install-badges/badge_microsoft_english-en.png/8a9204989bce.png", imgUrl: `${prefixUrl}badge_microsoft_english-en.png/8a9204989bce.png`},
]
export default class AppDownloads extends Component {
  render() {
    return (
      <div>
        <div style={styles.text}>
        Get the app.
        </div>
        <br/>
        <img src={urls[0].imgUrl} width="136" />
        <img src={urls[1].imgUrl} width="134" />
        <img src={urls[2].imgUrl} width="110" />
      </div>
    )
  }
}
