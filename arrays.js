var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

console.log(frutas);

console.log(frutas.length);

console.log(frutas[0]);

//Añadir elemento al array
var masFrutas = frutas.push("Uvas");

//Remover del array

var ultimo = frutas.pop("Uvas");

//Añadir al inicio del array

var nuevaLongitud = frutas.unshift("Uvas");

//Remover el elemento al inicio

var borrarFruta = frutas.shift(0);

//Buscar index o elementos en el array

var posicion = frutas.indexOf("Cereza");
