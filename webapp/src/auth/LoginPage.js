import React from 'react';
import TextInput from './TextInput';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as sessionActions from '../actions/sessionActions';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            credentials: {
                username: '',
                password: ''
            }
        };
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    onChange(event) {
        const field = event.target.name;
        const credentials = this.state.credentials;
        credentials[field] = event.target.value;
        return this.setState({ credentials: credentials });
    }

    onSave(event) {
        event.preventDefault();
        this.props.actions.loginUser(this.state.credentials);
    }

    render() {
        return (
            <div className="col-xs-10 col-sm-6 col-md-6">
                <div className="panel panel-default ">
                    <div className="panel-body">
                        <h3> You must login to enter this app. If you have no account register it here</h3>
                        <form>
                            < TextInput
                                name="username"
                                label="username"
                                value={this.state.credentials.username}
                                onChange={this.onChange} />

                            < TextInput
                                name="password"
                                label="password"
                                type="password"
                                value={this.state.credentials.password}
                                onChange={this.onChange} />

                            < input
                                type="submit"
                                className="btn btn-primary"
                                onClick={this.onSave} />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(sessionActions, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(LoginPage);