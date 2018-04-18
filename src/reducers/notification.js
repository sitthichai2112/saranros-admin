import { OPENNOTIFICATION } from "../actions/notification";

const initialState = {
    message: '',
    status: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case OPENNOTIFICATION:
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
