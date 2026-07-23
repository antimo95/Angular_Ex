import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-carta-giocatore',
  imports: [],
  templateUrl: './carta-giocatore.html',
  styleUrl: './carta-giocatore.css',
})
export class CartaGiocatore {
  id = input.required<number>();
  nome = input.required<string>();
  ruolo = input.required<string>();
  disponibile = input<boolean>(true);

  rimuovi = output<number>();
  cambiaStato = output<number>();

  onCambiaStato(): void {
    this.cambiaStato.emit(this.id());
  }

  onRimuovi(): void {
    this.rimuovi.emit(this.id());
  }
}
