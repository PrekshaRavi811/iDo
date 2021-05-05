import React from "react";

class showTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            type: '',
            dress: []
        };
        this.getDress();
    };

    handleNameOnChange(e) {
        this.setState({
            name: e.target.value,
        });
    };

    handleStyleOnChange(e) {
        this.setState({
            type: e.target.value,
        })
    };

    getName = _ =>  {
        this.state.dress = [];
        fetch('http://localhost:4000/dress/getName?name=\'' + this.state.name + '\';')
            .then(response => response.json())
            .then(dress => (this.setState({dress: dress.data})));
    }

    getStyle = _ =>  {
        this.state.dress = [];
        fetch('http://localhost:4000/dress/getStyle?style=\'' + this.state.style + '\';')
            .then(response => response.json())
            .then(dress => (this.setState({dress: dress.data})));
    }

    sortByPrice = _ =>  {
        this.state.dress = [];
        fetch('http://localhost:4000/dress/sortPrice')
            .then(response => response.json())
            .then(dress => (this.setState({dress: dress.data})));
    }

    getDress = _ => {
        fetch('http://localhost:4000/dress/')
            .then(response => response.json())
            .then(dress => (this.setState({dress: dress.data})));
    }

    render() {
        return (
            <div>
                <button onClick={this.getDress}>Refresh</button> <br/> <br />
                <button onClick={this.sortByPrice}>Sort by Price</button> <br/>
                <button onClick={this.getName}> Search by Name </button>
                <input type="text" id="id" value={this.state.name} onChange={ (e) => this.handleNameOnChange(e) } /> <br/>
                <button onClick={this.getStyle}> Search by Style </button>
                <input type="text" id="id" value={this.state.style} onChange={ (e) => this.handleStyleOnChange(e) } />

                <table border="1">
                    <thead>
                    <tr>
                        <th> ID </th>
                        <th>Name</th>
                        <th>Style</th>
                        <th>Phone Number</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.dress && this.state.dress.map((dress, index) => {
                        return (<tr>
                            <td>{dress.id}</td>
                            <td>{dress.name}</td>
                            <td>{dress.style}</td>
                            <td>{dress.phone}</td>
                            <td>{dress.price}</td>
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
