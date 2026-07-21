import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carta-prodotto',
  imports: [FormsModule],
  templateUrl: './carta-prodotto.html',
  styleUrl: './carta-prodotto.css',
})
export class CartaProdotto {

  readonly nome = input.required<string>()
  readonly prezzo = input.required<number>()
  readonly disponibile = input<boolean>(true) //Non obbligatorio
  
  readonly aggiungiAlCarrello = output<string>() //Evento che porta con sè una stringa 


  onAggiungi() : void {
    this.aggiungiAlCarrello.emit(this.nome());
  }

}
