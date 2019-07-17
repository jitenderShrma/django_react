import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { login } from '../../actions/accountAction';

class Register extends Component {
    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool.isRequired
    }
    state = {
        username: '',
        password: '',
        password2: ''
    }
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit = (e) => {
        this.props.login(this.state.username, this.state.password);
        
        e.preventDefault();
    }
    componentWillReceiveProps(nextProps){
        // console.log(nextProps.auth.isAuthenticated)
        // if(nextProps.auth.isAuthenticated){
        //     return <Redirect to="/" />
        // }
    }
    render() {
        // if(this.props.isAuthenticated){

        //     <Redirect to="/" />
        // }
        const {username, password } = this.props.errors;
        if(this.props.auth.isAuthenticated){
            return <Redirect to="/" />
        }
        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-4 mb-4">
                <h2>Login</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            className={classnames('form-control', { 'is-invalid': username })}
                            type="text"
                            name="username"
                            onChange={this.onChange}
                            value={this.state.username}
                        />
                        <div className="invalid-feedback">{username}</div>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            className={classnames('form-control', { 'is-invalid': password })}
                            type="text"
                            name="password"
                            onChange={this.onChange}
                            value={this.state.password}
                        />
                        <div className="invalid-feedback">{password}</div>

                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                    <p>Already have not an account? <Link to="/register">Register</Link></p>
                </form>
            </div> 
            </div>
        )
    }
}
const mapStateToProps = state => ({
    errors: state.errors,
    auth: state.auth
});

export default connect(mapStateToProps, { login }) (Register);