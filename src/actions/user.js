import axios from 'axios'
import { baseUrl, token } from '../config/api'
export const GET_LIST_USER = 'GET_LIST_USER'
export const GETDETAILUSERUPDATE = 'getdetailupdate'
export const UPDATEUSER = 'updateuser'
import { push } from 'react-router-redux'
import { openNotification } from '../actions/notification'

export const getListUser = () => dispatch => {

    const tokengetuser = localStorage.getItem('token')

    axios.get(`${baseUrl}/users?access_token=${tokengetuser}`)

        .then(function (response) {
            if (response && response.status === 200 && response.data) {
                dispatch({
                    type: GET_LIST_USER,
                    listuser: response.data
                })
            }
        })
        .catch(function (error) {
        });
}

export const addUser = (datauser) => dispatch => {

    let profile = {
        name: datauser.name,
        nickName: datauser.nickName,
        birthDay: datauser.birthDay,
        location: {
            lat: 0,
            lng: 0
        }
    }
    let user = {
        username: datauser.username,
        mobile: datauser.mobile,
        email: datauser.email,
        password: datauser.password,
        profileId: ''
    }



    axios.post(`${baseUrl}/Profiles?access_token=${token}`, profile)
        .then(function (response) {

            if (response && response.status === 200 && response.data) {
                user = {
                    ...user,
                    profileId: response.data.id
                }
                axios.post(`${baseUrl}/users`, user)
                    .then(function (response) {
                        if (response && response.status === 200 && response.data) {
                            dispatch(push('/UserList'))
                            dispatch(openNotification(`Create User Success.`, `success`))
                        }
                    })
                    .catch(function (error) {
                        dispatch(openNotification(`Error Create User Success.`, `error`))
                    });
            }
        })
        .catch(function (error) {
            dispatch(openNotification(`Error Create Profile User Success.`, `error`))
        });


}



export const deleteUser = (data, success) => dispatch => {

    axios.delete(`${baseUrl}/users/${data.id}?access_token=${token}`)
        .then(function (response) {
            if (response && response.status === 200) {
                success && success()
                dispatch(openNotification(`Delete User ${data.username} Success.`, `success`))
            }
        })
        .catch(function (error) {
            dispatch(openNotification(`Error Delete User ${data.username}.`, `error`))
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
                dispatch(openNotification(`Update User Success.`, `success`))
            }
        })
        .catch(function (error) {
            dispatch(openNotification(`Error Update User.`, `error`))
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


export const searchuser = (search) => dispatch => {

    axios.get(`${baseUrl}/users?filter={"where":{"username":{"like":"${search.username}"},"email":{"like":"${search.email}"},"mobile":{"like":"${search.mobile}"}}}&access_token=${token}`)

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