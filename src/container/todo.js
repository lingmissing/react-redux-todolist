import React from 'react';
import { connect } from 'react-redux';

class Todo extends React.Component{
    render(){
        const { toggleClick,deleteClick,text,completed } = this.props;
        return(
            <li className="list-group-item" style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}>
                <input type="checkbox" checked={completed} onChange={toggleClick}/>  
                &nbsp;{text}
                <button className="btn btn-xs pull-right btn-default" type="button" onClick={deleteClick}>删除</button>
            </li>
        )
    }
}
export default Todo;