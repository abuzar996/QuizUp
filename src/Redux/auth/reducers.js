import {
    LOGIN_USER,
    AUTH_FAILURE,
    LOGIN_USER_SUCCESS,

} from "../actions";
const INIT_STATE = {
    user: {},
    loading: false,
    
};
const data= (state = INIT_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER:
            
            return { ...state, loading: true, user: action.payload };
        case LOGIN_USER_SUCCESS:
            return { ...state, loading: false, user: action.payload };
        case AUTH_FAILURE:
            return { ...state, loading: false };
        default:
            return { ...state };
    }
};
export default data;