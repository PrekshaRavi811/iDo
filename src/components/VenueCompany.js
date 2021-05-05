import React, { Component } from 'react';
import VenueForm from './VenueForm';
import VenueDelete from './VenueDelete';
import VenueUpdate from "./VenueUpdate";

class VenueCompany extends Component{
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
                { addButton && <VenueForm /> }
                { updateButton && <VenueUpdate />}
                { deleteButton && <VenueDelete />}
                { !addButton && !updateButton && !deleteButton &&
                <p> <button onClick={this.onClickAdd}> I want to add my company </button>
                    <button onClick={this.onClickUpdate}> I want to update my details </button>
                    <button onClick={this.onClickDelete}> I want to remove my company </button> </p>}
            </div>
        );
    }
}

export default VenueCompany;

