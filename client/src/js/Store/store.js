import { createStore, applyMiddleware } from 'redux';
import ContactsReducer from '../Reducers/contactsReducer';
import thunk from 'redux-thunk';

const store = createStore(ContactsReducer, applyMiddleware(thunk));
export default store;
