import { contacts } from '../data';
import { client } from './';

const url = '/api/contacts';

export function fetchContacts() {
  return (dispatch) => {
    dispatch({
      type: 'FETCH_CONTACTS',
      payload: client.get(url)
    });
  };
}

export function saveContact(contact) {
  return (dispatch) => {
    dispatch({
      type: 'SAVE_CONTACT',
      payload: contact
    });
  };
}
