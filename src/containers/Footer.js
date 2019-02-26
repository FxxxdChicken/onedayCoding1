import React, { Component } from 'react'


const footerStyle =  {
  'text-align': 'center',
  'display': 'list-item',
}
export default class Footer extends Component {
  render() {
    return (
      <div>
        <a style = { footerStyle }>
          ABOUT USSUPPORTPRESSAPIJOBSPRIVACYTERMSDIRECTORYPROFILESHASHTAGSLANGUAGE
        </a>
      </div>
    )
  }
}
