import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contatore-like',
  imports: [],
  templateUrl: './contatore-like.html',
  styleUrl: './contatore-like.css',
})
export class ContatoreLike {

  conteggio = signal(0);

  incrementa() : void {
    this.conteggio.update(valore => valore + 1);
  }

  decrementa() : void {
    this.conteggio.update(valore => valore - 1);
  }

  azzera() : void {
    this.conteggio.set(0);
  }

  

}
