import React from 'react'

export default function Cadastro(){
    const [message, setMessage] = React.useState(null)
    const [formData, setFormData] = React.useState(
      {
            "nome":"",
            "codigo_de_barras":null,
            "preco_de_venda":null,
            "preco_de_custo":null,
            "unidade_de_venda":"UND",
            "estoque_inicial":null,
      }
    )

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData (prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    function handleSubmit(event){
        event.preventDefault()
        setFormData (prevFormData => {
          return {
            "nome":prevFormData.nome,
            "codigo_de_barras":Number(prevFormData.codigo_de_barras),
            "preco_de_venda":Number(prevFormData.preco_de_venda),
            "preco_de_custo":Number(prevFormData.preco_de_custo),
            "unidade_de_venda":prevFormData.unidade_de_venda,
            "estoque_inicial":Number(prevFormData.estoque_inicial)
          }
        })

        fetch('http://localhost:8000/api/cadastro', {
            method:'POST',
            body: JSON.stringify(formData),
            headers:{"Content-Type":"application/json"},
        })
            .then(response => response.json())
            .then(message => setMessage(message))
    }

    function SubmitMessage(){
      return Object.keys(message).map((key) => {
        return key === 'success' ? <div key={key} className="alert alert-success" role="alert">Produto cadastrado com sucesso.</div>:
        <div key={key} className="alert alert-danger" role="alert">{key}: {message[key]}</div>
      })  
    }

    return(
      <React.StrictMode>
        {message && <SubmitMessage/>}
        <h1>Novo Produto</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">Nome do Produto</span>
            </div>
            <input 
            onChange={handleChange} 
            type="text" 
            className='form-control' 
            id="nome" 
            name="nome" required={true}></input>
          </div>
          <div className='input-group mb-3'>
            <div className="input-group-prepend">
                <span className="input-group-text">Código de Barras</span>
            </div>
            <input 
            onChange={handleChange} 
            type="number" 
            className='form-control' 
            id="codigo_de_barras" 
            name="codigo_de_barras"></input>
          </div>
          <div className='input-group mb-3'>
            <div className="input-group-prepend">
                <span className="input-group-text">Preço de Venda</span>
            </div>
            <input 
            onChange={handleChange} 
            type="number" 
            className='form-control' 
            id="preco_de_venda" 
            step=".01" 
            name="preco_de_venda"
            min="0" required={true}></input>
          </div>
          <div className='input-group mb-3'>
            <div className="input-group-prepend">
                <span className="input-group-text">Preço de Custo</span>
            </div>
            <input 
            onChange={handleChange} 
            type="number" 
            className='form-control' 
            id="preco_de_custo" 
            step=".01" 
            name="preco_de_custo"
            min="0" required={true}></input>
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
                    checked={formData.unidade_de_venda === 'UND'} 
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
                    checked={formData.unidade_de_venda === "CX"}></input>
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
                    checked={formData.unidade_de_venda === "KG"}></input>
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
                    checked={formData.unidade_de_venda === "LT"}></input>
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
                    checked={formData.unidade_de_venda === "MT"}></input>
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
                    checked={formData.unidade_de_venda === "MT2"}></input>
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
                    checked={formData.unidade_de_venda === "MT3"}></input>
            </div>
            <div className='input-group mb-3'>
              <div className="input-group-prepend">
                  <span className="input-group-text">Estoque Inicial</span>
              </div>
              <input 
              onChange={handleChange} 
              type="number" 
              className='form-control' 
              id="estoque_inicial" 
              name="estoque_inicial"
              placeholder="0"
              min="0"></input>
            </div>
          </div>
          <button className="btn btn-primary mb-2">Cadastrar Produto</button>
        </form>
      </React.StrictMode>
    )
  }
