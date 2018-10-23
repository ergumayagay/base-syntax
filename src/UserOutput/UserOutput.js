import React, { Component } from 'react';
import './UserOutput.css';

class UserOuput extends Component {

    render() {
        return (
            <div className="UserOutput">
                <p>{this.props.username}</p>
                <p>This is awesome</p>
            </div>
        )
    }
}

export default UserOuput;