import React from 'react'
import Subtotal from './Subtotal'
import './Carrinho.css'
import { useStateValue } from './StateProvider'


function Carrinho() {

    const [{basket}] = useStateValue(); 
    return (
        <div className="carrinho">
            <div className="carrinho_esquerda">
                <h2 className="carrinho_titulo">O carrinho de compras está vazio</h2>
                <p>Adicione produtos ao carrinho!</p>
            </div>
            <div className="carrinho_direita">
        <Subtotal/>
            </div>

        </div>
    )

}
export default Carrinho;