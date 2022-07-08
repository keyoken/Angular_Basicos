import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModele } from './contador/contador.module';
//import { ContadorComponent } from './contador/contador/contador.component';
import { HeroesModule } from './heroes/heroes.module';
//import { HeroeComponent } from './heroes/heroe/heroe.component';
//import { ListadoComponent } from './heroes/listado/listado.component';



@NgModule({ 
/*Modulo pricipal de la applicacion. el objetivo "modulos" es ayudar a agrupar componentes
 y piesas de la aplicacion que tienen centido entr si 
 su princilapes objetivos es encapsular y ayudar en la carga peresosa "leasy load" */
  declarations: [
    AppComponent,
   // ContadorComponent,
  //  HeroeComponent, 
//    ListadoComponent
  ],
  imports: [ 
    BrowserModule,
    HeroesModule,
    ContadorModele
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
