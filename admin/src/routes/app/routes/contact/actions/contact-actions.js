import { contacts } from '../data';

export function fetchContacts() {
  return (dispatch) => {
    console.log(contacts);
    dispatch({
      type: 'FETCH_CONTACTS',
      payload: contacts
    });
  };
}

// export function fetchContacts() {
//   return { type: 'FETCH_CONTACTS', payload: contacts };
// }
