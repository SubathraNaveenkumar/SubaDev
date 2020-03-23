import React, { Component } from 'react';
import loginData from './loginData';
import './loginStyle.css'
import Localdata from './Localdata';

const accessLoginData = loginData.data;

class Login extends Component {

    constructor() {
        super()
        this.state = {
            userName: '',
            password: '',
            userError: '',
            passError: '',
            loginStatus: '',
            formStatus: false
        }
    }

    getLoginValue = (event) => {
        const { name } = event.target;
        switch (name) {
            case 'username':
                {
                    this.setState({
                        userName: event.target.value
                    })

                    break;
                }
            case 'password':
                {
                    this.setState({
                        password: event.target.value
                    })
                    break;
                }
            default:
                break;
        }
    }

    validateLoginForm = (event) => {
        event.preventDefault();
        if (!this.state.userName) {
            this.setState({
                userError: "UserName should not be empty"
            })
        }
        else if (!this.state.userName.match(/^[a-zA-Z\s]+$/)) {
            this.setState({
                userError: "UserName should be characters"
            })
        }
        else {
            this.setState({
                userError: ''
            })
        }

        if (!this.state.password) {
            this.setState({
                passError: "Password should not be empty"
            })
        }
        else if (this.state.password.length < 5) {
            this.setState({
                passError: "Password should be min 5 characters"
            })
        }
        else {
            this.setState({
                passError: ''
            })
        }

        if (this.state.userName === accessLoginData[0].username && this.state.password === accessLoginData[0].password) {
            this.setState({
                loginStatus: 'Login Successful.',
                formStatus: true
            })
        }
        else if (this.state.userName === '' || this.state.password === '') {
            this.setState({
                loginStatus: ''
            })
        }
        else {
            this.setState({
                loginStatus: 'Invalid username or password'
            })
        }
    }

    render() {
        return (
            <div className='background'>

                <div className='container w-25'>
                    <h2>Login Form</h2>
                    <form className='' onSubmit={this.validateLoginForm}>
                        <div className='form-group'>
                            <div><label>Username</label></div>
                            <div><input type='text' className='form-control' name='username' value={this.state.userName} placeholder='UserName' onChange={this.getLoginValue}></input></div>
                            <div><label>{this.state.userError}</label></div>
                        </div>
                        <div className='form-group'>
                            <div><label>Password</label></div>
                            <div><input type='text' className='form-control' name='password' value={this.state.password} placeholder='Password' onChange={this.getLoginValue}></input></div>
                            <div><label>{this.state.passError}</label></div>
                        </div>
                        <div className='form-group'>
                            <button className='btn btn-primary'>Login</button><br />
                            <div>
                                <label>{this.state.loginStatus}</label>
                            </div>
                        </div>
                    </form>
                </div>

                <div className='container'>
                    {/* {this.state.formStatus ? <Localdata /> : null } */}
                </div>

            </div>
        )
    }
}
export default Login
