const defaultState = {
  contacts: [],
  contact: {
    name: {}
  },
  loading: false,
  errors: {}
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'FETCH_CONTACTS': {
      return {
        ...state,
        contacts: action.payload
      };
    }
    case 'NEW_CONTACT': {
      return {
        ...state,
        contact: { name: {} }
      };
    }

    case 'SAVE_CONTACT': {
      const result = {
        ...state,
        contacts: [...state.contacts, action.payload],
        errors: {},
        loading: false
      };
      console.log(result);
      return result;
    }
    default:
      return state;
  }
};
