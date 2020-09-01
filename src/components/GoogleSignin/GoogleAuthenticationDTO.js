class GoogleAuthenticationDTO {
    googleBasicProfile;
    googleAuth;

    constructor(googleBasicProfile, googleAuth) {
        this.googleBasicProfile = googleBasicProfile;
        this.googleAuth = googleAuth;
    }

}

class GoogleAuthenticationBuilder {

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

    build() {
        let googleBasicProfile = new GoogleBasicProfile(
            this.name,
            this.givenName,
            this.familyName,
            this.imageUrl,
            this.email)

        let googleAuth = new GoogleAuth(
            this.accessToken,
            this.idToken,
            this.scope,
            this.expiresIn,
            this.firstIssuedAt,
            this.expiresAt)

        return new GoogleAuthenticationDTO(googleBasicProfile, googleAuth)
    }
}

class GoogleBasicProfile {
    name;
    givenName;
    familyName;
    imageUrl;
    email;

    constructor(id, name, givenName, familyName, imageUrl, email) {
        this.name = name;
        this.givenName = givenName;
        this.familyName = familyName;
        this.imageUrl = imageUrl;
        this.email = email;
    }
}

class GoogleAuth {
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

export default {
    GoogleAuthenticationDTO, GoogleAuthenticationBuilder
}

