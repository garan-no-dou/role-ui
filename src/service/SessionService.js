import API from "./API";

class SessionService {

    async getSessions() {
        return API.get('/sessions')
    }

    async getSessionsByName(sessionName) {
        return API.get('/sessions?name=' + sessionName);
    }

}

export default SessionService;
