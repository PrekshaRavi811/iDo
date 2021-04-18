import React from 'react';
import Display from './display';
import ShowTable from './showTable';
import home from './home';
import {Route, Link} from "react-router-dom";
import NavBar from './NavBar';

class Company extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <Route exact path="/" component={home} />
                <Route exact path="/getForm" component={Display} />
                <Route exact path="/showTable" component={ShowTable} />
            </div>
        );
    };
}

export default Company;
