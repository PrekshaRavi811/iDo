import React from 'react';
//const connection = require('./routes');
import display from './display';
import showTable from './showTable';
import home from './home';
import {Route, Link} from "react-router-dom";
import NavBar from './NavBar';

class App extends React.Component {

    render() {
        return (
            <div>
                <NavBar />
                <Route exact path="/" component={home} />
                <Route exact path="/getForm" component={display} />
                <Route exact path="/showTable" component={showTable} />


            </div>
        );
    };
}

export default App;