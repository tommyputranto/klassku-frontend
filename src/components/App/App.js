import React, { Component } from 'react';
import './App.css';
import TerunaHome from '../Teruna/TerunaHome.js';
import Login from '../Login/Login.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: ""
    };

    this.onLoginSuccess = this.onLoginTeruna.bind(this);
    this.onLogoutSuccess = this.onLogoutSuccess.bind(this);
  }

  onLoginTeruna() {
    this.setState({ isLoggedIn: "teruna" });
  }

  onLogoutSuccess() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const { isLoggedIn } = this.state;
    let showPage;
    switch (isLoggedIn) {
      case "teruna":
        //show page if loggedIn
        // <Dashboard onLogoutSuccess={this.onLogoutSuccess} />
        showPage = <TerunaHome />;

        break;

      default:
        showPage = <Login onLoginTeruna={this.onLoginSuccess} />;
    }

    return (
      <div>
        {showPage}
      </div>
    );
  }
}

export default App;
