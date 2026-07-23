import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-carta-giocatore',
  imports: [],
  templateUrl: './carta-giocatore.html',
  styleUrl: './carta-giocatore.css',
})
export class CartaGiocatore{

  id = input.required<number>();
  nome = input.required<string>();
  ruolo = input<string>('');
  disponibile = input<boolean>(true);

  rimuovi = output<number>();
  cambiaStato = output<number>();
  
  onRimuovi(): void {
    this.rimuovi.emit(this.id());
  }

  onCambiaStato(): void {
    this.cambiaStato.emit(this.id());
  }
}
