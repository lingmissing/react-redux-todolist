import React from 'react';
import { withRouter } from 'react-router';

class Page extends React.Component{
    render(){
        return(
            <section>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                        React + Redux + Webpack + Redux-router
                        </a>
                        </div>
                    </div>
                </nav>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                         {this.props.children}
                    </div>
                </div>
               
            </section>
        )
    }
}
export default withRouter(Page);