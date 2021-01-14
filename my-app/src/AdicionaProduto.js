import axios from "axios";
import React, { useEffect, useState } from 'react'
import { Alert } from 'react-alert'

function AdicionaProduto() {



    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [Quatidade, setQuantidade] = useState('');
    const [Preco, setPreco] = useState('');
    const [taxaIva, setTaxaIva] = useState('');
    const [idCategoria, setIdCategoria] =useState('');
    const [idestado, setIdEstado] =useState('');
    const [idLoja, setIdLoja] =useState('');
    
    const [data, setData] = useState([]);
    
    function adicionaProduto(){
        return axios.post('http://192.168.1.81:4000/produto/criarProduto',{
         nome:nome,
         descricao:descricao,
         Quatidade:Quatidade,
         Preco:Preco,
         taxaIva: taxaIva,
         idCategoria: idCategoria,
         idestado: idestado,
       
        })
    }

    function addProduto(){
        if(nome.trim() === ''|| descricao.trim() === '' || Preco.trim() === ''||taxaIva.trim()===''|| idCategoria.trim()===''|| idestado.trim()===''){
            alert("Preencha todos os campos!");
        }else{
            adicionaProduto();
        }
    }

    useEffect(() => {
        axios.get('http://192.168.1.81:4000/categoria/getCategoria')
            .then(result => setData(result.data));
    }, []);

    useEffect(() => {
        axios.get('http://192.168.1.81:4000/estado/getEstado')
            .then(result => setData(result.data));
    }, []);

  
    return (
        <div>
            <h1>Adiciona Produto</h1>

            <form>
                <fieldset>
                    <label>
                        <p>Nome do Produto</p>
                        <input type="nome" placeholder="Nome"  onChange={e =>setNome(e.target.value)} />
                    </label>
                    <label>
                        <p>Descrição</p>
                        <input type="nome" placeholder="Descrição" onChange={e =>setDescricao(e.target.value)} />
                    </label>
                    <label>
                        <p>Quatidade</p>
                        <input type="numero" placeholder="Quantidade"  onChange={e =>setQuantidade(e.target.value)} />
                    </label>
                    <label>
                        <p>Preco</p>
                        <input type="numero" placeholder="Preco"  onChange={e =>setPreco(e.target.value)} />
                    </label>
                    <label>
                        <p>Taxa de Iva</p>
                        <input type="numero" placeholder="Taxa de Iva"  onChange={e =>setTaxaIva(e.target.value)} />
                    </label>
                    <div class="custom-select">
                        <select>
                            {data.map((item) => (
                                
                                <option onChange={e =>setIdCategoria(e.target.value)}>{item.designacao}</option>
                               
                            ))}
                        </select>
                    </div>
                    <div class="custom-select">
                        <select>
                            {data.map((item) => (
                                <option onChange={e =>setIdEstado(e.target.value)}>{item.descricao}</option>
                            ))}
                        </select>
                    </div>
                    <button type="submit"onClick={addProduto}>Submit</button>

                </fieldset>

            </form>
        </div>
    )
}
export default AdicionaProduto;

