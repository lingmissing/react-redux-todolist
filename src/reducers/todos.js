import { SAVE_INPUT,ADD_TODO,TOGGLE_TODO,DELETE_TODO,FILTER_TODO,CLEAR_TODO } from '../actions/todos';

function todo(state,action) {;
    switch(action.type){
        case ADD_TODO:
            return {
                id: action.id,
                text: action.value,
                completed: false
            }
        case TOGGLE_TODO:
            if(state.id !== action.id) {
                return state;
            }
            return Object.assign({},state,{
                completed: !state.completed
            })
        default:
            return state;
    }

}

export function input(state='',action) {
    switch(action.type){
        case SAVE_INPUT:
            return action.value;
        default:
            return state;
    }
}

export function todos(state=[],action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                todo(undefined, action)
            ]
        case TOGGLE_TODO:
            return state.map(item =>
            todo(item,action))
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.id)
        case CLEAR_TODO:
            return [];
        default:
            return state
  }
}


