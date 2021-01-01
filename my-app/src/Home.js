import './Home.css'
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react'

import axios from "axios";
function Home() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://192.168.1.67:4000/produto/getProdutos')
            .then(result => setData(result.data));
    }, []);

    const history = useHistory();
    const handleClick = () => history.push('/produto');
    return (
        <div className="home">
            <img className="home__image"
                src="logo512.png" alt="" />
            {data.map((item) => (
                <div class="card-container">
                    <div class="card">
                        <div class="custom-column-content">
                            <div key={item.IdProduto}>
                                <p>  {item.nome}</p>
                                <p>  {item.descricao}</p>
                            </div>
                        </div>
                        <p><button type="button" onClick={handleClick}>Add Product</button></p>
                    </div>
                </div>
            ))}

        </div>
    )

}

export default Home;