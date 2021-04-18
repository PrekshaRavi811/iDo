import React, { Component } from 'react';
import Company from "./Company";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            customer: false,
            company: false
        };

        this.isCustomer = this.isCustomer.bind(this);
        this.isCompany = this.isCompany.bind(this);
    }

   isCustomer () {
        this.setState({customer: true});
   }

   isCompany () {
        this.setState({company: true});
   }

    render() {
        const { customer, company } = this.state;
        return (
            <div>
                { !company && !customer && <h1> Welcome to iDo! What would you like to do? </h1> }
                { !company && !customer && <p> <button onClick={this.isCompany}> I want to offer my services </button> </p> }
                { !company && !customer && <p> <button onClick={this.isCustomer}> I want to plan a wedding </button> </p> }

                { company && <Company /> }
            </div>
        );
    };
}

export default App;
