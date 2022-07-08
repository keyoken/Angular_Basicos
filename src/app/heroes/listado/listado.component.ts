import { Component, OnInit } from '@angular/core';
import { HeroeComponent } from '../heroe/heroe.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  //styleUrls: ['./listado.component.scss']
})



export class ListadoComponent implements OnInit {

  constructor() { } //primero se dispara el constructor de un componente

  ngOnInit(): void {
   } // el ngOnInit se usa para  inicializar cosa como por ejemplo la peticion algun servico 


    heroes: string[] = ['Spiderman', 'Thor', 'keyo', 'keyoken'];
    heroeBorrado: string =''; //|| false || null || undefined;


   borrarHeroe(){
    console.log('borrando...');
    this.heroes.splice;
    this.heroeBorrado =  this.heroes.shift() || ''; //shift borra un elemento del arreglo y lo regresa. 
    
   }

}
