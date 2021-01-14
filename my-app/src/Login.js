import React, { useState } from 'react'
import axios from "axios";
import jwt_decode from 'jwt-decode';
import { Alert } from 'reactstrap';
import './Login.css'
import { Link,  useHistory } from 'react-router-dom'

function Login() {

    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const history = useHistory();
  
    

    function login() {
        if (email === '' && Password === '') {
            alert("Falta o email e a password")
        } else if (email === '' && Password !== '') {
            alert("O problema é a password")
        } else if (email !== '' && Password === '') {
            alert("O problema é o email")
        } else {
            return axios.post('http://192.168.1.81:4000/utilizador/login', {
                email: email,
                Password: Password
            }).then(function (response) {
                var token = response.data;
                var decoded = jwt_decode(token);
                if (email === decoded.email) {
                    console.log(email);
                    alert("Great Shot!");
                   history.push("/home");


                } else {
                    alert("Your file is being uploaded!")
                }
            }.bin(this))
                .catch((error) => {
                    console.log(error);
                    alert("Erro");
                });
        }
    }



    return (
        <div className="login">

            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text"  placeholder="Email" onChange={e =>setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password"  placeholder="Password" onChange={e =>setPassword(e.target.value)} />
                    <h2></h2>
                    <button type="submit" className="login__signInButton" onClick={login}>Sign In</button>
                </form>
                <p className="login__register"><Link to='/Registar'> Click Me</Link></p>
            </div>
        </div>
    )
}

export default Login;
