import React from 'react';
import { connect } from 'react-redux';
import Todo from './todo';
import { toggleTodo,deleteTodo } from '../actions/todos';

class TodoList extends React.Component{
    onToggleClick(id) {
        const { dispatch } = this.props;
        dispatch(toggleTodo(id));
    }
    onDeleteClick(id) {
        const { dispatch } = this.props;
        dispatch(deleteTodo(id));
    }
    render(){
        const { todos,filterName } = this.props;

        const visibelTodos = (todos,filterName) => {
            switch (filterName) {
                case 'ALL':
                    return todos
                case 'COMPLETED':
                    return todos.filter(t => t.completed)
                case 'ACTIVE':
                    return todos.filter(t => !t.completed)
            }
        }
        return(
            <ul className="list-group">
                {visibelTodos(todos,filterName).map(todo => 
                    <Todo key={todo.id} {...todo} toggleClick={() => this.onToggleClick(todo.id)} 
                    deleteClick={() => this.onDeleteClick(todo.id)}/>
                )}
            </ul>
        )
    }
}
export default connect((state) => {
    return {
        filterName: state.filterName
    }
})(TodoList);