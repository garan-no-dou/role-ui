import React from 'react';
import PropTypes from 'prop-types';
import styles from './Signin.module.css';

class Signin extends React.Component {

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
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());

        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
    }
}


export default Signin;
