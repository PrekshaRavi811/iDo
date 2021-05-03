import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class VenueForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            landscape: '',
            capacity: '',
            phone: '',
            price: '',
            zipcode: ''
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

    handleLandscapeOnChange(e) {
        this.setState({
            landscape: e.target.value,
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

    handleZipOnChange(e) {
        this.setState({
            zipcode: e.target.value,
        })
    };

    handleCapacityOnChange(e) {
        this.setState({
            capacity: e.target.value,
        })
    };

    getVenue = _=> {
        fetch('http://localhost:4000/venue')
            .then(response => response.json())
            .then(venue => (this.setState({venue: venue.data})));
    };

    addToDatabase = _ => {

        fetch('http://localhost:4000/venue/add?id=' + this.state.id + '&name=' + this.state.name + '&capacity=' +
            this.state.capacity + '&landscape=' + this.state.landscape + '&price=' + this.state.price
            + '&phone=' + this.state.phone  + '&zipcode=' + this.state.zipcode);

        this.setState({
            id: '',
            name: '',
            landscape: '',
            capacity: '',
            phone: '',
            price: '',
            zipcode: ''
        })
    };
    render() {
        return (
            <div>
                <p> Company ID </p>
                <input type="text" id="id" value={this.state.id} onChange={ (e) => this.handleIdOnChange(e) } />
                <p> Name </p>
                <input type="text" id="name" value={this.state.name} onChange={ (e) => this.handleNameOnChange(e) } />
                <p> Capacity </p>
                <input type="number" id="capacity" value={this.state.capacity} onChange={ (e) => this.handleCapacityOnChange(e) }/>
                <p> Landscape </p>
                <input type="text" id="landscape" value={this.state.landscape} onChange={ (e) => this.handleLandscapeOnChange(e) }/>
                <p>Price</p>
                <input type="number" id="price" value={this.state.price} onChange={ (e) => this.handlePriceOnChange(e) }/>

                <p>Phone Number</p>
                <input type="number" id="phone" value={this.state.phone} onChange={ (e) => this.handlePhoneOnChange(e) }/>
                <p> Zipcode </p>
                <input type="number" id="zipcode" value={this.state.zipcode} onChange={ (e) => this.handleZipOnChange(e) }/>

                <p className="string"> Hi {this.state.name}! You provide {this.state.landscape} landscape with the
                    capacity of {this.state.capacity}. </p>
                <p>Your contact number is {this.state.phone} and price is
                    ${this.state.price}. </p>
                <p> Your zipcode is {this.state.zipcode}. </p>
                <p> Is your information correct? </p>

                <button onClick={this.addToDatabase}> SUBMIT </button>
            </div>
        );
    }
}

export default VenueForm;

