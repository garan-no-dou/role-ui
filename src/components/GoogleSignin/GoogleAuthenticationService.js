import React from 'react';
import axios from 'axios';
import GoogleAuthenticationDTO from "./GoogleAuthenticationDTO";

class GoogleAuthenticationService {

    constructor() {
    }

    createSession(response) {

        let googleAuthenticationBuilder = new GoogleAuthenticationDTO.GoogleAuthenticationBuilder()

        let profileObj = response.profileObj;

        googleAuthenticationBuilder.name = profileObj.name
        googleAuthenticationBuilder.givenName = profileObj.givenName
        googleAuthenticationBuilder.familyName = profileObj.familyName
        googleAuthenticationBuilder.imageUrl = profileObj.imageUrl
        googleAuthenticationBuilder.email = profileObj.email

        let tokenObj = response.tokenObj

        googleAuthenticationBuilder.accessToken = tokenObj.access_token
        googleAuthenticationBuilder.idToken = tokenObj.id_token
        googleAuthenticationBuilder.scope = tokenObj.scope
        googleAuthenticationBuilder.expiresIn = tokenObj.expires_in
        googleAuthenticationBuilder.firstIssuedAt = tokenObj.first_issued_at
        googleAuthenticationBuilder.expiresAt = tokenObj.expires_at

        let googleAuthenticationDTO = googleAuthenticationBuilder.build()

        //TODO: Extract url into profile files
        axios.post(`http://localhost:8080/authentication`, {googleAuthenticationDTO},
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(res => {
                console.log(res);
                console.log(res.data);
                //TODO: Store user session into indexedDB
            }).catch(reason => {
            //TODO: Do something when it fails
        })
    }

    deleteSession(response) {
        //TODO:
    }
}

export default GoogleAuthenticationService;