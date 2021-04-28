import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class FoodUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            cuisine: '',
            phone: 0,
            price: 0,
            message: '',
            success: false,
            n: false,
            updateButton: false,
            food: []
        };
        this.onClickUpdate = this.onClickUpdate.bind(this);

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

    setSuccess = _ => {
        let str = "Successfully found your information.";
        //let compare = this.state.message.toLocaleString().localeCompare(str.toLocaleString());
        let compare = this.state.message == str;
        this.setState({n: compare});

        if (compare) {
            this.setState({
                success: true
            });
        }
    };

    findCompany = _ => {

        this.setState({message: " "});

        fetch('http://localhost:4000/food/find?id=' + this.state.id)
            .then(response => response.text())
            .then(food => (this.setState({food: food.data})));

        fetch('http://localhost:4000/food/find?id=' + this.state.id)
            .then(response => response.text())
            .then(text => this.setState({message: text}));

        this.setState({
            id: ''
        });

        this.setSuccess();
    };

    updateDatabase = _ => {
        fetch('http://localhost:4000/food/update?id=' + this.state.id)
            .then(response => response.text())
            .then(text => this.setState({message: text}));

        if (this.state.message === 'Successfully updated your information.') {

        }

        this.setState({
            id: ''
        })
    };


    render() {
        fetch('http://localhost:4000/food/find?id=' + this.state.id)
            .then(response => response.json())
            .then(food => (this.setState({food: food.data})));

        this.state.food && this.state.food.map((food, ) => {
            this.setState({name: food.name})}
        )

        return (
            <div>
                {!this.state.success && <p> Enter your company id to update your information from our database </p>}
                {!this.state.success && <input type="text" id="id" value={this.state.id} onChange={(e) => this.handleIdOnChange(e)}/>}
                {!this.state.success && <p className="string"> Your ID is {this.state.id}. Are your sure you want to update your information? </p>}
                {!this.state.success && <button onClick={this.findCompany}> UPDATE </button>}
                {!this.state.success && <p>{this.state.message} </p>}

                {this.state.success && <p> Company ID </p>}
                {this.state.success && this.state.food && <input type="text" id="id" value={this.state.id} onChange={ (e) => this.handleIdOnChange(e) } />}
                {this.state.success && <p> Name </p>}
                {this.state.success && this.state.food && <input type="text" id="name" value={this.state.name} onChange={ (e) => this.handleNameOnChange(e) } />}
                {this.state.success && <p>Cuisine</p>}
                {this.state.success && this.state.food && <input type="text" id="cuisine" value={this.state.food.cuisine} onChange={ (e) => this.handleCuisineOnChange(e) }/>}
                {this.state.success && <p>Phone Number</p>}
                {this.state.success && this.state.food && <input type="number" id="phone" value={this.state.food.phone} onChange={ (e) => this.handlePhoneOnChange(e) }/>}
                {this.state.success && <p>Price Per Guest</p>}
                {this.state.success && this.state.food && <input type="number" id="price" value={this.state.food.price} onChange={ (e) => this.handlePriceOnChange(e) }/>}

                {this.state.success && <p className="string"> Hi {this.state.name}! You provide {this.state.cuisine} food and your contact number is {this.state.phone}. Your average price per guest is ${this.state.price}. Is your information correct? </p>}

                {this.state.success && <button onClick={this.updateDatabase}> SUBMIT </button>}
                <body>
                {this.state.success && this.state.food.map((food, index) => {
                        return (
                            <h1> food.name </h1>
                        )
                    })}
                </body>

            </div>
        );
    }

}

export default FoodUpdate;

