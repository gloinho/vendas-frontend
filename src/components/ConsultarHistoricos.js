import React from 'react'

export default function ConsultarHistoricos(props){
    const [historico, setHistorico] = React.useState(null)
    const [filter, setFilter] = React.useState({
        'data__gt':'',
        'data__lt':'',
        'produto__nome__contains':'',
        'produto__codigo_de_barras__contains':'',
        'tipo':'',
    })

    React.useEffect(()=> {
        fetch(`http://127.0.0.1:8000/api/historicos`)
            .then(response => response.json())
            .then(data => setHistorico(data))
    },[])

    function handleChange(event){
        const {name, value} = event.target
        setFilter(prevFilter => {
            return {
                ...prevFilter,
                [name]:value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        fetch(`http://127.0.0.1:8000/api/historicos?data__gt=${filter.data__gt}&data__lt=${filter.data__lt}&produto__nome__contains=${filter.produto__nome__contains}&produto__codigo_de_barras__contains=${filter.produto__codigo_de_barras__contains}&tipo=${filter.tipo}`)
        .then(response => response.json())
        .then(data => setHistorico(data))
        setFilter({
            'data__gt':'',
            'data__lt':'',
            'produto__nome__contains':'',
            'produto__codigo_de_barras__contains':'',
            'tipo':'',
        })
        const inputs = document.getElementsByTagName('input')
        for (let i=0; i< inputs.length; i++){
            inputs[i].value = ''
        }
    }

    return <React.StrictMode>
    <form onSubmit={handleSubmit} className="ms-3 me-3 mt-3">
        <h5>Filtrar por:</h5>
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">Nome do Produto</span>
            </div>
            <input onChange={handleChange} id ="produto__nome__contains" name="produto__nome__contains" type="text" className="form-control" aria-label="Nome do Produto" aria-describedby="basic-addon1"></input>
        </div>
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">Código de Barras do Produto</span>
            </div>
            <input onChange={handleChange} id ="produto__codigo_de_barras__contains" name="produto__codigo_de_barras__contains" type="number" min="0" className="form-control" aria-label="Código de Barras" aria-describedby="basic-addon1"></input>
        </div>
        <div className="input-group mb-3">
                <div className="input-group-prepend me-3">
                    <span className="input-group-text" id="basic-addon1">Data</span>
                </div>
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">De</span>
                </div>
                <input onChange={handleChange} name="data__gt" type="date" className="form-control" aria-label="De" aria-describedby="basic-addon1"></input>
                <div className="input-group-prepend ms-3">
                    <span className="input-group-text" id="basic-addon2">Até</span>
                </div>
                <input onChange={handleChange} name="data__lt" type="date" className="form-control" aria-label="Ate" aria-describedby="basic-addon2"></input>
             </div>
        <button className="btn btn-dark mb-2">Pesquisar</button>
    </form>
    {historico && historico.map(({id,tipo, data, quantidade, nome_do_produto})=>( 
        <div className="card mb-3 ms-3 me-3" key={id}>
            <div className="card-body">
                <h5 className="card-title">Historico do Produto {nome_do_produto}</h5>
                <p className="card-text">Data: {data}</p>
                <p className="card-text">Tipo: {tipo}</p>
                <p className="card-text">Quantidade: {quantidade}</p>
            </div>
    </div>
    ))}

    </React.StrictMode>




}