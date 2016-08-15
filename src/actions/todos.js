
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CLEAR_TODO = 'CLEAR_TODO'

export const FILTER_TODO = 'FILTER_TODO';

export const SAVE_INPUT = 'SAVE_INPUT';

let node = 0;
export function addTodo(value) {
    return {
        type: ADD_TODO,
        id: node++,
        value
    }
}

export function saveInput(value) {
    return {
        type: SAVE_INPUT,
        value
    }
}

export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id
    }
}

export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        id
    }
}

export function filterTodo(filter) {
    return {
        type: FILTER_TODO,
        filter
    }
}

export function clearTodo() {
    return {
        type: CLEAR_TODO
    }
}
