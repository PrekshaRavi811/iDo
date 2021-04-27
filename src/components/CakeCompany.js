import React, { Component } from 'react';
import CakeForm from './CakeForm';
import CakeDelete from './CakeDelete';

class cakeCompany extends Component{
    constructor(props) {
        super(props);
        this.state = {
            addButton: false,
            updateButton: false,
            deleteButton: false
        };
        this.onClickAdd = this.onClickAdd.bind(this);
        this.onClickDelete = this.onClickDelete.bind(this);
        this.onClickUpdate = this.onClickUpdate.bind(this);
    }

    onClickAdd () {
        this.setState({ addButton: true });
    }

    onClickUpdate () {
        this.setState({
            updateButton: true
        });
    }

    onClickDelete () {
        this.setState({
            deleteButton: true
        });
    }


    render() {
        const { addButton, updateButton, deleteButton } = this.state;
        const val = !addButton && !updateButton && !deleteButton;
        return (
            <div>
                { addButton && <CakeForm /> }
                { deleteButton && <CakeDelete />}
                { !addButton && !updateButton && !deleteButton &&
                <p> <button onClick={this.onClickAdd}> I want to add my company </button>
                    <button onClick={this.onClickUpdate}> I want to update my details </button>
                    <button onClick={this.onClickDelete}> I want to remove my company </button> </p>}
            </div>
        );
    }
}

export default cakeCompany;

