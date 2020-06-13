import React, { Component } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            adminEmail: 'a',
            adminPassword: 'a',
            userEnteredEmail: null,
            userEnteredPassword: null
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleInputChange(key, e) {
        this.setState({ [key]: e.target.value });
    }

    handleLogin() {
        const {
            adminEmail,
            adminPassword,
            userEnteredEmail,
            userEnteredPassword
        } = this.state;

        this.checkData()

        // if (
        //     userEnteredEmail === adminEmail &&
        //     userEnteredPassword === adminPassword
        // ) {
        //     Swal.fire({
        //         timer: 1500,
        //         onBeforeOpen: () => {
        //             Swal.showLoading();
        //         },
        //         onClose: () => {
                 
        //         }
        //     });
        // } else {
        //     Swal.fire({
        //         timer: 1500,
        //         onBeforeOpen: () => {
        //             Swal.showLoading();
        //         },
        //         onClose: () => {
        //             Swal.fire({
        //                 position: 'center',
        //                 type: 'error',
        //                 title: 'Incorrect credentials !',
        //                 showConfirmButton: true
        //              });
        //         }
        //     });
        // }
    }

    checkData(){
        Swal.showLoading();
        const options = {
            url: 'http://localhost:8080/login',
            method: 'POST',
            data: {
              id: this.state.userEnteredEmail,
              pass: this.state.userEnteredPassword
            }
          };
          
          axios(options)
            .then(response => {
                this.props.onLoginTeruna();

                Swal.fire({
                    position: 'center',
                    type: 'success',
                    title: 'Successfully logged in',
                    showConfirmButton: false,
                    timer: 1500
                });
            }).catch((error) => {
                Swal.fire({
                    position: 'center',
                    type: 'error',
                    title: 'Incorrect credentials !',
                    showConfirmButton: true
                });
            });

    }

    componentDidMount() {
       
      }
    
  
    render() {
        return (
            <div className="small-container">
                
                <form>
                    <h1>Login</h1>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="admin@example.com"
                        onChange={e => this.handleInputChange('userEnteredEmail', e)}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="qwerty"
                        onChange={e => this.handleInputChange('userEnteredPassword', e)}
                    />
                    <input
                        type="button"
                        onClick={this.handleLogin}
                        value="Login"
                        className="login-btn"
                    />
                </form>
            </div>
        );
    }
}

export default Login;
