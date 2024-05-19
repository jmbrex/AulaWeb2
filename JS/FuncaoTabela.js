var quantidade = document.getElementById("CreateQtde")
var TableBody = document.querySelector(".tableBody")
var campoFilter = document.getElementById("tableSearch")

import { moeda, calcTotal} from "./FuncaoAuxiliar.js";

//Cria uma Nova LInha na Tabela
export function createNewItem(RowData){
    var objNewItem = [
        {
            value:RowData.nome,
            class:"infoName",
        },
        {
            value:RowData.Produto,
            class:"infoProduct",
        },
        {
            value:RowData.unitario,
            class:"infoValue",
        },
        {
            value:RowData.Quantidade,
            class:"infoDiscount",
        },
        {
            value: moeda(calcTotal(RowData.Quantidade,RowData.unitario)),
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
    clearItem()
}

//Adiciona uma Função que com dois cliques remove uma linha da tabela
export function clearItem(){
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

export function searchTable(){
    //console.log(campoFilter.value);
    var clients = document.querySelectorAll(".User")

    clients.forEach(client => {
        var expression = new RegExp(campoFilter.value, "i")
        var name = client.querySelector(".infoName").textContent
        var filter = campoFilter.value

        if (name.toLowerCase().startsWith(filter.toLowerCase())) {
        //if(expression.test(name)){
            client.classList.remove("searchNotFound")
        }else(
            client.classList.add("searchNotFound") 
        )
    });
}

//Valida A quantidade do produto que será adicionado (Impede 0)
export function validacao(){
    if(quantidade.value == 0 ){
        window.alert("Quantidade informada invalida")
        return false
    }else{
        return true
    }
}