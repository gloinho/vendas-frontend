import React from 'react'
import EditarProduto from './EditarProduto'

export default function VerProduto(props){
    const [produto, setProduto] = React.useState(null)
    const [editando, setEditando] = React.useState(false)
    
    function verEstoque(){
        props.setviews({
            'cadastro':false,
            'todos':false,
            'verproduto':null, 
            'gerenciarestoques':null, 
            'ajustarestoque': produto ? produto.estoque : null,
            'verhistorico':null,
        })
    }
    function verHistorico(){
        props.setviews({
            'cadastro':false,
            'todos':false,
            'verproduto':null, 
            'gerenciarestoques':null, 
            'ajustarestoque': null,
            'verhistorico':produto.id,
        })
    }
    React.useEffect(()=> {
        fetch(`http://localhost:8000/api/produto/${props.produto}`)
        .then(response => response.json())
        .then(data => setProduto(data))
    }, [editando, props.produto])

    return produto && !editando ? <div>
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{produto.nome}</h5>
            <p className="card-text">Código de Barras: {produto.codigo_de_barras}</p>
            <p className="card-text">Preço de Venda: R$: {produto.preco_de_venda}</p>
            <p className="card-text">Preço de Custo: R$: {produto.preco_de_custo}</p>
            <p className="card-text">Unidade de Venda: {produto.unidade_de_venda}</p>
            <p className="card-text">Data de Cadastro: {produto.data_de_cadastro}</p>
            <p className="card-text">Ultima Atualização: {produto.ultima_atualizacao}</p>
            <p className="card-text">Ultima Entrada: {produto.ultima_entrada}</p>
            <p className="card-text">Ultima Saida: {produto.ultima_saida}</p>
            <div className="btn-group" role="group" aria-label="Opções de Produto">
                <button onClick={()=>setEditando(prevEditando => !prevEditando)} className="btn btn-primary me-3">Editar Produto</button>
                <button onClick={()=>verEstoque()} className="btn btn-warning">Ver Estoque</button>
                <button onClick={()=>verHistorico()} className="btn btn-secondary ms-3">Ver Histórico</button>
            </div>
        </div>
    </div>
    </div>
    :
    <EditarProduto produtoid={props.produto} produtoobj={produto} editarobj={setProduto} setEditando={setEditando}/>
}