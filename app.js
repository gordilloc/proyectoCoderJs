alert('Hola!, Bienvenido!');

let dato = { 
  nombre: prompt("ingrese su Nombre:"),
  Tel: prompt("ingrese su numero de contacto:"),
  dire: prompt("Indique su direccion")

};

let nombre = dato["nombre"];
let tel = dato["tel"];
let dire = dato["dire"];
alert(` Un gusto tu visita, ${nombre}`);

let opIn = prompt(`¿En que te podemos ayudar o servir?:
1- Pedido
2- Consulta
3- Contacto
4- Catalogo
5- Salir
`);

while (opIn != "Esc" && opIn != "esc" && opIn != "Esc" && opIn != "5") {

  switch (opIn) {
    case "1":
      console.log(`Pedido: ${opIn}, valor $1200`);
      break;
    case "2":
      let consul = prompt("Ingrese su mensaje y Luego Aaceptar");
      break;
    case "3":
      console.log(`Pedido: ${opIn}, valor $250`);
      break;
      case "4":
      console.log(`Pedido: ${opIn}, valor $4500`);
      break;
    default:
      console.log("Gracias por la Visita");
      break;
    }
  
  }

/*let opIn = prompt(`Indique por el numero una opcion o Precione ESC:
1- Postre
2- Torta
3- Galletas
4- Lunch
5- Tarta
6- Porciones
`);

while (opIn != "Esc" && opIn != "esc" && opIn != "Esc") {

switch (opIn) {
  case "1":
    console.log(`Pedido: ${opIn}, valor $1200`);
    break;
  case "2":
    console.log(`Pedido: ${opIn}, valor $1800`);
    break;
  case "3":
    console.log(`Pedido: ${opIn}, valor $250`);
    break;
    case "4":
    console.log(`Pedido: ${opIn}, valor $4500`);
    break;
  case "5":
    console.log(`Pedido: ${opIn}, valor $180`);
    break;
  case "6":
    console.log(`Pedido: ${opIn}, valor $90`);
    break;

  default:
    console.log("Te ahorras unos pesos si no pedis");
    break;
}
  
}*/


