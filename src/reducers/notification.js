import { OPEN_NOTIFICATION } from "../actions/notification";

const initialState = {
    message: '',
    status: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case OPEN_NOTIFICATION:
            const { message, status } = action
            return {
                ...state,
                message, status
            };
            break;
        default:
            return state
    }
}
