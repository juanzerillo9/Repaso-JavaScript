'use strict'

var texto = "Hola Mundo, esta es una variable global"
var numero = 12;

function HolaMundo(texto){
    var hola_mundo = "Variable dentro de una funcion"
    console.log(texto);
    console.log(numero);
    console.log(hola_mundo);
}

HolaMundo(texto);