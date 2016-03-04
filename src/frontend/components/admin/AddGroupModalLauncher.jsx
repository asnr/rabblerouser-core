'use strict';

import React, {Component} from 'react';
import {render} from 'react-dom';

import EditGroupForm from './EditGroupForm.jsx';
import Modal from 'react-modal';

export default class AddGroupModalLauncher extends Component {
    constructor(props) {
        super(props);
        this.state = {modalIsOpen: false};
    }

    launchEditForm = () => {
        this.setState({modalIsOpen: true});
    };

    closeEditForm = () => {
        this.setState({modalIsOpen: false});
    };

    render() {
        return (
            <div>
                <button onClick={this.launchEditForm}>Add group</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeEditForm}>
                    <EditGroupForm onSave={this.props.onSave} group={''}/>
                </Modal>
            </div>
        )
    }
}