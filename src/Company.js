import React from 'react';
import Food from './components/FoodCompany';
import Cake from './components/CakeCompany';
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
                <Route exact path="/cakeCompany" component={Cake} />
            </div>
        );
    };
}

export default Company;