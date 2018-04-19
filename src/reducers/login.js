import { LOGIN_SUCCESS  } from "../actions/login";

const initialState = {
    token : '',
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                userData: action.userData
            };
            break;
        default:
            return state
    }
}
