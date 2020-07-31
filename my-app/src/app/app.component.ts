import { Component } from '@angular/core';

// decorador propio de ts
// le da funcionalidad a la clase AppComponent de forma externa
@Component({

  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor() {
    console.log("Se acaba de crear el App Component");
  }

}
