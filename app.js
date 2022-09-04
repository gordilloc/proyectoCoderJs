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

let opIn = prompt(` ¿Que estás buscando? Tenemos disponibles:
1- Torta
2- Postre
3- Galleta
4- Porciones
5- Salir
`);

switch (opIn) {
  case "1":
    alert('Usted ha elegido torta')
                 cantidad = Number(prompt("¿De que cantidad de pisos?"));
                 precio = 1290;
                 total = calCosTot(precio, cantidad);
                 alert(`Total a pagar: $ ${total} `);
                 confirmacion = Number(prompt("¿Cuál es el Medio de Pago? Indique 1 Si es con tarjeta o 2 Si es contado o 3 para salir"))
                 if(confirmacion == 1){
                    alert('Ingrese los datos de pago:')
                    tarjeta = Number(prompt())
                    alert(`Gracias por su Compra, Nos pondremos en contacto, por el número ${tel}`)
                 }
                 else if (confirmacion == 3){
                    alert(`¡Te esperamos Pronto!`)
                 }
                 else{
                  alert(`Muchas Gracias Por su Compra el envió se realizará ${dire}`)
               }
               break;
  case "2":
    alert('Usted ha elegido Postre')
                 cantidad = Number(prompt("¿Cual es la Cantidad?"));
                 precio = 990;
                 total = calCosTot(precio, cantidad);
                 alert(`Total a pagar: $ ${total} `);
                 confirmacion = Number(prompt("¿Cuál es el Medio de Pago? Indique 1 Si es con tarjeta o 2 Si es contado o 3 para salir"))
                 if(confirmacion == 1){
                    alert('Ingrese los datos de pago:')
                    tarjeta = Number(prompt())
                    alert(`Gracias por su Compra, Nos pondremos en contacto, por el número ${tel}`)
                 }
                 else if (confirmacion == 3){
                    alert(`¡Te esperamos Pronto!`)
                 }
                 else{
                  alert(`Muchas Gracias Por su Compra el envió se realizará ${dire}`)
               }
               break;
  case "3":
    alert('Usted ha elegido Galleta')
                 cantidad = Number(prompt("Presentacion en 5 Unidades ¿Indique la cantidad de Galletas?"));
                 precio = 440;
                 total = calCosTot(precio, cantidad);
                 alert(`Total a pagar: $ ${total} `);
                 confirmacion = Number(prompt("¿Cuál es el Medio de Pago? Indique 1 Si es con tarjeta o 2 Si es contado o 3 para salir"))
                 if(confirmacion == 1){
                    alert('Ingrese los datos de pago:')
                    tarjeta = Number(prompt())
                    alert(`Gracias por su Compra, Nos pondremos en contacto, por el número ${tel}`)
                 }
                 else if (confirmacion == 3){
                    alert(`¡Te esperamos Pronto!`)
                 }
                 else{
                  alert(`Muchas Gracias Por su Compra el envió se realizará ${dire}`)
               }
               break;
    case "4":
      alert('Usted ha elegido Porciones')
                 cantidad = Number(prompt("¿Cuantas porciones quieres?"));
                 precio = 240;
                 total = calCosTot(precio, cantidad);
                 alert(`Total a pagar: $ ${total} `);
                 confirmacion = Number(prompt("¿Cuál es el Medio de Pago? Indique 1 Si es con tarjeta o 2 Si es contado o 3 para salir"))
                 if(confirmacion == 1){
                    alert('Ingrese los datos de pago:')
                    tarjeta = Number(prompt())
                    alert(`Gracias por su Compra, Nos pondremos en contacto, por el número ${tel}`)
                 }
                 else if (confirmacion == 3){
                    alert(`¡Te esperamos Pronto!`)
                 }
                 else{
                  alert(`Muchas Gracias Por su Compra el envió se realizará ${dire}`)
               }
               break;

  default:
    alert('¡Gracias por tu Visita!');
    break;
}
  

function calCosTot(precio, cantidad){
  total = precio * cantidad
  return total;
}

