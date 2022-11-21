'use strict'
// Funciones

function Calculadora(){
    return "Hola soy la calculadora!";
}

console.log(Calculadora());


function Calculadora2(){
    console.log("Hola soy la calculadora!");
    console.log("Soy otra calculadora");
}

Calculadora2();

function Resultado(){
    return "Este es el resultado";
}

var resultado = Resultado(); // Guarda el return!
console.log(resultado)


// PARAMETROS

function Suma(num, num2){
    console.log("Suma: "+(num+num2));
    console.log("Resta: "+(num-num2));
    console.log("Multiplicacion: "+(num*num2));
    console.log("Division: "+(num/num2));
}

Suma(9,8);


// PARAMETROS OPCIONALES

// El parametro si no se especifica, vale lo que se le asigne.

function SumaOpcional(num, num2, mostrar = false){   
    if(mostrar){    
        console.log("Suma: "+(num+num2));
        console.log("Resta: "+(num-num2));
        console.log("Multiplicacion: "+(num*num2));
        console.log("Division: "+(num/num2));
    }
}