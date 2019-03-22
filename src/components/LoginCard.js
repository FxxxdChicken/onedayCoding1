import React, { Component } from 'react'
import { Card, Button, Form } from 'react-bootstrap';
import { MDBInput } from "mdbreact";

const cardStyle = {
    width: '350px',
    height: '564px',
    display: 'flex',
    alignItems: 'center',
}
const logoUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
const logoStyle = {
    width: '175px',
    height: '51px',
}

const signUpStyle = {
    color: '#999',
    textAlgin: 'center',
    margin: '0 40px 10px',
    fontSize: '17px',
    fontWeight: '600px',
    lineHeight: '20px',
}

const formStyle = {
    width: '80%'
}
const styles = {
    loginButton: {
        width: '268px',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '4px'
    }
}
export default class LoginCard extends Component {
    render() {
        return (
            <div>
                <Card style={cardStyle}>
                    <img src={logoUrl} style={logoStyle} />
                    <Button style={styles.loginButton}>Log in with facebook</Button>
                    <div className="form-group" style={formStyle}>
                        <MDBInput label="Mobile Number or Email" size="sm" />
                        <MDBInput label="Full Name" size="sm" />
                        <MDBInput label="User Name" size="sm" />
                        <MDBInput label="Password" type="password" size="sm" />
                    </div>
                    <Button>Sign up</Button>
                    <a style={signUpStyle}>
                        By signing up, you agree to our Terms , Data Policy and Cookies Policy .
                    </a>
                </Card>

            </div>
        )
    }
}
