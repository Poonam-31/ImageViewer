import React, { Component } from 'react';
import './Login.css';
import Card from "@material-ui/core/Card";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Redirect } from 'react-router-dom';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            usernameRequired: "displayNone",
            passwordRequired: "displayNone",
            incorrectUsernamePasswordMessage: "displayNone",
            username: "",
            password: "",
            isLoggedIn: false,
        };
    }

    inputUsernameHandler = (e) => {
        this.setState({ username: e.target.value });
    }

    inputPasswordHandler = (e) => {
        this.setState({ password: e.target.value });
    }

    loginClickHandler = () => {
        let username = "poonam_chandra31";
        let password = "Instagram";

        let accessToken = "";
        if (this.state.username === "" || this.state.password === "") {
            this.state.username === "" ? this.setState({ usernameRequired: "displayBlock" }) : this.setState({ usernameRequired: "displayNone" });
            this.state.password === "" ? this.setState({ passwordRequired: "displayBlock" }) : this.setState({ passwordRequired: "displayNone" });
            this.setState({ incorrectUsernamePasswordMessage: "displayNone" });
        } else if (this.state.username === username && this.state.password === password) {
            sessionStorage.setItem("access-token", accessToken);
            this.setState({ 
                isLoggedIn: true,
            });
        } else {
            this.setState({ incorrectUsernamePasswordMessage: "displayBlock" });
        }

    }

    render() {
        return (
            <div>
                {this.state.isLoggedIn === true ?
                <Redirect to= "/home"/>
                :
                    <div>
                        
                        <Card className="login-card">
                            <p className="login-header">LOGIN</p>
                            <FormControl required>
                                <InputLabel htmlFor="username">Username</InputLabel>
                                <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameHandler} value = {this.state.username}/>
                                <FormHelperText className={this.state.usernameRequired}><span className="required">required</span></FormHelperText>
                            </FormControl>
                            <br />
                            <br />
                            <FormControl required>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input id="password" type="password" password={this.state.password} onChange={this.inputPasswordHandler} value = {this.state.password}/>
                                <FormHelperText className={this.state.passwordRequired}><span className="required">required</span></FormHelperText>
                            </FormControl>
                            <br />
                            <br />
                            <FormHelperText className={this.state.incorrectUsernamePasswordMessage}><span className="required" style={{ fontSize: "14px" }}>Incorrect username and/or password</span></FormHelperText>
                            <br />
                            <Button variant="contained" color="primary" onClick={this.loginClickHandler} className="login-btn">LOGIN</Button>
                        </Card>
                    </div>
                }
            </div>
        );
    }
}

export default Login;