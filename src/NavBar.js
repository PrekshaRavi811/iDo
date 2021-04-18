import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <p><Link to="/"> HOME </Link></p>
            <p><Link to="/getForm"> FORM </Link></p>
            <p><Link to="/showTable"> TABLE </Link></p>
        </div>

    );
}

export default NavBar;
