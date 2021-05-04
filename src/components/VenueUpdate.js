import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class VenueUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            landscape: '',
            capacity: '',
            phone: '',
            price: '',
            zipcode: '',
            message: '',
            success: false,
            venue: []
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

    setSuccess = _ => {
        if (this.state.venue.length > 0) {
            this.state.success = true;
            this.state.id = this.state.venue[0].id;
            this.state.name = this.state.venue[0].name;
            this.state.capacity = this.state.venue[0].capacity;
            this.state.landscape = this.state.venue[0].landscape;
            this.state.phone = this.state.venue[0].phone;
            this.state.price = this.state.venue[0].price;
            this.state.zipcode = this.state.venue[0].zipcode;
        }
        else {
            alert("No such ID exists!")
        }
    };

    findCompany = _ => {

        fetch('http://localhost:4000/venue/find?id=' + this.state.id)
            .then(response => response.json())
            .then(venue => (this.state.venue = venue.data));

        this.setSuccess();
    };

    updateDatabase = _ => {
        fetch('http://localhost:4000/venue/update?id=' + this.state.id
            + '&name=' + this.state.name
            + '&capacity=' + this.state.capacity
            + '&landscape=' + this.state.landscape
            + '&price=' + this.state.price
            + '&phone=' + this.state.phone
            + '&zipcode=' + this.state.zipcode).then(r => r.text());

        this.setState({
            success: false,
            id: '',
            name: '',
            landscape: '',
            capacity: '',
            phone: '',
            price: '',
            zipcode: ''
        });

        this.state.venue = [];

    };


    render() {
        fetch('http://localhost:4000/venue/find?id=' + this.state.id)
            .then(response => response.json())
            .then(venue => (this.setState({venue: venue.data})));

        return (
            <div>
                {!this.state.success && <p> Enter your company id to update your information from our database </p>}
                {!this.state.success && <input type="text" id="id" value={this.state.id} onChange={(e) => this.handleIdOnChange(e)}/>}
                {!this.state.success && <p className="string"> Your ID is {this.state.id}. Are your sure you want to update your information? </p>}
                {!this.state.success && <button onClick={this.findCompany}> UPDATE </button>}
                {!this.state.success && <p>{this.state.message} </p>}

                {this.state.success && <p>Name</p>}
                {this.state.success && this.state.venue && <input type="text" id="name" value={this.state.name} onChange={ (e) => this.handleNameOnChange(e) } />}
                {this.state.success && <p>Capacity</p>}
                {this.state.success && this.state.venue && <input type="text" id="capacity" value={this.state.capacity} onChange={ (e) => this.handleCapacityOnChange(e) }/>}
                {this.state.success && <p>Landscape</p>}
                {this.state.success && this.state.venue && <input type="text" id="landscape" value={this.state.landscape} onChange={ (e) => this.handleLandscapeOnChange(e) } />}
                {this.state.success && <p>Phone Number</p>}
                {this.state.success && this.state.venue && <input type="number" id="phone" value={this.state.phone} onChange={ (e) => this.handlePhoneOnChange(e) }/>}
                {this.state.success && <p>Price</p>}
                {this.state.success && this.state.venue && <input type="number" id="price" value={this.state.price} onChange={ (e) => this.handlePriceOnChange(e) }/>}
                {this.state.success && <p>Zipcode</p>}
                {this.state.success && this.state.venue && <input type="number" id="zipcode" value={this.state.zipcode} onChange={ (e) => this.handleZipOnChange(e) }/>}


                {this.state.success && <p className="string"> Hi {this.state.name}! You provide {this.state.landscape} landscape with the
                    capacity of {this.state.capacity}. </p>}
                {this.state.success && <p>Your contact number is {this.state.phone} and price is
                    ${this.state.price}. </p>}
                {this.state.success && <p> Your zipcode is {this.state.zipcode}. </p>}
                {this.state.success && <p> Is your information correct? </p>}

                {this.state.success && <button onClick={this.updateDatabase}> SUBMIT </button>}

            </div>
        );
    }

}

export default VenueUpdate;

