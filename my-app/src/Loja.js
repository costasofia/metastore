import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router';

function Loja({ idLoja }) {
    const [data, setData] = useState([]);
    const params = useParams();
    useEffect(() => {
        axios.get('http://192.168.1.81:4000/loja/getLojas')
            .then(result => setData(result.data));
    }, []);
    useEffect(() => {
        axios.get('http://192.168.1.81:4000/produto/produto/' + params.idLoja)
            .then(result => setData(result.data));
    }, []);
    return (
        <div>
            <div >
        <br></br>
                {data.map((item) => (
                    <option >{item.Nome}</option>
                ))}

            </div>
            {data.map((item) => (
                <div class="card-container">
                    <div class="card">
                        <div class="custom-column-content">
                            <div key={item.IdProduto}>
                                <p>  {item.nome}</p>
                                <p>  {item.descricao}</p>
                            </div>
                        </div>
                        <button > Add Product</button>
                    </div>
                </div>
            ))}
        </div>


    )

}
export default Loja;