import React from 'react'

export default function NavBar(props){
    function changeView(event){
        const {name} = event.target
        if (name === 'novo-produto'){
            props.setviews({
                'cadastro':true,
                'todos':false,
            })
        }
        else if(name === 'todos-produtos'){
            props.setviews({
                'cadastro':false,
                'todos':true,
            })
        }
    }

    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="https://www.google.com.br">Projeto Vendas</a>
        <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
                <button name="novo-produto" className='nav-link' onClick={(event)=>changeView(event)}>Cadastrar Novo Produto</button>
            </li>
            <li className='nav-item'>
                <button name ="todos-produtos" className='nav-link' onClick={(event)=>changeView(event)}>Todos os Produtos</button>
            </li>
        </ul>
    </nav>
}