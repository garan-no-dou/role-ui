import React from 'react';
import styles from './GoogleSignin.module.css';
import GoogleAuthenticationDTO from "./GoogleAuthenticationDTO";

class GoogleSignin extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.Signin} data-testid="Signin">
                <div className="g-signin2" data-onsuccess="{this.onSignIn}" data-theme="dark"/>
            </div>
        )
    }

    onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        let profile = googleUser.getBasicProfile();

        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());

        // The ID token you need to pass to your backend:
        let authResponse = googleUser.getAuthResponse;
        var id_token = authResponse().id_token;
        console.log("ID Token: " + id_token);

        let googleAuthentication = new GoogleAuthenticationDTO(
            authResponse.access_token,
            authResponse.id_token,
            authResponse.scope,
            authResponse.expires_in,
            authResponse.first_issued_at,
            authResponse.expires_at
        )
    }
}


export default GoogleSignin;
