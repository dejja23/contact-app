import * as actionTypes from './types';
import axios from 'axios';

export const getContacts = () => dispatch => {
  axios
    .get('/contacts')
    .then(res => {
      dispatch({
        type: actionTypes.GETCONTACTS,
        payload: res.data
      });
    })
    .catch(error => console.log('oops'));
};

export const addHandler = (name, phone, email) => dispatch => {
  axios
    .post('http://localhost:5000/addcontact', { name, phone, email })
    .then(res => {
      dispatch(getContacts());
    })
    .catch(error => console.log('oops'));
};

export const editHandler = (_id, name, phone, email) => dispatch => {
  axios
    .put(`http://localhost:5000/modifycontact/${_id}`, {
      name,
      phone,
      email
    })
    .then(res => {
      dispatch(getContacts());
    })
    .catch(error => console.log('oops'));
};

export const removeHandler = _id => dispatch => {
  axios
    .delete(`http://localhost:5000/deletecontact/${_id}`)
    .then(res => {
      dispatch(getContacts());
    })
    .catch(error => console.log('oops'));
};
