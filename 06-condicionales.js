'use strict'
// CONDICIONAL IF

var edad1 = 30;
var edad2 = 12;

if (edad1 > edad2){
    console.log('Edad 1 es mayor que Edad 2');
}else{
    console.log('Edad 2 es mayor que edad 1');
};


/* 

Operadores relacionales

mayor: >
menor: <
mayor igual: >=
menor igual: <=
igual: ==
distinto: !=

*/

var edad = 21;
var nombre = 'Juan Zerillo';

if (edad >= 18){
    console.log(nombre+' '+ 'tiene '+edad+ ', es mayor de edad');
    
    // IF ANIDADO

    if (edad <= 33){
        console.log('Eres millenial');
    }else if(edad >= 70){
        console.log('Eres anciano');
    }else{
        console.log('Ya no eres millenial');
    }

}else{
    console.log(nombre+' '+ 'tiene '+edad+ ', es menor de edad');
}

/*
 OPERADORES LOGICOS

 AND: &&
 OR: ||
 Negacion: !

*/

var year = 2022;


// Negacion:

if (year != 2016){
    console.log('No es 2016');
}


// AND

if (year >= 2000 && year<= 2025){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en era antigua");
}

// OR

if (year == 2008 || yaer == 2022){
    console.log('Hola mundo');
}


