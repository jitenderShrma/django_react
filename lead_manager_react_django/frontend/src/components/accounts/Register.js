import React, { Component } from 'react';
import { connect } from 'react-redux';

class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: ''
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) => {
        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }
        // call action
        //this.props.addLead(newLead);
        // this.setState({ name: '', email: '', message: '' });
        e.preventDefault();
    }
    render() {
        const {username, email, password } = this.props.errors;
        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-4 mb-4">
                <h2>Register</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            className="form-control"
                            type="text"
                            name="username"
                            onChange={this.onChange}
                            value={this.state.username}
                        />
                        <div className="invalid-feedback">{username}</div>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            className={classnames('form-control', { 'is-invalid': email })}
                            type="text"
                            name="email"
                            onChange={this.onChange}
                            value={this.state.email}
                        />
                        <div className="invalid-feedback">{email}</div>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            className={classnames('form-control', { 'is-invalid': password })}
                            type="text"
                            name="message"
                            onChange={this.onChange}
                            value={this.state.message}
                        />
                        <div className="invalid-feedback">{password}</div>

                    </div>
                    <div className="form-group">
                        <label>Conform Password</label>
                        <input
                            className={classnames('form-control', { 'is-invalid': password2 })}
                            type="text"
                            name="message"
                            onChange={this.onChange}
                            value={this.state.password2}
                        />
                        <div className="invalid-feedback">{password2}</div>

                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </form>
            </div> 
            </div>
        )
    }
}
const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps, {}) (Register);