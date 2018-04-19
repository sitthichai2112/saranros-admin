
export const LOGINSUCCESS = 'loginsuccess'
export const LOGINFAILED = 'loginfailed'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS '
import axios from 'axios'
import { push } from 'react-router-redux'
import { baseUrl } from '../config/api'
import store from '../store'

export const login = (datauser) => dispatch => {

    axios.post(`${baseUrl}/users/login`, datauser)
        .then(function (response) {
            if (response && response.status === 200 && response.data) {
                console.log(response)
                dispatch({
                    type: LOGIN_SUCCESS,
                    userData: response.data
                })
                localStorage.setItem('token', response.data.token.id);
                dispatch({
                    type : LOGINFAILED,
                    status: false
                })
                dispatch(push('/'))
            }
        })
        .catch(function (error) {
            dispatch({
                type : LOGINFAILED,
                status: true
            })
        });

}