import React from 'react'

export default function FiltrarEstoque(props){
    const [formData, setFormData] = React.useState({
        'produto__nome':'',
        'produto__codigo_de_barras':'',
        'quantidade':'',
    })

    function handleChange(event){
        const {name, value, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name] : value,
                'quantidade': checked ? value : ''
            }
        })
    }
    function handleSubmit(event){
        event.preventDefault()
        fetch(`http://127.0.0.1:8000/api/estoques?produto__codigo_de_barras__contains=${formData.produto__codigo_de_barras}&produto__nome__contains=${formData.produto__nome}&quantidade=${formData.quantidade}`)
            .then(response => response.json())
            .then(data => props.setEstoques(data))
        setFormData({
            'produto__nome':'',
            'produto__codigo_de_barras':'',
            'quantidade':'',
        })
    }
    return <form onSubmit={handleSubmit}className="ms-3 me-3 mt-3">
            <h5>Filtrar por:</h5>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Nome do Produto</span>
                </div>
                <input onChange={handleChange} name="produto__nome" type="text" className="form-control" aria-label="Nome do Produto" aria-describedby="basic-addon1"></input>
             </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Código de Barras do Produto</span>
                </div>
                <input onChange={handleChange} name="produto__codigo_de_barras" type="number" className="form-control" aria-label="Código de Barras" aria-describedby="basic-addon1"></input>
             </div>
             <div className="form-check form-check-inline">
                <input onChange={handleChange} name="quantidade" className="form-check-input" type="checkbox" value="0"></input>
                <label className="form-check-label" htmlFor="inlineCheckbox1">Sem Estoque</label>
            </div>
            <button className="btn btn-dark mb-2">Pesquisar</button>
        </form>
}
