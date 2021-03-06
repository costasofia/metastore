import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

function ListaLoja(){

    const [data, setData] = useState([]);

useEffect(() => {
    axios.get('http://192.168.1.81:4000/loja/getLojas')
    .then(result => setData(result.data));
}, []);

    return (
        <div>
             <h2>Lista de Lojas</h2>
        {data.map((item) => (
            <div class="card-container">
                <div>
                    <div>
                        <div key={item.idLoja}>
                            <Link to={`/loja/${item.idLoja}`} > {item.Nome} </Link>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
    )

}

export default ListaLoja; 