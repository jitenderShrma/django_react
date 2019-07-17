import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// actions
import { logout } from '../../actions/accountAction';

class Header extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired
    }
    onLogout = () => {
        this.props.logout();
    }
    render() {
        const { isAuthenticated } = this.props.auth;
        let navItems;
        console.log("isAuthenticated", isAuthenticated);
        if (!isAuthenticated) {
            navItems = (
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/login">Login</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/register">Register</Link>
                    </li>
                </ul>
            )
        } else {
            navItems = (
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a href="#" onClick={this.onLogout} class="nav-link">Logout</a>
                    </li>
                </ul>
            )
        }
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <a class="navbar-brand" href="/">Lead Manager</a>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            {navItems}
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps, { logout })(Header);