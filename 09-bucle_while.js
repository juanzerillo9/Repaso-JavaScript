'use strict'

// BUCLE WHILE

var year = 2018;

while (year <= 2051){
    console.log('Estamos en el year: '+year);
    year++; // Sin esto el bucle es infinito.
}

while (year != 1991){
    console.log('Estamos en el year: '+year);
    
    if (year == 2000){
        break; // CORTA EJECUCION DEL BLOQUE;
    }

    year--; // Sin esto el bucle es infinito.


}


// DO WHILE
// EJECUTA EL DO MIENTRAS SE CUMPLA EL WHILE

var years = 30;

do {
    alert('Solo cuando sea diferente a 20');
    years--;
}while(years > 25);