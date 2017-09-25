//import React from 'react';

// class LoginPage extends React.Component {
//     render() {
//         return (
//             <div className="col-xs-10 col-sm-6 col-md-6">
//                 <form className="login-form">
//                     <h3>Please login or create new account</h3>
//                     <h5>username: "user"</h5>
//                     <h5>password: "pass"</h5>
//                     <div className="form-group">
//                         <label htmlFor="username">Username</label>
//                         <input name="username" className="form-control" placeholder="Username" required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="password">Password</label>
//                         <input name="password" type="password" className="form-control" placeholder="Password" required />
//                     </div>
//                     <input type="submit" name="submit-login" className="btn btn-primary submit-login" value="Login" />
//                     <input type="button" name="inputregister" className="btn btn-default" value="Sign Up" />
//                 </form>
//             </div>
//         )
//     }
// }

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
            < div>
                < form>
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

        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(sessionActions, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(LoginPage);