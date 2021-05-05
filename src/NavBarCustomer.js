import React from 'react';
import {Link} from 'react-router-dom';
import uuid from 'react-uuid';

function NavBarCustomer () {

    // render () {
    return (
        <div>
            <p><Link to="/"> HOME </Link>
                <Link to="/foodDisplay"> FOOD </Link>
                <Link to="/cakeDisplay"> CAKE </Link>
                <Link to="/entertainmentDisplay"> ENTERTAINMENT </Link>
                <Link to="/dressDisplay"> DRESS </Link>
                {/*<Link to="/venueDisplay"> VENUE </Link>*/}
            </p>
        </div>

    );
    // }
}

export default NavBarCustomer;
