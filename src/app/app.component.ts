import { Component } from '@angular/core';

// decorador propio de ts
// le da funcionalidad a la clase AppComponent de forma externa
@Component({

  selector: 'app-root',
  // selector q esta en HTML y cuando se llame, se va a renderizar todo lo q esta en app-root
  templateUrl: './app.component.html',
  // cual es el archivo HTML
  styleUrls: ['./app.component.css']
  // agregar estilos personalizados
})

export class AppComponent {

  palabra = "AGUACATE"; //es la palabra a adivinar
  palabraOculta = ""; // cantidad de rayitas por cada letra

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


  constructor() {

    this.palabraOculta = "_ ".repeat(this.palabra.length);
    // va a repetir el _ por cada letra que tiene la palabra
  }

  comprobar(i) {
    console.log("Letra: " + i); // muestra en console la letra q se hace click

    const palabraOcultaArr = this.palabraOculta.split(" "); //separa cada letra de la palabra y crea un espacio entre ellas
    // console.log(palabraOcultaArr);

    for (let k = 0; k < this.palabra.length; k++) {

      // por cada letra, la compraro con el argumento de la fx
      // si la letra de la palabra oculta coincide con la letra que hago click, muestra la letra en la palabra oculta segun la posición
      if (this.palabra[k] === i) {
        palabraOcultaArr[k] = i;
      }
    }

    this.palabraOculta = palabraOcultaArr.join(" ");
    // al terminal el for puedo reconstruir el arreglo palabraOcultaArr para crear de nuevo palabraOculta
    // para que solo muestre las letras q la persona ingreso



  }

}
