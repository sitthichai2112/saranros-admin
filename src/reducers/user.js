import { GET_LIST_USER, GETDETAILUSERUPDATE } from "../actions/user";

const initialState = {
    listuser: [],
    detailuserupdate:{},
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_LIST_USER:
            return {
                ...state,
                listuser: action.listuser
            };
            break;
        case GETDETAILUSERUPDATE:
            return {
                ...state,
                detailuserupdate: action.detailuserupdate,
            };
            break;
        default:
            return state
    }
}
