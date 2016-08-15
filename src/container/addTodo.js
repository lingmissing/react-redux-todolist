import React from 'react';
import { connect } from 'react-redux';
import { saveInput,addTodo } from '../actions/todos';

class AddTodo extends React.Component{
    componentWillMount() {
        setTimeout(() => {
            console.log(1234);
        },1000)
    }
    getInputValue(e) {
        let value = e.target.value;
        const { dispatch } = this.props;
        dispatch(saveInput(value));
    }
    addList(e) {
        e.preventDefault();
        const { dispatch,input } = this.props;
        if(this.refs.input.value){
            dispatch(addTodo(input));
            this.refs.input.value = '';
        }
    }
    render(){
        return(
            <header>
                <form className="form-horizontal" onSubmit={e => this.addList(e)}>
                    <div className="form-group">
                        <div className="col-md-3 col-xs-9">
                            <input type="text" className="form-control" ref="input" onChange={e => this.getInputValue(e)}/>
                        </div>
                        <div className="col-md-3 col-xs-3">
                            <button type="submit" className="btn btn-default">add</button>
                        </div>
                    </div>
                    
                </form>
            </header>
        )
    }
}
export default connect((state) => {
    return {
        input: state.input
    }
})(AddTodo);