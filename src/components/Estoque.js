import React from 'react'


export default function Estoque(props){
    const [estoques, setEstoques] = React.useState(null)

    function ajustar(id){
        props.setViews({
            'cadastro':false,
            'todos':false,
            'verproduto':null, /* id do produto */
            'gerenciarestoques':false,
            'ajustarestoque':id,
        })
        
    }

    React.useEffect(()=> {
        fetch("http://127.0.0.1:8000/api/estoques")
            .then(response => response.json())
            .then(data => setEstoques(data))
    },[])
    
    return <div>
                {estoques && estoques.map(({id, nome_do_produto,produto, quantidade, ultima_entrada,ultima_saida})=> 
                <div className="card mt-3" key={id}>
                <div className="card-body">
                    <h5 className="card-title">Estoque do Produto {nome_do_produto} (id: {produto})</h5>
                    <p className="card-text">Quantidade Atual: {quantidade}</p>
                    <p className="card-text">Ultima Entrada: {ultima_entrada}</p>
                    <p className="card-text">Ultima Saída: {ultima_saida}</p>
                    <button onClick={() => ajustar(id)} className="btn btn-primary">Ajustar Estoque</button>
                </div>
                </div>
                )}
            </div>
}