
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
