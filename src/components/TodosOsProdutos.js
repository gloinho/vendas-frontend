import React from 'react'
import FiltrarProdutos from './FiltrarProdutos'


export default function TodosOsProdutos(props){
    const [produtos, setProdutos] = React.useState(null)

    function changeView(id){
        props.setviews({
            'cadastro':false,
            'todos':false,
            'verproduto':id,
        })
    }

    React.useEffect(()=> {
        fetch("http://localhost:8000/api/produtos")
            .then(response => response.json())
            .then(data => setProdutos(data))
    },[])
    return <div>
        <FiltrarProdutos setProdutos={setProdutos}/>
        {produtos && produtos.map(({id, nome, codigo_de_barras,data_de_cadastro})=> 
        <div className="card mt-3" key={id}>
        <div className="card-body">
            <h5 className="card-title">{nome}</h5>
            <p className="card-text">Código de Barras: {codigo_de_barras}</p>
            <p className="card-text">Data de Cadastro: {data_de_cadastro}</p>
            <button onClick={()=> changeView(id)} className="btn btn-primary">Ver Produto</button>
        </div>
        </div>
    )}
    </div>
}