import React from 'react'

export default function TodosOsProdutos(props){
    const [produtos, setProdutos] = React.useState(null)

    React.useEffect(()=> {
        fetch("http://localhost:8000/api/produtos")
            .then(response => response.json())
            .then(data => setProdutos(data))
    },[props.update])

    return <div>
        {produtos && produtos.map(({pk, nome})=> <h1 key={pk}>{nome}</h1>)}
    </div>
}