import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//Crear un modulo ContadorModulo
//Declaraciones, y exportaciones
import { ContadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
    //Importar aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
