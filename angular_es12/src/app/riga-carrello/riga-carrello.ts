import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-riga-carrello',
  imports: [],
  templateUrl: './riga-carrello.html',
  styleUrl: './riga-carrello.css',
})
export class RigaCarrello {

  //Signal di stato
  prezzoUnitario = signal(10);
  quantita = signal(1);

  //Signal derivati
  totale = computed(()=> this.prezzoUnitario() * this.quantita());
  spedizioneGratuita = computed(()=> this.totale() > 50);
  mancanteSpedizioneGratuita = computed(()=> Math.max(0, 50 - this.totale()));

  aumentaQuantita() {
    this.quantita.update((q) => q + 1);
  }
  
  diminuisciQuantita() {
    this.quantita.update((q) => q - 1);
  }
  
}
