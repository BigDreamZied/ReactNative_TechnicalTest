import {applyMiddleware, compose, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import RootReducer from '../reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['navigation', 'loader'], // navigation will not be persisted
};
const persistedReducer = persistReducer(persistConfig, RootReducer);
let store = createStore(persistedReducer, {}, compose(applyMiddleware(thunk)));

let persist = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export {store, persist};