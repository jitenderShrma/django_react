import axios from 'axios';
import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS} from './types';


// Get Leads
export const getLeads = () => dispatch => {
    axios.get('/api/leads')
    .then(res => {
        dispatch({type: GET_LEADS, payload: res.data });
    })
    .catch(error => console.log(error.response.data));
}


// Delete lead
export const deleteLeads = (id) => dispatch => {
    axios.delete(`/api/leads/${id}`)
    .then(res => {
        dispatch({type: DELETE_LEAD, payload: id });
    })
    .catch(error => console.log(error));
}

// Add lead
export const addLead = (newLead) => dispatch => {
    axios.post(`/api/leads/`, newLead)
    .then(res => {
        //console.log(res.data);
        dispatch({type: ADD_LEAD, payload: res.data});
    })
    .catch(error => {
        dispatch({type: GET_ERRORS, payload: error.response.data});
    });
}