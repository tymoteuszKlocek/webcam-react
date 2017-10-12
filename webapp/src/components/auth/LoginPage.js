// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import * as sessionActions from '../../actions/sessionActions';
import conf from '../../common/config/conf.json';
import FormErrors from './FormErrors';

type Props = {
    actions: {
        logout: () => void,
        loginUser: (credentials: Object) => void
    },
    session: {
        token: string,
        error: any,
    }
};

type State = {
    credentials: {
        username: string,
        password: string,
    },
    formErrors: {
        username: string,
        password: string
    },
    redirect: boolean,
    usernameValid: boolean,
    passwordValid: boolean,
    formValid: boolean,
}

type Store = {
    session: Object,
    position: string,
    galleryWebcams: Array<Object>,
}

class LoginPage extends React.Component<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            credentials: {
                username: '',
                password: '',
            },
            formErrors: { username: '', password: '' },
            usernameValid: false,
            passwordValid: false,
            formValid: false,
            redirect: false,
        };

        this.onSave = this.onSave.bind(this);
    }

    onChange(event: SyntheticEvent<HTMLButtonElement>) {
        //TODO: is this good way?
        (event.target: HTMLButtonElement);
        const field: string = event.target.name;
        const credentials: Object = this.state.credentials;
        credentials[field] = event.target.value;
        this.setState({ credentials: credentials },
            () => { this.validateField(field, credentials[field]) });
    }

    validateField(fieldName: string, value: string) {
        const usernNameMinLength = conf.register.usernNameMinLength;
        const passwordMinLength = conf.register.passwordMinLength;

        let fieldValidationErrors = this.state.formErrors;
        let usernameValid: boolean = this.state.usernameValid;
        let passwordValid: boolean = this.state.passwordValid;

        switch (fieldName) {
            case 'username':
                usernameValid = value.length >= usernNameMinLength;
                fieldValidationErrors.username = usernameValid ? '' : ' must be min 2 chars long';
                break;
            case 'password':
                passwordValid = value.length >= passwordMinLength;
                fieldValidationErrors.password = passwordValid ? '' : ' must be min 4 chars long';
                break;
            default:
                break;
        }

        this.setState({
            formErrors: fieldValidationErrors,
            usernameValid: usernameValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.usernameValid && this.state.passwordValid })
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    onSave(event: SyntheticEvent<HTMLButtonElement>) {
        event.preventDefault();
        this.props.actions.loginUser(this.state.credentials);
    }

    onError() {
        this.props.actions.logout();
        window.location.reload();
        localStorage.removeItem('webcam-app-state');
    }

    render() {
        //on Login success
        if (this.props.session.token) {
            return <Redirect to='/dashboard/0' />
        }

        //on Error
        if (this.props.session.error !== undefined) {
            return (
                <div>
                    <div className="alert alert-warning">{this.props.session.error}</div>
                    <button className="btn btn-default" onClick={() => this.onError()}>Back</button>
                </div>
            );
        }

        return (
            <div className="col-xs-10 col-sm-6 col-md-6">

                <h3> You must login to enter this app. </h3>
                <h5>If you have no account press Register button.</h5>
                <div>
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
                <form className="form-group">
                    <div className={"input-group " + this.errorClass(this.state.formErrors.username)}>
                        <label htmlFor="username">
                            Username:
                        <input name="username" type="text" className="form-control " onChange={(e) => { this.onChange(e) }} required />
                        </label>
                    </div>
                    <div className={"input-group " + this.errorClass(this.state.formErrors.password)}>
                        <label htmlFor="password">
                            Password:
                        <input name="password" type="password" className="form-control" onChange={(e) => { this.onChange(e) }} required />
                        </label>
                    </div>
                    <input type="submit" onClick={this.onSave} className="btn btn-primary login-btn" placeholder="Create new account" value="Submit" disabled={!this.state.formValid} />
                    <Link to="/register" ><button type="button" name="register" className="btn btn-default login-btn" >Register</button></Link>
                </form>

            </div>
        );
    }
}

const mapStateToProps = (state: Store) => {
    return {
        session: state.session,
        position: state.position,
        galleryWebcams: state.galleryWebcams,
    };
};

function mapDispatchToProps(dispatch: Object): Object {
    return {
        actions: bindActionCreators(sessionActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);