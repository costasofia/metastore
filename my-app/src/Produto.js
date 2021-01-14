import { render } from 'react-dom';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import axios from "axios";
import Home from './Home';

import { useStateValue } from './StateProvider';
function Produto({ IdProduto, nome }) {

    const [{basket}, dispatch] = useStateValue();

    console.log('basket content', basket)
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                IdProduto: IdProduto,
                nome: nome
            }
        })
    }
    const params = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://192.168.1.81:4000/produto/produtos/' + params.IdProduto)
            .then(result => setData(result.data));
    }, []);


    return (
        <div>
            {data.map((item) => (
                <div class="card-container">
                    <div class="card">
                        <div class="custom-column-content">
                            <div key={item.IdProduto}>
                                <p>  {item.nome}</p>
                                <p>  {item.descricao}</p>
                            </div>
                        </div>
                        <button onClick={addToBasket}> Add Product</button>
                    </div>
                </div>
            ))}
        </div>


    )

}

export default Produto;