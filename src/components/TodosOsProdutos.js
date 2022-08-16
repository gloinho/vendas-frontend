import React from 'react'
import FiltrarProdutos from './FiltrarProdutos'

export default function TodosOsProdutos(props){
    const [produtos, setProdutos] = React.useState(null)

    React.useEffect(()=> {
        fetch("http://localhost:8000/api/produtos")
            .then(response => response.json())
            .then(data => setProdutos(data))
    },[])

    return <div>
        <FiltrarProdutos setProdutos={setProdutos}/>
        {produtos && produtos.map(({pk, nome, codigo_de_barras,preco_de_venda,preco_de_custo,unidade_de_venda,data_de_cadastro,ultima_atualizacao})=> 
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">{nome}</h5>
            <p className="card-text">Código de Barras: {codigo_de_barras}</p>
            <p className="card-text">Preço de Venda: R$: {preco_de_venda}</p>
            <p className="card-text">Preço de Custo: R$: {preco_de_custo}</p>
            <p className="card-text">Unidade de Venda: {unidade_de_venda}</p>
            <p className="card-text">Data de Cadastro: {data_de_cadastro}</p>
            <p className="card-text">Ultima Atualização: {ultima_atualizacao}</p>
            <button className="btn btn-primary">Editar Produto</button>
        </div>
        </div>
    )}
    </div>
}