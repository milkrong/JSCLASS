import {createStore} from 'redux';
import tagReducer from './tag.reducer';

const store = createStore(tagReducer);

export default store;