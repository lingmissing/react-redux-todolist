import React from 'react'
import { connect } from 'react-redux';
import { setFilter } from '../actions/setFilter';

class FilterLink extends React.Component{
    setVisibleType(filter) {
        const { dispatch } = this.props;
        dispatch(setFilter(filter));
    }
    render(){
        const { filter,filterName,num } = this.props;
        const active = filter === filterName;
        return(
            <li role="presentation" className={active?'active':''} onClick={() => this.setVisibleType(filter)}><a href="javascript:void(0);">{this.props.children} 
                &nbsp;<span className="badge">{num}</span></a></li>
        )
    }
}

export default connect((state) => {
    return {
        filterName: state.filterName
    }
})(FilterLink)