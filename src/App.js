import React from 'react'
import Cadastro from './components/Cadastro'
import FiltrarProdutos from './components/FiltrarProdutos'
import NavBar from './components/NavBar'
import TodosOsProdutos from './components/TodosOsProdutos'

export default function App () {
  const [views, setViews] = React.useState({
    'cadastro':false,
    'todos':true,
    'filtros':false
  })

  return (
    <React.StrictMode>
      <NavBar setviews = {setViews}/>
      {views.cadastro && <Cadastro/>}
      {views.todos && <TodosOsProdutos/>}
      {views.filtros && <FiltrarProdutos/>}
    </React.StrictMode>
  )
}