import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import settings from './settings';

import contactReducer from '../routes/app/routes/contact/reducers/contact-reducer';

const reducers = {
  routing: routerReducer,
  settings,
  contactReducer
};

module.exports = combineReducers(reducers);
