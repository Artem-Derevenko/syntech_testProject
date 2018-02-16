import React, { Component } from 'react';
import List from './components/List/List.jsx';
import Panel from './components/Panel/Panel.jsx';

class Home extends Component {
    render() {
        return (
            <div>
                <Panel />
                <List />
            </div>
        )
    }
}

export default Home;