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
            filterText: "",
            sessions: []
        }

		this.handleChange = this.handleChange.bind(this);   
		this.handleSubmit= this.handleSubmit.bind(this);   
    }

    componentDidMount() {
        this.setState({
            sessions: this.fetchSessions()
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
        const sessions= [sessionA, sessionB]
        
        if(this.state.filterText.length > 0){
			return sessions.filter(session => session.name === this.state.filterText)
        } 
        return sessions;
    }

    render() {
        return (
            <div>
                <aside>
                    <form onSubmit={this.handleSubmit}>
						<input type="text" value={this.state.value} onChange={this.handleChange} />
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
    this.setState({sessions: this.fetchSessions()})
    event.preventDefault();
  }   
}

export default Dashboard;
