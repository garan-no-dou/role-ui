class GoogleAuthenticationDTO {
    googleBasicProfile;
    googleAuthResponse;

    constructor(googleBasicProfile, googleAuthResponse) {
        this.googleBasicProfile = googleBasicProfile;
        this.googleAuthResponse = googleAuthResponse;
    }

}

class GoogleAuthenticationBuilder {

    id;
    name;
    givenName;
    familyName;
    imageUrl;
    email;

    accessToken;
    idToken;
    scope;
    expiresIn;
    firstIssuedAt;
    expiresAt;


    constructor() {
    }

    build() {
        let googleBasicProfile = new GoogleBasicProfile(this.id,
            this.name,
            this.givenName,
            this.familyName,
            this.imageUrl,
            this.email)

        let googleAuthResponse = new GoogleAuthResponse(this.accessToken,
            this.idToken,
            this.scope,
            this.expiresIn,
            this.firstIssuedAt,
            this.expiresAt)

        return new GoogleAuthenticationDTO(googleBasicProfile, googleAuthResponse)
    }
}

class GoogleBasicProfile {
    id;
    name;
    givenName;
    familyName;
    imageUrl;
    email;

    constructor(id, name, givenName, familyName, imageUrl, email) {
        this.id = id;
        this.name = name;
        this.givenName = givenName;
        this.familyName = familyName;
        this.imageUrl = imageUrl;
        this.email = email;
    }
}

class GoogleAuthResponse {
    accessToken;
    idToken;
    scope;
    expiresIn;
    firstIssuedAt;
    expiresAt;

    constructor(accessToken, idToken, scope, expiresIn, firstIssuedAt, expiresAt) {
        this.accessToken = accessToken;
        this.idToken = idToken;
        this.scope = scope;
        this.expiresIn = expiresIn;
        this.firstIssuedAt = firstIssuedAt;
        this.expiresAt = expiresAt;
    }
}

export default GoogleAuthenticationDTO;