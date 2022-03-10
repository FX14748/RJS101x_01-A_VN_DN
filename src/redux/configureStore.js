import {createStore, combineReducers} from 'redux';
import { Staffs } from './staffs';
import { Deparments } from './departments';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            staffs:Staffs,
            department:Deparments
        })
    );
    return store;
}