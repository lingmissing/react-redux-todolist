import React from 'react';
import { connect } from 'react-redux';
import { clearTodo } from '../actions/todos';

class Footer extends React.Component{
    clearAll() {
        const { dispatch } = this.props;
        dispatch(clearTodo());
    }
    render(){
        const { todos } = this.props;
        return(
            <footer>
                <div className="row">
                    <div className="col-md-12">
                        <button className="btn btn-default btn-xs pull-right" style={{
                            display : todos.length ? 'block' : 'none'
                        }} onClick={() => this.clearAll()}>清空</button>
                    </div>
                </div>
            </footer>
        )
    }
}
export default connect()(Footer);