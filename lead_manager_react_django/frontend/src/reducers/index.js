// import { combineReducers } from 'redux';
// import leads from './leads';

// export default combineReducers({
//     leads
// });

import { combineReducers } from 'redux';
import leads from './leads';
import errors from './errors';
import auth from './auth';


export default combineReducers({
    leads,
    errors,
    auth
});