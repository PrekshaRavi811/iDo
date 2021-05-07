import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class CustomerAdd extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            email: '',
            foodID: '',
            dressID: '',
            cakeID: '',
            venue: '',
            entertainment: '',
            budget: 0
        };
    }
    handleIdOnChange(e) {
        this.setState({
            id: e.target.value,
        });
    };

    handleNameOnChange(e) {
        this.setState({
            name: e.target.value,
        });
    };

    handleEmailOnChange(e) {
        this.setState({
            email: e.target.value,
        })
    };

    handleFoodOnChange(e) {
        this.setState({
            foodID: e.target.value,
        })
    };

    handleDressOnChange(e) {
        this.setState({
            dressID: e.target.value,
        })
    };

    handleCakeOnChange(e) {
        this.setState({
            cakeID: e.target.value,
        })
    };

    handleVenueOnChange(e) {
        this.setState({
            venue: e.target.value,
        })
    };

    handleEntertainmentOnChange(e) {
        this.setState({
            entertainment: e.target.value,
        })
    };

    handleBudgetOnChange(e) {
        this.setState({
            budget: e.target.value,
        })
    };

    getCustomer = _=> {
        fetch('http://localhost:4000/customer')
            .then(response => response.json())
            .then(customer => (this.setState({customer: customer.data})));
    };

    addToDatabase = _ => {
        fetch('http://localhost:4000/customer/add?id=' + this.state.id + '&name=' + this.state.name + '&email='
            + this.state.email + '&foodID=' + this.state.foodID + '&dressID=' + this.state.dressID
            + '&cakeID=' + this.state.cakeID + '&venue=' + this.state.venue
            + '&entertainment=' + this.state.entertainment
            + '&budget=' + this.state.budget)
            .then(this.getCustomer);

        this.setState({
            id: '',
            name: '',
            email: '',
            foodID: '',
            dressID: '',
            cakeID: '',
            venue: '',
            entertainment: '',
            budget: ''
        })
    };
    render() {
        return (
            <div>
                <p> Customer ID </p>
                <input type="text" id="id" value={this.state.id} onChange={ (e) => this.handleIdOnChange(e) } />
                <p> Name </p>
                <input type="text" id="name" value={this.state.name} onChange={ (e) => this.handleNameOnChange(e) } />
                <p>Email</p>
                <input type="text" id="email" value={this.state.email} onChange={ (e) => this.handleEmailOnChange(e) }/>
                <p>ID of Food company of choice</p>
                <input type="text" id="foodID" value={this.state.foodID} onChange={ (e) => this.handleFoodOnChange(e) }/>
                <p>ID of Dress company of choice</p>
                <input type="text" id="dressID" value={this.state.dressID} onChange={ (e) => this.handleDressOnChange(e) }/>
                <p>ID of Cake company of choice</p>
                <input type="text" id="cakeID" value={this.state.cakeID} onChange={ (e) => this.handleCakeOnChange(e) }/>
                <p>ID of Venue of choice</p>
                <input type="text" id="venue" value={this.state.venue} onChange={ (e) => this.handleVenueOnChange(e) }/>
                <p>ID of Entertainment of choice</p>
                <input type="text" id="entertainment" value={this.state.entertainment} onChange={ (e) => this.handleEntertainmentOnChange(e) }/>
                <p>Budget</p>
                <input type="number" id="budget" value={this.state.budget} onChange={ (e) => this.handleBudgetOnChange(e) }/>



                <button onClick={this.addToDatabase}> SUBMIT </button>
            </div>
        );
    }
}

export default CustomerAdd;

