import React from "react";

class showTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            type: '',
            entertainment: []
        };
        this.getEntertainment();
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

    getName = _ =>  {
        this.state.entertainment = []; //food was here before
        fetch('http://localhost:4000/entertainment/getName?name=\'' + this.state.name + '\';')
            .then(response => response.json())
            .then(entertainment => (this.setState({entertainment: entertainment.data})));
    }

    getType = _ =>  {
        this.state.entertainment = [];
        fetch('http://localhost:4000/entertainment/getType?type=\'' + this.state.type + '\';')
            .then(response => response.json())
            .then(entertainment => (this.setState({entertainment: entertainment.data})));
    }

    sortByPrice = _ =>  {
        this.state.entertainment = [];
        fetch('http://localhost:4000/entertainment/sortPrice')
            .then(response => response.json())
            .then(entertainment => (this.setState({entertainment: entertainment.data})));
    }

    getEntertainment = _ => {
        fetch('http://localhost:4000/entertainment/')
            .then(response => response.json())
            .then(entertainment => (this.setState({entertainment: entertainment.data})));
    }

    render() {
        return (
            <div>
                <button onClick={this.getEntertainment}>Refresh</button> <br/> <br />
                <button onClick={this.sortByPrice}>Sort by Price</button> <br/>

                <button onClick={this.getName}> Search by Name </button>
                <input type="text" id="id" value={this.state.name} onChange={ (e) => this.handleNameOnChange(e) } /> <br/>
                <button onClick={this.getType}> Search by Type </button>
                <input type="text" id="id" value={this.state.type} onChange={ (e) => this.handleTypeOnChange(e) } />

                <table border="1">
                    <thead>
                    <tr>
                        <th> ID </th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Phone Number</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.entertainment && this.state.entertainment.map((entertainment, index) => {
                        return (<tr>
                            <td>{entertainment.id}</td>
                            <td>{entertainment.name}</td>
                            <td>{entertainment.type}</td>
                            <td>{entertainment.phone}</td>
                            <td>{entertainment.price}</td>
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
