const errors = {};
import {GET_ERRORS} from '../actions/types';

export default function(state=errors, action){
    switch(action.type){
        case GET_ERRORS: {
            return action.payload
        };
        default: {
            return state;
        }
    }
}