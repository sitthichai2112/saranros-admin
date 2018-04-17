export const LOGINSUCCESS = 'loginsuccess'
import axios from 'axios'
import { push } from 'react-router-redux'


// import { browserHistory } from 'react-router-dom';
// import {toggleModal} from '../actions/warningModal'


export const baseUrl = 'http://167.99.72.153:3000/api'
export const token = localStorage.getItem('token');

export const login = (datauser) => dispatch => {

    axios.post(`${baseUrl}/users/login`, datauser)
        .then(function (response) {
            if (response && response.status === 200 && response.data) {

                console.log(response)

                // dispatch({
                //     type: LOGINSUCCESS,
                //     token:response.data.token.id
                // })

                dispatch(push('/'))


                // localStorage.setItem('token', response.data.token.id);
                // browserHistory.push('/listuser');
            }
        })
        .catch(function (error) {
            dispatch(toggleModal(true, 'Incorrect username or password'))
        });

}