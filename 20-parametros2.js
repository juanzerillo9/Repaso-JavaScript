'use strict'

// Parametros REST y SPREAD

function ListadoFrutas(fruta1, fruta2, ...todo_el_resto){
    console.log("Fruta 1 : "+fruta1);
    console.log("Fruta 2 : "+fruta2);
    console.log(todo_el_resto); // Lo devuelve como array
}

ListadoFrutas("Melon","Sandia","Limon","Pera","Manzana",);

// Si tenemos un array para pasarlo como parametro: 
var frutas = ["Naranja", "Manzana"];
ListadoFrutas(...frutas, "Sandia","Limon","Pera");