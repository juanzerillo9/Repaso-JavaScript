'use strict'
/* 
Utilizando un bucle, mostrar la media y la suma de dos resultados.
Hasta que un numero sea menor a cero.
*/

var numero1 = parseInt(prompt("Ingrese un numero mayor a 0 o menor para terminar."))
var numero2 = parseInt(prompt("Ingrese otro numero mayor a 0 o menor para terminar."))

while (numero1 > 0 && numero2 > 0){
    console.log(numero1 * numero2);
    console.log((numero1+numero2)/2);
    numero1 = parseInt(prompt("Ingrese un numero mayor a 0 o menor para terminar."))
    numero2 = parseInt(prompt("Ingrese otro numero mayor a 0 o menor para terminar."))
};