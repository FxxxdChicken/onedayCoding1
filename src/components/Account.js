import React, { Component } from 'react'
import { Card } from 'react-bootstrap';

const accountStyle = {
    'margin-top': '10px',
}
const accountCardStyle = {
    width: '350px',
    height: '70px',
    'text-align': 'center',
    'text-size': '14px',
    'vertical-align': 'middle',
    'display': 'table-cell',
}
const aStyle = {
    'display': 'inline',
}
export default class Account extends Component {
    render() {
        return (
            <div style={accountStyle}>
                <Card style={accountCardStyle}>
                    <div>
                    <a> Have an account? </a>
                    <a href=""> Log in </a>
                    </div>
                </Card>
            </div>
        )
    }
}
