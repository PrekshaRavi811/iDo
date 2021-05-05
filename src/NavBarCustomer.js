import React from 'react';
import {Link} from 'react-router-dom';
import uuid from 'react-uuid';

function NavBarCustomer () {

    // render () {
    return (
        <div>
            <p><Link to="/"> HOME </Link>
                <Link to="/foodCompany"> FOOD </Link>
                <Link to="/dressCompany"> DRESS </Link>
                <Link to="/cakeCompany"> CAKE </Link>
                <Link to="/venueCompany"> VENUE </Link>
                <Link to="/entertainmentCompany"> ENTERTAINMENT </Link></p>
        </div>

    );
    // }
}

export default NavBarCustomer;
