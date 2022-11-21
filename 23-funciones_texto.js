'use strict'

// Transformacion de textos
var numero = 444;
var texto1 = 'Curso de JavaScript';
var texto2 = 'Curso JavaScript';

// Cualquier cosa a string
var dato = numero.toString();

// Minuscula o Mayusculas
dato = texto1.toUpperCase(); // Mayusculas
dato = texto1.toLowerCase(); // Minusculas

// Longitud de un texto
var nombre = "";
console.log(nombre.length); // Si tenemos un array, cuenta cantidad de elementos.

// Concatenar
var textoTotal = texto1 + ' ' +texto2;
console.log(textoTotal);
textoTotal = texto1.concat(texto2);

// BUSCAR
var busqueda = texto1.indexOf("Curso"); // LastIndexOf ultima aparicion //Search, igual a indexof
console.log(busqueda); //-1 significa no aparece
//texto1.match() devuelve las veces que aparece y su info en un array

//texto1.substr(14,5) Devuelve del caracter 14 en adelante 5 letras.
//CharAt(posicion) devuelve una sola letra de una posicion
// Includes(Palabra) busca una palabra

texto1 = texto1.replace('JavaScript', 'ReactJs'); // Intercambia palabras
// Slice(posicion1, posicion2) divide en dos desde una posicion a otra
// split(" ") mete todo en un array y lo separa por un espacio en cada posicion del array

// METODO TRIM --> SACA ESPACIOS POR DELANTE Y DETRAS nombre.trim()
var nombre = "            pepe";
console.log(nombre.trim());