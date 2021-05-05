import React from "react";

class showTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            size: '',
            food: [] //is this needed
        };
        this.getFood();
    };

    handleNameOnChange(e) {
        this.setState({
            name: e.target.value,
        });
    };

    handleSizeOnChange(e) {
        this.setState({
            size: e.target.value,
        })
    };

    getName = _ =>  {
        this.state.food = [];
        fetch('http://localhost:4000/cake/getName?name=\'' + this.state.name + '\';')
            .then(response => response.json())
            .then(food => (this.setState({food: food.data})));
    }

    getSize = _ =>  {
        this.state.food = [];
        fetch('http://localhost:4000/cake/getSize?size=\'' + this.state.size + '\';')
            .then(response => response.json())
            .then(food => (this.setState({food: food.data})));
    }

    sortByPrice = _ =>  {
        this.state.food = [];
        fetch('http://localhost:4000/cake/sortPrice')
            .then(response => response.json())
            .then(food => (this.setState({food: food.data})));
    }

    getFood = _ => {
        fetch('http://localhost:4000/cake')
            .then(response => response.json())
            .then(food => (this.setState({food: food.data})));
    }

    render() {
        return (
            <div>
                <button onClick={this.getFood}>Refresh</button> <br/> <br />
                <button onClick={this.sortByPrice}>Sort by Price</button> <br/>

                <button onClick={this.getName}> Search by Name </button>
                <input type="text" id="id" value={this.state.name} onChange={ (e) => this.handleNameOnChange(e) } /> <br/>
                <button onClick={this.getSize}> Search by Size </button>
                <input type="text" id="id" value={this.state.size} onChange={ (e) => this.handleSizeOnChange(e) } />

                <table border="1">
                    <thead>
                    <tr>
                        <th> ID </th>
                        <th>Name</th>
                        <th>Size</th>
                        <th>Phone Number</th>
                        <th>Price Per Guest</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.food && this.state.food.map((food, index) => {
                        return (<tr>
                            <td>{food.id}</td>
                            <td>{food.name}</td>
                            <td>{food.size}</td>
                            <td>{food.phone}</td>
                            <td>{food.price}</td>
                        </tr>)
                    })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default showTable;
