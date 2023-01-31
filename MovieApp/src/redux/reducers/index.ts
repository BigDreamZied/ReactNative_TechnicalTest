import {combineReducers} from 'redux';
import homeReducer, { homeSelector } from './homeReducer';
import loaderReducer, { loaderSelector } from './loaderReducer';

const RootReducer = combineReducers({
    loader:loaderReducer,
    home: homeReducer
});

export default RootReducer;

// Combine selectors
export const Selectors = {
    loader: loaderSelector,
    home: homeSelector
};

export type ActionType<T> = {
    type: string;
    payload: T
}