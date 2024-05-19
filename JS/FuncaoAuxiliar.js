var user = document.getElementById("CreateUser")
var Product = document.getElementById("CreateProduct")
var value = document.getElementById("CreateValue")
var quantidade = document.getElementById("CreateQtde")


// function para calcular quantidade total
export function calcTotal(qtde,value){
    return qtde*value
}

//function para modera Real
export function moeda(value){
    if(typeof value == "number"){
        return value.toLocaleString("pt-BR",{style: "currency", currency: "BRL"});
    }else{
        return "not a number"
    }
}

//Função que atualiza a tabela
export function attTable(clients){
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

//Cria um Json com os dados de uma linha da Tabela
export function CreateJson(){
    let Json ={
        "nome":user.value,
        "Produto":Product.value,
        "Quantidade":quantidade.value,
        "unitario":value.value,
    }
    return Json
}
