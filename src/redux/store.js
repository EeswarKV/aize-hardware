import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';

const middlewares = [logger];

//createing the store anc connceting to middleware
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

//to make sure to store the data in persist storage to avoid loosing data even after closing the app
export const persistor = persistStore(store);

export default {store, persistor};