import { SET_FILTER } from '../actions/setFilter';

export function filterName(state= 'ALL',action) {
    switch(action.type){
        case SET_FILTER:
            return action.filter;
        default:
            return state;
    }

}