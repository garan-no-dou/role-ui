import * as React from "react";
import Preview from "../session-preview/Preview";

/*
* TODO: Implement filter sessions with state
* TODO: https://reactjs.org/docs/lifting-state-up.html
* */

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sessions: []
        }
    }

    componentDidMount() {
        const {sessionA, sessionB} = this.fetchSessions();
        this.setState({
            sessions: [sessionA, sessionB]
        })
    }

    fetchSessions() {
        // TODO: Axios API call
        const sessionA = {
            name: "Session A",
            players: ["Loyel", "Mañel"]
        }
        const sessionB = {
            name: "Session B",
            players: ["Selgio", "Mañel"]
        }
        return {sessionA, sessionB};
    }

    render() {
        return (
            <ul> {this.renderSessionItems()} </ul>
        );
    }

    renderSessionItems() {
        return this.state["sessions"].map((element) =>
            <li>
                <Preview session={element}/>
            </li>
        );
    }
}

export default Dashboard;
