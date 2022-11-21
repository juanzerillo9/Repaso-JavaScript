'use strict'
/* 
Tabla de multiplicar de un numero introducido en prompt
*/

var numero = parseInt(prompt('Numero: '));


for (var i=1; i<=10; i++){
    document.write('<h1>'+i*numero+'</h1>');
}
