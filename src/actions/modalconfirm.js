export const SHOW_MODAL_CONFIRM = 'SHOW_MODAL_CONFIRM'
export const DISMISS_SHOW_MODAL_CONFIRM = 'DISMISS_SHOW_MODALCONFIRM'


export const showModalConfirm = (message = '',confirm, title = '',color='primary') => dispatch => {
    dispatch({
        type:SHOW_MODAL_CONFIRM,
        confirm,message,title,color
    })
}

export const dismissShowModalConfirm = () => dispatch => {
    dispatch({
        type:DISMISS_SHOW_MODAL_CONFIRM
    })
}