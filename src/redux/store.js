import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import fetchReducer from './fetchReducer';

const store = createStore(fetchReducer, applyMiddleware(thunk));

export default store;
