var clients = document.querySelectorAll(".User")
var form = document.getElementById("Formcreate")
var BtSearchOrder = document.getElementById("BTOrderSearch");
var campoFilter = document.getElementById("tableSearch")

import { LoadAPI } from "./FuncaoAPI.js";
import {CreateJson, attTable, } from "./FuncaoAuxiliar.js"
import { clearItem, createNewItem, validacao, searchTable } from "./FuncaoTabela.js";

LoadAPI()
clearItem()
attTable(clients)

form.addEventListener('submit',(ev)=>{
    ev.preventDefault()
    
    if(validacao()){
        createNewItem(CreateJson())
    }
    
})

BtSearchOrder.addEventListener("click", ()=>{
    LoadAPI()
})

campoFilter.addEventListener("input", ()=>{
    searchTable()
})