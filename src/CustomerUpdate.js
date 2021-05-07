import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class CustomerUpdate extends Component {
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
            budget: 0,
            message: '',
            success: false,
            customer: []
        };
        this.onClickUpdate = this.onClickUpdate.bind(this);
        this.render = this.render.bind(this);
    }

    onClickUpdate() {
        this.setState({
            updateButton: true
        });
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

    setSuccess = _ => {
        if (this.state.customer.length > 0) {
            this.state.success = true;
            this.state.id = this.state.customer[0].id;
            this.state.name = this.state.customer[0].name;
            this.state.foodID = this.state.customer[0].foodID;
            this.state.dressID = this.state.customer[0].dressID;
            this.state.cakeID = this.state.customer[0].cakeID;
            this.state.venue = this.state.customer[0].venue;
            this.state.entertainment = this.state.customer[0].entertainment;
            this.state.budegt = this.state.customer[0].budget;
        }
        else {
            alert("No such ID exists!")
        }
    };

    findCustomer = _ => {

        fetch('http://localhost:4000/customer/find?id=' + this.state.id)
            .then(response => response.json())
            .then(customer => (this.state.customer = customer.data));

        this.setSuccess();
    };

    updateDatabase = _ => {
        fetch('http://localhost:4000/customer/update?id=' + this.state.id
            + '&name=' + this.state.name
            + '&email=' + this.state.email
            + '&foodID=' + this.state.foodID
            + '&dressID=' + this.state.dressID
            + '&cakeID=' + this.state.cakeID
            + '&venue=' + this.state.venue
            + '&entertainment=' + this.state.entertainment
            + '&budget=' + this.state.budget).then(r => r.text());

        this.setState({
            success: false,
            id: '',
            name: '',
            email: '',
            foodID: '',
            dressID: '',
            cakeID: '',
            venue: '',
            entertainment: '',
            budget: 0,
        });
        this.state.customer = [];
    };

    render() {
        fetch('http://localhost:4000/customer/find?id=' + this.state.id)
            .then(response => response.json())
            .then(customer => (this.setState({customer: customer.data})));

        return (
            <div>
                {!this.state.success && <p> Enter your customer id to update your information and selections </p>}
                {!this.state.success && <input type="text" id="id" value={this.state.id} onChange={(e) => this.handleIdOnChange(e)}/>}
                {!this.state.success && <p className="string"> Your ID is {this.state.id}. Are your sure you want to update your information? </p>}
                {!this.state.success && <button onClick={this.findCustomer}> UPDATE </button>}
                {!this.state.success && <p>{this.state.message} </p>}

                {this.state.success && <p> Name </p>}
                {this.state.success && this.state.customer && <input type="text" id="name" value={this.state.name} onChange={ (e) => this.handleNameOnChange(e) } />}
                {this.state.success && <p>Email</p>}
                {this.state.success && this.state.email && <input type="text" id="email" value={this.state.email} onChange={ (e) => this.handleEmailOnChange(e) }/>}
                {this.state.success && <p>Food company of choice</p>}
                {this.state.success && this.state.foodID && <input type="text" id="foodID" value={this.state.foodID} onChange={ (e) => this.handleFoodOnChange(e) }/>}
                {this.state.success && <p>Dress company of choice</p>}
                {this.state.success && this.state.dressID && <input type="text" id="dressID" value={this.state.dressID} onChange=
                    { (e) => this.handleDressOnChange(e) }/>}
                {this.state.success && <p>Cake company of choice</p>}
                {this.state.success && this.state.cakeID && <input type="text" id="cakeID" value={this.state.cakeID} onChange=
                    { (e) => this.handleCakeOnChange(e) }/>}
                {this.state.success && <p>Venue of choice</p>}
                {this.state.success && this.state.venue && <input type="text" id="venue" value={this.state.venue} onChange=
                    { (e) => this.handleVenueOnChange(e) }/>}
                {this.state.success && <p>Entertainment of choice</p>}
                {this.state.success && this.state.entertainment && <input type="text" id="entertainment" value={this.state.entertainment} onChange=
                    { (e) => this.handleEntertainmentOnChange(e) }/>}
                {this.state.success && <p>Budget</p>}
                {this.state.success && this.state.budget && <input type="number" id="budget" value={this.state.budget} onChange={ (e) => this.handleBudgetOnChange(e) }/>}


                {this.state.success && <button onClick={this.updateDatabase}> SUBMIT </button>}

            </div>
        );
    }

}

export default CustomerUpdate;
