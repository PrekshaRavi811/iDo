import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class dressForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            price: 0,
            style: '',
            phone: ''
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

    handlePriceOnChange(e) {
        this.setState({
            price: e.target.value,
        })
    };

    handlePhoneOnChange(e) {
        this.setState({
            phone: e.target.value,
        })
    };

    handleSizeOnChange(e) {
        this.setState({
            size: e.target.value,
        })
    };

    handleStyleOnChange(e) {
        this.setState({
            style: e.target.value,
        })
    };

    getDress = _=> {
        fetch('http://localhost:4000/dress')
            .then(response => response.json())
            .then(food => (this.setState({food: food.data})));
    };

    addToDatabase = _ => {
        fetch('http://localhost:4000/dress/add?id=' + this.state.id + '&name=' + this.state.name + '&style=' + this.state.style +'&price='
            + this.state.price + '&phone=' + this.state.phone)
            .then(this.getDress);

        this.setState({
            id: '',
            name: '',
            style: '',
            price: '',
            phone: '',
        })
    };
    render() {
        return (
            <div>
                <p> Company ID </p>
                <input type="text" id="id" value={this.state.id} onChange={ (e) => this.handleIdOnChange(e) } />
                <p> Name </p>
                <input type="text" id="name" value={this.state.name} onChange={ (e) => this.handleNameOnChange(e) } />
                <p> Style </p>
                <input type="text" id="style" value={this.state.style} onChange={ (e) => this.handleStyleOnChange(e) } />
                <p> Price </p>
                <input type="number" id="price" value={this.state.price} onChange={ (e) => this.handlePriceOnChange(e) }/>
                <p>Phone Number</p>
                <input type="number" id="phone" value={this.state.phone} onChange={ (e) => this.handlePhoneOnChange(e) }/>

                <p className="string"> Hi {this.state.name}!
                    You provide dresses and your contact number is {this.state.phone}.
                    Your price is {this.state.price} for a dress.
                    Is your information correct? </p>

                <button onClick={this.addToDatabase}> SUBMIT </button>
            </div>
        );
    }
}

export default dressForm;

