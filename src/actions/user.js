import axios from 'axios'
import { baseUrl, token } from '../config/api'
export const GETLISTUSER = 'getlistuser'
export const GETDETAILUSERUPDATE = 'getdetailupdate'
export const UPDATEUSER = 'updateuser'
import { push } from 'react-router-redux'
import { opennotification } from '../actions/notification'

export const getlistuser = () => dispatch => {

    axios.get(`${baseUrl}/users?access_token=${token}`)

        .then(function (response) {
            if (response && response.status === 200 && response.data) {
                dispatch({
                    type: GETLISTUSER,
                    listuser: response.data
                })
            }
        })
        .catch(function (error) {
        });
}

export const addUser = (datauser) => dispatch => {
    axios.post(`${baseUrl}/users`, datauser)
        .then(function (response) {
            if (response && response.status === 200 && response.data) {
                dispatch(push('/UserList'))
                dispatch(opennotification(`Create User Success.`, `success`))
            }
        })
        .catch(function (error) {
            dispatch(opennotification(`Error Create User Success.`, `error`))
        });
}



export const deleteUser = (data, success) => dispatch => {

    axios.delete(`${baseUrl}/users/${data.id}?access_token=${token}`)
        .then(function (response) {
            if (response && response.status === 200) {
                success && success()
                dispatch(opennotification(`Delete User ${data.username} Success.`, `success`))
            }
        })
        .catch(function (error) {
            dispatch(opennotification(`Error Delete User ${data.username}.`, `error`))
        });
}

export const updateuser = (datauser) => dispatch => {
    let detailuser = {}
    //check update or add user
    if (datauser.id) {
        detailuser = {
            username: datauser.username,
            password: datauser.password,
            mobile: datauser.mobile,
            email: datauser.email,
            id: datauser.id
        }
    } else {
        detailuser = {
            username: datauser.username,
            password: datauser.password,
            mobile: datauser.mobile,
            email: datauser.email,
        }
    }

    axios.patch(`${baseUrl}/users/${datauser.id}?access_token=${token}`, datauser)
        .then(function (response) {
            if (response && response.status === 200 && response.data) {
                dispatch(push('/UserList'))
                dispatch(opennotification(`Update User Success.`, `success`))
            }
        })
        .catch(function (error) {
            dispatch(opennotification(`Error Update User.`, `error`))
        });

}

export const getdetailuserupdate = (id) => dispatch => {


    axios.get(`${baseUrl}/users/${id}?access_token=${token}`)
        .then(function (response) {
            if (response && response.status === 200 && response.data) {
                dispatch({
                    type: GETDETAILUSERUPDATE,
                    detailuserupdate: response.data
                })
            }
        })
        .catch(function (error) {
        });
}


export const searchuser = (username) => dispatch => {
    axios.get(`${baseUrl}/users?filter={"where":{"username":{"like":"${username}","options":"i"}}}&access_token=${token}`)

        .then(function (response) {
            if (response && response.status === 200 && response.data) {
                dispatch({
                    type: GETLISTUSER,
                    listuser: response.data
                })
            }
        })
        .catch(function (error) {
        });
}