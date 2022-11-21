'use strict'

/*

Que diga si un numero es par o impar.
1. Ventana prompt
2. Si no es valido que nos pida el numero nuevamente.

*/

do{
    var num = parseInt(prompt('Ingrese un num'))
}while(isNaN(num));

if(num%2==0){
    document.write('<h1>Es par</h1>');
}else{
    document.write('<h1>Es impar</h1>');
};
