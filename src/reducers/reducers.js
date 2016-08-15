import { combineReducers } from 'redux';
import { todos,input } from './todos';
import { filterName } from './setFilter';

const reducers = combineReducers({
    todos,
    input,
    filterName
});
export default reducers;