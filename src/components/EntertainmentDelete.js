import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class EntertainmentDelete extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            message: '',
            success: false
        };
    }
    handleIdOnChange(e) {
        this.setState({
            id: e.target.value,
        });
    };

    deleteFromDatabase = _ => {
        fetch('http://localhost:4000/entertainment/delete?id=' + this.state.id)
            .then (response => response.text())
            .then(text => this.setState({ message: text }));

        if (this.state.message == 'Successfully deleted your information.') {
            this.setState({
                success: true
            })
        }

        this.setState({
            id: ''
        })
    };

    render() {
        return (
            <div>
                { !this.state.success && <p> Enter your company id to delete your information from our database </p> }
                { !this.state.success && <input type="text" id="id" value={this.state.id} onChange={ (e) => this.handleIdOnChange(e) } /> }
                { !this.state.success && <p className="string"> Your ID is {this.state.id}. Are your sure you want to delete your information? </p> }
                { !this.state.success && <button onClick={this.deleteFromDatabase}> DELETE </button> }
                <p> {this.state.message} </p>
            </div>
        );
    }
}

export default EntertainmentDelete;

