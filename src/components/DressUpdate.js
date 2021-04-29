import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class DressUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            style: '',
            price: 0,
            phone: 0,
            message: '',
            success: false,
            dress: []
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

    handleStyleOnChange(e) {
        this.setState({
            style: e.target.value,
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

    setSuccess = _ => {
        if (this.state.dress.length > 0) {
            this.state.success = true;
            this.state.id = this.state.dress[0].id;
            this.state.name = this.state.dress[0].name;
            this.state.style = this.state.dress[0].style;
            this.state.phone = this.state.dress[0].phone;
            this.state.price = this.state.dress[0].price;
        }
        else {
            alert("No such ID exists!")
        }
    };

    findCompany = _ => {
        fetch('http://localhost:4000/dress/find?id=' + this.state.id)
            .then(response => response.json())
            .then(dress => (this.state.dress = dress.data));
        this.setSuccess();
    };

    updateDatabase = _ => {
        fetch('http://localhost:4000/dress/update?id=' + this.state.id
            + '&name=' + this.state.name
            + '&style=' + this.state.style
            + '&phone=' + this.state.phone
            + '&price=' + this.state.price).then(r => r.text());

        this.setState({
            success: false,
            id: '',
            name: '',
            style: '',
            phone: 0,
            price: 0,
        });

        this.state.dress = [];
        //alert(this.state.dress.length);

    };

    render() {
        fetch('http://localhost:4000/dress/find?id=' + this.state.id)
            .then(response => response.json())
            .then(dress => (this.setState({dress: dress.data})));

        return (
            <div>
                {!this.state.success && <p> Enter your company id to update your information from our database </p>}
                {!this.state.success && <input type="text" id="id" value={this.state.id} onChange={(e) => this.handleIdOnChange(e)}/>}
                {!this.state.success && <p className="string"> Your ID is {this.state.id}. Are your sure you want to update your information? </p>}
                {!this.state.success && <button onClick={this.findCompany}> UPDATE </button>}
                {!this.state.success && <p>{this.state.message} </p>}

                {this.state.success && <p> Name </p>}
                {this.state.success && this.state.dress && <input type="text" id="name" value={this.state.name} onChange={ (e) => this.handleNameOnChange(e) } />}
                {this.state.success && <p>Style</p>}
                {this.state.success && this.state.dress && <input type="text" id="style" value={this.state.style} onChange={ (e) => this.handleStyleOnChange(e) }/>}
                {this.state.success && <p>Phone Number</p>}
                {this.state.success && this.state.dress && <input type="number" id="phone" value={this.state.phone} onChange={ (e) => this.handlePhoneOnChange(e) }/>}
                {this.state.success && <p>Price Per Guest</p>}
                {this.state.success && this.state.dress && <input type="number" id="price" value={this.state.price} onChange={ (e) => this.handlePriceOnChange(e) }/>}

                {this.state.success && <p className="string"> Hi {this.state.name}!
                    You provide {this.state.style} dresses and your contact number is {this.state.phone}.
                    Your average price per guest is ${this.state.price}.
                    Is your information correct? </p>}

                {this.state.success && <button onClick={this.updateDatabase}> SUBMIT </button>}

            </div>
        );
    }

}

export default DressUpdate;

