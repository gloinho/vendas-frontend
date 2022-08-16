import React from 'react'
import Cadastro from './components/Cadastro'
import NavBar from './components/NavBar'
import TodosOsProdutos from './components/TodosOsProdutos'
import VerProduto from './components/VerProduto'

export default function App () {
  const [views, setViews] = React.useState({
    'cadastro':false,
    'todos':true,
    'verproduto':null
  })

  return (
    <React.StrictMode>
      <NavBar setviews = {setViews}/>
      {views.cadastro && <Cadastro/>}
      {views.todos && <TodosOsProdutos views={views} setviews={setViews}/>}
      {views.verproduto && <VerProduto produto={views.verproduto}/>}
    </React.StrictMode>
  )
}