import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addLead } from '../../actions/leadAction';
import classnames from 'classnames';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.leads) {
            console.log('s.................', nextProps.leads, this.props.leads);
        }
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) => {
        const newLead = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        // call action
        this.props.addLead(newLead);
        // this.setState({ name: '', email: '', message: '' });
        e.preventDefault();
    }
    render() {
        const { name, email, message } = this.props.errors;
        console.log(name, email);
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Lead</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            onChange={this.onChange}
                            value={this.state.name}
                        />
                        <div className="invalid-feedback">{name}</div>
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
                        <label>Message</label>
                        <input
                            className={classnames('form-control', { 'is-invalid': message })}
                            type="text"
                            name="message"
                            onChange={this.onChange}
                            value={this.state.message}
                        />
                        <div className="invalid-feedback">{message}</div>

                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    leads: state.leads,
    errors: state.errors
});

export default connect(mapStateToProps, { addLead })(Form);