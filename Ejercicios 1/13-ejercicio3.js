'use strict'

/* 

hacer un programa que muestre todos los numeros que hay entre dos numeros introducidos 
por el usuario

*/

var numero1 = parseInt(prompt("Ingrese un numero"));
var numero2 = parseInt(prompt("Ingrese otro numero"));

var aux;

if (numero1 > numero2){
    aux = numero1;
    numero1 = numero2;
    numero2 = aux;
};

for (var i = numero1; i <= numero2; i++){
    document.write("<h1>De "+numero1+" a "+numero2+" pasamos por el num "+i+"</h1>");
}