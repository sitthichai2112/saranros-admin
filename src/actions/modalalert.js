export const SHOW_MODAL_ALERT = 'SHOW_MODAL_ALERT'
export const DISMISS_SHOW_MODAL_ALERT = 'DISMISS_SHOW_MODAL_ALERT'


export const showModalAlert = (message = '', confirm, title = '', color = 'primary') => dispatch => {
    return {
        type: SHOW_MODAL_ALERT
    }
}

export const dismissShowModalAlert = () => dispatch => {
    return {
        type: DISMISS_SHOW_MODAL_ALERT
    }
}