import React from 'react';
import Food from './FoodCompany';
import ShowTable from './showTable';
import homeCompany from './HomeCompany';
import {Route, Link} from "react-router-dom";
import NavBarCompany from './NavBarCompany';

class Company extends React.Component {
    render() {
        return (
            <div>
                <NavBarCompany />
                <Route exact path="/" component={homeCompany} />
                <Route exact path="/foodCompany" component={Food} />
            </div>
        );
    };
}

export default Company;
