import React from "react";

class showTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            capacity: '',
            landscape: '',
            zipcode: '',
            venue: []
        };
        this.getVenue();
    };

    handleNameOnChange(e) {
        this.setState({
            name: e.target.value,
        });
    };

    handleCapacityOnChange(e) {
        this.setState({
            capacity: e.target.value,
        })
    };

    handleLandscapeOnChange(e) {
        this.setState({
            landscape: e.target.value,
        })
    };

    handleZipcodeOnChange(e) {
        this.setState({
            zipcode: e.target.value,
        })
    };


    getName = _ =>  {
        this.state.venue = []; //food was here before
        fetch('http://localhost:4000/venue/getName?name=\'' + this.state.name + '\';')
            .then(response => response.json())
            .then(venue => (this.setState({venue: venue.data})));
    }

    getCapacity = _ =>  {
        this.state.venue = [];
        fetch('http://localhost:4000/venue/getCapacity?capacity=\'' + this.state.capacity + '\';')
            .then(response => response.json())
            .then(venue => (this.setState({venue: venue.data})));
    }

    getLandscape = _ =>  {
        this.state.venue = [];
        fetch('http://localhost:4000/venue/getLandscape?landscape=\'' + this.state.landscape + '\';')
            .then(response => response.json())
            .then(venue => (this.setState({venue: venue.data})));
    }

    getZipcode = _ =>  {
        this.state.venue = [];
        fetch('http://localhost:4000/venue/getZipcode?zipcode=\'' + this.state.zipcode + '\';')
            .then(response => response.json())
            .then(venue => (this.setState({venue: venue.data})));
    }

    sortByPrice = _ =>  {
        this.state.venue = [];
        fetch('http://localhost:4000/venue/sortPrice')
            .then(response => response.json())
            .then(venue => (this.setState({venue: venue.data})));
    }

    getVenue = _ => {
        fetch('http://localhost:4000/venue/')
            .then(response => response.json())
            .then(venue => (this.setState({venue: venue.data})));
    }

    render() {
        return (
            <div>
                <button onClick={this.getVenue}>Refresh</button> <br/> <br />
                <button onClick={this.sortByPrice}>Sort by Price</button> <br/>

                <button onClick={this.getName}> Search by Name </button>
                <input type="text" id="id" value={this.state.name} onChange={ (e) => this.handleNameOnChange(e) } /> <br/>
                <button onClick={this.getCapacity}> Search by Capacity </button>
                <input type="text" id="id" value={this.state.capacity} onChange={ (e) => this.handleCapacityOnChange(e) } /> <br/>
                <button onClick={this.getLandscape}> Search by Landscape </button>
                <input type="text" id="id" value={this.state.landscape} onChange={ (e) => this.handleLandscapeOnChange(e) } /> <br/>
                <button onClick={this.getZipcode}> Search by Zipcode </button>
                <input type="text" id="id" value={this.state.zipcode} onChange={ (e) => this.handleZipcodeOnChange(e) } />


                <table border="1">
                    <thead>
                    <tr>
                        <th> ID </th>
                        <th>Name</th>
                        <th>Capacity</th>
                        <th>Landscape</th>
                        <th>Zipcode</th>
                        <th>Phone Number</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.venue && this.state.venue.map((venue, index) => {
                        return (<tr>
                            <td>{venue.id}</td>
                            <td>{venue.name}</td>
                            <td>{venue.capacity}</td>
                            <td>{venue.landscape}</td>
                            <td>{venue.zipcode}</td>
                            <td>{venue.phone}</td>
                            <td>{venue.price}</td>
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
