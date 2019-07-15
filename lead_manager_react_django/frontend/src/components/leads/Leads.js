import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads, deleteLeads } from '../../actions/leadAction';

class Leads extends Component {
    static propTypes = {
        leads: PropTypes.array.isRequired,
        getLeads: PropTypes.func.isRequired,
        deleteLeads: PropTypes.func.isRequired
    }
    componentDidMount() {
        this.props.getLeads();
    }
    onDelete = (id) => {
        this.props.deleteLeads(id);
    }
    render() {
        const { leads } = this.props.leads;
        let content;
        if (leads.length > 0) {
            content = leads.map(lead => (
                <tr key={lead.id}>
                    <td>{lead.id}</td>
                    <td>{lead.name}</td>
                    <td>{lead.email}</td>
                    <td>{lead.message}</td>
                    <td>
                        <button onClick={this.onDelete.bind(this, lead.id)} className="btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>
            ))
        }
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            content
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    leads: state.leads
});
export default connect(mapStateToProps, { getLeads, deleteLeads })(Leads);