import * as React from "react";

class Preview extends React.Component {

    constructor(props) {
        super(props);
        this.session = props.session;
    }

    render() {
        return (
            <div>
                <p>Session name: {this.session.name}</p>
                <p>Players: </p>
                <ul>{this.getPlayers()}</ul>
            </div>
        );
    }

    getPlayers() {
        return (
            this.session.players.map((player) =>
                <li key={player}>{player}</li>
            )
        );
    }
}

export default Preview;
