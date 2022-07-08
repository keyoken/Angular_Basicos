// importaciones de Angular core la base de angular
import { Component } from "@angular/core";

///Decorador 
@Component({
    selector: 'app-contadorComponent',
    template: `
        <h1>{{ titulo }}</h1>
        <h1>La base es: <strong> {{base}}</strong></h1>
        <button (click)=" acumulr(base) ">+{{base}} </button>
        <span> {{numero}} </span>
        <button (click)=" acumulr(-base) ">-{{base}}</button> ` })

export class ContadorComponent{
    public titulo: string  = 'Contador App';
    numero: number = 10;
    base: number= 5;
  
    acumulr( valor: number){
      this.numero += valor
    }
}