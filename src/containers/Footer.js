import React, { Component } from 'react'

const footerLinks = [
  {name: "ABOUT US", linkUrl: ""},
  {name: "SUPPORT", linkUrl: ""},
  {name: "API", linkUrl: ""},
  {name: "JOBS", linkUrl: ""},
  {name: "PRIVACY", linkUrl: ""},
  {name: "TERMS", linkUrl: ""},
  {name: "DIRECTORY", linkUrl: ""},
  {name: "HASHTAGS", linkUrl: ""},
  {name: "LANGUAGE", linkUrl: ""},
]

const styles={
  a:{
    color: "#003569",
    textDecoration: "none",
    fontSize: "12px",
    fontFamily: "-apple-system,BlinkMacSystemFont, Segoe UI,Roboto,Helvetica,Arial,sans-serif",
  },
  footerStyle: {
    textAlign: 'center',
    display: 'list-item',
  },
  ul: {
    listStyle: "none"
  },
  li: {
    display: "inline-block",
    marginRight: "16px",
    marginBottom: "7px",
  }
  

}
export default class Footer extends Component {
  render() {
    return (
      <div>
        <a style={styles.footerStyle}>
        <ul style={styles.ul}>
        {
          footerLinks.map((link) => {
            return <li style={styles.li}><a style={styles.a}>{link.name}</a></li>;
          })
        }
        </ul>

        </a>
      </div>
    )
  }
}