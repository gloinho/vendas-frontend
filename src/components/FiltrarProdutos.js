import React from 'react'

export default function FiltrarProdutos(props){
    const [filter, setFilter] = React.useState({
        'nome':'',
        'codigo_de_barras':'',
    })

    function handleSubmit(event){
        event.preventDefault()
        fetch(`http://localhost:8000/api/produtos?nome__contains=${filter.nome}&codigo_de_barras__contains=${filter.codigo_de_barras}`)
            .then(response => response.json())
            .then(data => props.setProdutos(data))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setFilter (prevFilter => {
            return {
                ...prevFilter,
                [name]: value
            }
        })
    }

    return <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Nome do Produto</span>
                </div>
                <input onChange={handleChange} name="nome" type="text" className="form-control" aria-label="Nome do Produto" aria-describedby="basic-addon1"></input>
             </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Código de Barras</span>
                </div>
                <input onChange={handleChange} name="codigo_de_barras" type="number" className="form-control" aria-label="Código de Barras" aria-describedby="basic-addon1"></input>
             </div>
            <button  className="btn btn-outline-secondary" type="submit">Pesquisar</button> 

        </form>
}