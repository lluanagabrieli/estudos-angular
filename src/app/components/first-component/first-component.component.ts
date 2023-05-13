import { Component, Input } from '@angular/core'; //adicionando o input para entrada de dados do pai

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {

  /* passando as informações do 'dadosUsuario' do componente.app para o first-component */
  @Input() informations! : { nome:string, idade:number, cidade:string };

  //dados do próprio componente
  /*name:string = "Luana Gabrieli"
  tittle:string = "Testando a interpolação de dados!"
  hobbies = ['Estudar', 'Ler', 'Assistir vídeos']
  age:number = 23;*/

  color = 'pink';
  
  estiloFonte = 'font-style';

  /* colocando várias classes dentro de um array. Com isso, posso aplicar várias formatações de uma vez, adicionando só um nome na classe do elemento, que no caso seria estilos. */

  estilos = ['cor', 'fonte', 'tamanho'];
  
}
