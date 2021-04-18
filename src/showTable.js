import React from "react";


class showTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            food: []
        };
    };

    render() {
        fetch('http://localhost:4000/food')
            .then(response => response.json())
            .then(food => (this.setState({food: food.data})));
        return (
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
                    {this.state.food && this.state.food.map((food, index) => {
                        return (<tr>
                            <td>{food.name}</td>
                            <td>{food.cuisine}</td>
                            <td>{food.phone}</td>
                            <td>{food.price}</td>
                        </tr>)
                    })
                    }
                    </tbody>
                </table>
        );
    }
}

export default showTable;