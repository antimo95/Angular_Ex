import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-barra-avanzamento',
  imports: [],
  templateUrl: './barra-avanzamento.html',
  styleUrl: './barra-avanzamento.css',
})
export class BarraAvanzamento {

  percentuale = signal(0);

  diminuisci() {
    this.percentuale.update(valore => Math.max(0, valore - 10));
  }

  aumenta() {
    this.percentuale.update(valore => Math.min(100, valore + 10));
  }

}
