import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {

  name:string = "Luana Gabrieli"
  tittle:string = "Testando a interpolação de dados!"
  hobbies = ['Estudar', 'Ler', 'Assistir vídeos']
  age:number = 23
}
