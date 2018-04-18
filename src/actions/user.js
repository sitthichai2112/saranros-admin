import axios from 'axios'
import { baseUrl, token } from '../config/api'
export const GETLISTUSER = 'getlistuser'
export const GETDETAILUSERUPDATE = 'getdetailupdate'
export const UPDATEUSER = 'updateuser'
import { push } from 'react-router-redux'


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
            }
        })
        .catch(function (error) {
        });
}



export const deleteUser = (id, success) => dispatch => {
    axios.delete(`${baseUrl}/users/${id}?access_token=${token}`)
        .then(function (response) {
            if (response && response.status === 200) {
                success && success()
            }
        })
        .catch(function (error) {
        });
}

export const updateuser = (datauser) => dispatch => {
    let detailuser = {}
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
                console.log(response)

                dispatch(push('/UserList'))
            }
        })
        .catch(function (error) {
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


export const searchuser = (firstname) => dispatch => {
    axios.get(`${baseUrl}/users?filter={"where":{"firstname":{"like":"${firstname}","options":"i"}}}&access_token=${token}`)

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