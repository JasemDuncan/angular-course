import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>asdfsds</h1>
        <h2>{{titulo}}</h2>
        <h2>{{233+70}}</h2>

        <!-- <button (click)=" numero = numero +1;">+1</button> -->
        <!-- <button (click)="sumar()">+1</button> -->
        <button (click)="acumular(+base)">+{{base}}</button>
        <span>{{numero}}</span>
        <button (click)="acumular(-base)" >-{{base}}</button>

        <h3>La base es: <strong>{{base}}</strong> </h3>
    `
})

export class ContadorComponent {
    public titulo: string = 'Contador App';
    public numero: number = 10;
    public base  : number =5;
  
    sumar() {
      this.numero +=1;
    }
  
    restar() {
      this.numero -=1;
    }
  
    acumular(valor: number){
      this.numero += valor;
    }
}