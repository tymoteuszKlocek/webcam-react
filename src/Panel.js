import React from 'react';
import { Panel } from 'react-bootstrap';
import Scanner from './Scanner';
import Dashboard from './Dashboard';
import Map from './Map';


class PanelView extends React.Component {
    showView(tab) {
        if (tab === 0) {
            console.log(tab)
            return (
                <Panel>
                    <Dashboard />
                </Panel>
            )
        } else if (tab === 1) {
            console.log(tab)
            return (
                <Panel>
                    <Scanner />
                </Panel>

            )
        } else {
            console.log(tab)
            return (
                <Panel>
                    <Map />
                </Panel>

            )
        }
    }

    render() {
        return this.showView(this.props.tab);
    }
}

export default PanelView;