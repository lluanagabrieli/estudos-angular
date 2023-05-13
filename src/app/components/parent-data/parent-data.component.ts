import { Component, Input } from '@angular/core'; //adicionando o input

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent {

  @Input() userData!: { name: string; age: number; city: string; };

 /* é preciso colocar um iniciador. O Angular n entende que vou pegar o valor de outro lugar. */ 
 
};
