import React from 'react';
import {Link} from 'react-router-dom';
import uuid from 'react-uuid';

function NavBarCustomer () {

    // render () {
    return (
        <div>
            <p><Link to="/"> HOME </Link>
                <Link to="/foodDisplay"> FOOD </Link>
                {/*<Link to="/dressCustomer"> DRESS </Link>*/}
                {/*<Link to="/cakeCustomer"> CAKE </Link>*/}
                {/*<Link to="/venueCustomer"> VENUE </Link>*/}
                {/*<Link to="/entertainmentCustomer"> ENTERTAINMENT </Link>*/}
            </p>
        </div>

    );
    // }
}

export default NavBarCustomer;
