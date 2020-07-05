// FUNCIONES - https://platzi.com/clases/1814-basico-javascript/26294-funciones/

//funciones declarativas
function miFunction() {
    return 3;
}

function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}

saludar('Diego');

//llamar funcion

miFunction();


//funciones expresivas con parametros
var miFunction = function (a, b) {
    return a + b;
}

var nombre = function (nombre) {
}
