import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Fragment } from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

// Actions
import { loadUser } from './actions/accountAction';

// Components
import Navbar from './components/layouts/Header';
import Dashboard from './components/leads/Dashboard';
import Login from './components/accounts/Login';
import Register from './components/accounts/Register';
import PrivateRoute from './components/common/PrivateRoute';

const alertOptions = {
    timeout: 3000,
    position: 'top center'
}
class App extends Component {
    componentDidMount(){
        store.dispatch(loadUser());
    }
    render() {
        return (
            <Provider store={store}>
                <Router>
                <Fragment>
                    <Navbar />
                    <div className="container">
                        <Router>
                            <PrivateRoute exact path="/" component={Dashboard} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/register" component={Register} />
                        </Router>
                    </div>
                </Fragment>
                </Router>
            </Provider>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'));