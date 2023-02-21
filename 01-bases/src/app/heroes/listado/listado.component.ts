import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
// export class ListadoComponent implements OnInit {

  // constructor() {
  //   console.log('Constructor: ');
  // }

  // ngOnInit(): void {
  //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //   //Add 'implements OnInit' to the class.
  //   console.log('ngOnInit');
  // }


// }

export class ListadoComponent {
  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan America'];
  heroeBorrado: string = '';

  

  borrarHeroe(){
    console.log('borrando...');
    this.heroeBorrado = this.heroes.pop()|| '';
    console.log(this.heroeBorrado);
  }
}