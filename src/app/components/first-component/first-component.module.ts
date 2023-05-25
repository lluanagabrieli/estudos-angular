import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos/cursos.component';

import { FirstComponentComponent } from './first-component.component';

@NgModule({
  declarations: [ //eu posso deixar um componente privado, como por exemplo o CursosComponent, deixando ele somente nas declarations, não passando para o app.
    FirstComponentComponent,
    CursosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FirstComponentModule { }
