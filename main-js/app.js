
const bt = document.querySelector('.buscar');
const tituloSecundary = document.querySelector('.tituloSecundary');
const texto = document.querySelector('.texto');
const enter = document.querySelector('#search-input');

bt.addEventListener('click', search);//Escucha el evento click y ejecuta la función search

enter.addEventListener('keydown', (e) => { // Escucha el evento keydown y ejecuta la función search al presionar Enter
  if (e.keyCode === 13) {
    search();
  }
});

function search() {
  const searchTerm = enter.value.toUpperCase(); // Convertir la búsqueda a mayúsculas
  // Cargar y analizar el archivo JSON alojado en la web
  const url = 'https://jack-dev02.github.io/Jack_dev02.github.io//data/data.json';
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const result = data.find((recetas) => recetas.producto === searchTerm);

      if (result) {
        const producto = result.producto;
        const descripcion = result.descripcion;

        tituloSecundary.innerHTML = producto; // Insertar en el HTML
        texto.textContent = descripcion;
      } else {
        // Manejar el caso en el que no se encuentra el producto
        texto.textContent = 'Producto no existe';
        tituloSecundary.innerHTML = 'Producto no válido';
      }
    })
    .catch((error) => {
      console.error('Error al cargar el archivo JSON:', error);
    });
}





/*
// Escucha el evento click y ejecuta la función search
bt.addEventListener('click', search);

// Escucha el evento keydown y ejecuta la función search al presionar Enter
enter.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    search();
  }
});

// function mayus(e) {
//   e.value = e.value.toUpperCase();
// }

function search() {
  const searchTerm = enter.value.toUpperCase(); // Convertir la búsqueda a mayúsculas

  // Cargar y analizar el archivo JSON local
  fetch('data.json')
    .then((response) => response.json())
    .then((data) => {
      const result = data.find((recetas) => recetas.producto === searchTerm);

      if (result) {
        const producto = result.producto;
        const descripcion = result.descripcion;

        texto.textContent = descripcion; // Insertar en el HTML
        tituloSecundary.innerHTML = producto;
      } else {
        // Manejar el caso en el que no se encuentra el producto
        texto.textContent = 'Producto no encontrado';
        tituloSecundary.innerHTML = 'Revisa si los datos ingresados son correctos';
      }
    })
    .catch((error) => {
      console.error('Error al cargar el archivo JSON:', error);
    });
} */
