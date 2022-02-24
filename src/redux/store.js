import { createStore, combineReducers } from 'redux';
import Reducer from './reducer';

const reducer = combineReducers({
  PhoneData: Reducer,
});

const store = createStore(reducer, {});

export default store;
