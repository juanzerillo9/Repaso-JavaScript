'use strict'

// Plantillas de texto
var nombre = prompt("Ingrese su nombre");
var apellidos = prompt("Ingrese su apellido");

var texto = " Mi nombre es: "+nombre+" y mi epellido es: "+apellidos;

var texto_mejorado = `
<h1> ${nombre} </h1>
<h1> ${apellidos} </h1>
<h1>Es mi nombre</h1>
`;

document.write(texto_mejorado);