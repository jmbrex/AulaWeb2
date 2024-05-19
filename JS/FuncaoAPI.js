import { createNewItem } from "./FuncaoTabela.js";

export function LoadAPI(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://localhost:3000/Encomendas_web");

    xhr.addEventListener("load", ()=>{
        var Data = JSON.parse(xhr.responseText)
        console.log(Data)
        Data.forEach(element => {
            createNewItem(element)
        });
    })
    xhr.send();
}