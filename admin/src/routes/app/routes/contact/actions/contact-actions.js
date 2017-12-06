import { contacts } from '../data';

export function fetchContacts() {
  return (dispatch) => {
    dispatch({
      type: 'FETCH_CONTACTS',
      payload: contacts
    });
  };
}

export function newContact() {
  return (dispatch) => {
    dispatch({
      type: 'NEW_CONTACT'
    });
  };
}


export function saveContact(contact) {
  return (dispatch) => {
    dispatch({
      type: 'SAVE_CONTACT',
      payload: {
        id: '3',
        name: {
          first: 'Jackson',
          last: 'Jackson'
        },
        phone: '999',
        email: 'peter@gmail.com'
      }
    });
  };
}
