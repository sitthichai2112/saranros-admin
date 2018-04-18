import { SHOWMODALCONFIRM, DISMISSSHOWMODALCONFIRM } from '../actions/modalconfirm'

const initialState = {
    show: false,
    message: '',
    confirm: null,
}

export default function alert(state = initialState, action) {
    switch (action.type) {
        case SHOWMODALCONFIRM:
            const { message, confirm, title, color } = action
            return {
                ...state,
                show: true,
                message, confirm, title, color
            }
        case DISMISSSHOWMODALCONFIRM:
            return {
                ...state,
                show: false,
            }
        default:
            return state
    }
}