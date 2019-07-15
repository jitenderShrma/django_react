// const initialState = {
//     text: 'something',
//     leads: []
// };
// import { GET_LEADS } from '../actions/types';

// export default function (state = initialState, actions) {
//     switch (actions.type) {
//         case GET_LEADS: {
//             return {
//                 ...state,
//                 leads: actions.payload
//             }
//         };
//         default: {
//             return state;
//         }
//     }
// }

const initialState = {
    text: 'something',
    leads: []
};
import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from '../actions/types';

export default function (state = initialState, actions) {
    switch (actions.type) {
        case GET_LEADS: {
            return {
                ...state,
                leads: actions.payload
            }
        };
        case ADD_LEAD: {
            return {
                ...state,
                leads: [...state.leads, actions.payload]
            }
        };
        case DELETE_LEAD: {
            return {
                ...state,
                leads: state.leads.filter(lead => lead.id !== actions.payload)
            }
        };
        default: {
            return state;
        }
    }
}