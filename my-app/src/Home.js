import './Home.css'
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

function Home({IdProduto, nome}) {
    
   
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://192.168.1.81:4000/produto/getProdutos')
            .then(result => setData(result.data));
    }, []);

     
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
                        <div className="link_button">
                        <Link style={{ textDecoration: 'none' }} to={`/produto/${item.IdProduto}`}>Detalhes</Link>
                      </div>
                    </div>
                </div>
            ))}

        </div>
    )

}

export default Home;