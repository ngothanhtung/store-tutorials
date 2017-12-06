import { contacts } from '../data';

export function fetchContacts() {
  return (dispatch) => {
    dispatch({
      type: 'FETCH_CONTACTS',
      payload: contacts
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
