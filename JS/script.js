var clients = document.querySelectorAll(".User")
var Table = document.querySelector(".tableBody")
var form = document.getElementById("Formcreate")
var user = document.getElementById("CreateUser")
var Product = document.getElementById("CreateProduct")
var value = document.getElementById("CreateValue")
var quantidade = document.getElementById("CreateQtde")

// Altera os valores ja inseridos na tabela
attTable()
function attTable(){
    for(var i=0; i<clients.length; i++){
        var qtde = clients[i].querySelector(".infoDiscount").textContent
        var Value = clients[i].querySelector(".infoValue").textContent
        
        if(qtde<1){
            clients[i].querySelector(".infoDiscount").textContent = "qtde Invalida"
            clients[i].querySelector(".infoDiscount").style.color = "red"
        }else{
            clients[i].querySelector(".infoFinalValue").textContent = moeda(calcTotal(qtde,Value))
        }
    }
}
// function para calcular quantidade total
function calcTotal(qtde,value){
    return qtde*value
}

//function para modera Real
function moeda(value){
    if(typeof value == "number"){
        return value.toLocaleString("pt-BR",{style: "currency", currency: "BRL"});
    }else{
        return "not a number"
    }
    
}

// Event Listener para adicionar iten na tabela
form.addEventListener('submit',(ev)=>{
    ev.preventDefault()
    //Criando variaveis para adicionar na tabela
    var tr = document.createElement("tr") // tag tr para conjunto da linha na tabela
    var tdUser = document.createElement("td") // tag td para valor do nome do user na tabela
    var tdProduct = document.createElement("td") // tag td para nome do produto na tabela
    var tdValue = document.createElement("td") // tag td para valor do produto na tabela
    var tdQtdte = document.createElement("td") // tag td para quantidade do produto na tabela
    var tdFinal = document.createElement("td") // tag rd para valor final do produto na tabela

    tdUser.innerHTML = user.value
    tdUser.className = "infoName"
      
    tdProduct.innerHTML = Product.value
    tdProduct.className = "infoProduct"
    
    tdValue.innerHTML = value.value
    tdValue.className = "infoValue"
    
    tdQtdte.innerHTML = quantidade.value
    tdQtdte.className = "infoDiscount"
    
    
        
    if(tdQtdte.innerHTML<1){
        tdQtdte.textContent = "qtde Invalida"
        tdQtdte.style.color = "red"
    }else{
        tdFinal.textContent = moeda(calcTotal(tdQtdte.innerHTML,tdValue.innerHTML))
    }

    tr.className = "User"

    tr.appendChild(tdUser)
    tr.appendChild(tdProduct)
    tr.appendChild(tdValue)
    tr.appendChild(tdQtdte)
    tr.appendChild(tdFinal)
    Table.appendChild(tr)
    
    
})

/*var table = document.querySelector(".table")
    let trUser = document.createElement("td")
    let trProduct = document.createElement("td")
    let trValue = document.createElement("td")
    let trQuantidade = document.createElement("td")
    let trFinal = document.createElement("td")
    let tr = document.createElement("tr")
    
    trUser.innerHTML = user.value
    tr.appendChild(trUser)

    trProduct.innerHTML = Product.value
    tr.appendChild(trProduct)

    trValue.innerHTML = value.value
    tr.appendChild(trValue)

    trQuantidade.innerHTML = quantidade.value
    tr.appendChild(trQuantidade)

    tr.appendChild(trFinal)
    table.appendChild(tr)
    attTable()*/
    