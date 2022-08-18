import React from 'react'

export default function FiltrarProdutos(props){
    const [filter, setFilter] = React.useState({
        'nome':'',
        'codigo_de_barras':'',
        'estoque__ultima_entrada__lt':'',
        'estoque__ultima_entrada__gt':'',
        'estoque__ultima_saida__lt':'',
        'estoque__ultima_saida__gt':'',
    })

    function handleSubmit(event){
        event.preventDefault()
        fetch(`http://localhost:8000/api/produtos?codigo_de_barras__contains=${filter.codigo_de_barras}&nome__contains=${filter.nome}&estoque__ultima_entrada__lt=${filter.estoque__ultima_entrada__lt}&estoque__ultima_entrada__gt=${filter.estoque__ultima_entrada__gt}&estoque__ultima_saida__lt=${filter.estoque__ultima_saida__lt}&estoque__ultima_saida__gt=${filter.estoque__ultima_saida__gt}
        `)
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

    return <form onSubmit={handleSubmit} className="ms-3 me-3 mt-3">
            <h5>Filtrar por:</h5>
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
            <div className="input-group mb-3">
                <div className="input-group-prepend me-3">
                    <span className="input-group-text" id="basic-addon1">Ultima Entrada</span>
                </div>
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">De</span>
                </div>
                <input onChange={handleChange} name="estoque__ultima_entrada__gt" type="date" className="form-control" aria-label="De" aria-describedby="basic-addon1"></input>
                <div className="input-group-prepend ms-3">
                    <span className="input-group-text" id="basic-addon2">Até</span>
                </div>
                <input onChange={handleChange} name="estoque__ultima_entrada__lt" type="date" className="form-control" aria-label="Ate" aria-describedby="basic-addon2"></input>
             </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend me-3">
                    <span className="input-group-text" id="basic-addon1">Ultima Saída</span>
                </div>
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">De</span>
                </div>
                <input onChange={handleChange} name="estoque__ultima_saida__gt" type="date" className="form-control" aria-label="De" aria-describedby="basic-addon1"></input>
                <div className="input-group-prepend ms-3">
                    <span className="input-group-text" id="basic-addon2">Até</span>
                </div>
                <input onChange={handleChange} name="estoque__ultima_saida__lt" type="date" className="form-control" aria-label="Até" aria-describedby="basic-addon1"></input>
             </div>
            <button  className="btn btn-outline-secondary" type="submit">Pesquisar</button> 
        </form>
}