// Filter Method
var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "TV", costoCash: 2500 },
  { nombre: "Libro", costoCash: 320 },
  { nombre: "Celular", costoCash: 10000 },
  { nombre: "Laptop", costoCash: 20000 },
  { nombre: "Teclado", costoCash: 500 },
  { nombre: "Audifonos", costoCash: 1700 },
];

var articulosFiltrados = articulos.filter(function (articulo) {
  return articulo.costo <= 500;
});

//Map Method
var nombreArticulos = articulos.map(function (articulo) {
  return articulo.nombre;
});
