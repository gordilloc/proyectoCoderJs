class Articulo{
    constructor (nombre, precio, presentacion){
    this.nombre = nombre;
    this.precio = precio;
    this.presentacion = presentacion
    }
 }

const torta1 = new Articulo("Torta S" , 900 , "Estandar");
const torta2 = new Articulo("Torta M" , 1200 , "Mediana");
const torta3 = new Articulo("Torta XL" , 1700 , "Grande");

const postre1 = new Articulo("postre S", 800 , "Estandar" );
const postre2 = new Articulo("Postre M", 1100 , "Mediana");
const postre3 = new Articulo("Postre XL", 1600 , "Grande");

const galleta1 = new Articulo("Galletas Pack 5" , 400 , "5 unidades");
const galleta2 = new Articulo("Galletas Pack 10 ", 550 , "10 unidades");
const galleta3 = new Articulo("Galletas Pack 15", 1000 , "15 unidades");

const porciones1 = new Articulo("Porciones S" , 400 , "Estandar");
const porciones2 = new Articulo("Porciones M ", 550 , "Mediana");
const porciones3 = new Articulo("Porciones XL", 1000 , "Grande");

const carrito = [];


alert('¡Hola, Bienvenido a More than Sweet!');

do {    
  nombre = prompt("Ingreso tu nombre:");
} 
while (nombre == "");

let dato = { 
  tel: prompt("Ingrese su número de contacto:"),
  dire: prompt("Indique su dirección")

};

let tel = dato["tel"];
let dire = dato["dire"];
alert(` Un gusto tu visita, ${nombre}`);

let inicio =prompt("Contamos con un gran catalogo, \n Precion Si para Continuar o NO Para Finalizar ");


while(inicio != "no" || inicio != "NO"){
let opIn = prompt(` ¿Que estás buscando? Tenemos disponibles:
1- Torta
2- Postre
3- Galleta
4- Porciones
5- Volver al Menu
`);

switch (opIn) {
  case "1":
    alert('Usted ha elegido torta')
      torta();
               break;
  case "2":
    alert('Usted ha elegido Postre')
      postre();
               break;
  case "3":
    alert('Usted ha elegido Galleta')
      galleta(); 
               break;
    case "4":
      alert('Usted ha elegido Porciones')
      porciones();            
               break;  
  default:
    alert('¡Gracias por tu Visita!');
    break;
}

function torta() {
    let opc = Number(prompt("Torta: \n 1 Torta S \n 2 Torta M \n 3 Torta XL"))
    switch (opc) {
        case 1:
            carrito.push(torta1)
        break;
        case 2:
            carrito.push(torta2)
        break;
        case 3:
            carrito.push(torta3)
        break;
    
        default: alert("Opcion no valida, Vuelva ingresar una opcion correcta")
            break;
    }
 }
 
 function postre() {
    let opc = Number(prompt("Postre: \n 1 Postre S\n 2 Postre M \n 3 Postre XL"))
    switch (opc) {
        case 1:
            carrito.push(postre1)
        break;
        case 2:
            carrito.push(postre2)
        break;
        case 3:
            carrito.push(postre3)
        break;
    
        default: alert("Opcion no valida, Vuelva ingresar una opcion correcta")
            break;
    }
    
 }

 function galleta() {
    
    let opc = Number(prompt("Galletas: \n 1 Galletas pack 5 \n 2 Galletas pack 10 \n 3 Galletas pack 15"))
    switch (opc) {
        case 1:
            carrito.push(galleta1)
        break;
        case 2:
            carrito.push(galleta2)
        break;
        case 3:
            carrito.push(galleta3)
        break;
    
        default: alert("Opcion no valida, Vuelva ingresar una opcion correcta")
            break;}
          }

function porciones() {
    let opc = Number(prompt("Porciones: \n 1 Porciones S \n 2 Porciones M \n 3.Porciones XL"))
    switch (opc) {
        case 1:
            carrito.push(porciones1)
        break;
        case 2:
            carrito.push(porciones2)
        break;
        case 3:
            carrito.push(porciones3)
        break;
    
        default: alert("Opcion no valida, Vuelva ingresar una opcion correcta")
            break;
    }
    
 }

inicio =prompt("Desea seguir comprando?")


alert(carrito.forEach((Articulo)=>{
        alert(`Tu Articulo es ${Articulo.nombre} Vale ${Articulo.precio} \n En Presentacion ${Articulo.presentacion}`)
}),
);

let resultado = carrito.reduce((acc,Articulo)=>{
        return acc + Articulo.precio;
    },0);

alert("Precio TOTAL:$" + resultado);


alert("¡Gracias por su compra!")
}


alert('¡Te esperamos Pronto!')