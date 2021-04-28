import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class FoodUpdateForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            cuisine: '',
            phone: 0,
            price: 0
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

    handleCuisineOnChange(e) {
        this.setState({
            cuisine: e.target.value,
        })
    };

    handlePhoneOnChange(e) {
        this.setState({
            phone: e.target.value,
        })
    };

    handlePriceOnChange(e) {
        this.setState({
            price: e.target.value,
        })
    };
    getFood = _=> {
        fetch('http://localhost:4000/food')
            .then(response => response.json())
            .then(food => (this.setState({food: food.data})));
    };

    updateDatabase = _ => {
        fetch('http://localhost:4000/food/update?id=' + this.state.id + '&name=' + this.state.name + '&cuisine='
            + this.state.cuisine + '&phone=' + this.state.phone
            + '&price=' + this.state.price)
            .then(this.getFood);

        this.setState({
            id: '',
            name: '',
            cuisine: '',
            phone: '',
            price: ''
        })
    };
    render() {
        return (
            <div>
                <p> Company ID </p>
                <input type="text" id="id" value={this.state.id} onChange={ (e) => this.handleIdOnChange(e) } />
                <p> Name </p>
                <input type="text" id="name" value={this.state.name} onChange={ (e) => this.handleNameOnChange(e) } />
                <p>Cuisine</p>
                <input type="text" id="cuisine" value={this.state.cuisine} onChange={ (e) => this.handleCuisineOnChange(e) }/>
                <p>Phone Number</p>
                <input type="number" id="phone" value={this.state.phone} onChange={ (e) => this.handlePhoneOnChange(e) }/>
                <p>Price Per Guest</p>
                <input type="number" id="price" value={this.state.price} onChange={ (e) => this.handlePriceOnChange(e) }/>

                <p className="string"> Hi {this.state.name}! You provide {this.state.cuisine} food and your contact number is {this.state.phone}. Your average price per guest is ${this.state.price}. Is your information correct? </p>

                <button onClick={this.updateDatabase}> SUBMIT </button>
            </div>
        );
    }
}

export default FoodUpdateForm;

