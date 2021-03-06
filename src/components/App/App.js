import React, { Component } from 'react';
import './App.css';
import TerunaHome from '../Teruna/Home/TerunaHome.js';
import Login from '../Login/Login.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: "",
      id: ""
    };

    this.onLoginTeruna = this.onLoginTeruna.bind(this);
    this.onLogoutSuccess = this.onLogoutSuccess.bind(this);
  }

  onLoginTeruna(role, id) {
    this.setState({ isLoggedIn: role , id: id});
  }

  onLogoutSuccess() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const { isLoggedIn, id } = this.state;
    let showPage;
    switch (isLoggedIn) {
      case "leader":
        //show page if loggedIn
        // <Dashboard onLogoutSuccess={this.onLogoutSuccess} />

        break;
      case "teruna":
        showPage = <TerunaHome id= {id} />;

        break;

      default:
        showPage = <Login onLoginTeruna={this.onLoginTeruna} />;
    }

    return (
      <div>
        {showPage}
      </div>
    );
  }
}

export default App;
