import * as React from "react";
import Preview from "../session-preview/Preview";
import SessionService from "../service/SessionService";

/*
* DONE: Implement filter sessions with state
* DONE: https://reactjs.org/docs/lifting-state-up.html
* */

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: "",
            sessions: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sessionService = new SessionService();
    }

    async componentDidMount() {
        const sessions = await this.fetchSessions();
        this.setState({
            sessions: sessions
        })
    }

    async fetchSessions() {
        let sessions = [];
        if (this.state.filterText.length > 0) {
            const response = await this.sessionService.getSessionsByName(this.state.filterText)
            sessions = response.data;
        } else {
            const response = await this.sessionService.getSessions()
            sessions = response.data;
        }
        return sessions;
    }

    render() {
        return (
            <div>
                <aside>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                        <p>{this.state.filterText}</p>
                        <input type="submit" value="Search"></input>
                    </form>
                </aside>
                <section>
                    <ul> {this.renderSessionItems()} </ul>
                </section>
            </div>

        );

    }

    renderSessionItems() {
        return this.state["sessions"].map((element) =>
            <li key={element.name}>
                <Preview session={element}/>
            </li>
        );
    }

    handleChange(event) {
        this.setState({
            filterText: event.target.value
        });
    }

    handleSubmit(event) {
        this.fetchSessions()
        event.preventDefault();
    }
}

export default Dashboard;
