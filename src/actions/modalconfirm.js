export const SHOWMODALCONFIRM = 'showmodalconfirm'
export const DISMISSSHOWMODALCONFIRM = 'dismissshowmodalconfirm'


export const showmodalconfirm = (message = '',confirm, title = '',color='primary') => dispatch => {
    dispatch({
        type:SHOWMODALCONFIRM,
        confirm,message,title,color
    })
}

export const dismissshowmodalconfirm = () => dispatch => {
    dispatch({
        type:DISMISSSHOWMODALCONFIRM
    })
}