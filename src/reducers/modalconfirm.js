import { SHOW_MODAL_CONFIRM, DISMISS_SHOW_MODAL_CONFIRM } from '../actions/modalconfirm'

const initialState = {
    show: false,
    message: '',
    confirm: null,
}

export default function alert(state = initialState, action) {
    switch (action.type) {
        case SHOW_MODAL_CONFIRM:
            const { message, confirm, title, color } = action
            return {
                ...state,
                show: true,
                message, confirm, title, color
            }
        case DISMISS_SHOW_MODAL_CONFIRM:
            return {
                ...state,
                show: false,
            }
        default:
            return state
    }
}