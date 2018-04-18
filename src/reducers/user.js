import { GETLISTUSER, GETDETAILUSERUPDATE } from "../actions/user";

const initialState = {
    listuser: [],
    detailuserupdate:{},
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GETLISTUSER:
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
