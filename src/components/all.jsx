import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import AddTodo from '../container/addTodo';
import TodoList from '../container/todoList';
import TodoStatus from '../container/todoStatus';
import Footer from '../container/footer';
import Page from './page.jsx';


class All extends React.Component{
    render(){
        const { todos } = this.props;
        return(
           <Page>
                <AddTodo/>
                <TodoStatus todos={todos}/>
                <TodoList todos={todos}/>
                <Footer todos={todos}/>
           </Page>
        )
    }
}

export default withRouter(connect((state) => {
    return {
        todos: state.todos
    }
})(All));





                
                