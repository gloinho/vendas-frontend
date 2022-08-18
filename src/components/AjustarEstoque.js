import React from 'react'

export default function AjustarEstoque(props){
    const [thisEstoque, setThisEstoque] = React.useState(null)
    const [ajustes, setAjustes] = React.useState({
        'quantidade':'',
        'funcao':''
    })
    const [acao, setAcao] = React.useState({
        'acao':null,
        'isOn':false
    })
    const [message, setMessage] = React.useState(null)
    
    React.useEffect(()=> {
        fetch(`http://127.0.0.1:8000/api/produto/${props.estoque}/estoque`)
            .then(response => response.json())
            .then(data => setThisEstoque(data))
    }, [props.estoque, acao.isOn])

    function handleChange(event){
        const {name, value, id} = event.target
        setAjustes(prevAjustes => {
            return {
                ...prevAjustes,
                'funcao': name,
                [id] : value
            }
        })  
    }

    function enviar_ajustes(event){
        event.preventDefault()
        fetch(`http://127.0.0.1:8000/api/produto/${props.estoque}/estoque`,{
            method: 'PUT',
            body:JSON.stringify(ajustes),
            headers:{"Content-Type":"application/json"},
        })
            .then(response => response.json())
            .then(message => setMessage(message))
        setAcao({'acao':null,'isOn':false})
        document.getElementById('quantidade').value = ''
    }

    function handleClick(funcao){
        setAcao({'acao':funcao,'isOn':true})
        setAjustes({
            'quantidade':'',
            'funcao':''
        })
        document.getElementById('quantidade').value = ''
        setMessage(null)
    }

    function verProduto(){
        props.setViews({    
        'cadastro':false,
        'todos':false,
        'verproduto': thisEstoque && thisEstoque.produto,
        'gerenciarestoques':null, 
        'ajustarestoque':false,})
    }
    return <div>
    {thisEstoque && 
    <div className="card mt-3" key={thisEstoque.id}>
    <div className="card-body">
        <h5 className="card-title">Estoque do Produto {thisEstoque.nome_do_produto} (id: {thisEstoque.produto})</h5>
        <p className="card-text">Quantidade Atual: {thisEstoque.quantidade}</p>
        <p className="card-text">Ultima Entrada: {thisEstoque.ultima_entrada}</p>
        <p className="card-text">Ultima Saída: {thisEstoque.ultima_saida}</p>
        <div className="btn-group" role="group">
            <button onClick={()=> handleClick('adicao')} type="button" className="btn btn-success">Adicionar</button>
            <button onClick={()=> handleClick('atualizacao')} className="btn btn-warning ms-3">Atualizar</button>
            <button onClick={()=> handleClick('drenagem')} className="btn btn-danger ms-3">Drenar</button>
        </div>
        {!acao.isOn && <p>Selecione uma ação para inserir quantidade</p>}
        <form onSubmit={enviar_ajustes}>
            <div className="input-group mb-3 mt-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Inserir Quantidade {acao.acao ? `para ${acao.acao}`: ''}</span>
                </div>
                <input 
                onChange={handleChange} 
                type="number"
                min="0" 
                className='form-control' 
                id="quantidade" 
                name={acao.acao} 
                required={true}
                disabled={!acao.isOn}></input>
            </div>
            {acao.isOn && <button className="btn btn-dark"> Enviar {acao.acao} para o estoque</button>}
        </form>
        {message && message.map(({Erro, Sucesso})=> { return Erro ? <div className="alert alert-warning" role="alert">{Erro}</div> : 
        <div className="alert alert-success" role="alert">{Sucesso}</div>})}

        <p><span className='text-muted'>Adicionar: soma a quantidade digitada do estoque.</span></p>
        <p><span className='text-muted'>Drenar: diminui a quantidade digitada do estoque.</span></p>
        <p><span className='text-muted'>Atualizar: substitui a quantidade digitada do estoque.</span></p>
    </div>
    </div>
    }
    <button className="btn btn-primary mt-3 ms-3" onClick={verProduto} >Ver Produto</button>

    
    </div>

}