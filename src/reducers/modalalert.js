import { SHOW_MODAL_ALERT , DISMISS_SHOW_MODAL_ALERT } from '../actions/modalalert'

const initialState = {
    show: false,
    message: '',
    confirm: null,
}

export default function alerts(state = initialState, action) {
    switch (action.type) {
        case SHOW_MODAL_ALERT:
        console.log(12321321)
            const { message, confirm, title, color } = action
            return {
                ...state,
                show: true,
                message, confirm, title, color
            }
        case DISMISS_SHOW_MODAL_ALERT:
            return {
                ...state,
                show: false,
            }
        default:
            return state
    }
}