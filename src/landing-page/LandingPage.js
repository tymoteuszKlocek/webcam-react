import React from 'react';
import Register from './Register';

export default class LandingPage extends React.Component {
    constructor() {
        super();
        this.state = {
            credentials: {
                email: '',
                password: ''
            }
        }
    }

    onChange(event) {
        const field = event.target.name;
        const credentials = this.state.credentials;
        credentials[field] = event.target.value;
        return this.setState({ credentials: credentials });
    }

    render() {
        return (
            <div className="jumbotron">
                <Register />
                
            </div>
        )
    }
}