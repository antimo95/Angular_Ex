import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-titolo-dinamico',
  imports: [],
  templateUrl: './titolo-dinamico.html',
  styleUrl: './titolo-dinamico.css',
})
export class TitoloDinamico {

  notifiche = signal(0);

  //Effect si può definire come un effetto collaterale che viene eseguito ogni volta che il valore della signal cambia. In questo caso, l'effetto aggiorna il titolo del documento in base al numero di notifiche.
  constructor() {
    effect(() => {
      document.title = this.notifiche() === 0
        ? 'Nessuna notifica'
        : `(${this.notifiche()}) nuove notifiche`;
    });
  }

  aggiungiNotifica() : void{
    this.notifiche.update(n => n + 1);
  }
  
  leggiTutteNotifiche() : void {
    this.notifiche.set(0);
  }


}
