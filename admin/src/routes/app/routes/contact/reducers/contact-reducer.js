const defaultState = {
  contacts: [],
  loading: false,
  errors: {}
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'FETCH_CONTACTS_FULFILLED': {
      return {
        ...state,
        contacts: action.payload.data.data,
        loading: false,
        errors: {}
      };
    }

    case 'FETCH_CONTACTS_PENDING': {
      return {
        ...state,
        loading: true,
        errors: {}
      };
    }

    case 'FETCH_CONTACTS_REJECTED': {
      return {
        ...state,
        loading: false,
        errors: { global: action.payload.message }
      };
    }

    case 'SAVE_CONTACT': {
      const result = {
        ...state,
        contacts: [...state.contacts, action.payload],
        errors: {},
        loading: false
      };
      return result;
    }
    default:
      return state;
  }
};
