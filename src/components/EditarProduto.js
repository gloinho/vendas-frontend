import React from 'react'

export default function EditarProduto(props){
    const [edit, setEdit] = React.useState(null)
    const [message, setMessage] = React.useState(null)

    function handleChange(event){
        const {name, type, value, checked} = event.target
        setEdit(prevEdit=> {
            return {
                ...prevEdit,
                [name] : type === "checkbox" ? checked : value 
            }
        })

    }
    function handleSubmit(event){
        event.preventDefault()
        fetch(`http://localhost:8000/api/produto/${props.produtoid}`,{
            method:'PUT',
            body: JSON.stringify(edit),
            headers:{"Content-Type":"application/json"},
        })
        .then(response => response.json())
        .then(message => setMessage(message))
    }

    function SubmitMessage(){
        return Object.keys(message).map((key) => {
          return key === 'success' ? <div key={key} className="alert alert-success" role="alert">{key}: {message[key]}</div>:
          key === 'non_field_errors' ? <div key={key} className="alert alert-warning" role="alert">Produto inalterado.</div>:
          <div key={key} className="alert alert-danger" role="alert">{key}: {message[key]}</div>
        })  
    }
    return props.produtoobj &&
    <React.StrictMode>
    <h1>Editar Produto</h1>
    {message && <SubmitMessage/>}
    <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">Nome do Produto</span>
            </div>
            <input 
            onChange={handleChange} 
            name="nome" 
            type="text" 
            className="form-control" 
            aria-label="Nome do Produto" 
            aria-describedby="basic-addon1" 
            placeholder={props.produtoobj.nome}></input>
        </div>
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">Código de Barras</span>
            </div>
            <input 
            onChange={handleChange} 
            name="codigo_de_barras" 
            type="number" 
            className="form-control" 
            aria-label="Código de Barras" 
            aria-describedby="basic-addon1" 
            placeholder={props.produtoobj.codigo_de_barras}></input>
        </div>
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">Preço de Venda</span>
            </div>
            <input 
            onChange={handleChange}  
            name="preco_de_venda" 
            type="number" 
            className="form-control" 
            aria-label="Preço de Venda" 
            aria-describedby="basic-addon1" 
            placeholder={props.produtoobj.preco_de_venda}></input>
        </div>
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">Preço de Custo</span>
            </div>
            <input 
            onChange={handleChange}  
            name="preco_de_custo" 
            type="number" 
            className="form-control" 
            aria-label="Preço de Custo" 
            aria-describedby="basic-addon1" 
            placeholder={props.produtoobj.preco_de_custo}></input>
        </div>
        <div className="input-group mb-3">
            <div className="form-check form-check-inline">
                    <label htmlFor='und'>UND</label>
                    <input 
                    onChange={handleChange} 
                    value="UND" 
                    type="radio" 
                    className='form-check-input' 
                    id="und" 
                    name="unidade_de_venda"
                    checked={props.produtoobj.unidade_de_venda === 'UND'} 
                    ></input>
            </div>
            <div className="form-check form-check-inline">
                    <label htmlFor='cx'>CX</label>
                    <input 
                    onChange={handleChange} 
                    value="CX" 
                    type="radio" 
                    className='form-check-input' 
                    id="cx" 
                    name="unidade_de_venda" 
                    checked={props.produtoobj.unidade_de_venda === "CX"}></input>
            </div>
            <div className="form-check form-check-inline">
                    <label htmlFor='kg'>KG</label>
                    <input 
                    onChange={handleChange} 
                    value="KG" 
                    type="radio" 
                    className='form-check-input' 
                    id="kg" 
                    name="unidade_de_venda" 
                    checked={props.produtoobj.unidade_de_venda === "KG"}></input>
            </div>
            <div className="form-check form-check-inline">
                    <label htmlFor='lt'>LT</label>
                    <input 
                    onChange={handleChange} 
                    value="LT" 
                    type="radio" 
                    className='form-check-input' 
                    id="lt" 
                    name="unidade_de_venda" 
                    checked={props.produtoobj.unidade_de_venda === "LT"}></input>
            </div>
            <div className="form-check form-check-inline">
                    <label htmlFor='mt'>MT</label>
                    <input 
                    onChange={handleChange} 
                    value="MT" 
                    type="radio" 
                    className='form-check-input' 
                    id="mt" 
                    name="unidade_de_venda" 
                    checked={props.produtoobj.unidade_de_venda === "MT"}></input>
            </div>
            <div className="form-check form-check-inline">
                    <label htmlFor='mt2'>MT2</label>
                    <input 
                    onChange={handleChange} 
                    value="MT2" 
                    type="radio" 
                    className='form-check-input' 
                    id="mt2" 
                    name="unidade_de_venda" 
                    checked={props.produtoobj.unidade_de_venda === "MT2"}></input>
            </div>
            <div className="form-check form-check-inline">
                    <label htmlFor='mt3'>MT3</label>
                    <input 
                    onChange={handleChange} 
                    value="MT3" 
                    type="radio" 
                    className='form-check-input' 
                    id="mt3" 
                    name="unidade_de_venda" 
                    checked={props.produtoobj.unidade_de_venda === "MT3"}></input>
            </div>
        </div>
        <button className="btn btn-outline-secondary">Salvar Edições</button> 
    </form>
    </React.StrictMode> 
    
}