import React from 'react'
import EditarProduto from './EditarProduto'

export default function VerProduto(props){
    const [produto, setProduto] = React.useState(null)
    const [editando, setEditando] = React.useState(false)
    
    function verEstoque(){
        props.verestoque(prevVerEstoque => {
            return {
                ...prevVerEstoque,
                "verproduto":null,
                "verestoque":props.produto
            }
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
            <div class="btn-group" role="group" aria-label="Opções de Produto">
                <button onClick={()=>setEditando(prevEditando => !prevEditando)} className="btn btn-primary">Editar Produto</button>
                <button onClick={()=>verEstoque()} className="btn btn-warning">Ver Estoque</button>
            </div>
        </div>
    </div>
    </div>
    :
    <EditarProduto produtoid={props.produto} produtoobj={produto} editarobj={setProduto} setEditando={setEditando}/>
}