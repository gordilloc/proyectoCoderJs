document.addEventListener('DOMContentLoaded', () => {
const articulos = [
  {
    id: 1,
    nombre: "Torta S",
    precio: 900,
    imagen: "img/logoface.png",
  },
  {
    id: 2,
    nombre: "Torta M",
    precio: 1200,
    imagen: "img/logoface.png",
  },
  {
    id: 3,
    nombre: "Torta XL",
    precio: 1700,
    imagen: "img/logoface.png",
  },
  {
    id: 4,
    nombre: "Postre S",
    precio: 900,
    imagen: "img/logoface.png",
  },
  {
    id: 5,
    nombre: "Postre M",
    precio: 800,
    imagen: "img/logoface.png",
  },
  {
    id: 6,
    nombre: "Postre XL",
    precio: 1100,
    imagen: "img/logoface.png",
  },
  {
    id: 7,
    nombre: "Galleta Pack 5",
    precio: 400,
    imagen: "img/logoface.png",
  },
  {
    id: 8,
    nombre: "Galleta Pack 10",
    precio: 550,
    imagen: "img/logoface.png",
  },
  {
    id: 9,
    nombre: "Galleta Pack 15",
    precio: 1000,
    imagen: "img/logoface.png",
  },
  {
    id: 10,
    nombre: "Porcion 1",
    precio: 200,
    imagen: "img/logoface.png",
  },
  {
    id: 11,
    nombre: "Porciones 2",
    precio: 300,
    imagen: "img/logoface.png",
  },
  {
    id: 12,
    nombre: "Porciones 4",
    precio: 1100,
    imagen: "img/logoface.png",
  },
];

let carrito = [];
const moneda = "$";
const artDomIt = document.querySelector("#items");
const carDom = document.querySelector("#carrito");
const carTotalDom = document.querySelector("#total");
const btvaciarDom = document.querySelector("#boton-vaciar");
const miLocalStorage = window.localStorage;

function renderizarProductos() {
  articulos.forEach((info) => {
    
    const artHtml = document.createElement("div");
    artHtml.classList.add("card", "col-sm-4");
   
    const cardHtml = document.createElement("div");
    cardHtml.classList.add("card-body");
    
    const artTitulo = document.createElement("h3");
    artTitulo.classList.add("card-title");
    artTitulo.textContent = info.nombre;
   
    const artImg = document.createElement("img");
    artImg.classList.add("img-fluid");
    artImg.setAttribute("src", info.imagen);
    
    const artPrecio = document.createElement("p");
    artPrecio.classList.add("card-text");
    artPrecio.textContent = `${moneda}${info.precio}`;
    
    const btMas = document.createElement("button");
    btMas.classList.add("btn", "btn-primary");
    btMas.textContent = "+";
    btMas.setAttribute("marcador", info.id);
    btMas.addEventListener("click", anyadirProductoAlCarrito);
    
    cardHtml.appendChild(artImg);
    cardHtml.appendChild(artTitulo);
    cardHtml.appendChild(artPrecio);
    cardHtml.appendChild(btMas); 
    artHtml.appendChild(cardHtml);
    artDomIt.appendChild(artHtml);
  });
}

function anyadirProductoAlCarrito(evento) {
 
  carrito.push(evento.target.getAttribute("marcador"));
  
  renderizarCarrito();
  guardarCarritoEnLocalStorage();
}

function renderizarCarrito() {
  
  carDom.textContent = "";
  
  const carritoSinDuplicados = [...new Set(carrito)];
  
  carritoSinDuplicados.forEach((item) => {
    
    const miItem = articulos.filter((itemBaseDatos) => {
     
      return itemBaseDatos.id === parseInt(item);
    });
    
    const numeroUnidadesItem = carrito.reduce((total, itemId) => {
      
      return itemId === item ? (total += 1) : total;
    }, 0);
    
    const artHtml = document.createElement("li");
    artHtml.classList.add("list-group-item", "text-right", "mx-2");
    artHtml.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${moneda}`;
    
    const miBoton = document.createElement("button");
    miBoton.classList.add("btn", "btn-danger", "mx-5");
    miBoton.textContent = "X";
    miBoton.style.marginLeft = "1rem";
    miBoton.dataset.item = item;
    miBoton.addEventListener("click", borrarItemCarrito);
    
    artHtml.appendChild(miBoton);
    carDom.appendChild(artHtml);
  });
  
  carTotalDom.textContent = calcularTotal();
}

function borrarItemCarrito(evento) {
 
  const id = evento.target.dataset.item;

  carrito = carrito.filter((carritoId) => {
    return carritoId !== id;
  });

  renderizarCarrito();
}

function calcularTotal() {
 
  return carrito
    .reduce((total, item) => {
      
      const miItem = articulos.filter((itemBaseDatos) => {
        return itemBaseDatos.id === parseInt(item);
      });
      
      return total + miItem[0].precio;
    }, 0)
    .toFixed(0);
}

function vaciarCarrito() {
  
  carrito = [];
  
  renderizarCarrito();

  localStorage.clear();
}

function guardarCarritoEnLocalStorage () {
  miLocalStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarritoDeLocalStorage () {
  
  if (miLocalStorage.getItem('carrito') !== null) {
      
      carrito = JSON.parse(miLocalStorage.getItem('carrito'));
  }
}



btvaciarDom.addEventListener("click", vaciarCarrito);

cargarCarritoDeLocalStorage();
renderizarProductos();
renderizarCarrito();

});