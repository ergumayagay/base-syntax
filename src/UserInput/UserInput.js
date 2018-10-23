import React, { Component } from 'react';

class UserInput extends Component {


    render() {

        const style =  {
            marginTop : '20px',      
        };

        return (
            <div style={style}>
                <label>Username: </label>
                <input type="text"
                    onChange={this.props.change}
                    value={this.props.username} />
            </div>
        );
    }

}

export default UserInput;