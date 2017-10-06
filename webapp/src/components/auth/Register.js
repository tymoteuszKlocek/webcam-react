//@flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../actions/sessionActions';

type Props = { /* ... */ }; // issue: what to put here
type State = {
    credentials: {
        username: string,
        password: string,
        confirmpassword: string,
        email: string,
    },
    redirect: boolean,
}

class Register extends React.Component<{}, State> {
    constructor(props) {
        super(props);

        this.state = {
            credentials: {
                username: '',
                password: '',
                confirmpassword: '',
                email: '',
            },
            redirect: false,
        };
    }

    onChange(event: SyntheticEvent<HTMLButtonElement>) {
        const field: string = event.target.name;
        const credentials: Object = this.state.credentials;
        credentials[field] = event.target.value;
        this.setState({ credentials: credentials });
    }

    onSubmit() {
        this.props.actions.registerUser(this.state.credentials)
            .then(() => {
                this.setState({ redirect: true });
            });
    }

    redirectToLogin() {
        this.setState({ 'redirect': true });
    }

    render() {
        let redirect = this.state.redirect;

        if (redirect) {
            return <Redirect to='/login' />
        }

        return (
            <div className="col-xs-10 col-sm-6 col-md-6">
                <h3> You must login to enter this app. If you have no account register it here</h3>
                <form>
                    <h3>Create new account</h3>
                    <div className="form-group">
                        <label htmlFor="email">
                            Email address:
                                <input name="email" type="email" className="form-control" aria-describedby="emailHelp" onChange={(e) => { this.onChange(e) }} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="new-username">
                            Username:
                                <input name="username" type="text" className="form-control" onChange={(e) => { this.onChange(e) }} required />
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="new-password">
                            Password:
                                <input name="password" type="password" className="form-control" onChange={(e) => { this.onChange(e) }} required />
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">
                            Confirm password:
                                <input name="confirmpassword" type="password" className="form-control" onChange={(e) => { this.onChange(e) }} />
                        </label>
                    </div>
                    <input type="button" name="submit-register" onClick={() => this.onSubmit()} className="btn btn-primary login-btn" placeholder="Create new account" value="Submit" />
                    <input type="button" name="login" className="btn btn-default login-btn" value="Login" onClick={() => this.redirectToLogin()} />
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch: Object): Object {
    return {
        actions: bindActionCreators(sessionActions, dispatch),
    };
}

export default connect(null, mapDispatchToProps)(Register);