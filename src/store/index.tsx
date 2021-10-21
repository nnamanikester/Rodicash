import {createStore, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';
import reducers from '@/store/reducers';

export const store = createStore(reducers, applyMiddleware(Thunk));
