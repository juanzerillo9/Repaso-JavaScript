'use strict'
// Pruebas con LET y VAR
// La diferencia principal es el alcance de cada una

var numero = 40;
console.log(numero); // Devuelve 40

if(true){
    var numero = 50;
    console.log(numero); // Devuelve 50
}

console.log(numero); // Devuelve 50

// ******************************************************


let texto = "Curso JS";
console.log(texto); // Devuelve Curso JS

if(true){
    let texto = "Curso REACT JS";
    console.log(texto); // Devuelve REACT JS
}

console.log(texto); // Devuelve Curso JS