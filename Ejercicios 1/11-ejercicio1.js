'use strict'
/*

Programa que pida dos numeros que nos 
diga cual es mayor, cual es menor o si son iguales

Si los numeros no son un numero o son menores o iguales a 0, volver a pedir
*/

var numero1 = parseInt(prompt('Ingrese un numero: '));
var numero2 = parseInt(prompt('ingrese otro numero'));


if (numero1>numero2){
    alert('El numero uno es mayor');
}else if(numero1 < numero2){
    alert('El numero dos es mayor');
}else{
    alert('Son iguales');
}