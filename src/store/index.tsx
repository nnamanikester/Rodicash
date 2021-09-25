import {createStore, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';
import reducers from '@/store/reducers';

const store = createStore(reducers, {}, applyMiddleware(Thunk));

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
