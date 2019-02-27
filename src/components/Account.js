import React, { Component } from 'react'
import { Card } from 'react-bootstrap';

const accountStyle = {
    marginTop: '10px',
}
const accountCardStyle = {
    width: '350px',
    height: '70px',
    textAlign: 'center',
    textSize: '14px',
    verticalAlign: 'middle',
    display: 'table-cell',
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
