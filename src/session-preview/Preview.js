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
                <p>Players: <ul>{this.getPlayers()}</ul></p>
            </div>
        );
    }

    getPlayers() {
        return (
            this.session.players.map((player) =>
                <li>{player}</li>
            )
        );
    }
}

export default Preview;
