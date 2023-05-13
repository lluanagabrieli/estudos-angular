import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dadosUsuario = {
    nome: 'Luana Gabrieli',
    idade: 24,
    cidade: 'Itajubá'
  };

  title = 'angular_study';
}
