//fazendo a importação da classe para ela representar um módulo
import { NgModule } from '@angular/core';

//prepara a aplicação para rodar no browser
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';

@NgModule({
  declarations: [//dentro das declarations são listados os componentes, diretivas e pipes que queremos utilizar nesse módulo
    AppComponent,
    FirstComponentComponent,
    ParentDataComponent
  ],
  imports: [ //são listados outros módulos que queremos utilizar nesse módulo ou dentro de algum componente que pertence a esse módulo. 
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], //serviços que vão ficar disponíveis para todos os componentes declarados nesse módulo. Se tiver mais de um módulo, o serviço fica disponível para toda aplicação, ou seja, ele tem o escopo global de toda a aplicação.
  bootstrap: [AppComponent] //a gente só encontra no módulo raiz do projeto, que é aqui no AppModule. É colocado o componente em que vai ser instanciado a aplicação, sendo ele o container do projeto. O AppComponent.hmtl é o componente principal da aplicação. É onde fica o viewport.
})
export class AppModule { }
