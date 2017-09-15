import React, { Component } from 'react';
import './App.css';

import Navigation from './Nav';
import PanelView from './Panel';

class App extends Component {
    constructor() {
        super();
        this.state = {
            tabs: ['Dashboard', 'Scanner', 'Map'],
            selectedKey: 1,
            user: 'Tymoteusz'
        }
    }

    handleNavSelect(i) {
        // TODO
        // const nav = this.state.tabs.slice(0);
        // const tab = nav[i];
        this.setState({
            selectedKey: i
        });
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>{this.state.user} welcome to WebcamApp</h2>
                </div>

                <Navigation
                    tabs={this.state.tabs}
                    onSelect={i => this.handleNavSelect(i)}
                    selectedKey={this.state.selectedKey}
                />

                <PanelView tab={this.state.selectedKey} />
            </div>
        );
    }
}

export default App;
