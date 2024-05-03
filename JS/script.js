var clients = document.querySelectorAll(".User")
var TableBody = document.querySelector(".tableBody")
var Table = document.querySelector(".table")
var form = document.getElementById("Formcreate")
var user = document.getElementById("CreateUser")
var Product = document.getElementById("CreateProduct")
var value = document.getElementById("CreateValue")
var quantidade = document.getElementById("CreateQtde")
//
import { calcTotal, moeda, attTable } from "./funcoesAuxiliares.js"

// Altera os valores ja inseridos na tabela
attTable(clients)
clearItem()
// Event Listener para adicionar iten na tabela
form.addEventListener('submit',(ev)=>{
    ev.preventDefault()
    
    if(validacao()){
        createNewItem()
        clearItem()
    }
    
})
    
function createNewItem(){
    var objNewItem = [
        {
            value:user.value,
            class:"infoName",
        },
        {
            value:Product.value,
            class:"infoProduct",
        },
        {
            value:value.value,
            class:"infoValue",
        },
        {
            value:quantidade.value,
            class:"infoDiscount",
        },
        {
            value: moeda(calcTotal(quantidade.value,value.value)),
            class:"",
        }
    ]

    var tr = document.createElement("tr")

    objNewItem.forEach(element => {
        var td = document.createElement("td")
        td.textContent = element.value
        td.className = element.class
        tr.appendChild(td)
        tr.className="User"
    });
    TableBody.appendChild(tr)
}


document.getElementById("BTClear").addEventListener("click", (ev)=>{
    ev.preventDefault()
    document.querySelectorAll(".User").forEach(function(row){
        row.remove()
    })
})

function validacao(){
    if(quantidade.value == 0 ){
        window.alert("Quantidade informada invalida")
        return false
    }else{
        return true
    }
}


function clearItem(){
    document.querySelectorAll(".User").forEach(function(row){
        row.addEventListener("dblclick", (ev)=>{
            ev.preventDefault();
            row.className="Translucent"
            setTimeout(() => {
                row.remove()
            }, 1000);
        })
    })
}

