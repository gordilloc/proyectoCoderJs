class Articulos {
  constructor(id, nombre, precio, img, presentacion) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
    this.presentacion = presentacion;
  }
}
const carrArt = [];

const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');






const art1 = new Articulos("1", "Torta S", 900, "img/logoface.png", "Estandar");
const art2 = new Articulos("2", "Torta M", 1200, "img/logoface.png", "Mediana");
const art3 = new Articulos("3", "Torta XL", 1700, "img/logoface.png", "Grande");

const art4 = new Articulos(
  "4",
  "postre S",
  800,
  "img/logoface.png",
  "Estandar"
);
const art5 = new Articulos(
  "5",
  "Postre M",
  1100,
  "img/logoface.png",
  "Mediana"
);
const art6 = new Articulos(
  "6",
  "Postre XL",
  1600,
  "img/logoface.png",
  "Grande"
);

const art7 = new Articulos(
  "7",
  "Galletas Pack 5",
  400,
  "img/logoface.png",
  "5 unidades"
);
const art8 = new Articulos(
  "8",
  "Galletas Pack 10 ",
  550,
  "img/logoface.png",
  "10 unidades"
);
const art9 = new Articulos(
  "9",
  "Galletas Pack 15",
  1000,
  "img/logoface.png",
  "15 unidades"
);

/*const art10 = new Articulos("10","Porciones S" , 400 , "img/logoface.png", "Estandar");
const art11 = new Articulos("11","Porciones M ", 550 , "img/logoface.png", "Mediana");
const art12 = new Articulos("12","Porciones XL", 1000 , "img/logoface.png", "Grande");*/

carrArt.push(art1, art2, art3, art4, art5, art6, art7, art8, art9);

const verArt = (articulos) => {
  const artCont = document.getElementById("articulo-container");
  articulos.forEach((articulos) => {
    const card = document.createElement("card");
    card.innerHTML += `<div class="card" style="width:18rem;">
                            <img src="${articulos.img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h3 class="card-title">${articulos.nombre}</h3>
                                    <p class="card-text">Precio:$ ${articulos.precio}</p>
                                    <p id="quantity" class="card-text">${articulos.presentacion}</p>
                                    <button class="btn btn-primary" id="button${articulos.id}">Agregra al carrito</button>
                                </div>
                            </div>`;
    artCont.appendChild(card);
    const button = document.getElementById(`button${articulos.id}`);
    button.addEventListener("click", () => {
      //cart(`${articulo.id}`);
      alert(`Agregaste a tu carrito ${articulos.nombre}`);
    });
  });
};
verArt(carrArt);

function anyadirProductoAlCarrito(evento) {
  // Anyadimos el Nodo a nuestro carrito
  carrito.push(evento.target.getAttribute('marcador'))
  // Actualizamos el carrito 
  renderizarCarrito();

}

/**
* Dibuja todos los productos guardados en el carrito
*/
function renderizarCarrito() {
  // Vaciamos todo el html
  DOMcarrito.textContent = '';
  // Quitamos los duplicados
  const carritoSinDuplicados = [...new Set(carrito)];
  // Generamos los Nodos a partir de carrito
  carritoSinDuplicados.forEach((item) => {
      // Obtenemos el item que necesitamos de la variable base de datos
      const miItem = baseDeDatos.filter((itemBaseDatos) => {
          // ¿Coincide las id? Solo puede existir un caso
          return itemBaseDatos.id === parseInt(item);
      });
      // Cuenta el número de veces que se repite el producto
      const numeroUnidadesItem = carrito.reduce((total, itemId) => {
          // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
          return itemId === item ? total += 1 : total;
      }, 0);
      // Creamos el nodo del item del carrito
      const miNodo = document.createElement('li');
      miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
      miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
      // Boton de borrar
      const miBoton = document.createElement('button');
      miBoton.classList.add('btn', 'btn-danger', 'mx-5');
      miBoton.textContent = 'X';
      miBoton.style.marginLeft = '1rem';
      miBoton.dataset.item = item;
      miBoton.addEventListener('click', borrarItemCarrito);
      // Mezclamos nodos
      miNodo.appendChild(miBoton);
      DOMcarrito.appendChild(miNodo);
  });
  // Renderizamos el precio total en el HTML
  DOMtotal.textContent = calcularTotal();
}

/**
* Evento para borrar un elemento del carrito
*/
function borrarItemCarrito(evento) {
  // Obtenemos el producto ID que hay en el boton pulsado
  const id = evento.target.dataset.item;
  // Borramos todos los productos
  carrito = carrito.filter((carritoId) => {
      return carritoId !== id;
  });
  // volvemos a renderizar
  renderizarCarrito();
}

/**
* Calcula el precio total teniendo en cuenta los productos repetidos
*/
function calcularTotal() {
  // Recorremos el array del carrito 
  return carrito.reduce((total, item) => {
      // De cada elemento obtenemos su precio
      const miItem = baseDeDatos.filter((itemBaseDatos) => {
          return itemBaseDatos.id === parseInt(item);
      });
      // Los sumamos al total
      return total + miItem[0].precio;
  }, 0).toFixed(2);
}

/**
* Varia el carrito y vuelve a dibujarlo
*/
function vaciarCarrito() {
  // Limpiamos los productos guardados
  carrito = [];
  // Renderizamos los cambios
  renderizarCarrito();
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// Inicio
renderizarProductos();
renderizarCarrito();