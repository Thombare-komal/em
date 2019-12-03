import { LOGIN_SUBMIT } from '../constants/action-types';
const initialState = {
    loginData: []
};

function rootReducer(state = initialState, action) {
    if (action.type === LOGIN_SUBMIT) {
        state.loginData.push(action.payload)
    }
    return state;
};

export default rootReducer;