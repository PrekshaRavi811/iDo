import React from "react"
import Table from "./showTable"

class Customer extends React.Component {
    render() {
        return (
            <Table />
        )
    }
}

export default Customer;


// import React from 'react';
// import Food from './components/FoodCompany';
// import Cake from './components/CakeCompany';
// import Dress from './components/DressCompany';
// import Venue from './components/VenueCompany';
// import Entertainment from "./components/EntertainmentCompany";
//
// import ShowTable from './showTable';
// import homeCompany from './HomeCompany';
// import {Route, Link} from "react-router-dom";
// import NavBarCompany from './NavBarCompany';
//
// class Company extends React.Component {
//     render() {
//         return (
//             <div>
//                 <NavBarCompany />
//                 <Route exact path="/" component={homeCompany} />
//                 <Route exact path="/foodCompany" component={Food} />
//                 <Route exact path="/cakeCompany" component={Cake} />
//                 <Route exact path="/dressCompany" component={Dress} />
//                 <Route exact path="/entertainmentCompany" component={Entertainment} />
//                 <Route exact path="/venueCompany" component={Venue} />
//
//
//             </div>
//         );
//     };
// }
//
// export default Company;

