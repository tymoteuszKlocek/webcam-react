// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import * as sessionActions from '../../actions/sessionActions';

type Props = { /* ... */ }; // issue: what to put here TODO
type State = {
    credentials: {
        username: string,
        password: string,
    },
    redirect: boolean,
}

class LoginPage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            credentials: {
                username: '',
                password: '',
            },
            redirect: false,
        };

    }

    onChange(event: SyntheticEvent<HTMLButtonElement>) {
        const field: string = event.target.name;
        const credentials: Object = this.state.credentials;
        credentials[field] = event.target.value;
        return this.setState({ credentials: credentials });
    }

    onSubmit() {
        this.props.actions.loginUser(this.state.credentials)
            .then(() => {
                this.setState({ redirect: true });
            });
    }

    render() {
        let redirect = this.state.redirect;

        if (redirect) {
            return <Redirect to='/dashboard' />
        }

        return (
            <div className="col-xs-10 col-sm-6 col-md-6">

                <h3> You must login to enter this app. </h3>
                <h5>If you have no account press Register button.</h5>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">
                            Username:
                        <input name="username" type="text" className="form-control" onChange={(e) => { this.onChange(e) }} required />
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">
                            Password:
                        <input name="password" type="password" className="form-control" onChange={(e) => { this.onChange(e) }} required />
                        </label>
                    </div>
                    <input type="button" name="submit-login" onClick={() => this.onSubmit()} className="btn btn-primary login-btn" placeholder="Create new account" value="Submit" />
                    <Link to="/register" ><button type="button" name="register" className="btn btn-default login-btn" >Register</button></Link>
                </form>

            </div>
        );
    }
}

function mapDispatchToProps(dispatch: Object): Object {
    return {
        actions: bindActionCreators(sessionActions, dispatch),
    };
}

export default connect(null, mapDispatchToProps)(LoginPage);