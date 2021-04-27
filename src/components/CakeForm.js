import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class foodForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            price: 0,
            phone: '',
            size: 0
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
    getFood = _=> {
        fetch('http://localhost:4000/cake')
            .then(response => response.json())
            .then(food => (this.setState({food: food.data})));
    };

    addToDatabase = _ => {
        fetch('http://localhost:4000/cake/add?id=' + this.state.id + '&name=' + this.state.name + '&price='
            + this.state.price + '&phone=' + this.state.phone
            + '&size=' + this.state.size)
            .then(this.getFood);

        this.setState({
            id: '',
            name: '',
            price: '',
            phone: '',
            size: ''
        })
    };
    render() {
        return (
            <div>
                <p> Company ID </p>
                <input type="text" id="id" value={this.state.id} onChange={ (e) => this.handleIdOnChange(e) } />
                <p> Name </p>
                <input type="text" id="name" value={this.state.name} onChange={ (e) => this.handleNameOnChange(e) } />
                <p> Price </p>
                <input type="number" id="price" value={this.state.price} onChange={ (e) => this.handlePriceOnChange(e) }/>
                <p>Phone Number</p>
                <input type="number" id="phone" value={this.state.phone} onChange={ (e) => this.handlePhoneOnChange(e) }/>
                <p> Size </p>
                <input type="number" id="size" value={this.state.size} onChange={ (e) => this.handleSizeOnChange(e) }/>

                <p className="string"> Hi {this.state.name}!
                    You provide cake and your contact number is {this.state.phone}.
                    Your price is {this.state.price} for a cake with diameter {this.state.size} cm.
                    Is your information correct? </p>

                <button onClick={this.addToDatabase}> SUBMIT </button>
            </div>
        );
    }
}

export default foodForm;

