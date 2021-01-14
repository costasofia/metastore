import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

function ListaCategoria() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://192.168.1.81:4000/categoria/getCategoria')
            .then(result => setData(result.data));
    }, []);

    return (
        <div>
            <h2>Lista de Categoria Disponiveis</h2>
            <div class="card-container">
                {data.map((item) => (

                    <div>
                        <div>
                            <Link>{item.designacao}</Link>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )

}

export default ListaCategoria; 