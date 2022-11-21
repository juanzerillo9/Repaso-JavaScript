'use strict'

/* 
Calculadora:
- Pida dos numeros por pantalla
- Si algun dato esta mal que nos lo vuelva a pedir
- En el cuerpo de la pagina, en una alerta y por la consola el
resultado de sumar, restar, multiplicar y dividir esas dos cifras.
*/

var num;
var num2;

do{
    num = parseInt(prompt('Numero1'));
    num2 = parseInt(prompt('Numero1'));
}while(isNaN(num) && isNaN(num2));

document.write('<h3>Suma: '+(num+num2)+'</h3>');
document.write('<h3>Resta: '+num-num2+'</h3>');
document.write('<h3>Division: '+num/num2+'</h3>');
document.write('<h3>Multiplicacion: '+num*num2+'</h3>');

console.log(num+num2);
console.log(num-num2);
console.log(num/num2);
console.log(num*num2);

alert(num+num2);
alert(num-num2);
alert(num/num2);
alert(num*num2);