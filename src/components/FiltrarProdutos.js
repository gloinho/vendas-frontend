import React from 'react'

export default function FiltrarProdutos(){
    return <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Nome do Produto</span>
        </div>
        <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"></input>
    </div>
}