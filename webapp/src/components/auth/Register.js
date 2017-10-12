//@flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import * as sessionActions from '../../actions/sessionActions';
import conf from '../../common/config/conf.json';
import FormErrors from './FormErrors';

type Props = {
    onSubmit: () => void
}; // issue: what to put here

type State = {
    credentials: {
        username: string,
        password: string,
        confirmpassword: string,
        email: string,
    },
    formErrors: {
        username: string,
        password: string,
        email: string,
        confirmpassword: string,
    },
    redirect: boolean,
    emailValid: boolean,
    confirmpasswordValid: boolean,
    usernameValid: boolean,
    passwordValid: boolean,
    formValid: boolean,
}

class Register extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            credentials: {
                username: '',
                password: '',
                confirmpassword: '',
                email: '',
            },
            formErrors: {
                username: '',
                password: '',
                confirmpassword: '',
                email: '',
            },
            emailValid: false,
            usernameValid: false,
            passwordValid: false,
            confirmpasswordValid: false,
            formValid: false,
            redirect: false,
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event: SyntheticEvent<HTMLButtonElement>) {
        const field: string = event.target.name;
        const credentials: Object = this.state.credentials;
        credentials[field] = event.target.value;
        this.setState({ credentials: credentials },
            () => { this.validateField(field, credentials[field]) });
    }

    validateField(fieldName: string, value: string) {

        const usernNameMinLength = conf.register.usernNameMinLength;
        const passwordMinLength = conf.register.passwordMinLength;
        const emailPattern = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

        let fieldValidationErrors = this.state.formErrors;
        let usernameValid: boolean = this.state.usernameValid;
        let passwordValid: boolean = this.state.passwordValid;
        let confirmpasswordValid: boolean = this.state.confirmpasswordValid;
        let emailValid: boolean = this.state.emailValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(emailPattern);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'username':
                usernameValid = value.length >= usernNameMinLength;
                fieldValidationErrors.username = usernameValid ? '' : ' must be min 2 chars long';
                break;
            case 'password':
                passwordValid = value.length >= passwordMinLength;
                fieldValidationErrors.password = passwordValid ? '' : ' must be min 4 chars long';
                break;
            case 'confirmpassword':
                confirmpasswordValid = (value.length >= passwordMinLength && value === this.state.credentials.password);
                fieldValidationErrors.confirmpassword = confirmpasswordValid ? '' : ' must be min 4 chars long and compare to password';
                break;
            default:
                break;
        }

        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            usernameValid: usernameValid,
            passwordValid: passwordValid,
            confirmpasswordValid: confirmpasswordValid,
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.usernameValid && this.state.passwordValid && this.state.emailValid && this.state.confirmpasswordValid })
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }


    onSubmit(event: SyntheticEvent<HTMLButtonElement>) {
        event.preventDefault();
        this.props.actions.registerUser(this.state.credentials);
    }

    render() {

        if (this.props.session.message) {
            return <Redirect to='/login' />
        }

        return (
            <div className="col-xs-10 col-sm-6 col-md-6">
                <h3> You must login to enter this app. If you have no account register it here</h3>
                <div>
                    <FormErrors
                        formErrors={this.state.formErrors}
                        registerError={this.props.session.error}
                    />
                </div>
                <form className="form-group">
                    <h3>Create new account</h3>
                    <div className={this.errorClass(this.state.formErrors.password)}>
                        <label htmlFor="email">
                            Email address:
                                <input name="email" type="email" className="form-control" aria-describedby="emailHelp" onChange={(e) => { this.onChange(e) }} required />
                        </label>
                    </div>
                    <div className={this.errorClass(this.state.formErrors.password)}>
                        <label htmlFor="new-username">
                            Username:
                                <input name="username" type="text" className="form-control" onChange={(e) => { this.onChange(e) }} required />
                        </label>
                    </div>
                    <div className={this.errorClass(this.state.formErrors.password)}>
                        <label htmlFor="new-password">
                            Password:
                                <input name="password" type="password" className="form-control" onChange={(e) => { this.onChange(e) }} required />
                        </label>
                    </div>
                    <div className={this.errorClass(this.state.formErrors.password)}>
                        <label htmlFor="confirm-password">
                            Confirm password:
                                <input name="confirmpassword" type="password" className="form-control" onChange={(e) => { this.onChange(e) }} required />
                        </label>
                    </div>
                    <input type="submit" name="submit-register" onClick={this.onSubmit} className="btn btn-primary login-btn" placeholder="Create new account" value="Submit" disabled={!this.state.formValid} />
                    <Link to="/login" ><input type="button" name="login" className="btn btn-default login-btn" value="Login" /></Link>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state: Store) => {
    return {
        session: state.session,
    };
};

function mapDispatchToProps(dispatch: Object): Object {
    return {
        actions: bindActionCreators(sessionActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);