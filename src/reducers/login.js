import { LOGINSUCCESS, LOGINFAILED } from "../actions/login";

const initialState = {
    token: '',
    status_login_failed: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGINSUCCESS:
            return {
                ...state,
                token: action.token
            };
            break;
        case LOGINFAILED:
            return {
                ...state,
                status_login_failed: action.status
            };
            break;
        default:
            return state
    }
}
