import React, { Component } from 'react';
import EntertainmentForm from './EntertainmentForm';
import EntertainmentDelete from './EntertainmentDelete';
import EntertainmentUpdate from "./EntertainmentUpdate";

class EntertainmentCompany extends Component{
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
        this.setState({addButton: true});
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
                { addButton && <EntertainmentForm /> }
                { updateButton && <EntertainmentUpdate />}
                { deleteButton && <EntertainmentDelete />}
                { !addButton && !updateButton && !deleteButton &&
                <p> <button onClick={this.onClickAdd}> I want to add my company </button>
                    <button onClick={this.onClickUpdate}> I want to update my details </button>
                    <button onClick={this.onClickDelete}> I want to remove my company </button> </p>}
            </div>
        );
    }
}

export default EntertainmentCompany;

