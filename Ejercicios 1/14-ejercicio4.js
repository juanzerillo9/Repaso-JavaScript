'use strict'

/* 
Mostrar todos los numeros impares entre dos numeros ingresados por el usuario
*/ 


var num = parseInt(prompt("Ingresar un numero: "));
var num2 = parseInt(prompt("Ingresar un numero: "));

for (var i = num ; i <= num2 ; i++){
    if(i%2 != 0 ){
        document.write("<h1>"+i+"</h1>");
    }
}