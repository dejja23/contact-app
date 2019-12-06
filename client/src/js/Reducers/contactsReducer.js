import * as actionTypes from '../Actions/types';

const inialState = {
  Contacts: []
};

const ContactsReducer = (state = inialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.GETCONTACTS:
      return {
        ...state,
        Contacts: payload
      };
    // case actionTypes.ADDHANDLER:
    //   console.log(payload);
    //   return {
    //     ...state,
    //     Contacts: [...state.Contacts, payload]
    //   };

    // case actionTypes.EDITHANDLER:
    //   console.log(payload);
    //   return {
    //     ...state,
    //     Contacts: state.Contacts.map(e => (e._id === payload._id ? payload : e))
    //   };
    // case actionTypes.REMOVEHANDLER:
    //   return {
    //     ...state,
    //     Contacts: state.Contacts.filter(e => e._id !== payload)
    //   };
    default:
      return state;
  }
};

export default ContactsReducer;
