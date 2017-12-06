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
