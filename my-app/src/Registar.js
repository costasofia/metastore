import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from "axios";
import './Registar.css'

function Registar() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [NumTelefone, setNumTelefone] = useState('');
    const [IdTipo, setIdTipo] = useState('');

    const history = useHistory();
    function registarUtilizador() {
        return axios.post('http://192.168.1.81:4000/utilizador/register', {

            nome:nome,
            email: email,
            Password: Password,
            NumTelefone: NumTelefone,
            IdTipo: IdTipo,

        }).then(response => {
            console.log(response.data)
            console.log("ola")


        }).catch(error => {
            console.log(error);
        });
    }



    return (
        <div className="registar">

            <div className="registar__container">
                <h1>Sign In</h1>
                <form name="myForm" >
                    <p>Selecione um tipo utilizador</p>
                    <input type="radio" id="cliente"onChange={e =>setIdTipo(e.target.value)}  value="1" ></input>
                    <label for="cliente">Cliente</label>
                    <br></br>
                    <input type="radio" id="lojista"   onChange={e =>setIdTipo(e.target.value)} value="2" ></input>
                    <label for="lojista">Lojista</label>
                    <h5>Nome Completo</h5>
                    <input type="nome" placeholder="Nome" onChange={e =>setNome(e.target.value)}/>
                    <h5>Email</h5>
                    <input type="email" placeholder="Email" onChange={e =>setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" placeholder="Password" onChange={e =>setPassword(e.target.value)}/>
                    <h5>Número de Telefone</h5>
                    <input type="numero" placeholder="Número de Telefone" onChange={e =>setNumTelefone(e.target.value)} />
                    <h2></h2>

                    <button type="submit" onClick={registarUtilizador} className="registar__signInButton">Registar</button>

                </form>


            </div>
        </div>
    )
}

export default Registar;
