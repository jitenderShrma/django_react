import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Fragment } from 'react';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

// Components
import Navbar from './components/layouts/Header';
import Dashboard from './components/leads/Dashboard';
import Form from './components/leads/Form';
import Leads from './components/leads/Leads';

const alertOptions = {
    timeout: 3000,
    position: 'top center'
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                    <Fragment>
                        <Navbar />

                        <div className="container">
                            <Switch>
                            <Route exact path="/" component={Dashboard}/>
                            </Switch>
                        </div>
                    </Fragment>
            </Provider>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'));