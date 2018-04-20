
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'
import axios from 'axios'
import { push } from 'react-router-redux'
import { baseUrl } from '../config/api'
import { showModalAlert, SHOW_MODAL_ALERT } from '../actions/modalalert'
export const login = (datauser) => dispatch => {

    axios.post(`${baseUrl}/users/login`, datauser)
        .then(function (response) {
            if (response && response.status === 200 && response.data) {
                dispatch({
                    type: LOGIN_SUCCESS,
                    userData: response.data
                })
                localStorage.setItem('token', response.data.token.id);
                dispatch({
                    type: LOGIN_FAILED,
                    status: false
                })
                dispatch(push('/'))
            }
        })
        .catch(function (error) {

              dispatch(showModalAlert(`Do you want to delete username ?`, () => {}, 'Delete', 'danger'))

            dispatch({
                type: SHOW_MODAL_ALERT,
                status: true
            })
        });

}