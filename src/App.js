import React from 'react';
import './App.css';
import Dashboard from "./sessions-dashboard/Dashboard";

class App extends React.Component {
    constructor(props) {
        super(props);
        // set state if needed
    }

    render() {
        return (
            <Dashboard />
        )
    }
}

export default App;
