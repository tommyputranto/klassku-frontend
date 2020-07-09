// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { Component } from 'react';
import './components/App/App.css';
import TerunaHome from './components/Teruna/Home/TerunaHome.js';
import Login from './components/Login/Login.js';


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
