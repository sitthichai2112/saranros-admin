import { LOGINSUCCESS, LOGINFAILED } from "../actions/login";
import { LOGIN_SUCCESS  } from "../actions/login";
const initialState = {
    token: '',
    status_login_failed: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                userData: action.userData
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
