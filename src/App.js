import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    username: "Enter Username",
  }

  usernameChangedHandler = (event) =>{
    this.setState(
      {username : event.target.value}
    );
  }

  render() {

    const style = {

      backgroundColor : "pink",

    };

    return (
      <div className="App" style={style}>
        <UserInput change={this.usernameChangedHandler.bind(this)} username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
