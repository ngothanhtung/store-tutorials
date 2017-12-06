import { contacts } from '../data';

export function fetchContacts() {
  return (dispatch) => {    
    dispatch({
      type: 'FETCH_CONTACTS',
      payload: contacts
    });
  };
}

// export function fetchContacts() {
//   return { type: 'FETCH_CONTACTS', payload: contacts };
// }
