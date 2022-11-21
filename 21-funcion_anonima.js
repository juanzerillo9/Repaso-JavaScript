'use strict'

// Una funcion ANONIMA es una funcion que no tiene nombre

var pelicula = function(nombre){
    return "la pelicula es: "+nombre;
}

// UNA FUNCION DE CALLBACK es una funcion que se pasa como parametro a otra funcion

function sumame(num1, num2, sumaYmuestra, pordos){
    var sumar = num1 + num2;

    sumaYmuestra(sumar);
    pordos(sumar);

    return sumar;
}

sumame(7, 8, function(sumar){
    console.log("La suma es: "+sumar);
},function(sumar){
    console.log("La suma por dos es: "+sumar*2);
})

// FUNCION DE FLECHA
// Funciones de callback mas limpias.

sumame(5, 6, sumar => {
    console.log("La suma es: "+sumar);
},sumar => {
    console.log("La suma por dos es: "+sumar*2);
})