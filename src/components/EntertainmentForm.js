import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class EntertainmentForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            type: '',
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

    handleTypeOnChange(e) {
        this.setState({
            type: e.target.value,
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
    getEntertainment = _=> {
        fetch('http://localhost:4000/entertainment')
            .then(response => response.json())
            .then(entertainment => (this.setState({entertainment: entertainment.data})));
    };

    addToDatabase = _ => {
        fetch('http://localhost:4000/entertainment/add?id=' + this.state.id + '&name=' + this.state.name + '&type='
            + this.state.type + '&phone=' + this.state.phone
            + '&price=' + this.state.price)
            .then(this.getEntertainment);

        this.setState({
            id: '',
            name: '',
            type: '',
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
                <p>Type</p>
                <input type="text" id="type" value={this.state.type} onChange={ (e) => this.handleTypeOnChange(e) }/>
                <p>Phone Number</p>
                <input type="number" id="phone" value={this.state.phone} onChange={ (e) => this.handlePhoneOnChange(e) }/>
                <p>Price</p>
                <input type="number" id="price" value={this.state.price} onChange={ (e) => this.handlePriceOnChange(e) }/>

                <p className="string"> Hi {this.state.name}! You provide {this.state.type} entertainment and your contact number is {this.state.phone}. Your average price per guest is ${this.state.price}. Is your information correct? </p>

                <button onClick={this.addToDatabase}> SUBMIT </button>
            </div>
        );
    }
}

export default EntertainmentForm;

