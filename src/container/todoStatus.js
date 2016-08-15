import React from 'react';
import { connect } from 'react-redux';
import FilterLink from './filterLink';


class TodoStatus extends React.Component{
    setVisibleFilter(ownProps) {
        const { dispatch } = this.props;
        dispatch(setFilter(ownProps.filter));
    }

    render(){
        const { todos } = this.props;
        let all = todos.length;
        let active = todos.filter(todo => !todo.completed).length;
        let completed = todos.filter(todo => todo.completed).length;
        return(
            <section>
                <ul className="nav nav-tabs" role="tablist">
                    <FilterLink filter="ALL" num={all}>全部</FilterLink>
                    <FilterLink filter="ACTIVE" num={active}>进行中</FilterLink>
                    <FilterLink filter="COMPLETED" num={completed}>已完成</FilterLink>
                </ul>
                <br/>
            </section>
        )
    }
}


export default connect()(TodoStatus);