class SessionService {
    storage;

    constructor() {
        if (typeof (Storage) !== "undefined") {
            this.storage = window.localStorage;
        } else {
            alert("Sorry! No Web Storage support..");
        }

    }

    saveSessionId(sessionId) {
        this.storage.sessionId = sessionId;
    }

    retrieveSessionId() {
        return this.storage.sessionId;
    }

    deleteSessionId() {
        delete this.storage.sessionId;
    }

    checkIfCurrentSessionIsValid(): boolean {
        let sessionId = this.retrieveSessionId()

        if (sessionId) {
            // TODO: validate session to backend
            return true;
        }
        return false;

    }

}


export default SessionService;
