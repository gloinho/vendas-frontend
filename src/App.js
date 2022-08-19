import React from 'react'
import Cadastro from './components/Cadastro'
import NavBar from './components/NavBar'
import TodosOsProdutos from './components/TodosOsProdutos'
import VerProduto from './components/VerProduto'
import Estoque from './components/Estoque'
import AjustarEstoque from './components/AjustarEstoque'
import Historico from './components/Historico'

export default function App () {
  const [views, setViews] = React.useState({
    'cadastro':false,
    'todos':true,
    'verproduto':null, /* id do produto */
    'gerenciarestoques':null, /* id do produto para ver estoque ou boolean para ver todos os estoques*/
    'ajustarestoque':false,
    'verhistorico':null, /* id do produto */
  })

  return (
    <React.StrictMode>
      <NavBar setviews = {setViews}/>
      {views.cadastro && <Cadastro/>}
      {views.todos && <TodosOsProdutos views={views} setviews={setViews}/>}
      {views.verproduto && <VerProduto produto={views.verproduto} setviews={setViews}/>}
      {views.gerenciarestoques && <Estoque setViews={setViews} views={views}/>}
      {views.ajustarestoque && <AjustarEstoque estoque={views.ajustarestoque} setViews={setViews}/>}
      {views.verhistorico && <Historico produto={views.verhistorico} setViews={setViews}/>}
    </React.StrictMode>
  )
}