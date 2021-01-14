import React from 'react'
import {Link} from 'react-router-dom'
import './Navlinks.css'

function Navlinks(){
    return (
       <div className="navlinks">
           <div className="navlinks__outer">
               <div className="navlinks__inner">
                   <Link to={`/listaLoja`}>Lojas</Link>
                   <Link to={`/listaCategoria`}>Categorias</Link>
                   <Link to={`/adicionaProduto`}>Adiciona Produto</Link>
                   <Link to={`/login`}>Comprar</Link>
                   <Link to={`/registar`}>Registar</Link>
               </div>
           </div>
       </div>
    )
}
export default Navlinks;