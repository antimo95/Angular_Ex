import { Component } from '@angular/core';

@Component({
  selector: 'app-biglietto-visita',
  imports: [],
  templateUrl: './biglietto-visita.html',
  styleUrl: './biglietto-visita.css',
})
export class BigliettoVisita {

  nome: string = 'Antimo Barbato';
  ruolo: string = 'Ingegnere';
  anniEsperienza: number = 0;


  //Qui ottengo un valore derivato, sarebbe piu corretto operare con computed
  annoInizioCarriera(): number {
    const annoCorrente : number = 2026;
    const annoInizio = annoCorrente - this.anniEsperienza;
    return annoInizio;
  }
}
