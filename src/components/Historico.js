import React from 'react'

export default function Historico(props){
    const [historico, setHistorico] = React.useState(null)
    React.useEffect(()=> {
        fetch(`http://127.0.0.1:8000/api/historicos?produto=${props.produto}`)
            .then(response => response.json())
            .then(data => setHistorico(data))
    },[props.produto])

    function verProduto(){
        props.setViews({    
            'cadastro':false,
            'todos':false,
            'verproduto':props.produto, 
            'gerenciarestoques':null, 
            'ajustarestoque': false,
            'verhistorico':null})
    }
    return <div>
        <h1>Historico do produto id:{props.produto}</h1>
        <button className="btn btn-primary mb-3" onClick={verProduto} >Ver Produto</button>
        {historico && historico.map(({id,tipo, data, quantidade})=>( 
            <div className="card mb-3" key={id}>
                <div className="card-body">
                    <h5 className="card-title">Data: {data}</h5>
                    <p className="card-text">Tipo: {tipo}</p>
                    <p className="card-text">Quantidade: {quantidade}</p>
                </div>
        </div>
        ))}
    </div>
}