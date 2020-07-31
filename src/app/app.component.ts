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

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


  constructor() {
    console.log("Se acaba de crear el App Component");
  }

}
