import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import GoogleAuthenticationService from "../GoogleSignin/GoogleAuthenticationService";


const CLIENT_ID = '129422048752-f6c7ajp6j4pk7s9u6gkrcohjpaasq430.apps.googleusercontent.com';

class GoogleBtn extends Component {

    googleAuthenticatorService: GoogleAuthenticationService;

    constructor(props) {
        super(props);

        this.googleAuthenticatorService = new GoogleAuthenticationService();

        this.state = {
            isLogined: false,
            accessToken: ''
        };

        this.login = this.login.bind(this);
        this.handleLoginFailure = this.handleLoginFailure.bind(this);
        this.logout = this.logout.bind(this);
        this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
    }

    login (response) {
        console.log(response)
        if(response.accessToken){
            this.setState(state => ({
                isLogined: true,
                accessToken: response.accessToken
            }));
        }
        this.googleAuthenticatorService.createSession(response)
    }

    logout (response) {
        this.setState(state => ({
            isLogined: false,
            accessToken: ''
        }));

        this.googleAuthenticatorService.deleteSession(response)
    }

    handleLoginFailure (response) {
        alert('Failed to log in')
    }

    handleLogoutFailure (response) {
        alert('Failed to log out')
    }

    render() {
        return (
            <div>
                { this.state.isLogined ?
                    <GoogleLogout
                        clientId={ CLIENT_ID }
                        buttonText='Logout'
                        onLogoutSuccess={ this.logout }
                        onFailure={ this.handleLogoutFailure }
                    >
                    </GoogleLogout>: <GoogleLogin
                        clientId={ CLIENT_ID }
                        buttonText='Login'
                        onSuccess={ this.login }
                        onFailure={ this.handleLoginFailure }
                        cookiePolicy={ 'single_host_origin' }
                        responseType='code,token'
                    />
                }
                { this.state.accessToken ? <h5>Your Access Token: <br/><br/> { this.state.accessToken }</h5> : null }

            </div>
        )
    }
}

export default GoogleBtn;