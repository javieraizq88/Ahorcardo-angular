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

  intentos = 0;

  gano = false;
  perdio = false;

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


  constructor() {

    this.palabraOculta = "_ ".repeat(this.palabra.length);
    // va a repetir el _ por cada letra que tiene la palabra
  }

  comprobar(i) {

    this.existeLetra(i);

    // console.log("Letra: " + i); // muestra en console la letra q se hace click

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
    this.verificaGanador();
    
    
  }

  verificaGanador() {

    const palabraArr = this.palabraOculta.split(" ");
    const palabraEvaluar = palabraArr.join("");
 
    if ( palabraEvaluar === this.palabra ) {
      this.gano = true;
      console.log("El usuario GANO");
    } 

    if (this.intentos >= 9 ) {
      this.perdio = true;
      console.log("usuario perdió")
    }
    
  }

  existeLetra(i) {
    // busca la posicion de la letra, si no esta muestra -1
    if (this.palabra.indexOf(i) >= 0) {
      console.log("letra " + i  + " existe");
    } else {
      console.log("letra " + i + " NO existe");
      this.intentos++;
    }
  }

}
