import React from 'react';
//const connection = require('./routes');

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: '',
            food: [],
        };

        fetch('http://localhost:4000/food')
            .then(response => response.json()).
        then(food => (this.setState({food: food.data})));
    }

    handleNameOnChange(e) {
        this.setState({
            name: e.target.value,
        });
    }

    handleCuisineOnChange(e) {
        this.setState({
            cuisine: e.target.value,
        })
    }

    handlePhoneOnChange(e) {
        this.setState({
            phone: e.target.value,
        })
    }

    handlePriceOnChange(e) {
        this.setState({
            price: e.target.value,
        })
    }

    addToDatabase() {

    }


    render() {
        return (

            <div className="wrap">
                <table border="1">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cuisine</th>
                        <th>Phone Number</th>
                        <th>Price Per Guest</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{this.state.name}</td>
                        <td>{this.state.cuisine}</td>
                        <td>{this.state.phone}</td>
                        <td>{this.state.price}</td>
                    </tr>
                    </tbody>
                </table>

                <h1 className="string"> Name </h1>
                <input type="text" id="name" value={this.state.name} onChange={ (e) => this.handleNameOnChange(e) } />
                <h1 className="string">Cuisine</h1>
                <input type="text" id="cuisine" value={this.state.cuisine} onChange={ (e) => this.handleCuisineOnChange(e) }/>
                <h1 className="string">Phone Number</h1>
                <input type="number" id="phone" value={this.state.phone} onChange={ (e) => this.handlePhoneOnChange(e) }/>
                <h1 className="string">Price Per Guest</h1>
                <input type="number" id="price" value={this.state.price} onChange={ (e) => this.handlePriceOnChange(e) }/>

                <h1 className="string"> Hi {this.state.name}! You provide {this.state.cuisine} food and your contact number is {this.state.phone}. Your average price per guest is ${this.state.price}. Is your information correct? </h1>

                <button onClick={this.addToDatabase()}> SUBMIT </button>

            </div>
        )


    }

}

export default App;
