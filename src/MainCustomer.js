import React, { Component } from 'react';
import CustomerAdd from './CustomerAdd';
import CustomerUpdate from './CustomerUpdate';
import Customer from "./Customer";

class MainCustomer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            addButton: false,
            updateButton: false,
            viewButton: false
        };
        this.onClickAdd = this.onClickAdd.bind(this);
        this.onClickView = this.onClickView.bind(this);
        this.onClickUpdate = this.onClickUpdate.bind(this);
    }

    onClickAdd () {
        this.setState({addButton: true});
    }

    onClickUpdate () {
        this.setState({
            updateButton: true
        });
    }

    onClickView () {
        this.setState({
            viewButton: true
        });
    }


    render() {
        const { addButton, updateButton, viewButton } = this.state;
        const val = !addButton && !updateButton && !viewButton;
        return (
            <div>
                { addButton && <CustomerAdd /> }
                { updateButton && <CustomerUpdate />}
                { viewButton && <Customer />}
                { !addButton && !updateButton && !viewButton &&
                <p> <button onClick={this.onClickAdd}> I am a new customer </button>
                    <button onClick={this.onClickUpdate}> I want to update my details </button>
                    <button onClick={this.onClickView}> I want to view companies </button> </p>}
            </div>
        );
    }
}

export default MainCustomer;

