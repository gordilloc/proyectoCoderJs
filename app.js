alert('¡Hola, Bienvenido a More than Sweet!');

do {    
  nombre = prompt("Ingreso tu nombre:");
} 
while (nombre == "");

let dato = { 
  tel: prompt("ingrese su numero de contacto:"),
  dire: prompt("Indique su direccion")

};

let tel = dato["tel"];
let dire = dato["dire"];
alert(` Un gusto tu visita, ${nombre}`);

let opIn = prompt(` ¿Que estas buscando? Tenemos disponbles:
1- Torta
2- Postre
3- Galleta
4- Porciones
5- Salir
`);

switch (opIn) {
  case "1":
    alert('Usted a elegido torta')
                 cantidad = Number(prompt("¿De que cantidad de pisos?"));
                 precio = 1300;
                 total = calCosTot(precio, cantidad);
                 alert(`Total a pagar: $ ${total} `);
                 confirmacion = Number(prompt("¿Cual es el Medio de Pago? indique 1 Si es con tarjeta o 2 Si es contado o 3 para salir"))
                 if(confirmacion == 1){
                    alert('Ingrese los datos de pago:')
                    tarjeta = Number(prompt())
                    alert(`Gracias Por su Compra, Nos poderemos en contacto por su pedido, por el contacto ${tel}`)
                 }
                 else if (confirmacion == 3){
                    alert(`¡Te esperamos Pronto!`)
                 }
                 else{
                  alert(`Muchas Gracias Por su Compra el envio se realizara ${dire}`)
               }
               break;
  case "2":
    alert('Usted a elegido Postre')
                 cantidad = Number(prompt("¿Cual es la Cantidad?"));
                 precio = 990;
                 total = calCosTot(precio, cantidad);
                 alert(`Total a pagar: $ ${total} `);
                 confirmacion = Number(prompt("¿Cual es el Medio de Pago? indique 1 Si es con tarjeta o 2 Si es contado o 3 para salir"))
                 if(confirmacion == 1){
                    alert('Ingrese los datos de pago:')
                    tarjeta = Number(prompt())
                    alert(`Gracias Por su Compra, Nos poderemos en contacto por su pedido, por el contacto ${tel}`)
                 }
                 else if (confirmacion == 3){
                    alert(`¡Te esperamos Pronto!`)
                 }
                 else{
                  alert(`Muchas Gracias Por su Compra el envio se realizara ${dire}`)
               }
               break;
  case "3":
    alert('Usted a elegido Galleta')
                 cantidad = Number(prompt("Presentacion en 5 Unidades ¿Indique la cantidad de Galletas?"));
                 precio = 440;
                 total = calCosTot(precio, cantidad);
                 alert(`Total a pagar: $ ${total} `);
                 confirmacion = Number(prompt("¿Cual es el Medio de Pago? indique 1 Si es con tarjeta o 2 Si es contado o 3 para salir"))
                 if(confirmacion == 1){
                    alert('Ingrese los datos de pago:')
                    tarjeta = Number(prompt())
                    alert(`Gracias Por su Compra, Nos poderemos en contacto por su pedido, por el contacto ${tel}`)
                 }
                 else if (confirmacion == 3){
                    alert(`¡Te esperamos Pronto!`)
                 }
                 else{
                  alert(`Muchas Gracias Por su Compra el envio se realizara ${dire}`)
               }
               break;
    case "4":
      alert('Usted a elegido Porciones')
                 cantidad = Number(prompt("¿Cuantas porciones quieres?"));
                 precio = 990;
                 total = calCosTot(precio, cantidad);
                 alert(`Total a pagar: $ ${total} `);
                 confirmacion = Number(prompt("¿Cual es el Medio de Pago? indique 1 Si es con tarjeta o 2 Si es contado o 3 para salir"))
                 if(confirmacion == 1){
                    alert('Ingrese los datos de pago:')
                    tarjeta = Number(prompt())
                    alert(`Gracias Por su Compra, Nos poderemos en contacto por su pedido, por el contacto ${tel}`)
                 }
                 else if (confirmacion == 3){
                    alert(`¡Te esperamos Pronto!`)
                 }
                 else{
                  alert(`Muchas Gracias Por su Compra el envio se realizara ${dire}`)
               }
               break;

  default:
    alert('Gracias por tu Visita!');
    break;
}
  

function calCosTot(precio, cantidad){
  total = precio * cantidad
  return total;
}

