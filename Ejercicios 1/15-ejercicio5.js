'use strict'

/* 
Mostrar todos los divisores de un numero ingresado en un prompt
*/

var numero = parseInt(prompt('Ingrese un numero'));

for(var i=1; i<=numero; i++){
    if(numero%i == 0){
        document.write("<h1>Divisor: "+i+"</h1>");
    }
}